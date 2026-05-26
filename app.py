import os
import json
import math
import datetime
from flask import Flask, request, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__, static_folder='.', static_url_path='')

# Configuration loading
db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")
db_port = os.getenv("DB_PORT")

# If env variables exist → use them. Else → use localhost.
if db_host or db_user or db_password or db_name or db_port:
    host = db_host if db_host is not None else "localhost"
    user = db_user if db_user is not None else "postgres"
    password = db_password if db_password is not None else ""
    database = db_name if db_name is not None else "gurukul_dashboard"
    try:
        port = int(db_port) if db_port else 5432
    except ValueError:
        port = 5432
else:
    host = "localhost"
    user = "postgres"
    password = ""
    database = "gurukul_dashboard"
    port = 5432

# Holiday List (for seeder)
holidays = [
    "2026-05-01", "2026-05-24", "2026-08-15", "2026-10-02", "2026-11-01",
    "2026-11-08", "2027-01-14", "2027-01-26", "2027-03-29", "2027-05-09"
]

def get_db_connection(include_db=True):
    config = {
        'host': host,
        'port': port,
        'user': user,
        'password': password,
    }
    if include_db:
        config['dbname'] = database
    else:
        config['dbname'] = 'postgres'
    return psycopg2.connect(**config)

def setup_database():
    # Attempt to connect to the database directly first
    conn = None
    try:
        conn = get_db_connection(include_db=True)
    except psycopg2.Error as err:
        # If database doesn't exist (SQLSTATE 3D000), try to create it
        if getattr(err, 'pgcode', None) == '3D000' or 'does not exist' in str(err):
            try:
                print(f"Database {database} does not exist. Attempting to create it...")
                conn_no_db = get_db_connection(include_db=False)
                conn_no_db.autocommit = True
                cursor = conn_no_db.cursor()
                cursor.execute(f'CREATE DATABASE "{database}"')
                cursor.close()
                conn_no_db.close()
                
                # Connect to the newly created database
                conn = get_db_connection(include_db=True)
            except psycopg2.Error as create_err:
                print(f"Failed to create database {database}: {create_err}")
                return False
        else:
            print(f"Failed to connect to PostgreSQL: {err}")
            return False

    # Create tables and seed data
    try:
        cursor = conn.cursor()

        # Create admin_users table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS admin_users (
                username VARCHAR(50) PRIMARY KEY,
                password VARCHAR(50) NOT NULL,
                role VARCHAR(50) DEFAULT 'Administrator'
            )
        """)
        cursor.execute("ALTER TABLE admin_users ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'Administrator'")

        # Create students table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS students (
                id VARCHAR(50) PRIMARY KEY,
                roll_number INT UNIQUE NOT NULL,
                first_name VARCHAR(100) NOT NULL,
                middle_name VARCHAR(100),
                last_name VARCHAR(100) NOT NULL,
                class VARCHAR(50) NOT NULL,
                section VARCHAR(50) NOT NULL,
                aadhaar VARCHAR(50),
                parent_name VARCHAR(150),
                parent_phone VARCHAR(50),
                address TEXT,
                attendance_pct INT DEFAULT 100,
                cgpa VARCHAR(50),
                pending_fees INT DEFAULT 0,
                grades TEXT
            )
        """)

        # Create attendance table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS attendance (
                attendance_date DATE NOT NULL,
                student_id VARCHAR(50) NOT NULL,
                status VARCHAR(5) NOT NULL,
                PRIMARY KEY (attendance_date, student_id),
                FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
            )
        """)

        # Create payment_history table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS payment_history (
                invoice_no VARCHAR(50) PRIMARY KEY,
                student_name VARCHAR(200) NOT NULL,
                roll_number INT NOT NULL,
                fee_type VARCHAR(100) NOT NULL,
                amount_paid INT NOT NULL,
                payment_date DATE NOT NULL,
                tx_id VARCHAR(100) UNIQUE NOT NULL,
                status VARCHAR(50) NOT NULL
            )
        """)

        # Check and seed admin_users specifically for 'admin' username
        cursor.execute("SELECT COUNT(*) FROM admin_users WHERE username = %s", ('admin',))
        if cursor.fetchone()[0] == 0:
            cursor.execute("INSERT INTO admin_users (username, password, role) VALUES (%s, %s, %s)", ('admin', 'admin123', 'Administrator'))
            conn.commit()
            print("Default admin user created successfully!")

        # Check and seed students & default attendance/payments
        cursor.execute("SELECT COUNT(*) FROM students")
        if cursor.fetchone()[0] == 0:
            # Load initial students
            male_first_names = ["Aarav", "Arjun", "Aditya", "Rohan", "Vikram", "Kabir", "Vihaan", "Ishan", "Reyansh", "Aryan", "Rudra", "Yash", "Atharv", "Vivaan", "Krishna", "Nikhil", "Pranav", "Amit", "Rahul", "Sanjay"]
            female_first_names = ["Ananya", "Ishita", "Priya", "Diya", "Meera", "Saanvi", "Aaradhya", "Kiara", "Anika", "Riya", "Kavya", "Shreya", "Tanvi", "Pooja", "Neha", "Sneha", "Aditi", "Divya", "Aisha", "Harini"]
            last_names = ["Patel", "Sharma", "Verma", "Nair", "Iyer", "Deshmukh", "Banerjee", "Dhillon", "Joshi", "Gupta", "Rao", "Reddy", "Sen", "Mishra", "Mehta", "Bhat", "Kulkarni", "Saxena", "Trivedi", "Choudhury"]
            
            addresses = [
                "Flat 402, Shivshakti Towers, MG Road, Ahmedabad, Gujarat - 380001",
                "No 18, Temple Car Street, Mylapore, Chennai, Tamil Nadu - 600004",
                "House 54, Sector 15-A, Chandigarh, Punjab - 160015",
                "Block G, New Alipore, Kolkata, West Bengal - 700053",
                "Plot 12, Jayanagar, Bengaluru, Karnataka - 560041",
                "Shivaji Park, Dadar, Mumbai, Maharashtra - 400028",
                "B-201, Vaishali Nagar, Jaipur, Rajasthan - 302021",
                "TC 25/110, Kowdiar, Thiruvananthapuram, Kerala - 695003",
                "Patliputra Colony, Patna, Bihar - 800013"
            ]

            initial_students = []
            classes = ["10", "11", "12"]
            sections = ["A", "B", "C"]

            for class_idx, cls in enumerate(classes):
                for sec_idx, sec in enumerate(sections):
                    for s_idx in range(10):
                        roll_number = 101 + class_idx * 30 + sec_idx * 10 + s_idx
                        student_id = f"stud_{roll_number}"
                        is_male = (s_idx % 2 == 0)

                        if is_male:
                            first_name = male_first_names[(class_idx * 10 + sec_idx * 5 + (s_idx // 2)) % len(male_first_names)]
                        else:
                            first_name = female_first_names[(class_idx * 10 + sec_idx * 5 + (s_idx // 2)) % len(female_first_names)]
                        
                        last_name = last_names[(class_idx * 15 + sec_idx * 7 + s_idx) % len(last_names)]
                        
                        if s_idx % 3 == 0:
                            middle_name = "Kumar" if is_male else ""
                        elif s_idx % 3 == 1:
                            middle_name = "Singh" if is_male else "Devi"
                        else:
                            middle_name = ""

                        parent_first = male_first_names[(class_idx * 12 + sec_idx * 8 + s_idx * 3) % len(male_first_names)]
                        parent_name = f"{parent_first} {last_name}"
                        parent_phone = "9" + str(100000000 + roll_number * 7777)[:9]
                        aadhaar = f"{1000 + roll_number} {5000 + roll_number * 2} {9000 - roll_number}"
                        attendance_pct = 70 + ((roll_number * 13) % 29)

                        cgpa_values = ["A1 (9.8)", "A1 (9.6)", "A2 (9.2)", "A2 (8.8)", "B1 (8.4)", "B1 (8.0)", "B2 (7.6)", "B2 (7.2)", "C1 (6.8)", "C1 (6.4)"]
                        cgpa = cgpa_values[s_idx % len(cgpa_values)]
                        pending_fees = 12450 if (s_idx % 3 == 0) else (0 if (s_idx % 3 == 1) else 8200)

                        grade_letter = cgpa[:2]
                        grades = {"math": grade_letter, "science": grade_letter, "english": "A1", "sst": grade_letter, "regional": "A1"}
                        address = addresses[(class_idx * 4 + sec_idx * 2 + s_idx) % len(addresses)]

                        initial_students.append({
                            "id": student_id,
                            "rollNumber": roll_number,
                            "firstName": first_name,
                            "middleName": middle_name,
                            "lastName": last_name,
                            "class": cls,
                            "section": sec,
                            "parentName": parent_name,
                            "parentPhone": parent_phone,
                            "address": address,
                            "aadhaar": aadhaar,
                            "attendancePct": attendance_pct,
                            "cgpa": cgpa,
                            "pendingFees": pending_fees,
                            "grades": grades
                        })

            for s in initial_students:
                cursor.execute("""
                    INSERT INTO students (id, roll_number, first_name, middle_name, last_name, class, section, aadhaar, parent_name, parent_phone, address, attendance_pct, cgpa, pending_fees, grades)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    s["id"], s["rollNumber"], s["firstName"], s["middleName"], s["lastName"],
                    s["class"], s["section"], s["aadhaar"], s["parentName"], s["parentPhone"],
                    s["address"], s["attendancePct"], s["cgpa"], s["pendingFees"], json.dumps(s["grades"])
                ))
            conn.commit()

            # Seed default attendance logs (replicate js past school days & history generation)
            start_date = datetime.date(2026, 5, 21)
            school_days = []
            curr = start_date
            while len(school_days) < 15:
                date_str = curr.strftime("%Y-%m-%d")
                day_of_week = curr.weekday() # 0 is Mon, 6 is Sun
                is_holiday = date_str in holidays
                if day_of_week != 6 and not is_holiday:
                    school_days.append(curr)
                curr -= datetime.timedelta(days=1)
            school_days.reverse()

            for s in initial_students:
                target_pct = s["attendancePct"]
                total_days = 15
                target_value = (target_pct / 100.0) * total_days
                statuses = ["P"] * total_days
                num_l = 0
                num_hd = 0
                if target_pct < 100:
                    num_l = 2 if target_pct < 85 else 1
                    num_hd = 2 if target_pct < 85 else 1
                
                fixed_value = num_l * 1.0 + num_hd * 0.5
                num_p = round(target_value - fixed_value)
                if num_p < 0:
                    num_p = 0
                num_a = total_days - num_l - num_hd - num_p
                if num_a < 0:
                    num_a = 0
                    num_p = total_days - num_l - num_hd
                
                idx = 0
                for _ in range(num_a):
                    statuses[idx] = "A"
                    idx += 1
                for _ in range(num_hd):
                    statuses[idx] = "HD"
                    idx += 1
                for _ in range(num_l):
                    statuses[idx] = "L"
                    idx += 1
                while idx < total_days:
                    statuses[idx] = "P"
                    idx += 1

                # Shuffle using the exact JS seed formula
                seed_val = target_pct
                for i in range(len(statuses) - 1, 0, -1):
                    j = abs(math.sin(seed_val + i)) * (i + 1)
                    j_int = int(j) % (i + 1)
                    statuses[i], statuses[j_int] = statuses[j_int], statuses[i]

                # Insert into database
                for i, date_obj in enumerate(school_days):
                    cursor.execute("""
                        INSERT INTO attendance (attendance_date, student_id, status)
                        VALUES (%s, %s, %s)
                    """, (date_obj, s["id"], statuses[i]))
            conn.commit()

            # Seed default payments
            default_history = [
                {
                    "invoiceNo": "GKL/2026-27/FT-4912", "studentName": "Ananya Subramanian", "rollNumber": 102,
                    "feeType": "First Term Tuition Fees", "amountPaid": 12450, "paymentDate": "2026-05-10",
                    "txId": "UPI987210293847", "status": "SUCCESSFUL"
                },
                {
                    "invoiceNo": "GKL/2026-27/FT-1283", "studentName": "Ishita Roy Banerjee", "rollNumber": 104,
                    "feeType": "First Term Tuition Fees", "amountPaid": 12450, "paymentDate": "2026-05-12",
                    "txId": "UPI283749201938", "status": "SUCCESSFUL"
                }
            ]
            for p in default_history:
                cursor.execute("""
                    INSERT INTO payment_history (invoice_no, student_name, roll_number, fee_type, amount_paid, payment_date, tx_id, status)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                """, (p["invoiceNo"], p["studentName"], p["rollNumber"], p["feeType"], p["amountPaid"], p["paymentDate"], p["txId"], p["status"]))
            conn.commit()

        cursor.close()
        conn.close()
        print("Database setup successfully!")
        return True
    except psycopg2.Error as err:
        print(f"Failed setting up database tables: {err}")
        return False

# Setup on startup
setup_database()

# Static File Routing
@app.route('/')
def index():
    return app.send_static_file('index.html')

# REST API ENDPOINTS

# 1. Admin Login API
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json or {}
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'success': False, 'message': 'Missing credentials'}), 400
        
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM admin_users WHERE username = %s AND password = %s", (username, password))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        
        if user:
            return jsonify({
                'success': True,
                'session': 'active',
                'username': user['username'],
                'role': user.get('role', 'Administrator')
            })
        else:
            return jsonify({'success': False, 'message': 'Invalid credentials'}), 401
    except psycopg2.Error as err:
        return jsonify({'success': False, 'message': f'Database error: {err}'}), 500

# 1b. Admin Management CRUD APIs
@app.route('/api/admins', methods=['GET'])
def get_admins():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT username, role FROM admin_users ORDER BY username")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(rows)
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/admins', methods=['POST'])
def add_admin():
    data = request.json or {}
    username = data.get('username')
    password = data.get('password')
    role = data.get('role', 'Administrator')
    
    if not username or not password:
        return jsonify({'message': 'Missing username or password'}), 400
        
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM admin_users WHERE username = %s", (username,))
        if cursor.fetchone()[0] > 0:
            cursor.close()
            conn.close()
            return jsonify({'message': 'Username already exists'}), 409
            
        cursor.execute("INSERT INTO admin_users (username, password, role) VALUES (%s, %s, %s)", (username, password, role))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True}), 201
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/admins/<username>', methods=['PUT'])
def update_admin(username):
    data = request.json or {}
    password = data.get('password')
    role = data.get('role')
    
    if not role:
        return jsonify({'message': 'Missing role'}), 400
        
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        if password:
            cursor.execute("UPDATE admin_users SET password = %s, role = %s WHERE username = %s", (password, role, username))
        else:
            cursor.execute("UPDATE admin_users SET role = %s WHERE username = %s", (role, username))
            
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True})
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/admins/<username>', methods=['DELETE'])
def delete_admin(username):
    if username == 'admin':
        return jsonify({'message': 'Cannot delete default admin user'}), 403
        
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM admin_users WHERE username = %s", (username,))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True})
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

# 2. Student List & CRUD APIs
@app.route('/api/students', methods=['GET'])
def get_students():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM students ORDER BY roll_number")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        
        # Parse JSON grades column
        students = []
        for r in rows:
            student = {
                'id': r['id'],
                'rollNumber': r['roll_number'],
                'firstName': r['first_name'],
                'middleName': r['middle_name'] or "",
                'lastName': r['last_name'],
                'class': r['class'],
                'section': r['section'],
                'aadhaar': r['aadhaar'] or "",
                'parentName': r['parent_name'] or "",
                'parentPhone': r['parent_phone'] or "",
                'address': r['address'] or "",
                'attendancePct': r['attendance_pct'],
                'cgpa': r['cgpa'] or "A1 (9.0)",
                'pendingFees': r['pending_fees'],
                'grades': json.loads(r['grades']) if r['grades'] else {}
            }
            students.append(student)
        return jsonify(students)
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/students', methods=['POST'])
def add_student():
    data = request.json or {}
    student_id = data.get('id') or f"stud_{int(datetime.datetime.now().timestamp() * 1000)}"
    roll_number = data.get('rollNumber')
    first_name = data.get('firstName')
    middle_name = data.get('middleName', '')
    last_name = data.get('lastName')
    student_class = data.get('class')
    section = data.get('section')
    aadhaar = data.get('aadhaar', '')
    parent_name = data.get('parentName', '')
    parent_phone = data.get('parentPhone', '')
    address = data.get('address', '')
    attendance_pct = data.get('attendancePct', 100)
    cgpa = data.get('cgpa', 'A1 (9.0)')
    pending_fees = data.get('pendingFees', 12450)
    grades = data.get('grades', {"math": "A2", "science": "A2", "english": "A1", "sst": "B1", "regional": "A2"})

    if not roll_number or not first_name or not last_name or not student_class or not section:
        return jsonify({'message': 'Missing required fields'}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Check duplicate roll
        cursor.execute("SELECT COUNT(*) FROM students WHERE roll_number = %s", (roll_number,))
        if cursor.fetchone()[0] > 0:
            cursor.close()
            conn.close()
            return jsonify({'message': 'Duplicate roll number'}), 409

        cursor.execute("""
            INSERT INTO students (id, roll_number, first_name, middle_name, last_name, class, section, aadhaar, parent_name, parent_phone, address, attendance_pct, cgpa, pending_fees, grades)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (student_id, roll_number, first_name, middle_name, last_name, student_class, section, aadhaar, parent_name, parent_phone, address, attendance_pct, cgpa, pending_fees, json.dumps(grades)))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True, 'student_id': student_id}), 201
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/students/<student_id>', methods=['PUT'])
def update_student(student_id):
    data = request.json or {}
    roll_number = data.get('rollNumber')
    first_name = data.get('firstName')
    middle_name = data.get('middleName', '')
    last_name = data.get('lastName')
    student_class = data.get('class')
    section = data.get('section')
    aadhaar = data.get('aadhaar', '')
    parent_name = data.get('parentName', '')
    parent_phone = data.get('parentPhone', '')
    address = data.get('address', '')

    if not roll_number or not first_name or not last_name or not student_class or not section:
        return jsonify({'message': 'Missing required fields'}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Check duplicate roll for another student
        cursor.execute("SELECT COUNT(*) FROM students WHERE roll_number = %s AND id != %s", (roll_number, student_id))
        if cursor.fetchone()[0] > 0:
            cursor.close()
            conn.close()
            return jsonify({'message': 'Duplicate roll number'}), 409

        cursor.execute("""
            UPDATE students 
            SET roll_number = %s, first_name = %s, middle_name = %s, last_name = %s, class = %s, section = %s, aadhaar = %s, parent_name = %s, parent_phone = %s, address = %s
            WHERE id = %s
        """, (roll_number, first_name, middle_name, last_name, student_class, section, aadhaar, parent_name, parent_phone, address, student_id))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True})
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/students/<student_id>', methods=['DELETE'])
def delete_student(student_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM students WHERE id = %s", (student_id,))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True})
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

# 3. Attendance APIs
@app.route('/api/attendance', methods=['GET'])
def get_attendance():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM attendance")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        
        # Format as key-value pairs { "YYYY-MM-DD_studentId": "status" }
        attendance_map = {}
        for r in rows:
            date_str = r['attendance_date'].strftime("%Y-%m-%d")
            key = f"{date_str}_{r['student_id']}"
            attendance_map[key] = r['status']
            
        return jsonify(attendance_map)
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/attendance', methods=['POST'])
def save_attendance():
    data = request.json or {}
    date_str = data.get('date')
    records = data.get('records', {}) # dict of { student_id: status }

    if not date_str or not records:
        return jsonify({'message': 'Missing date or records'}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Insert or update attendance records
        for student_id, status in records.items():
            if status:
                cursor.execute("""
                    INSERT INTO attendance (attendance_date, student_id, status)
                    VALUES (%s, %s, %s)
                    ON CONFLICT (attendance_date, student_id)
                    DO UPDATE SET status = EXCLUDED.status
                """, (date_str, student_id, status))
        conn.commit()

        # Recalculate cumulative attendance percentages for all students
        cursor.execute("SELECT DISTINCT student_id FROM attendance")
        student_ids = [r[0] for r in cursor.fetchall()]
        
        for s_id in student_ids:
            cursor.execute("SELECT status FROM attendance WHERE student_id = %s", (s_id,))
            rows = cursor.fetchall()
            
            total_days = len(rows)
            attended_days = 0.0
            for row in rows:
                status = row[0]
                if status in ['P', 'L']:
                    attended_days += 1.0
                elif status == 'HD':
                    attended_days += 0.5
            
            attendance_pct = int(round((attended_days / total_days) * 100)) if total_days > 0 else 100
            
            cursor.execute("UPDATE students SET attendance_pct = %s WHERE id = %s", (attendance_pct, s_id))
        
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True})
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

# 4. Fees APIs
@app.route('/api/fees/history', methods=['GET'])
def get_fees_history():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM payment_history ORDER BY payment_date DESC")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        
        history = []
        for r in rows:
            item = {
                'invoiceNo': r['invoice_no'],
                'studentName': r['student_name'],
                'rollNumber': r['roll_number'],
                'feeType': r['fee_type'],
                'amountPaid': r['amount_paid'],
                'paymentDate': r['payment_date'].strftime("%Y-%m-%d"),
                'txId': r['tx_id'],
                'status': r['status']
            }
            history.append(item)
        return jsonify(history)
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

@app.route('/api/fees/pay', methods=['POST'])
def pay_fees():
    data = request.json or {}
    student_id = data.get('studentId')

    if not student_id:
        return jsonify({'message': 'Missing student ID'}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        # Fetch student details
        cursor.execute("SELECT * FROM students WHERE id = %s", (student_id,))
        student = cursor.fetchone()
        
        if not student:
            cursor.close()
            conn.close()
            return jsonify({'message': 'Student not found'}), 404
            
        paid_amount = student['pending_fees']
        if paid_amount <= 0:
            cursor.close()
            conn.close()
            return jsonify({'message': 'No pending fees for this student'}), 400

        # Update student pending fees to 0
        cursor.execute("UPDATE students SET pending_fees = 0 WHERE id = %s", (student_id,))
        
        # Insert payment history item
        import random
        invoice_no = f"GKL/2026-27/FT-{random.randint(1000, 9999)}"
        tx_id = f"UPI{random.randint(100000000000, 999999999999)}"
        payment_date = datetime.date.today().strftime("%Y-%m-%d")
        student_name = f"{student['first_name']} {student['last_name']}"
        
        cursor.execute("""
            INSERT INTO payment_history (invoice_no, student_name, roll_number, fee_type, amount_paid, payment_date, tx_id, status)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (invoice_no, student_name, student['roll_number'], "Term Tuition Fees", paid_amount, payment_date, tx_id, "SUCCESSFUL"))
        
        conn.commit()
        
        # Get the newly created invoice item to return to frontend
        cursor.execute("SELECT * FROM payment_history WHERE invoice_no = %s", (invoice_no,))
        r = cursor.fetchone()
        
        cursor.close()
        conn.close()
        
        history_item = {
            'invoiceNo': r['invoice_no'],
            'studentName': r['student_name'],
            'rollNumber': r['roll_number'],
            'feeType': r['fee_type'],
            'amountPaid': r['amount_paid'],
            'paymentDate': r['payment_date'].strftime("%Y-%m-%d"),
            'txId': r['tx_id'],
            'status': r['status']
        }
        
        return jsonify({'success': True, 'receipt': history_item})
    except psycopg2.Error as err:
        return jsonify({'message': f'Database error: {err}'}), 500

# 5. Weather API
@app.route('/api/weather', methods=['GET'])
def api_weather():
    import urllib.request
    import urllib.error
    city = request.args.get('city', 'Mysore')
    
    # Map city keys (both display names and selector values)
    city_map = {
        'Mysore': {'lat': 12.2958, 'lon': 76.6394, 'name': 'Mysore', 'temp': '28°C', 'humidity': '55%', 'condition': 'Sunny', 'icon': '☀️'},
        'NewDelhi': {'lat': 28.6139, 'lon': 77.2090, 'name': 'New Delhi', 'temp': '38°C', 'humidity': '45%', 'condition': 'Sunny', 'icon': '☀️'},
        'New Delhi': {'lat': 28.6139, 'lon': 77.2090, 'name': 'New Delhi', 'temp': '38°C', 'humidity': '45%', 'condition': 'Sunny', 'icon': '☀️'},
        'Mumbai': {'lat': 19.0760, 'lon': 72.8777, 'name': 'Mumbai', 'temp': '32°C', 'humidity': '82%', 'condition': 'Humid', 'icon': '⛅'},
        'Bengaluru': {'lat': 12.9716, 'lon': 77.5946, 'name': 'Bengaluru', 'temp': '26°C', 'humidity': '60%', 'condition': 'Pleasant', 'icon': '🍃'},
        'Kolkata': {'lat': 22.5726, 'lon': 88.3639, 'name': 'Kolkata', 'temp': '34°C', 'humidity': '78%', 'condition': 'Partly Cloudy', 'icon': '🌥️'},
        'Chennai': {'lat': 13.0827, 'lon': 80.2707, 'name': 'Chennai', 'temp': '36°C', 'humidity': '72%', 'condition': 'Hot', 'icon': '☀️'}
    }
    
    # Clean the city key
    matched_key = None
    for k in city_map:
        if k.lower() == city.strip().lower():
            matched_key = k
            break
            
    if not matched_key:
        matched_key = 'Mysore'
        
    info = city_map[matched_key]
    
    url = f"https://api.open-meteo.com/v1/forecast?latitude={info['lat']}&longitude={info['lon']}&current=temperature_2m,relative_humidity_2m,weather_code"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Antigravity Weather Client'})
        with urllib.request.urlopen(req, timeout=5) as response:
            data = json.loads(response.read().decode('utf-8'))
            
        current = data.get('current', {})
        temp_val = current.get('temperature_2m')
        humidity_val = current.get('relative_humidity_2m')
        code = current.get('weather_code', 0)
        
        # Map weather code to condition and icon
        cond_map = {
            0: ('Sunny', '☀️'),
            1: ('Partly Cloudy', '⛅'),
            2: ('Partly Cloudy', '⛅'),
            3: ('Cloudy', '☁️'),
            45: ('Foggy', '🌫️'),
            48: ('Foggy', '🌫️'),
            51: ('Drizzle', '🌧️'),
            53: ('Drizzle', '🌧️'),
            55: ('Drizzle', '🌧️'),
            61: ('Rainy', '🌧️'),
            63: ('Rainy', '🌧️'),
            65: ('Rainy', '🌧️'),
            71: ('Snowy', '❄️'),
            73: ('Snowy', '❄️'),
            75: ('Snowy', '❄️'),
            80: ('Showers', '🌧️'),
            81: ('Showers', '🌧️'),
            82: ('Showers', '🌧️'),
            95: ('Thunderstorm', '⛈️'),
            96: ('Thunderstorm', '⛈️'),
            99: ('Thunderstorm', '⛈️'),
        }
        
        condition, icon = cond_map.get(code, ('Clear', '☀️'))
        
        if temp_val is not None:
            result = {
                'success': True,
                'location': info['name'],
                'temperature': f"{int(round(temp_val))}°C",
                'humidity': f"{humidity_val}%" if humidity_val is not None else info['humidity'],
                'condition': condition,
                'icon': icon,
                'source': 'api'
            }
            return jsonify(result)
    except Exception as e:
        print(f"Weather API request failed, using mock fallback: {e}")
        
    return jsonify({
        'success': True,
        'location': info['name'],
        'temperature': info['temp'],
        'humidity': info['humidity'],
        'condition': info['condition'],
        'icon': info['icon'],
        'source': 'fallback'
    })

if __name__ == '__main__':
    # Start web app on port 5000
    app.run(host='0.0.0.0', port=5000, debug=True)
