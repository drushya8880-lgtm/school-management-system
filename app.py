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
            initial_students = [
                {
                    "id": "stud_1", "rollNumber": 101, "firstName": "Aarav", "middleName": "Kumar", "lastName": "Patel",
                    "class": "12", "section": "A", "parentName": "Dinesh Patel", "parentPhone": "9876543210",
                    "address": "Flat 402, Shivshakti Towers, MG Road, Ahmedabad, Gujarat - 380001",
                    "aadhaar": "1234 5678 9012", "attendancePct": 92, "cgpa": "A1 (9.6)", "pendingFees": 12450,
                    "grades": {"math": "A1", "science": "A2", "english": "A1", "sst": "B1", "regional": "A1"}
                },
                {
                    "id": "stud_2", "rollNumber": 102, "firstName": "Ananya", "middleName": "", "lastName": "Subramanian",
                    "class": "12", "section": "B", "parentName": "K. Subramanian", "parentPhone": "9444012345",
                    "address": "No 18, Temple Car Street, Mylapore, Chennai, Tamil Nadu - 600004",
                    "aadhaar": "9876 5432 1098", "attendancePct": 88, "cgpa": "A2 (8.8)", "pendingFees": 0,
                    "grades": {"math": "B1", "science": "A1", "english": "A1", "sst": "A2", "regional": "A2"}
                },
                {
                    "id": "stud_3", "rollNumber": 103, "firstName": "Kabir", "middleName": "Singh", "lastName": "Dhillon",
                    "class": "11", "section": "A", "parentName": "Harbhajan Singh", "parentPhone": "9812098765",
                    "address": "House 54, Sector 15-A, Chandigarh, Punjab - 160015",
                    "aadhaar": "5544 3322 1100", "attendancePct": 74, "cgpa": "B2 (7.2)", "pendingFees": 8200,
                    "grades": {"math": "C1", "science": "B2", "english": "B1", "sst": "A2", "regional": "B2"}
                },
                {
                    "id": "stud_4", "rollNumber": 104, "firstName": "Ishita", "middleName": "Roy", "lastName": "Banerjee",
                    "class": "10", "section": "C", "parentName": "Sumit Banerjee", "parentPhone": "9830054321",
                    "address": "Block G, New Alipore, Kolkata, West Bengal - 700053",
                    "aadhaar": "8899 0011 2233", "attendancePct": 96, "cgpa": "A1 (9.8)", "pendingFees": 0,
                    "grades": {"math": "A1", "science": "A1", "english": "A1", "sst": "A1", "regional": "A1"}
                },
                {
                    "id": "stud_5", "rollNumber": 105, "firstName": "Vikram", "middleName": "K.", "lastName": "Venkatesh",
                    "class": "12", "section": "A", "parentName": "Krishna Venkatesh", "parentPhone": "9845012345",
                    "address": "Mylapore Car St, Chennai, TN - 600004",
                    "aadhaar": "1122 3344 5566", "attendancePct": 90, "cgpa": "A2 (9.0)", "pendingFees": 0,
                    "grades": {"math": "A2", "science": "A1", "english": "A1", "sst": "A2", "regional": "A1"}
                },
                {
                    "id": "stud_6", "rollNumber": 106, "firstName": "Priya", "middleName": "Devi", "lastName": "Sharma",
                    "class": "10", "section": "A", "parentName": "Ramesh Sharma", "parentPhone": "9829012345",
                    "address": "B-201, Vaishali Nagar, Jaipur, Rajasthan - 302021",
                    "aadhaar": "2233 4455 6677", "attendancePct": 85, "cgpa": "A2 (8.6)", "pendingFees": 4500,
                    "grades": {"math": "B1", "science": "A2", "english": "A1", "sst": "B1", "regional": "A1"}
                },
                {
                    "id": "stud_7", "rollNumber": 107, "firstName": "Arjun", "middleName": "", "lastName": "Nair",
                    "class": "11", "section": "B", "parentName": "Gopinathan Nair", "parentPhone": "9447012345",
                    "address": "TC 25/110, Kowdiar, Thiruvananthapuram, Kerala - 695003",
                    "aadhaar": "3344 5566 7788", "attendancePct": 78, "cgpa": "B1 (8.0)", "pendingFees": 0,
                    "grades": {"math": "B2", "science": "B1", "english": "A2", "sst": "B1", "regional": "A1"}
                },
                {
                    "id": "stud_8", "rollNumber": 108, "firstName": "Diya", "middleName": "", "lastName": "Iyer",
                    "class": "12", "section": "C", "parentName": "Subramanian Iyer", "parentPhone": "9884012345",
                    "address": "Plot 12, Jayanagar, Bengaluru, Karnataka - 560041",
                    "aadhaar": "4455 6677 8899", "attendancePct": 94, "cgpa": "A1 (9.4)", "pendingFees": 15000,
                    "grades": {"math": "A1", "science": "A1", "english": "A1", "sst": "A2", "regional": "A2"}
                },
                {
                    "id": "stud_9", "rollNumber": 109, "firstName": "Rohan", "middleName": "Prasad", "lastName": "Verma",
                    "class": "11", "section": "C", "parentName": "Alok Verma", "parentPhone": "9934012345",
                    "address": "Patliputra Colony, Patna, Bihar - 800013",
                    "aadhaar": "5566 7788 9900", "attendancePct": 82, "cgpa": "B1 (8.2)", "pendingFees": 0,
                    "grades": {"math": "B2", "science": "B2", "english": "A2", "sst": "B1", "regional": "B1"}
                },
                {
                    "id": "stud_10", "rollNumber": 110, "firstName": "Meera", "middleName": "", "lastName": "Deshmukh",
                    "class": "10", "section": "B", "parentName": "Sanjay Deshmukh", "parentPhone": "9820012345",
                    "address": "Shivaji Park, Dadar, Mumbai, Maharashtra - 400028",
                    "aadhaar": "6677 8899 0011", "attendancePct": 89, "cgpa": "A2 (8.9)", "pendingFees": 6200,
                    "grades": {"math": "B1", "science": "A2", "english": "A1", "sst": "A2", "regional": "A2"}
                }
            ]

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

if __name__ == '__main__':
    # Start web app on port 5000
    app.run(host='0.0.0.0', port=5000, debug=True)
