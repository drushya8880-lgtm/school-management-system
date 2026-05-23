/* ==========================================================================
   Gurukul Digital - Modern Indian Student Management System JS (English-Only)
   ========================================================================== */

// 1. Initial Mock Data Sets (English-Only)
const initialStudents = [
  {
    id: "stud_1",
    rollNumber: 101,
    firstName: "Aarav",
    middleName: "Kumar",
    lastName: "Patel",
    class: "12",
    section: "A",
    parentName: "Dinesh Patel",
    parentPhone: "9876543210",
    address: "Flat 402, Shivshakti Towers, MG Road, Ahmedabad, Gujarat - 380001",
    aadhaar: "1234 5678 9012",
    attendancePct: 92,
    cgpa: "A1 (9.6)",
    pendingFees: 12450,
    grades: {math: "A1", science: "A2", english: "A1", sst: "B1", regional: "A1"}
  },
  {
    id: "stud_2",
    rollNumber: 102,
    firstName: "Ananya",
    middleName: "",
    lastName: "Subramanian",
    class: "12",
    section: "B",
    parentName: "K. Subramanian",
    parentPhone: "9444012345",
    address: "No 18, Temple Car Street, Mylapore, Chennai, Tamil Nadu - 600004",
    aadhaar: "9876 5432 1098",
    attendancePct: 88,
    cgpa: "A2 (8.8)",
    pendingFees: 0,
    grades: {math: "B1", science: "A1", english: "A1", sst: "A2", regional: "A2"}
  },
  {
    id: "stud_3",
    rollNumber: 103,
    firstName: "Kabir",
    middleName: "Singh",
    lastName: "Dhillon",
    class: "11",
    section: "A",
    parentName: "Harbhajan Singh",
    parentPhone: "9812098765",
    address: "House 54, Sector 15-A, Chandigarh, Punjab - 160015",
    aadhaar: "5544 3322 1100",
    attendancePct: 74,
    cgpa: "B2 (7.2)",
    pendingFees: 8200,
    grades: {math: "C1", science: "B2", english: "B1", sst: "A2", regional: "B2"}
  },
  {
    id: "stud_4",
    rollNumber: 104,
    firstName: "Ishita",
    middleName: "Roy",
    lastName: "Banerjee",
    class: "10",
    section: "C",
    parentName: "Sumit Banerjee",
    parentPhone: "9830054321",
    address: "Block G, New Alipore, Kolkata, West Bengal - 700053",
    aadhaar: "8899 0011 2233",
    attendancePct: 96,
    cgpa: "A1 (9.8)",
    pendingFees: 0,
    grades: {math: "A1", science: "A1", english: "A1", sst: "A1", regional: "A1"}
  },
  {
    id: "stud_5",
    rollNumber: 105,
    firstName: "Vikram",
    middleName: "K.",
    lastName: "Venkatesh",
    class: "12",
    section: "A",
    parentName: "Krishna Venkatesh",
    parentPhone: "9845012345",
    address: "Mylapore Car St, Chennai, TN - 600004",
    aadhaar: "1122 3344 5566",
    attendancePct: 90,
    cgpa: "A2 (9.0)",
    pendingFees: 0,
    grades: {math: "A2", science: "A1", english: "A1", sst: "A2", regional: "A1"}
  },
  {
    id: "stud_6",
    rollNumber: 106,
    firstName: "Priya",
    middleName: "Devi",
    lastName: "Sharma",
    class: "10",
    section: "A",
    parentName: "Ramesh Sharma",
    parentPhone: "9829012345",
    address: "B-201, Vaishali Nagar, Jaipur, Rajasthan - 302021",
    aadhaar: "2233 4455 6677",
    attendancePct: 85,
    cgpa: "A2 (8.6)",
    pendingFees: 4500,
    grades: {math: "B1", science: "A2", english: "A1", sst: "B1", regional: "A1"}
  },
  {
    id: "stud_7",
    rollNumber: 107,
    firstName: "Arjun",
    middleName: "",
    lastName: "Nair",
    class: "11",
    section: "B",
    parentName: "Gopinathan Nair",
    parentPhone: "9447012345",
    address: "TC 25/110, Kowdiar, Thiruvananthapuram, Kerala - 695003",
    aadhaar: "3344 5566 7788",
    attendancePct: 78,
    cgpa: "B1 (8.0)",
    pendingFees: 0,
    grades: {math: "B2", science: "B1", english: "A2", sst: "B1", regional: "A1"}
  },
  {
    id: "stud_8",
    rollNumber: 108,
    firstName: "Diya",
    middleName: "",
    lastName: "Iyer",
    class: "12",
    section: "C",
    parentName: "Subramanian Iyer",
    parentPhone: "9884012345",
    address: "Plot 12, Jayanagar, Bengaluru, Karnataka - 560041",
    aadhaar: "4455 6677 8899",
    attendancePct: 94,
    cgpa: "A1 (9.4)",
    pendingFees: 15000,
    grades: {math: "A1", science: "A1", english: "A1", sst: "A2", regional: "A2"}
  },
  {
    id: "stud_9",
    rollNumber: 109,
    firstName: "Rohan",
    middleName: "Prasad",
    lastName: "Verma",
    class: "11",
    section: "C",
    parentName: "Alok Verma",
    parentPhone: "9934012345",
    address: "Patliputra Colony, Patna, Bihar - 800013",
    aadhaar: "5566 7788 9900",
    attendancePct: 82,
    cgpa: "B1 (8.2)",
    pendingFees: 0,
    grades: {math: "B2", science: "B2", english: "A2", sst: "B1", regional: "B1"}
  },
  {
    id: "stud_10",
    rollNumber: 110,
    firstName: "Meera",
    middleName: "",
    lastName: "Deshmukh",
    class: "10",
    section: "B",
    parentName: "Sanjay Deshmukh",
    parentPhone: "9820012345",
    address: "Shivaji Park, Dadar, Mumbai, Maharashtra - 400028",
    aadhaar: "6677 8899 0011",
    attendancePct: 89,
    cgpa: "A2 (8.9)",
    pendingFees: 6200,
    grades: {math: "B1", science: "A2", english: "A1", sst: "A2", regional: "A2"}
  }
];

const holidays = [
  { date: "2026-05-01", name: "Labour Day / May Day", isNational: false, emoji: "🛠️" },
  { date: "2026-05-24", name: "Buddha Purnima", isNational: false, emoji: "☸️" },
  { date: "2026-08-15", name: "Independence Day", isNational: true, emoji: "🇮🇳" },
  { date: "2026-10-02", name: "Gandhi Jayanti", isNational: true, emoji: "🇮🇳" },
  { date: "2026-11-01", name: "Kannada Rajyotsava", isNational: false, emoji: "💛❤️" },
  { date: "2026-11-08", name: "Deepavali (Festival of Lights)", isNational: false, emoji: "🪔" },
  { date: "2027-01-14", name: "Makara Sankranti (Harvest Festival)", isNational: false, emoji: "🪁" },
  { date: "2027-01-26", name: "Republic Day", isNational: true, emoji: "🇮🇳" },
  { date: "2027-03-29", name: "Ugadi (Kannada New Year)", isNational: false, emoji: "🌿" },
  { date: "2027-05-09", name: "Basava Jayanti", isNational: false, emoji: "🐂" }
];

const cityWeather = {
  NewDelhi: { temp: "38°C", humidity: "45%", condition: "Sunny ☀️", match: "New Delhi" },
  Mumbai: { temp: "32°C", humidity: "82%", condition: "Humid ⛅", match: "Mumbai" },
  Bengaluru: { temp: "26°C", humidity: "60%", condition: "Pleasant 🍃", match: "Bengaluru" },
  Kolkata: { temp: "34°C", humidity: "78%", condition: "Partly Cloudy 🌥️", match: "Kolkata" },
  Chennai: { temp: "36°C", humidity: "72%", condition: "Hot ☀️", match: "Chennai" }
};

// 2. Application State & Store Initialization
const state = {
  currentView: "dashboard",
  theme: "default", // default | high-contrast
  textSize: "normal", // sm | normal | lg | xl
  networkStatus: "online", // online | offline
  students: [],
  notifications: [
    { id: "n1", title: "Republic Day Parade & Assembly Scheduled", unread: true, time: "10:00 AM" },
    { id: "n2", title: "Diwali Holidays Announcement (School Closed)", unread: true, time: "Yesterday" },
    { id: "n3", title: "Weekly Yoga & Mindfulness Assembly", unread: false, time: "2 days ago" }
  ],
  calendarYear: 2026,
  calendarMonth: 4, // May (0-indexed)
  attendanceSubView: "rollcall",
  pendingSearch: ""
};

// Initialize empty state structures (will load from Python backend DB)
state.students = [];
state.attendance = {};
state.paymentHistory = [];

async function refreshStateData() {
  try {
    const resStudents = await fetch('/api/students');
    if (resStudents.ok) {
      state.students = await resStudents.json();
    }
    
    const resAttendance = await fetch('/api/attendance');
    if (resAttendance.ok) {
      state.attendance = await resAttendance.json();
    }
    
    const resHistory = await fetch('/api/fees/history');
    if (resHistory.ok) {
      state.paymentHistory = await resHistory.json();
    }
  } catch (err) {
    console.error("Failed to refresh state data:", err);
    alertToast("⚠️ Server synchronization failed.");
  }
}

// Load settings from storage
state.theme = localStorage.getItem("gurukul_theme") || "default";
state.textSize = localStorage.getItem("gurukul_textSize") || "normal";

// Auth Guard & Setup
function checkLoginState() {
  const session = localStorage.getItem("gurukul_admin_session");
  const appLayout = document.querySelector(".app-layout");
  const loginContainer = document.getElementById("login-container");
  
  if (session === "active") {
    if (appLayout) appLayout.classList.remove("hidden");
    if (loginContainer) loginContainer.classList.add("hidden");
    return true;
  } else {
    if (appLayout) appLayout.classList.add("hidden");
    if (loginContainer) loginContainer.classList.remove("hidden");
    window.location.hash = "";
    return false;
  }
}

function handleLogout() {
  localStorage.removeItem("gurukul_admin_session");
  alertToast("Logged out successfully.");
  checkLoginState();
}

function setupLoginHandler() {
  const loginForm = document.getElementById("login-form");
  const errorMsg = document.getElementById("login-error-msg");
  
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById("login-username").value.trim();
      const passwordInput = document.getElementById("login-password").value;
      
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: usernameInput, password: passwordInput })
        });
        const data = await res.json();
        
        if (res.ok && data.success) {
          localStorage.setItem("gurukul_admin_session", "active");
          if (errorMsg) errorMsg.classList.add("hidden");
          document.getElementById("login-username").value = "";
          document.getElementById("login-password").value = "";
          alertToast("Welcome back, DR Adarsh Babu!");
          
          checkLoginState();
          await refreshStateData();
          navigateTo("dashboard");
        } else {
          if (errorMsg) errorMsg.classList.remove("hidden");
          document.getElementById("login-password").value = "";
        }
      } catch (err) {
        console.error(err);
        alertToast("⚠️ Server connection error.");
      }
    });
  }
  
  const headerLogoutBtn = document.getElementById("header-logout-btn");
  if (headerLogoutBtn) {
    headerLogoutBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleLogout();
    });
  }
}

// 3. Initialization and Event Binders
document.addEventListener("DOMContentLoaded", async () => {
  setupAccessibilitySupport();
  setupGlobalEvents();
  setupNetworkSimulator();
  setupLoginHandler();
  
  // Check if logged in first
  if (checkLoginState()) {
    await refreshStateData();
    // Dynamic Route Load
    const initialHash = window.location.hash.slice(1) || "dashboard";
    navigateTo(initialHash);
  }
});

// Accessibility Handlers (Contrast, Scale, Reader)
function setupAccessibilitySupport() {
  const a11yBtn = document.getElementById("a11y-btn");
  const a11yDropdown = document.getElementById("a11y-dropdown");
  
  a11yBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    a11yDropdown.classList.toggle("active");
  });

  // Text Scaling
  document.getElementById("font-dec").addEventListener("click", () => changeFontSize("sm"));
  document.getElementById("font-normal").addEventListener("click", () => changeFontSize("normal"));
  document.getElementById("font-inc").addEventListener("click", () => changeFontSize("lg"));

  // Contrast Toggler
  const contrastToggle = document.getElementById("contrast-toggle");
  contrastToggle.checked = state.theme === "high-contrast";
  if (state.theme === "high-contrast") {
    document.documentElement.setAttribute("data-theme", "high-contrast");
  }

  contrastToggle.addEventListener("change", (e) => {
    const isHC = e.target.checked;
    state.theme = isHC ? "high-contrast" : "default";
    localStorage.setItem("gurukul_theme", state.theme);
    document.documentElement.setAttribute("data-theme", state.theme);
  });

  // Screen reader toggle announcement
  const srToggle = document.getElementById("screenreader-toggle");
  srToggle.addEventListener("change", (e) => {
    if (e.target.checked) {
      announceA11y("Screen reader accessibility mode activated.");
    }
  });

  // Sync font size classes
  changeFontSize(state.textSize);
}

function changeFontSize(size) {
  document.body.classList.remove("a11y-text-sm", "a11y-text-lg", "a11y-text-xl");
  document.querySelectorAll(".a11y-control-btn").forEach(btn => btn.classList.remove("active"));
  
  state.textSize = size;
  localStorage.setItem("gurukul_textSize", size);

  if (size === "sm") {
    document.body.classList.add("a11y-text-sm");
    document.getElementById("font-dec").classList.add("active");
  } else if (size === "normal") {
    document.getElementById("font-normal").classList.add("active");
  } else if (size === "lg") {
    document.body.classList.add("a11y-text-lg");
    document.getElementById("font-inc").classList.add("active");
  }
}

function announceA11y(phrase) {
  let speechAnnouncer = document.getElementById("sr-announcer");
  if (!speechAnnouncer) {
    speechAnnouncer = document.createElement("div");
    speechAnnouncer.id = "sr-announcer";
    speechAnnouncer.style.position = "absolute";
    speechAnnouncer.style.width = "1px";
    speechAnnouncer.style.height = "1px";
    speechAnnouncer.style.overflow = "hidden";
    speechAnnouncer.setAttribute("aria-live", "assertive");
    document.body.appendChild(speechAnnouncer);
  }
  speechAnnouncer.textContent = phrase;
}

// Global Nav & Dropdown Closures
function setupGlobalEvents() {
  const sidebar = document.querySelector(".sidebar");

  // Navigation tabs
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = item.getAttribute("data-view");
      if (targetView === "diagnostics") {
        openDiagnosticsModal();
        return;
      }
      if (targetView === "logout") {
        handleLogout();
        return;
      }
      navigateTo(targetView);
      sidebar.classList.remove("active"); // Explicitly close mobile sidebar on navigation
    });
  });

  // Notifications bell
  const notifBtn = document.getElementById("notification-btn");
  const notifDropdown = document.getElementById("notifications-dropdown");
  notifBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle("active");
    renderNotificationsList();
  });

  document.getElementById("mark-all-read").addEventListener("click", () => {
    state.notifications.forEach(n => n.unread = false);
    updateNotificationBadge();
    renderNotificationsList();
  });

  // Stop click propagation inside dropdown panels so clicking controls doesn't dismiss them
  notifDropdown.addEventListener("click", (e) => e.stopPropagation());
  document.getElementById("a11y-dropdown").addEventListener("click", (e) => e.stopPropagation());

  // Sidebar toggle on mobile
  const sidebarToggle = document.getElementById("sidebar-toggle");
  sidebarToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
  });

  // Stop click propagation inside sidebar
  sidebar.addEventListener("click", (e) => e.stopPropagation());

  // Global document click to close dropdowns & sidebars
  document.addEventListener("click", () => {
    document.getElementById("a11y-dropdown").classList.remove("active");
    document.getElementById("notifications-dropdown").classList.remove("active");
    sidebar.classList.remove("active");
  });

  // Live Student Search with pending search caching to avoid race condition double loaders
  document.getElementById("global-search").addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    const pageSearchInput = document.getElementById("filter-search-name");
    if (pageSearchInput) pageSearchInput.value = e.target.value;

    if (state.currentView !== "students") {
      state.pendingSearch = val;
      navigateTo("students");
    } else {
      renderStudentsList(val);
    }
  });

  updateNotificationBadge();
  renderNotificationsList();
}

// Simulated Network Controller
function setupNetworkSimulator() {
  const netToggle = document.getElementById("network-toggle");
  const netText = document.getElementById("network-status-text");
  const offlineBar = document.getElementById("offline-bar");
  const offlineBarText = document.getElementById("offline-bar-text");

  netToggle.addEventListener("change", (e) => {
    const isOnline = e.target.checked;
    state.networkStatus = isOnline ? "online" : "offline";
    
    if (isOnline) {
      netText.innerText = "Online (5G)";
      netText.classList.remove("network-status-offline");
      offlineBar.classList.add("hidden");
      alertToast("Back online. Syncing data...");
    } else {
      netText.innerText = "Offline Mode";
      netText.classList.add("network-status-offline");
      offlineBar.classList.remove("hidden");
      offlineBarText.innerText = "Offline Mode: Saving changes to local browser cache.";
      alertToast("Offline Mode: Saving changes to local browser cache.");
    }
  });
}

function updateNotificationBadge() {
  const unreadCount = state.notifications.filter(n => n.unread).length;
  const badge = document.getElementById("notif-count");
  if (unreadCount > 0) {
    badge.innerText = unreadCount;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

function renderNotificationsList() {
  const list = document.getElementById("notif-list");
  list.innerHTML = "";
  state.notifications.forEach(n => {
    const li = document.createElement("li");
    li.className = `notif-item ${n.unread ? 'unread' : ''}`;
    
    li.innerHTML = `
      <div class="notif-title">${n.title}</div>
      <div class="notif-time">🕒 ${n.time}</div>
    `;
    
    li.addEventListener("click", () => {
      n.unread = false;
      updateNotificationBadge();
      renderNotificationsList();
    });
    
    list.appendChild(li);
  });
}

// Router & Screen Loader
async function navigateTo(viewId) {
  if (!checkLoginState()) {
    return;
  }
  // Show Loader
  const loader = document.getElementById("loader-overlay");
  if (loader) loader.classList.remove("hidden");
  
  // Set active nav class
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.getAttribute("data-view") === viewId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  try {
    await refreshStateData();
  } catch (err) {
    console.error("Failed to sync state during navigation:", err);
  }

  setTimeout(() => {
    state.currentView = viewId;
    window.location.hash = viewId;
    renderCurrentView();
    if (loader) loader.classList.add("hidden");
  }, 350); // Small delay for Ashoka Chakra spinner effect
}

function renderCurrentView() {
  const container = document.getElementById("main-content");
  container.innerHTML = ""; 
  
  switch (state.currentView) {
    case "dashboard":
      renderDashboardView(container);
      break;
    case "students":
      renderStudentsView(container);
      break;
    case "attendance":
      renderAttendanceView(container);
      break;
    case "grades":
      renderGradesView(container);
      break;
    case "timetable":
      renderTimetableView(container);
      break;
    case "fees":
      renderFeesView(container);
      break;
    default:
      container.innerHTML = "<h2>View Not Found</h2>";
  }
}

// ==========================================================================
// VIEW RENDERERS
// ==========================================================================

// --- 1. Dashboard View ---
function renderDashboardView(parent) {
  // Calculate quick stats
  const totalStudents = state.students.length;
  const avgAttendance = Math.round(state.students.reduce((acc, s) => acc + s.attendancePct, 0) / totalStudents) || 0;
  const pendingFeesTotal = state.students.reduce((acc, s) => acc + s.pendingFees, 0);

  const headerHtml = `
    <div class="view-header">
      <div class="view-title-area">
        <span class="view-subtitle-devanagari">Welcome, DR Adarsh Babu</span>
        <h2>Dashboard | Gurukul Digital Campus</h2>
      </div>
      <div class="view-actions">
        <span class="badge" style="background-color: var(--color-saffron-light); color: var(--color-saffron); font-weight:700; padding:8px 12px; border-radius:8px;">
          Academic Year: 2026-27 (IST)
        </span>
      </div>
    </div>
  `;

  const statsHtml = `
    <div class="dashboard-grid">
      <div class="stats-card saffron-border">
        <div class="stats-icon-wrapper">👨‍🎓</div>
        <div class="stats-details">
          <span class="stats-title">Total Enrolled</span>
          <span class="stats-value">${totalStudents} Students</span>
          <span class="stats-comparison">✓ Dynamic roster active</span>
        </div>
      </div>
      
      <div class="stats-card green-border">
        <div class="stats-icon-wrapper">📅</div>
        <div class="stats-details">
          <span class="stats-title">Avg Attendance</span>
          <span class="stats-value">${avgAttendance}%</span>
          <span class="stats-comparison">↑ 1.2% this trimester</span>
        </div>
      </div>

      <div class="stats-card gold-border">
        <div class="stats-icon-wrapper">₹</div>
        <div class="stats-details">
          <span class="stats-title">Pending Fees</span>
          <span class="stats-value">₹${pendingFeesTotal.toLocaleString('en-IN')}</span>
          <span class="stats-comparison" style="color:var(--color-danger)">⚠ Pending invoices</span>
        </div>
      </div>

      <div class="stats-card blue-border">
        <div class="stats-icon-wrapper">🏆</div>
        <div class="stats-details">
          <span class="stats-title">System CGPA</span>
          <span class="stats-value">A2 (8.8)</span>
          <span class="stats-comparison">Top 10% Board Average</span>
        </div>
      </div>
    </div>
  `;

  // Festival list rendering
  let festivalListHtml = "";
  holidays.forEach(h => {
    const dateFormatted = new Date(h.date).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long'
    });
    festivalListHtml += `
      <div class="festival-item ${h.isNational ? 'national' : ''}">
        <span class="festival-name">${h.emoji || '🕉️'} ${h.name}</span>
        <span class="festival-date">${dateFormatted}</span>
      </div>
    `;
  });

  const rowHtml = `
    <div class="dashboard-main-row">
      <!-- Left Panel: Calendar Widget & Weather -->
      <div style="display:flex; flex-direction:column; gap:24px;">
        <div class="panel-card">
          <div class="panel-title-row">
            <div>
              <h3 class="panel-title">Indian Festival & Academic Calendar</h3>
              <span class="panel-subtitle-hi">Academic Holidays</span>
            </div>
            <span style="font-size:1.5rem">📅</span>
          </div>

          <div id="dashboard-calendar-container"></div>
        </div>

        <!-- Weather Campus Monitor -->
        <div class="weather-widget">
          <div class="weather-header">
            <h3>☀️ Campus Weather Monitor</h3>
            <select id="weather-city-selector" class="weather-city-select">
              <option value="NewDelhi">New Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div class="weather-info">
            <div>
              <span class="weather-temp" id="weather-temp-val">38°C</span>
              <div class="weather-desc" id="weather-desc-val">Sunny ☀️</div>
            </div>
            <div style="font-size:3rem">🌤️</div>
          </div>
          <div class="weather-details">
            <span>City: <strong id="weather-city-val">New Delhi</strong></span>
            <span>Humidity: <strong id="weather-humidity-val">45%</strong></span>
            <span>IST Timezone: <strong>24Hr (GMT+5:30)</strong></span>
          </div>
        </div>
      </div>

      <!-- Right Panel: Attendance circular gauges & Holidays -->
      <div style="display:flex; flex-direction:column; gap:24px;">
        <div class="panel-card">
          <div class="panel-title-row">
            <div>
              <h3 class="panel-title">Subject Attendance Summary</h3>
              <span class="panel-subtitle-hi">Trimester Record</span>
            </div>
          </div>
          
          <div class="circular-charts-row">
            <div class="circular-chart-container">
              <svg viewBox="0 0 36 36" class="circular-chart saffron">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-progress" stroke-dasharray="94, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" class="percentage-text">94%</text>
              </svg>
              <span class="chart-label">Maths</span>
            </div>
            
            <div class="circular-chart-container">
              <svg viewBox="0 0 36 36" class="circular-chart green">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-progress" stroke-dasharray="87, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" class="percentage-text">87%</text>
              </svg>
              <span class="chart-label">Sanskrit</span>
            </div>

            <div class="circular-chart-container">
              <svg viewBox="0 0 36 36" class="circular-chart blue">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-progress" stroke-dasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" class="percentage-text">75%</text>
              </svg>
              <span class="chart-label">Science</span>
            </div>
          </div>
        </div>

        <div class="panel-card">
          <div class="panel-title-row">
            <div>
              <h3 class="panel-title">Upcoming Holidays</h3>
              <span class="panel-subtitle-hi">Festival Breaks</span>
            </div>
          </div>
          <div class="festival-list">
            ${festivalListHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  parent.innerHTML = headerHtml + statsHtml + rowHtml;

  const calendarContainer = document.getElementById("dashboard-calendar-container");
  if (calendarContainer) {
    drawCalendarWidget(calendarContainer, true);
  }

  // Bind weather dropdown handler
  const weatherSelect = document.getElementById("weather-city-selector");
  weatherSelect.addEventListener("change", (e) => {
    const cityKey = e.target.value;
    const details = cityWeather[cityKey];
    if (details) {
      document.getElementById("weather-temp-val").innerText = details.temp;
      document.getElementById("weather-desc-val").innerText = details.condition;
      document.getElementById("weather-city-val").innerText = details.match;
      document.getElementById("weather-humidity-val").innerText = details.humidity;
    }
  });
}

// --- 2. Students Section View (CRUD) ---
function renderStudentsView(parent) {
  const headerHtml = `
    <div class="view-header">
      <div class="view-title-area">
        <span class="view-subtitle-devanagari">Registry Operations</span>
        <h2>Student Management Directory</h2>
      </div>
      <div class="view-actions">
        <button class="btn btn-saffron" id="add-student-trigger">➕ Enroll New Student</button>
      </div>
    </div>
  `;

  const filtersHtml = `
    <div class="filters-row">
      <div class="filter-group">
        <label for="filter-class-val">Class</label>
        <select id="filter-class-val">
          <option value="">All Classes</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="filter-section-val">Section</label>
        <select id="filter-section-val">
          <option value="">All Sections</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="filter-search-name">Student Name</label>
        <input type="text" id="filter-search-name" placeholder="Search name...">
      </div>
    </div>

    <!-- Student Cards Container Grid -->
    <div class="student-grid" id="students-grid-container">
      <!-- Generated dynamically -->
    </div>
  `;

  parent.innerHTML = headerHtml + filtersHtml;

  // Bind Student Add trigger button
  document.getElementById("add-student-trigger").addEventListener("click", () => {
    openStudentModal();
  });

  // Bind filter events
  document.getElementById("filter-class-val").addEventListener("change", filterStudents);
  document.getElementById("filter-section-val").addEventListener("change", filterStudents);
  document.getElementById("filter-search-name").addEventListener("input", filterStudents);

  // Initial draw
  if (state.pendingSearch) {
    const searchInput = document.getElementById("filter-search-name");
    if (searchInput) {
      searchInput.value = state.pendingSearch;
    }
    renderStudentsList(state.pendingSearch);
    state.pendingSearch = "";
  } else {
    renderStudentsList();
  }
}

function renderStudentsList(searchFilter = "") {
  const grid = document.getElementById("students-grid-container");
  if (!grid) return;
  grid.innerHTML = "";

  const classFilter = document.getElementById("filter-class-val").value;
  const sectionFilter = document.getElementById("filter-section-val").value;
  const nameFilter = document.getElementById("filter-search-name").value.trim().toLowerCase();

  const filtered = state.students.filter(student => {
    // Class filter match
    if (classFilter && student.class !== classFilter) return false;
    // Section filter match
    if (sectionFilter && student.section !== sectionFilter) return false;
    // Name filter match
    const nameMatchVal = `${student.firstName} ${student.lastName}`.toLowerCase();
    const query = searchFilter ? searchFilter.toLowerCase() : nameFilter;
    
    if (query) {
      const isRollNum = !isNaN(query);
      if (isRollNum) {
        return student.rollNumber.toString() === query;
      }
      return nameMatchVal.includes(query);
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: span 3; text-align:center; padding:50px; color:var(--color-text-muted)">No students found matching current filters.</div>`;
    return;
  }

  filtered.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";
    
    // Generate initials for avatar color
    const initials = `${student.firstName[0]}${student.lastName[0]}`;
    
    let attendanceColor = "var(--color-green)";
    if (student.attendancePct < 75) {
      attendanceColor = "var(--color-danger)";
    } else if (student.attendancePct < 85) {
      attendanceColor = "var(--color-saffron)";
    }

    card.innerHTML = `
      <div class="student-card-header">
        <div class="student-avatar-circle">${initials}</div>
        <div class="student-header-meta">
          <span class="student-roll-badge">Roll: ${student.rollNumber}</span>
          <span class="student-class-badge">Class ${student.class} - ${student.section}</span>
        </div>
      </div>
      
      <div class="student-names-section">
        <div class="student-name-en" style="font-size: 1.1rem; font-weight: 600;">${student.firstName} ${student.lastName}</div>
      </div>

      <div class="student-attendance-metric" style="margin-top: 10px;">
        <div class="attendance-header-row" style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
          <span>📅 Attendance</span>
          <span>${student.attendancePct}%</span>
        </div>
        <div class="attendance-bar-bg" style="height: 6px; background: var(--color-blue-light); border-radius: 3px; overflow: hidden;">
          <div class="attendance-bar-fill" style="width: ${student.attendancePct}%; height: 100%; background-color: ${attendanceColor};"></div>
        </div>
      </div>

      <div class="student-info-body" style="margin-top: 15px; display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem;">
        <div class="info-row" style="display: flex; justify-content: space-between;">
          <span class="info-label" style="color: var(--color-text-muted);">Parent:</span>
          <span class="info-val" style="font-weight: 500;">${student.parentName}</span>
        </div>
        <div class="info-row" style="display: flex; justify-content: space-between;">
          <span class="info-label" style="color: var(--color-text-muted);">Contact:</span>
          <span class="info-val" style="font-weight: 500;">+91 ${student.parentPhone}</span>
        </div>
        <div class="info-row" style="display: flex; justify-content: space-between;">
          <span class="info-label" style="color: var(--color-text-muted);">Aadhaar:</span>
          <span class="info-val" style="font-weight: 500;">${student.aadhaar || "Not Submitted"}</span>
        </div>
      </div>

      <div class="student-card-action-buttons" style="margin-top: 20px; display: flex; gap: 10px;">
        <button class="card-action-btn btn btn-secondary view-btn" style="flex: 1; padding: 6px;" title="View Report Card" data-id="${student.id}">View Details</button>
        <button class="card-action-btn btn btn-primary edit-btn" style="flex: 1; padding: 6px;" title="Edit Student" data-id="${student.id}">Edit Profile</button>
        <button class="delete-icon-btn delete-btn" style="background: none; border: none; cursor: pointer; font-size: 1.1rem; padding: 0 5px;" title="Delete Records" data-id="${student.id}">🗑️</button>
      </div>
    `;

    // Bind action events inside cards
    card.querySelector(".view-btn").addEventListener("click", () => {
      openReportCard(student.id);
    });

    card.querySelector(".edit-btn").addEventListener("click", () => {
      openStudentModal(student.id);
    });

    card.querySelector(".delete-btn").addEventListener("click", () => {
      if (confirm(`Are you sure you want to withdraw ${student.firstName} ${student.lastName}?`)) {
        deleteStudent(student.id);
      }
    });

    grid.appendChild(card);
  });
}

function filterStudents() {
  renderStudentsList();
}

// Student Modal functions (CRUD)
const modal = document.getElementById("student-modal");
const form = document.getElementById("student-form");

function openStudentModal(studentId = null) {
  if (state.networkStatus === "offline") {
    alertToast("⚠️ Modifying student registry requires Online syncing state.");
    return;
  }
  
  modal.classList.remove("hidden");
  form.reset();
  
  if (studentId) {
    document.getElementById("modal-title").innerText = "Edit Student Registry";
    const st = state.students.find(s => s.id === studentId);
    if (st) {
      document.getElementById("student-id").value = st.id;
      document.getElementById("student-first-name").value = st.firstName;
      document.getElementById("student-middle-name").value = st.middleName;
      document.getElementById("student-last-name").value = st.lastName;
      document.getElementById("student-class").value = st.class;
      document.getElementById("student-section").value = st.section;
      document.getElementById("student-roll").value = st.rollNumber;
      document.getElementById("student-aadhaar").value = st.aadhaar;
      document.getElementById("student-parent-name").value = st.parentName;
      document.getElementById("student-parent-phone").value = st.parentPhone;
      document.getElementById("student-address").value = st.address;
    }
  } else {
    document.getElementById("modal-title").innerText = "Enroll New Student";
    document.getElementById("student-id").value = "";
    // Suggest next roll number
    const maxRoll = state.students.reduce((max, s) => s.rollNumber > max ? s.rollNumber : max, 100);
    document.getElementById("student-roll").value = maxRoll + 1;
  }
}

// Close Student Modal helpers
document.getElementById("close-student-modal").addEventListener("click", () => modal.classList.add("hidden"));
document.getElementById("cancel-student-btn").addEventListener("click", () => modal.classList.add("hidden"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const id = document.getElementById("student-id").value;
  const rollVal = parseInt(document.getElementById("student-roll").value);

  // Validate duplicate roll number registry-wide
  const isDuplicateRoll = state.students.some(s => s.rollNumber === rollVal && s.id !== id);
  if (isDuplicateRoll) {
    alertToast("⚠️ Error: Roll number already exists in registry.");
    return;
  }

  const newStud = {
    id: id || "stud_" + Date.now(),
    rollNumber: rollVal,
    firstName: document.getElementById("student-first-name").value.trim(),
    middleName: document.getElementById("student-middle-name").value.trim(),
    lastName: document.getElementById("student-last-name").value.trim(),
    class: document.getElementById("student-class").value,
    section: document.getElementById("student-section").value,
    aadhaar: document.getElementById("student-aadhaar").value.trim(),
    parentName: document.getElementById("student-parent-name").value.trim(),
    parentPhone: document.getElementById("student-parent-phone").value.trim(),
    address: document.getElementById("student-address").value.trim(),
    attendancePct: id ? state.students.find(s => s.id === id).attendancePct : 100,
    cgpa: id ? state.students.find(s => s.id === id).cgpa : "A1 (9.0)",
    pendingFees: id ? state.students.find(s => s.id === id).pendingFees : 12450,
    grades: id ? state.students.find(s => s.id === id).grades : {math: "A2", science: "A2", english: "A1", sst: "B1", regional: "A2"}
  };

  const url = id ? `/api/students/${id}` : '/api/students';
  const method = id ? 'PUT' : 'POST';

  fetch(url, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newStud)
  })
  .then(async res => {
    if (res.ok) {
      alertToast(id ? "Student profile updated successfully." : "New Student enrolled successfully!");
      modal.classList.add("hidden");
      await refreshStateData();
      renderStudentsList();
    } else {
      const errData = await res.json();
      alertToast(`⚠️ Save failed: ${errData.message || 'unknown error'}`);
    }
  })
  .catch(err => {
    console.error(err);
    alertToast("⚠️ Server connection error.");
  });
});

function deleteStudent(id) {
  if (state.networkStatus === "offline") {
    alertToast("⚠️ Deleting records requires Online database connections.");
    return;
  }
  fetch(`/api/students/${id}`, { method: 'DELETE' })
  .then(async res => {
    if (res.ok) {
      alertToast("Student registry deleted.");
      await refreshStateData();
      renderStudentsList();
    } else {
      alertToast("⚠️ Withdrawal failed.");
    }
  })
  .catch(err => {
    console.error(err);
    alertToast("⚠️ Server connection error.");
  });
}

// --- 3. Attendance Tracker Module ---
function getFilteredStudentsForAttendance() {
  const classFilter = state.selectedAttendanceClass;
  const sectionFilter = state.selectedAttendanceSection;
  const searchQuery = state.selectedAttendanceSearch;

  return state.students.filter(student => {
    if (classFilter && student.class !== classFilter) return false;
    if (sectionFilter && student.section !== sectionFilter) return false;
    if (searchQuery) {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      const rollStr = student.rollNumber.toString();
      return fullName.includes(searchQuery) || rollStr.includes(searchQuery);
    }
    return true;
  });
}

function renderAttendanceView(parent) {
  if (!state.selectedAttendanceDate) state.selectedAttendanceDate = "2026-05-22";
  if (!state.selectedAttendanceClass) state.selectedAttendanceClass = "12";
  if (!state.selectedAttendanceSection) state.selectedAttendanceSection = "A";
  if (!state.selectedAttendanceSearch) state.selectedAttendanceSearch = "";
  if (!state.attendanceSubView) state.attendanceSubView = "rollcall";

  // Load state.tempAttendance for selectedDate on view load
  state.tempAttendance = {};
  state.students.forEach(student => {
    const key = `${state.selectedAttendanceDate}_${student.id}`;
    if (state.attendance[key]) {
      state.tempAttendance[student.id] = state.attendance[key];
    }
  });

  const subViewToggleHtml = `
    <div class="view-header">
      <div class="view-title-area">
        <span class="view-subtitle-devanagari">Active Tracking</span>
        <h2>Attendance Tracker</h2>
      </div>
      <div class="view-actions">
        <div class="tab-button-group" style="display: inline-flex; gap: 5px; background: var(--color-blue-light); padding: 4px; border-radius: var(--border-radius-md);">
          <button class="btn ${state.attendanceSubView === 'rollcall' ? 'btn-primary' : 'btn-secondary'}" id="subtab-rollcall" style="padding: 6px 12px; font-size: 0.8rem; border-radius: calc(var(--border-radius-md) - 2px);">Roll Call</button>
          <button class="btn ${state.attendanceSubView === 'insights' ? 'btn-primary' : 'btn-secondary'}" id="subtab-insights" style="padding: 6px 12px; font-size: 0.8rem; border-radius: calc(var(--border-radius-md) - 2px);">Insights & Calendar</button>
        </div>
      </div>
    </div>
  `;

  let mainBodyHtml = "";

  if (state.attendanceSubView === "rollcall") {
    mainBodyHtml = `
      <!-- Filter Bar Panel -->
      <div class="panel-card" style="margin-bottom: 20px;">
        <div class="filters-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
          <div class="filter-group">
            <label for="attendance-date-val" style="font-weight: 500; font-size: 0.85rem;">Select Date</label>
            <input type="date" id="attendance-date-val" value="${state.selectedAttendanceDate}" style="width:100%; padding: 8px; border: 1px solid var(--color-border); border-radius: 6px;">
          </div>
          <div class="filter-group">
            <label for="attendance-class-val" style="font-weight: 500; font-size: 0.85rem;">Class</label>
            <select id="attendance-class-val" style="width:100%; padding: 8px; border: 1px solid var(--color-border); border-radius: 6px;">
              <option value="">All Classes</option>
              <option value="10" ${state.selectedAttendanceClass === '10' ? 'selected' : ''}>Class 10</option>
              <option value="11" ${state.selectedAttendanceClass === '11' ? 'selected' : ''}>Class 11</option>
              <option value="12" ${state.selectedAttendanceClass === '12' ? 'selected' : ''}>Class 12</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="attendance-section-val" style="font-weight: 500; font-size: 0.85rem;">Section</label>
            <select id="attendance-section-val" style="width:100%; padding: 8px; border: 1px solid var(--color-border); border-radius: 6px;">
              <option value="">All Sections</option>
              <option value="A" ${state.selectedAttendanceSection === 'A' ? 'selected' : ''}>Section A</option>
              <option value="B" ${state.selectedAttendanceSection === 'B' ? 'selected' : ''}>Section B</option>
              <option value="C" ${state.selectedAttendanceSection === 'C' ? 'selected' : ''}>Section C</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="attendance-search-name" style="font-weight: 500; font-size: 0.85rem;">Search Student</label>
            <input type="text" id="attendance-search-name" value="${state.selectedAttendanceSearch}" placeholder="Name or Roll..." style="width:100%; padding: 8px; border: 1px solid var(--color-border); border-radius: 6px;">
          </div>
          <div class="filter-group" style="display: flex; align-items: flex-end;">
            <button class="btn btn-saffron" id="btn-start-rollcall" style="width: 100%; padding: 9px; font-weight: 600;">📢 Start Roll Call</button>
          </div>
        </div>
      </div>

      <!-- Summary Cards Row -->
      <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 15px; margin-bottom: 20px;">
        <div class="stats-card blue-border" style="padding: 12px; gap: 8px;">
          <div style="font-size: 1.5rem;">👨‍🎓</div>
          <div class="stats-details">
            <span class="stats-title" style="font-size: 0.75rem;">Class Size</span>
            <span class="stats-value" id="summary-class-size" style="font-size: 1.1rem; font-weight: 700;">0</span>
          </div>
        </div>
        <div class="stats-card green-border" style="padding: 12px; gap: 8px;">
          <div style="font-size: 1.5rem;">✅</div>
          <div class="stats-details">
            <span class="stats-title" style="font-size: 0.75rem;">Present</span>
            <span class="stats-value" id="summary-present" style="font-size: 1.1rem; font-weight: 700;">0</span>
          </div>
        </div>
        <div class="stats-card gold-border" style="padding: 12px; gap: 8px;">
          <div style="font-size: 1.5rem;">🕒</div>
          <div class="stats-details">
            <span class="stats-title" style="font-size: 0.75rem;">Late</span>
            <span class="stats-value" id="summary-late" style="font-size: 1.1rem; font-weight: 700;">0</span>
          </div>
        </div>
        <div class="stats-card saffron-border" style="padding: 12px; gap: 8px;">
          <div style="font-size: 1.5rem;">🌗</div>
          <div class="stats-details">
            <span class="stats-title" style="font-size: 0.75rem;">Half-Day</span>
            <span class="stats-value" id="summary-halfday" style="font-size: 1.1rem; font-weight: 700;">0</span>
          </div>
        </div>
        <div class="stats-card red-border" style="padding: 12px; gap: 8px;">
          <div style="font-size: 1.5rem;">❌</div>
          <div class="stats-details">
            <span class="stats-title" style="font-size: 0.75rem;">Absent</span>
            <span class="stats-value" id="summary-absent" style="font-size: 1.1rem; font-weight: 700;">0</span>
          </div>
        </div>
        <div class="stats-card green-border" style="padding: 12px; gap: 8px;">
          <div style="font-size: 1.5rem;">📈</div>
          <div class="stats-details">
            <span class="stats-title" style="font-size: 0.75rem;">Avg Attend %</span>
            <span class="stats-value" id="summary-avg" style="font-size: 1.1rem; font-weight: 700;">0%</span>
          </div>
        </div>
      </div>

      <div class="attendance-layout" style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
        <!-- Attendance Grid panel -->
        <div class="panel-card" style="display: flex; flex-direction: column;">
          <div class="panel-title-row">
            <h3 class="panel-title" id="attendance-sheet-title">Active Roll Call Sheet</h3>
            <div id="attendance-sheet-date" style="font-weight:600">Date: ${state.selectedAttendanceDate}</div>
          </div>
          
          <div style="overflow-x: auto;">
            <table class="attendance-table">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Student Name</th>
                  <th>Class / Section</th>
                  <th>Status</th>
                  <th style="text-align:right">Update Attendance</th>
                </tr>
              </thead>
              <tbody id="attendance-rows">
                <!-- Loaded dynamically -->
              </tbody>
            </table>
          </div>

          <!-- Bottom Actions -->
          <div style="margin-top: 20px; display: flex; justify-content: flex-end; gap: 10px;">
            <button class="btn btn-secondary" id="btn-update-rollcall">Update Roll Call</button>
            <button class="btn btn-primary" id="btn-save-attendance">Save Attendance</button>
          </div>
        </div>

        <!-- Calendar / Legend details -->
        <div class="panel-card">
          <h3 class="panel-title">Monthly Roll Summary</h3>
          <span class="panel-subtitle-hi">Trimester Aggregates</span>
          
          <div style="margin-top:15px; display:flex; flex-direction:column; gap:12px; font-size: 0.9rem;">
            <div class="student-field-row" style="display:flex; justify-content:space-between;">
              <span>Total Operational Days:</span>
              <strong>22 Days</strong>
            </div>
            <div class="student-field-row" style="display:flex; justify-content:space-between;">
              <span>Approved Holiday Breaks:</span>
              <strong style="color:var(--color-green)">3 Days</strong>
            </div>
            <div class="student-field-row" style="display:flex; justify-content:space-between;">
              <span>Inclement Weather Closures:</span>
              <strong style="color:var(--color-saffron)">0 Days</strong>
            </div>
          </div>

          <h4 style="margin-top:20px; font-weight:600; border-bottom:1px solid var(--color-border); padding-bottom:5px;">Legend Guide</h4>
          <div style="margin-top:10px; display:flex; flex-direction:column; gap:8px; font-size: 0.85rem;">
            <div class="legend-item"><span class="attendance-status-badge present">P</span> <span>Present (1.0)</span></div>
            <div class="legend-item"><span class="attendance-status-badge late">L</span> <span>Late (1.0)</span></div>
            <div class="legend-item"><span class="attendance-status-badge halfday">HD</span> <span>Half Day (0.5)</span></div>
            <div class="legend-item"><span class="attendance-status-badge absent">A</span> <span>Absent (0.0)</span></div>
            <div class="legend-item"><span class="attendance-status-badge unmarked">Unmarked</span> <span>Not yet recorded</span></div>
          </div>
        </div>
      </div>
    `;
  } else {
    mainBodyHtml = `
      <div class="attendance-layout" style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 20px;">
        <!-- Insights Panel -->
        <div class="panel-card" style="display: flex; flex-direction: column; gap: 20px;">
          <div class="panel-title-row">
            <h3 class="panel-title">Attendance Insights</h3>
            <span class="panel-subtitle-hi">Term Statistics</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; padding: 15px; background: var(--color-bg-base); border-radius: var(--border-radius-md); border: 1px solid var(--color-border);">
            <!-- Circular Progress SVG -->
            <div style="text-align: center; position: relative; width: 100px; height: 100px;">
              <svg viewBox="0 0 36 36" style="width: 100px; height: 100px;">
                <path stroke="var(--color-border)" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path stroke="var(--color-green)" stroke-width="3" stroke-dasharray="87, 100" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: 700; font-size: 1.2rem; color: var(--color-blue);">87%</div>
            </div>
            <div>
              <h4 style="font-weight:600; margin-bottom: 5px;">Average System Attendance</h4>
              <p style="font-size: 0.8rem; color: var(--color-text-muted);">Current cumulative index for this term. Target is 90%.</p>
            </div>
          </div>

          <div>
            <h4 style="font-weight:600; margin-bottom: 10px;">Subject-wise Attendance Breakdown</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 2px;">
                  <span>Mathematics</span>
                  <strong>92%</strong>
                </div>
                <div style="height: 6px; background: var(--color-blue-light); border-radius: 3px;">
                  <div style="height: 100%; width: 92%; background: var(--color-green); border-radius: 3px;"></div>
                </div>
              </div>
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 2px;">
                  <span>Science</span>
                  <strong>86%</strong>
                </div>
                <div style="height: 6px; background: var(--color-blue-light); border-radius: 3px;">
                  <div style="height: 100%; width: 86%; background: var(--color-green); border-radius: 3px;"></div>
                </div>
              </div>
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 2px;">
                  <span>Languages</span>
                  <strong>89%</strong>
                </div>
                <div style="height: 6px; background: var(--color-blue-light); border-radius: 3px;">
                  <div style="height: 100%; width: 89%; background: var(--color-green); border-radius: 3px;"></div>
                </div>
              </div>
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 2px;">
                  <span>Carnatic Vocal & Veena Recitals</span>
                  <strong>94%</strong>
                </div>
                <div style="height: 6px; background: var(--color-blue-light); border-radius: 3px;">
                  <div style="height: 100%; width: 94%; background: var(--color-green); border-radius: 3px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar Panel -->
        <div class="panel-card">
          <div id="attendance-calendar-container"></div>
        </div>
      </div>
    `;
  }

  parent.innerHTML = subViewToggleHtml + mainBodyHtml;

  if (state.attendanceSubView === "insights") {
    const calendarContainer = document.getElementById("attendance-calendar-container");
    if (calendarContainer) {
      drawCalendarWidget(calendarContainer, false);
    }
  }

  // Bind sub-tabs events
  document.getElementById("subtab-rollcall").addEventListener("click", () => {
    state.attendanceSubView = "rollcall";
    renderAttendanceView(parent);
  });
  document.getElementById("subtab-insights").addEventListener("click", () => {
    state.attendanceSubView = "insights";
    renderAttendanceView(parent);
  });

  if (state.attendanceSubView === "rollcall") {
    // Bind Filter inputs
    const dateInput = document.getElementById("attendance-date-val");
    const classSelect = document.getElementById("attendance-class-val");
    const sectionSelect = document.getElementById("attendance-section-val");
    const searchInput = document.getElementById("attendance-search-name");
    const startRollBtn = document.getElementById("btn-start-rollcall");
    const saveBtn = document.getElementById("btn-save-attendance");
    const updateBtn = document.getElementById("btn-update-rollcall");

    dateInput.addEventListener("change", (e) => {
      state.selectedAttendanceDate = e.target.value;
      // Reload tempAttendance for new date
      state.tempAttendance = {};
      state.students.forEach(student => {
        const key = `${state.selectedAttendanceDate}_${student.id}`;
        if (state.attendance[key]) {
          state.tempAttendance[student.id] = state.attendance[key];
        }
      });
      document.getElementById("attendance-sheet-date").innerText = `Date: ${state.selectedAttendanceDate}`;
      drawAttendanceRegister();
    });

    classSelect.addEventListener("change", (e) => {
      state.selectedAttendanceClass = e.target.value;
      drawAttendanceRegister();
    });

    sectionSelect.addEventListener("change", (e) => {
      state.selectedAttendanceSection = e.target.value;
      drawAttendanceRegister();
    });

    searchInput.addEventListener("input", (e) => {
      state.selectedAttendanceSearch = e.target.value.trim().toLowerCase();
      drawAttendanceRegister();
    });

    startRollBtn.addEventListener("click", () => {
      const filtered = getFilteredStudentsForAttendance();
      let markedCount = 0;
      filtered.forEach(student => {
        if (!state.tempAttendance[student.id]) {
          state.tempAttendance[student.id] = "P";
          markedCount++;
        }
      });
      alertToast(`Roll call started: marked ${markedCount} unmarked students as Present.`);
      drawAttendanceRegister();
    });

    saveBtn.addEventListener("click", () => {
      fetch('/api/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: state.selectedAttendanceDate,
          records: state.tempAttendance
        })
      })
      .then(async res => {
        if (res.ok) {
          alertToast("Attendance saved successfully! Cumulative records updated.");
          await refreshStateData();
          drawAttendanceRegister();
        } else {
          alertToast("⚠️ Failed to save attendance.");
        }
      })
      .catch(err => {
        console.error(err);
        alertToast("⚠️ Server connection error.");
      });
    });

    updateBtn.addEventListener("click", () => {
      state.tempAttendance = {};
      state.students.forEach(student => {
        const key = `${state.selectedAttendanceDate}_${student.id}`;
        if (state.attendance[key]) {
          state.tempAttendance[student.id] = state.attendance[key];
        }
      });
      alertToast("Roll call roster loaded/updated from memory.");
      drawAttendanceRegister();
    });

    drawAttendanceRegister();
  }
}

function drawAttendanceRegister() {
  const tbody = document.getElementById("attendance-rows");
  if (!tbody) return;
  tbody.innerHTML = "";

  const filtered = getFilteredStudentsForAttendance();

  // Calculate summary counts
  let presentCount = 0;
  let lateCount = 0;
  let halfdayCount = 0;
  let absentCount = 0;

  filtered.forEach(student => {
    const status = state.tempAttendance[student.id];
    if (status === "P") presentCount++;
    else if (status === "L") lateCount++;
    else if (status === "HD") halfdayCount++;
    else if (status === "A") absentCount++;
  });

  const classSize = filtered.length;
  const sumOfValues = presentCount * 1.0 + lateCount * 1.0 + halfdayCount * 0.5;
  const totalMarked = presentCount + lateCount + halfdayCount + absentCount;
  const avgPct = totalMarked > 0 ? Math.round((sumOfValues / totalMarked) * 100) : 0;

  // Update summary counts elements
  const elSize = document.getElementById("summary-class-size");
  const elPresent = document.getElementById("summary-present");
  const elLate = document.getElementById("summary-late");
  const elHalfday = document.getElementById("summary-halfday");
  const elAbsent = document.getElementById("summary-absent");
  const elAvg = document.getElementById("summary-avg");

  if (elSize) elSize.innerText = classSize;
  if (elPresent) elPresent.innerText = presentCount;
  if (elLate) elLate.innerText = lateCount;
  if (elHalfday) elHalfday.innerText = halfdayCount;
  if (elAbsent) elAbsent.innerText = absentCount;
  if (elAvg) elAvg.innerText = `${avgPct}%`;

  // Update dynamic sheet subtitle
  const sheetTitle = document.getElementById("attendance-sheet-title");
  if (sheetTitle) {
    let titleText = "Active Roll Call Sheet";
    if (state.selectedAttendanceClass || state.selectedAttendanceSection) {
      const cls = state.selectedAttendanceClass ? `Class ${state.selectedAttendanceClass}` : "";
      const sec = state.selectedAttendanceSection ? `Section ${state.selectedAttendanceSection}` : "";
      titleText += ` - ${cls} ${sec}`.trim();
    } else {
      titleText += " - All Students";
    }
    sheetTitle.innerText = titleText;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:var(--color-text-muted)">No students match the current filters.</td></tr>`;
    return;
  }

  filtered.forEach(student => {
    const tr = document.createElement("tr");

    const status = state.tempAttendance[student.id];
    let statusClass = "unmarked";
    let statusText = "Unmarked";
    if (status === "P") {
      statusClass = "present";
      statusText = "Present";
    } else if (status === "L") {
      statusClass = "late";
      statusText = "Late";
    } else if (status === "HD") {
      statusClass = "halfday";
      statusText = "Half-Day";
    } else if (status === "A") {
      statusClass = "absent";
      statusText = "Absent";
    }

    tr.innerHTML = `
      <td><strong>${student.rollNumber}</strong></td>
      <td>
        <div><strong>${student.firstName} ${student.lastName}</strong></div>
      </td>
      <td>
        <span style="font-weight:500">Class ${student.class} - ${student.section}</span>
      </td>
      <td>
        <span class="attendance-status-badge ${statusClass}">${statusText}</span>
      </td>
      <td style="text-align:right">
        <div style="display:inline-flex; gap:5px;">
          <button class="btn btn-green p-change" data-id="${student.id}" style="padding:4px 8px; font-size:0.75rem">Present</button>
          <button class="btn btn-primary l-change" data-id="${student.id}" style="padding:4px 8px; font-size:0.75rem">Late</button>
          <button class="btn btn-saffron h-change" data-id="${student.id}" style="padding:4px 8px; font-size:0.75rem">Half-Day</button>
          <button class="btn btn-secondary a-change" data-id="${student.id}" style="padding:4px 8px; font-size:0.75rem">Absent</button>
        </div>
      </td>
    `;

    // Row Event listeners
    tr.querySelector(".p-change").addEventListener("click", () => {
      state.tempAttendance[student.id] = "P";
      drawAttendanceRegister();
    });
    tr.querySelector(".l-change").addEventListener("click", () => {
      state.tempAttendance[student.id] = "L";
      drawAttendanceRegister();
    });
    tr.querySelector(".h-change").addEventListener("click", () => {
      state.tempAttendance[student.id] = "HD";
      drawAttendanceRegister();
    });
    tr.querySelector(".a-change").addEventListener("click", () => {
      state.tempAttendance[student.id] = "A";
      drawAttendanceRegister();
    });

    tbody.appendChild(tr);
  });
}

// --- 4. Grades & Reports view ---
function renderGradesView(parent) {
  const headerHtml = `
    <div class="view-header">
      <div class="view-title-area">
        <span class="view-subtitle-devanagari">Marksheet Benchmarks</span>
        <h2>Grades & Academic Comparison Board</h2>
      </div>
    </div>
  `;

  const dashboardGradesHtml = `
    <div class="grades-layout">
      
      <!-- Interactive Grade Table -->
      <div class="panel-card">
        <h3 class="panel-title">Student Merit List & Percentiles</h3>
        <span class="panel-subtitle-hi">Merit Board Directory</span>
        
        <table class="attendance-table" style="margin-top:15px">
          <thead>
            <tr>
              <th>Roll</th>
              <th>Student Name</th>
              <th>CBSE Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${state.students.map(s => `
              <tr>
                <td>${s.rollNumber}</td>
                <td>
                  <strong>${s.firstName} ${s.lastName}</strong>
                </td>
                <td><span style="font-weight:700; color:var(--color-green)">${s.cgpa}</span></td>
                <td>
                  <button class="btn btn-secondary gen-report-btn" data-id="${s.id}" style="padding:6px 12px; font-size:0.75rem">
                    Generate Report Card
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Graph comparison widget -->
      <div class="panel-card">
        <h3 class="panel-title">CBSE vs. State Board Percentile Benchmarking</h3>
        <span class="panel-subtitle-hi">Comparative Analysis Chart</span>
        
        <div class="comparison-chart-simulated">
          <div class="chart-bar-container">
            <span class="bar-val">9.6 CGPA</span>
            <div class="chart-bar student-bar" style="height: 90%;"></div>
            <span class="bar-label">Current Student</span>
          </div>

          <div class="chart-bar-container">
            <span class="bar-val">8.2 CGPA</span>
            <div class="chart-bar state-bar" style="height: 75%;"></div>
            <span class="bar-label">State Board Avg</span>
          </div>

          <div class="chart-bar-container">
            <span class="bar-val">8.9 CGPA</span>
            <div class="chart-bar cbse-bar" style="height: 82%;"></div>
            <span class="bar-label">CBSE National Avg</span>
          </div>
        </div>

        <!-- Schedule Parent Teacher Meeting -->
        <h4 style="margin-top:25px; font-weight:600; padding-bottom:5px; border-bottom:1px solid var(--color-border)">
          📅 Schedule Parent-Teacher Meeting (PTM)
        </h4>
        <form id="ptm-form" style="margin-top:12px; display:flex; flex-direction:column; gap:10px;">
          <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div class="form-group">
              <label for="ptm-student">Select Student</label>
              <select id="ptm-student" required style="width:100%; padding: 8px; border: 1px solid var(--color-border); border-radius:6px;">
                ${state.students.map(s => `<option value="${s.id}">${s.firstName} ${s.lastName}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label for="ptm-date">Proposed Date</label>
              <input type="date" id="ptm-date" min="2026-05-22" required style="width:100%; padding: 8px; border: 1px solid var(--color-border); border-radius:6px;">
            </div>
          </div>
          <button type="submit" class="btn btn-saffron" style="align-self:flex-end">Schedule Meeting</button>
        </form>
      </div>

    </div>
  `;

  parent.innerHTML = headerHtml + dashboardGradesHtml;

  // Bind report card button clicks
  document.querySelectorAll(".gen-report-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const studId = e.target.getAttribute("data-id");
      openReportCard(studId);
    });
  });

  // Bind PTM Scheduler submit
  document.getElementById("ptm-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const studId = document.getElementById("ptm-student").value;
    const dateVal = document.getElementById("ptm-date").value;
    const stud = state.students.find(s => s.id === studId);
    alertToast(`PTM session scheduled with ${stud.parentName} for ${dateVal}. SMS reminder sent to +91 ${stud.parentPhone}`);
  });
}

// Printable Report Card Builder Modal
const reportModal = document.getElementById("receipt-modal"); // Re-using receipt modal frame
const reportArea = document.getElementById("receipt-print-area");

function openReportCard(studentId) {
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;

  reportModal.classList.remove("hidden");
  document.getElementById("receipt-title").innerText = "Academic Performance Report Card";

  reportArea.innerHTML = `
    <div class="report-card-view">
      <div class="report-card-header" style="text-align:center; border-bottom: 2px solid var(--color-blue); padding-bottom:10px; margin-bottom:20px;">
        <h2 class="report-card-title-en" style="margin: 0; color: var(--color-blue);">GURUKUL ACADEMIC HIGH SCHOOL</h2>
        <p style="font-size:0.8rem; letter-spacing:1px; margin-top:4px;">AFFILIATED TO CBSE BOARD NEW DELHI | ESTD 2005</p>
      </div>

      <div class="report-student-meta" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9rem; margin-bottom: 20px;">
        <div><strong>Student Name:</strong> ${student.firstName} ${student.middleName} ${student.lastName}</div>
        <div><strong>Roll Number:</strong> ${student.rollNumber}</div>
        <div><strong>Class & Section:</strong> Class ${student.class} - ${student.section}</div>
        <div><strong>Aadhaar Number:</strong> ${student.aadhaar || "Not Submitted"}</div>
        <div><strong>Parent Name:</strong> ${student.parentName}</div>
      </div>

      <table class="marks-table" style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 0.9rem;">
        <thead>
          <tr style="border-bottom: 2px solid var(--color-blue); text-align: left;">
            <th style="padding: 8px 0;">Subject Code</th>
            <th style="padding: 8px 0;">Subject Name</th>
            <th style="padding: 8px 0; text-align: center;">Trimester Marks (100)</th>
            <th style="padding: 8px 0; text-align: center;">Grade</th>
            <th style="padding: 8px 0; text-align: right;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 8px 0;">MAT-102</td>
            <td style="padding: 8px 0;">Mathematics</td>
            <td style="padding: 8px 0; text-align: center;">94</td>
            <td style="padding: 8px 0; text-align: center;">${student.grades.math}</td>
            <td style="padding: 8px 0; text-align: right; color:var(--color-green); font-weight:600">PASSED</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 8px 0;">SCI-104</td>
            <td style="padding: 8px 0;">Science</td>
            <td style="padding: 8px 0; text-align: center;">86</td>
            <td style="padding: 8px 0; text-align: center;">${student.grades.science}</td>
            <td style="padding: 8px 0; text-align: right; color:var(--color-green); font-weight:600">PASSED</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 8px 0;">ENG-101</td>
            <td style="padding: 8px 0;">English Grammar & Lit.</td>
            <td style="padding: 8px 0; text-align: center;">92</td>
            <td style="padding: 8px 0; text-align: center;">${student.grades.english}</td>
            <td style="padding: 8px 0; text-align: right; color:var(--color-green); font-weight:600">PASSED</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 8px 0;">SST-103</td>
            <td style="padding: 8px 0;">Social Studies</td>
            <td style="padding: 8px 0; text-align: center;">81</td>
            <td style="padding: 8px 0; text-align: center;">${student.grades.sst}</td>
            <td style="padding: 8px 0; text-align: right; color:var(--color-green); font-weight:600">PASSED</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 8px 0;">REG-105</td>
            <td style="padding: 8px 0;">Elective (Sanskrit)</td>
            <td style="padding: 8px 0; text-align: center;">95</td>
            <td style="padding: 8px 0; text-align: center;">${student.grades.regional}</td>
            <td style="padding: 8px 0; text-align: right; color:var(--color-green); font-weight:600">PASSED</td>
          </tr>
        </tbody>
      </table>

      <div style="display:flex; justify-content:space-between; margin-bottom:40px; font-weight:600; font-size: 0.95rem;">
        <span>Cumulative CGPA: ${student.cgpa}</span>
        <span>Average Class Rank: #4 in Section</span>
      </div>

      <div class="report-signatures" style="display: flex; justify-content: space-between; margin-top: 30px; border-top: 1px dashed var(--color-border); padding-top: 15px;">
        <div class="sig-block" style="text-align: center;">
          <br>
          <span style="font-size: 0.8rem; color: var(--color-text-muted);">Class Teacher Signature</span>
        </div>
        <div class="sig-block" style="text-align: center; display: flex; flex-direction: column;">
          <strong>DR Adarsh Babu</strong>
          <span style="font-size: 0.8rem; color: var(--color-text-muted);">Principal / Administrator</span>
        </div>
      </div>
    </div>
  `;
}

// Report Modal closures
document.getElementById("close-receipt-modal").addEventListener("click", () => reportModal.classList.add("hidden"));
document.getElementById("close-receipt-btn").addEventListener("click", () => reportModal.classList.add("hidden"));
document.getElementById("print-receipt-btn").addEventListener("click", () => {
  window.print();
});

// --- 5. Timetable / Schedule View ---
function renderTimetableView(parent) {
  const headerHtml = `
    <div class="view-header">
      <div class="view-title-area">
        <span class="view-subtitle-devanagari">Active Curriculums</span>
        <h2>Weekly Academic & Cultural Schedule</h2>
      </div>
      <div class="view-actions">
        <span class="badge" style="background-color: var(--color-green-light); color: var(--color-green); font-weight:700; padding:8px 12px; border-radius:8px;">
          Timezone: Indian Standard Time (GMT+5:30)
        </span>
      </div>
    </div>
  `;

  // Standard Weekly Schedule (8:00 AM - 2:00 PM)
  const scheduleHtml = `
    <div class="panel-card">
      <div class="timetable-grid">
        <span class="timetable-header-cell">Time</span>
        <span class="timetable-header-cell">Monday</span>
        <span class="timetable-header-cell">Tuesday</span>
        <span class="timetable-header-cell">Wednesday</span>
        <span class="timetable-header-cell">Thursday</span>
        <span class="timetable-header-cell">Friday</span>

        <!-- Period 1 -->
        <span class="timetable-time-cell">08:00 AM - 08:40 AM</span>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">YOGA-01</span>
          <span class="slot-subject-name">Yoga & Mindfulness</span>
          <span class="slot-teacher">Acharya Dev</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">YOGA-01</span>
          <span class="slot-subject-name">Yoga & Mindfulness</span>
          <span class="slot-teacher">Acharya Dev</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">YOGA-01</span>
          <span class="slot-subject-name">Yoga & Mindfulness</span>
          <span class="slot-teacher">Acharya Dev</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">YOGA-01</span>
          <span class="slot-subject-name">Yoga & Mindfulness</span>
          <span class="slot-teacher">Acharya Dev</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">YOGA-01</span>
          <span class="slot-subject-name">Yoga & Mindfulness</span>
          <span class="slot-teacher">Acharya Dev</span>
        </div>

        <!-- Period 2 -->
        <span class="timetable-time-cell">08:45 AM - 09:40 AM</span>
        <div class="timetable-slot">
          <span class="slot-subject-code">MAT-12</span>
          <span class="slot-subject-name">Mathematics</span>
          <span class="slot-teacher">Dr. A. Sen</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">SCI-12</span>
          <span class="slot-subject-name">Physics Recitation</span>
          <span class="slot-teacher">Prof. Bose</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">MAT-12</span>
          <span class="slot-subject-name">Mathematics</span>
          <span class="slot-teacher">Dr. A. Sen</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">SCI-12</span>
          <span class="slot-subject-name">Physics Recitation</span>
          <span class="slot-teacher">Prof. Bose</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">ENG-12</span>
          <span class="slot-subject-name">English Grammar</span>
          <span class="slot-teacher">Mrs. Joshi</span>
        </div>

        <!-- Period 3 -->
        <span class="timetable-time-cell">09:40 AM - 10:35 AM</span>
        <div class="timetable-slot">
          <span class="slot-subject-code">SAN-12</span>
          <span class="slot-subject-name">Sanskrit Elective</span>
          <span class="slot-teacher">Shastri Ji</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">MAT-12</span>
          <span class="slot-subject-name">Mathematics</span>
          <span class="slot-teacher">Dr. A. Sen</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">SAN-12</span>
          <span class="slot-subject-name">Sanskrit Elective</span>
          <span class="slot-teacher">Shastri Ji</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">MAT-12</span>
          <span class="slot-subject-name">Mathematics</span>
          <span class="slot-teacher">Dr. A. Sen</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">SCI-12</span>
          <span class="slot-subject-name">Chemistry Lab</span>
          <span class="slot-teacher">Dr. Khurana</span>
        </div>

        <!-- Recess Break (Mid-Day Meal) -->
        <span class="timetable-time-cell">10:35 AM - 11:10 AM</span>
        <div class="timetable-slot break-slot">
          🍱 RECESS | Mid-Day Meal Break
        </div>

        <!-- Period 4 -->
        <span class="timetable-time-cell">11:10 AM - 12:00 PM</span>
        <div class="timetable-slot">
          <span class="slot-subject-code">SST-12</span>
          <span class="slot-subject-name">Social Studies</span>
          <span class="slot-teacher">Mr. Dixit</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">ENG-12</span>
          <span class="slot-subject-name">English Literature</span>
          <span class="slot-teacher">Mrs. Joshi</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">SST-12</span>
          <span class="slot-subject-name">Social Studies</span>
          <span class="slot-teacher">Mr. Dixit</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">ENG-12</span>
          <span class="slot-subject-name">English Literature</span>
          <span class="slot-teacher">Mrs. Joshi</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">REG-12</span>
          <span class="slot-subject-name">Hindi Literature</span>
          <span class="slot-teacher">Kavi Ji</span>
        </div>

        <!-- Period 5 (Co-curricular activities) -->
        <span class="timetable-time-cell">12:05 PM - 01:10 PM</span>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">CARN-12</span>
          <span class="slot-subject-name">Carnatic Vocal (Varnam & Kritis)</span>
          <span class="slot-teacher">Mrs. R. Vedavalli</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">BHAR-12</span>
          <span class="slot-subject-name">Bharatanatyam / Nattuvangam</span>
          <span class="slot-teacher">Guru Radha</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">VEEN-12</span>
          <span class="slot-subject-name">Veena Strings Recital</span>
          <span class="slot-teacher">Sri Ananthakrishnan</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">BHAR-12</span>
          <span class="slot-subject-name">Bharatanatyam / Nattuvangam</span>
          <span class="slot-teacher">Guru Radha</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">MARG-12</span>
          <span class="slot-subject-name">Margazhi Assembly & Thiruppavai Recitation</span>
          <span class="slot-teacher">All Gurus</span>
        </div>

        <!-- Period 6 (Sports / Exam slot) -->
        <span class="timetable-time-cell">01:10 PM - 02:00 PM</span>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">SPT-01</span>
          <span class="slot-subject-name">Kabaddi / Kho-Kho Field Practice</span>
          <span class="slot-teacher">Coach Rawat</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">EXM-09</span>
          <span class="slot-subject-name">Weekly Board Prep Test</span>
          <span class="slot-teacher">Invigilators</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">SPT-01</span>
          <span class="slot-subject-name">Kabaddi / Kho-Kho Field Practice</span>
          <span class="slot-teacher">Coach Rawat</span>
        </div>
        <div class="timetable-slot">
          <span class="slot-subject-code">EXM-09</span>
          <span class="slot-subject-name">Weekly Board Prep Test</span>
          <span class="slot-teacher">Invigilators</span>
        </div>
        <div class="timetable-slot co-curricular">
          <span class="slot-subject-code">SPT-02</span>
          <span class="slot-subject-name">Yoga & Prānāyāma</span>
          <span class="slot-teacher">Acharya Dev</span>
        </div>
      </div>
    </div>
  `;

  parent.innerHTML = headerHtml + scheduleHtml;
}

// --- 6. Fee Management Module ---
function renderFeesView(parent) {
  const headerHtml = `
    <div class="view-header">
      <div class="view-title-area">
        <span class="view-subtitle-devanagari">Finance & Accounts Ledger</span>
        <h2>Fees Management Portal</h2>
      </div>
      <div class="view-actions">
        <span class="badge" style="background-color: var(--color-saffron-light); color: var(--color-saffron); font-weight:700; padding:8px 12px; border-radius:8px;">
          Financial Year: 2026-27
        </span>
      </div>
    </div>
  `;

  const debtors = state.students.filter(s => s.pendingFees > 0);

  let dueCardsHtml = "";
  if (debtors.length === 0) {
    dueCardsHtml = `<div style="grid-column: span 2; text-align:center; padding:30px; background:var(--color-bg-card); border-radius:var(--border-radius-md)">All student fees accounts are fully paid. Jai Hind!</div>`;
  } else {
    debtors.forEach(st => {
      dueCardsHtml += `
        <div class="fee-due-card due-warning-alert" style="display:flex; justify-content:space-between; align-items:center; padding: 15px; border-radius: 12px; background: var(--color-bg-card); border: 1px solid var(--color-border); margin-bottom:12px;">
          <div class="fee-due-info">
            <span class="fee-due-title" style="font-weight: 600; font-size:0.95rem; color: var(--color-blue);">Quarterly Tuition Fees: ${st.firstName} ${st.lastName}</span>
            <div style="font-size:0.75rem; color:var(--color-text-muted); margin-top:2px;">Roll No: ${st.rollNumber} | Parent: ${st.parentName}</div>
            <div class="fee-due-amount" style="font-size: 1.25rem; font-weight:700; color: var(--color-saffron); margin-top:5px;">₹${st.pendingFees.toLocaleString('en-IN')}</div>
            <div class="fee-due-date" style="font-size:0.75rem; color:var(--color-text-muted); margin-top:2px;">Due Date: 10th June 2026 (Pay before Monsoon Break)</div>
          </div>
          <button class="btn btn-saffron pay-btn" data-id="${st.id}" data-amount="${st.pendingFees}">
            💸 Pay via Digital UPI
          </button>
        </div>
      `;
    });
  }

  const feesDashboardHtml = `
    <div class="fees-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 20px;">
      <!-- Outstanding invoices -->
      <div style="display:flex; flex-direction:column; gap:5px;">
        <h3 style="font-size:1.1rem; color:var(--color-blue); margin-bottom:10px;">Pending Fee Invoices</h3>
        ${dueCardsHtml}
      </div>

      <!-- Scholarship & GST Calculator -->
      <div class="panel-card">
        <h3 class="panel-title">Merit Scholarship Schemes</h3>
        <span class="panel-subtitle-hi">Exemptions Active</span>
        
        <div style="margin-top:15px; display:flex; flex-direction:column; gap:12px;">
          <div style="background-color:var(--color-green-light); padding:12px; border-radius:var(--border-radius-md); border-left:4px solid var(--color-green);">
            <strong style="color:var(--color-green)">1. Swami Vivekananda Scholarship (A1 Achievers)</strong>
            <p style="font-size:0.8rem; color:var(--color-text-main); margin-top:4px;">Students with A1 grade averages receive 50% Tuition Waiver. Applied automatically.</p>
          </div>
          
          <div style="background-color:var(--color-blue-light); padding:12px; border-radius:var(--border-radius-md); border-left:4px solid var(--color-blue);">
            <strong style="color:var(--color-blue)">2. National Merit Board Stipend</strong>
            <p style="font-size:0.8rem; color:var(--color-text-main); margin-top:4px;">Stipend of ₹2,500/month disbursed to top percentile CBSE students.</p>
          </div>
        </div>

        <h4 style="margin-top:25px; font-weight:600; padding-bottom:5px; border-bottom:1px solid var(--color-border)">
          Tax Invoice Details (GST Standard)
        </h4>
        <div style="margin-top:10px; font-size:0.8rem; color:var(--color-text-muted);">
          <div class="student-field-row" style="display:flex; justify-content:space-between; margin-bottom:5px;"><span>GST rate:</span><span>18% (9% CGST + 9% SGST)</span></div>
          <div class="student-field-row" style="display:flex; justify-content:space-between; margin-bottom:5px;"><span>Education Cess:</span><span>Exempted under Section 10(23C)</span></div>
          <div class="student-field-row" style="display:flex; justify-content:space-between; margin-bottom:5px;"><span>Institution SAC Code:</span><span>999299 (Education Services)</span></div>
        </div>
      </div>

      <!-- Payment History Ledger -->
      <div class="panel-card" style="grid-column: span 2; margin-top: 20px;">
        <h3 class="panel-title">Payment History Ledger</h3>
        <div style="overflow-x: auto; margin-top: 15px;">
          <table class="attendance-table" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 2px solid var(--color-blue); text-align: left;">
                <th style="padding: 8px;">Invoice No</th>
                <th style="padding: 8px;">Student Name</th>
                <th style="padding: 8px; text-align: center;">Roll Number</th>
                <th style="padding: 8px;">Fee Category</th>
                <th style="padding: 8px; text-align: right;">Amount Paid</th>
                <th style="padding: 8px; text-align: center;">Payment Date</th>
                <th style="padding: 8px; text-align: center;">Status</th>
                <th style="text-align: right; padding: 8px;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${(state.paymentHistory || []).map((item, idx) => `
                <tr style="border-bottom: 1px solid var(--color-border);">
                  <td style="padding: 8px;"><strong>${item.invoiceNo}</strong></td>
                  <td style="padding: 8px;">${item.studentName}</td>
                  <td style="padding: 8px; text-align: center;">${item.rollNumber}</td>
                  <td style="padding: 8px;">${item.feeType}</td>
                  <td style="padding: 8px; text-align: right;"><strong>₹${item.amountPaid.toLocaleString('en-IN')}.00</strong></td>
                  <td style="padding: 8px; text-align: center;">${item.paymentDate}</td>
                  <td style="padding: 8px; text-align: center;"><span class="attendance-status-badge present" style="text-transform: uppercase;">${item.status}</span></td>
                  <td style="text-align: right; padding: 8px;">
                    <button class="btn btn-secondary print-hist-btn" data-index="${idx}" style="padding: 4px 8px; font-size: 0.75rem;">
                      📄 Receipt
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  parent.innerHTML = headerHtml + feesDashboardHtml;

  // Bind pay buttons triggers
  document.querySelectorAll(".pay-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const studId = e.target.getAttribute("data-id");
      const amount = parseInt(e.target.getAttribute("data-amount"));
      openPaymentGate(studId, amount);
    });
  });

  // Bind receipt buttons triggers
  document.querySelectorAll(".print-hist-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.getAttribute("data-index"));
      const item = state.paymentHistory[idx];
      if (item) {
        openInvoiceReceipt(item);
      }
    });
  });
}

// UPI Payment Modal simulation
const payModal = document.getElementById("payment-modal");
let currentPayeeStudentId = null;

function openPaymentGate(studentId, rawAmount) {
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;

  currentPayeeStudentId = studentId;
  payModal.classList.remove("hidden");

  document.getElementById("pay-student-name").innerText = `${student.firstName} ${student.lastName}`;
  document.getElementById("pay-fee-type").innerText = "Term Tuition Fees (SAC: 999299)";
  document.getElementById("pay-amount").innerText = `₹${rawAmount.toLocaleString('en-IN')}.00`;
}

// Bind UPI Confirmations
document.getElementById("close-payment-modal").addEventListener("click", () => payModal.classList.add("hidden"));
document.getElementById("cancel-payment-btn").addEventListener("click", () => payModal.classList.add("hidden"));

document.getElementById("confirm-payment-btn").addEventListener("click", () => {
  if (!currentPayeeStudentId) return;

  fetch('/api/fees/pay', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId: currentPayeeStudentId })
  })
  .then(async res => {
    if (res.ok) {
      const data = await res.json();
      payModal.classList.add("hidden");
      alertToast(`UPI payment approved! Printing tax invoice receipt...`);
      await refreshStateData();
      
      // Open Receipt immediately
      openInvoiceReceipt(data.receipt);
      
      if (state.currentView === "fees") {
        renderFeesView(document.getElementById("main-content"));
      }
    } else {
      const errData = await res.json();
      alertToast(`⚠️ Payment failed: ${errData.message || 'unknown error'}`);
    }
  })
  .catch(err => {
    console.error(err);
    alertToast("⚠️ Server connection error.");
  });
});

function openInvoiceReceipt(historyItem) {
  const receiptModal = document.getElementById("receipt-modal");
  const receiptPrintArea = document.getElementById("receipt-print-area");
  
  receiptModal.classList.remove("hidden");
  document.getElementById("receipt-title").innerText = "Official GST Tax Invoice & Receipt";

  const amount = historyItem.amountPaid;
  const base = Math.round(amount / 1.18);
  const cgst = Math.round((amount - base) / 2);
  const sgst = amount - base - cgst;

  receiptPrintArea.innerHTML = `
    <div style="font-family:monospace; line-height:1.4; border:1px solid #000; padding:20px;">
      <div style="text-align:center; font-weight:bold; font-size:1.1rem; border-bottom:1px dashed #000; padding-bottom:10px; margin-bottom:10px;">
        GURUKUL ACADEMIC HIGH SCHOOL
        <div style="font-size:0.75rem; font-weight:normal;">Sector 5, Salt Lake City, Kolkata - 700091</div>
        <div style="font-size:0.75rem; font-weight:normal;">GSTIN: 19AAATG2026F1Z8 | SAC: 999299</div>
      </div>
      
      <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.8rem;">
        <div>
          <strong>Invoice No:</strong> ${historyItem.invoiceNo}<br>
          <strong>Date:</strong> ${historyItem.paymentDate}
        </div>
        <div style="text-align:right">
          <strong>Student:</strong> ${historyItem.studentName}<br>
          <strong>Roll Number:</strong> ${historyItem.rollNumber}
        </div>
      </div>

      <div style="border-top:1px dashed #000; border-bottom:1px dashed #000; padding:8px 0; margin-bottom:10px; font-size:0.8rem;">
        <table style="width:100%; text-align:left; border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:1px solid #000;">
              <th>Description</th>
              <th style="text-align:right">Base (₹)</th>
              <th style="text-align:right">GST (18%)</th>
              <th style="text-align:right">Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Term Tuition Fee</td>
              <td style="text-align:right">₹${base.toLocaleString('en-IN')}</td>
              <td style="text-align:right">₹${(cgst + sgst).toLocaleString('en-IN')}</td>
              <td style="text-align:right">₹${amount.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="display:flex; flex-direction:column; align-items:flex-end; font-size:0.8rem; margin-bottom:15px;">
        <div>Taxable Value: ₹${base.toLocaleString('en-IN')}.00</div>
        <div>CGST @ 9%: ₹${cgst.toLocaleString('en-IN')}.00</div>
        <div>SGST @ 9%: ₹${sgst.toLocaleString('en-IN')}.00</div>
        <div style="font-weight:bold; border-top:1px solid #000; padding-top:4px; margin-top:4px;">Grand Total: ₹${amount.toLocaleString('en-IN')}.00</div>
      </div>

      <div style="font-size:0.75rem; border-top:1px dashed #000; padding-top:10px;">
        <strong>Transaction Status:</strong> SUCCESSFUL (BHIM UPI)<br>
        <strong>UPI Ref / Bank Tx ID:</strong> ${historyItem.txId}<br>
        <strong>Payment Gateway:</strong> SBI UPI PAY MERCHANT SERVICES
      </div>

      <div style="text-align:center; margin-top:20px; font-size:0.8rem; border-top:1px solid #000; padding-top:10px;">
        * This is a computer-generated GST tax receipt. No signature required. *
      </div>
    </div>
  `;
}

// ==========================================================================
// DYNAMIC CALENDAR WIDGET BUILDER
// ==========================================================================
function drawCalendarWidget(container, isDashboard) {
  if (!container) return;
  
  const year = state.calendarYear;
  const month = state.calendarMonth; // 0-indexed
  
  const monthNamesEn = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthNameEn = monthNamesEn[month];
  const headerTitle = `${monthNameEn} ${year}`;

  // Calculate days
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  
  const currentLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  let gridHtml = "";
  // Add weekday labels
  currentLabels.forEach(label => {
    gridHtml += `<span class="calendar-day-label">${label}</span>`;
  });
  
  // Empty slots
  for (let i = 0; i < firstDayIndex; i++) {
    gridHtml += `<span class="calendar-cell empty"></span>`;
  }
  
  // Build days
  for (let day = 1; day <= totalDays; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // Check if holiday
    const holidayMatch = holidays.find(h => h.date === dateString);
    
    // Check if today (May 22, 2026)
    const isToday = (year === 2026 && month === 4 && day === 22);
    
    // Check if exam day (May 28-29, 2026)
    const isExamDay = (year === 2026 && month === 4 && (day === 28 || day === 29));
    
    let cellClass = "calendar-cell";
    let titleAttr = "";
    
    if (isToday) {
      cellClass += " today";
    }
    
    if (holidayMatch) {
      cellClass += " holiday";
      titleAttr = `title="${holidayMatch.name}"`;
    } else if (isExamDay) {
      cellClass += " exam-day";
      titleAttr = `title="Term Examination"`;
    }
    
    gridHtml += `<span class="${cellClass}" ${titleAttr}>${day}</span>`;
  }
  
  // Legend HTML
  let legendHtml = "";
  if (isDashboard) {
    legendHtml = `
      <div class="calendar-legend">
        <div class="legend-item"><span class="legend-color today"></span><span>Today</span></div>
        <div class="legend-item"><span class="legend-color holiday"></span><span>Festival / Holiday</span></div>
        <div class="legend-item"><span class="legend-color exam"></span><span>Examinations</span></div>
      </div>
    `;
  } else {
    legendHtml = `
      <div style="margin-top: 20px; font-size: 0.75rem; border-top: 1px solid var(--color-border); padding-top: 10px; display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="display: inline-block; width: 10px; height: 10px; background-color: #FFEFE6; border: 1px solid var(--color-saffron); border-radius: 2px;"></span>
          <span>Academic Holidays</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="display: inline-block; width: 10px; height: 10px; background-color: var(--color-blue-light); border: 1px solid var(--color-border); border-radius: 2px;"></span>
          <span>Sundays (Rest Days)</span>
        </div>
      </div>
    `;
  }
  
  const containerHtml = `
    <div class="calendar-widget">
      <div class="calendar-header" style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid var(--color-border); margin-bottom: 15px;">
        <button class="calendar-nav-btn prev-month-btn" style="background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--color-blue)">◀</button>
        <strong>${headerTitle}</strong>
        <button class="calendar-nav-btn next-month-btn" style="background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--color-blue)">▶</button>
      </div>
      <div class="calendar-grid">
        ${gridHtml}
      </div>
      ${legendHtml}
    </div>
  `;
  
  container.innerHTML = containerHtml;
  
  // Bind navigation buttons
  container.querySelector(".prev-month-btn").addEventListener("click", () => {
    state.calendarMonth--;
    if (state.calendarMonth < 0) {
      state.calendarMonth = 11;
      state.calendarYear--;
    }
    drawCalendarWidget(container, isDashboard);
  });
  
  container.querySelector(".next-month-btn").addEventListener("click", () => {
    state.calendarMonth++;
    if (state.calendarMonth > 11) {
      state.calendarMonth = 0;
      state.calendarYear++;
    }
    drawCalendarWidget(container, isDashboard);
  });
}

// Alert Toast notifications
function alertToast(msg) {
  let toast = document.getElementById("toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-msg";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "var(--color-blue)";
    toast.style.color = "#FFFFFF";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "var(--border-radius-md)";
    toast.style.boxShadow = "var(--shadow-lg)";
    toast.style.zIndex = "9999";
    toast.style.borderLeft = "4px solid var(--color-saffron)";
    toast.style.fontFamily = "var(--font-english)";
    toast.style.fontSize = "0.9rem";
    toast.style.transition = "opacity 0.3s ease-out";
    document.body.appendChild(toast);
  }
  
  toast.innerText = msg;
  toast.style.opacity = "1";
  
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 3500);
}

// ==========================================================================
// E2E DIAGNOSTICS TEST RUNNER ENGINE
// ==========================================================================
const diagModal = document.getElementById("diagnostics-modal");
const startBtn = document.getElementById("start-tests-btn");
const resetBtn = document.getElementById("reset-tests-btn");
const closeDiagBtn = document.getElementById("close-diagnostics-btn");
const closeDiagModal = document.getElementById("close-diagnostics-modal");
const testProgressBarContainer = document.getElementById("test-progress-bar-container");
const testProgressBar = document.getElementById("test-progress-bar");
const testCasesList = document.getElementById("test-cases-list");
const testSummaryText = document.getElementById("test-summary-text");

function openDiagnosticsModal() {
  diagModal.classList.remove("hidden");
  resetDiagnosticsRunner();
}

closeDiagBtn.addEventListener("click", () => diagModal.classList.add("hidden"));
closeDiagModal.addEventListener("click", () => diagModal.classList.add("hidden"));

const testCases = [
  { id: "nav", name: "Sidebar Navigation Links Validation", description: "Verifies clicking sidebar items loads correct view hash." },
  { id: "dashboard", name: "Dashboard Page Content & Widgets", description: "Checks dashboard statistics, holidays, calendar, and weather." },
  { id: "students", name: "Students Directory & Roster Loading", description: "Ensures students render in grids and details report opens." },
  { id: "form", name: "Student Enrollment Form & Validations", description: "Simulates student registry inputs, regex validation, and saves." },
  { id: "attendance", name: "Attendance Roll Call & Calendar", description: "Checks marking present/absent states and sub-tab calendar widget." },
  { id: "grades", name: "Grades comparisons & PTM Scheduler", description: "Verifies CGPA merit rankings and schedules parent-teacher meetings." },
  { id: "timetable", name: "Class Timetable & Co-Curricular slots", description: "Ensures sports, Yoga, and Carnatic music slots render." },
  { id: "fees", name: "Fees Management & UPI Receipt checkout", description: "Simulates paying bills via UPI and verifies tax receipt PDF popups." },
  { id: "search", name: "Dynamic Global Search Redirection", description: "Verifies searching automatically redirects to registry view." },
  { id: "a11y", name: "A11y Controls & Font Scaling", description: "Toggles contrast theme variables and scales text size classes." }
];

function resetDiagnosticsRunner() {
  startBtn.disabled = false;
  resetBtn.disabled = true;
  testProgressBarContainer.style.display = "none";
  testProgressBar.style.width = "0%";
  testSummaryText.innerText = `Ready to run ${testCases.length} test suites.`;
  testSummaryText.style.color = "var(--color-text-muted)";
  
  testCasesList.innerHTML = "";
  testCases.forEach(tc => {
    const item = document.createElement("div");
    item.className = "test-case-item";
    item.id = `tc-${tc.id}`;
    item.innerHTML = `
      <div class="test-case-row">
        <div>
          <strong style="color:var(--color-blue); font-size:0.9rem;">${tc.name}</strong>
          <div style="font-size:0.75rem; color:var(--color-text-muted); margin-top:2px;">${tc.description}</div>
        </div>
        <span class="test-status-badge pending" id="tc-badge-${tc.id}">Pending</span>
      </div>
      <div class="test-error-log" id="tc-error-${tc.id}" style="display:none;"></div>
    `;
    testCasesList.appendChild(item);
  });
}

resetBtn.addEventListener("click", resetDiagnosticsRunner);
startBtn.addEventListener("click", runE2ETestsSuite);

async function runE2ETestsSuite() {
  startBtn.disabled = true;
  resetBtn.disabled = true;
  testProgressBarContainer.style.display = "block";
  testProgressBar.style.width = "0%";
  testSummaryText.innerText = "Running E2E tests...";
  testSummaryText.style.color = "var(--color-blue)";

  // Cache initial state for rollback restoration
  const initialView = state.currentView;
  const initialTheme = state.theme;
  const initialTextSize = state.textSize;
  const originalStudentsJSON = JSON.stringify(state.students);
  const originalHistoryJSON = JSON.stringify(state.paymentHistory);

  let passedCount = 0;
  
  const updateBadge = (id, status, errorMsg = "") => {
    const badge = document.getElementById(`tc-badge-${id}`);
    const item = document.getElementById(`tc-${id}`);
    const errorLog = document.getElementById(`tc-error-${id}`);
    
    badge.className = `test-status-badge ${status}`;
    badge.innerText = status;
    
    item.className = `test-case-item ${status}`;
    
    if (status === "failed" && errorMsg) {
      errorLog.style.display = "block";
      errorLog.innerText = `✖ Error: ${errorMsg}`;
    } else {
      errorLog.style.display = "none";
    }
  };

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  // Run Test 1: Navigation
  try {
    updateBadge("nav", "running");
    await delay(600);
    const navItems = ["dashboard", "students", "attendance", "grades", "timetable", "fees"];
    for (const view of navItems) {
      navigateTo(view);
      await delay(500);
      if (state.currentView !== view) throw new Error(`Navigation failed for view: ${view}`);
      if (window.location.hash !== `#${view}`) throw new Error(`Hash failed to update to: #${view}`);
      const btn = document.getElementById(`nav-${view}`);
      if (btn && !btn.classList.contains("active")) throw new Error(`Active class not added to sidebar link: ${view}`);
    }
    updateBadge("nav", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("nav", "failed", err.message);
  }
  testProgressBar.style.width = "10%";

  // Run Test 2: Dashboard Content
  try {
    updateBadge("dashboard", "running");
    await delay(600);
    navigateTo("dashboard");
    await delay(500);
    const container = document.getElementById("dashboard-calendar-container");
    if (!container || !container.querySelector(".calendar-widget")) throw new Error("Dashboard calendar widget failed to draw.");
    const weather = document.getElementById("weather-city-selector");
    if (!weather) throw new Error("Weather monitor widget is missing.");
    const totalEnrolledSpan = document.querySelector(".stats-card.saffron-border .stats-value");
    if (!totalEnrolledSpan || !totalEnrolledSpan.innerText.includes("Students")) throw new Error("Student enrollment metric is missing/incorrect.");
    updateBadge("dashboard", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("dashboard", "failed", err.message);
  }
  testProgressBar.style.width = "20%";

  // Run Test 3: Students Registry
  try {
    updateBadge("students", "running");
    await delay(600);
    navigateTo("students");
    await delay(500);
    const grid = document.getElementById("students-grid-container");
    if (!grid || grid.querySelectorAll(".student-card").length === 0) throw new Error("Students grid fails to load.");
    
    // View student details (opens report card modal)
    const viewBtn = grid.querySelector(".student-card .view-btn");
    if (!viewBtn) throw new Error("Student details view button is missing.");
    viewBtn.click();
    await delay(400);
    
    const rModal = document.getElementById("receipt-modal");
    if (rModal.classList.contains("hidden")) throw new Error("Report card modal failed to open.");
    
    const closeBtn = document.getElementById("close-receipt-modal");
    if (closeBtn) closeBtn.click();
    await delay(200);
    if (!rModal.classList.contains("hidden")) throw new Error("Report card modal failed to close.");
    
    updateBadge("students", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("students", "failed", err.message);
  }
  testProgressBar.style.width = "30%";

  // Run Test 4: Student Form Registration
  try {
    updateBadge("form", "running");
    await delay(600);
    navigateTo("students");
    await delay(500);
    
    const addBtn = document.getElementById("add-student-trigger");
    if (!addBtn) throw new Error("Enroll Student button is missing.");
    addBtn.click();
    await delay(300);
    
    const stModal = document.getElementById("student-modal");
    if (stModal.classList.contains("hidden")) throw new Error("Enroll Student modal failed to open.");
    
    // Populate form data
    document.getElementById("student-first-name").value = "Vikram";
    document.getElementById("student-middle-name").value = "K.";
    document.getElementById("student-last-name").value = "Venkatesh";
    document.getElementById("student-class").value = "12";
    document.getElementById("student-section").value = "A";
    document.getElementById("student-aadhaar").value = "1122 3344 5566";
    document.getElementById("student-parent-name").value = "Krishna Venkatesh";
    document.getElementById("student-parent-phone").value = "9845012345";
    document.getElementById("student-address").value = "Mylapore Car St, Chennai, TN";
    
    // Submit form
    const stForm = document.getElementById("student-form");
    stForm.dispatchEvent(new Event("submit"));
    await delay(400);
    
    if (!stModal.classList.contains("hidden")) throw new Error("Student modal failed to close on successful submit.");
    
    // Check database
    const newlyAdded = state.students.find(s => s.firstName === "Vikram" && s.lastName === "Venkatesh");
    if (!newlyAdded) throw new Error("New student record not found in application state database.");
    
    updateBadge("form", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("form", "failed", err.message);
  }
  testProgressBar.style.width = "40%";

  // Run Test 5: Attendance Roll Call
  try {
    updateBadge("attendance", "running");
    await delay(600);
    navigateTo("attendance");
    await delay(500);
    
    const tbody = document.getElementById("attendance-rows");
    if (!tbody || tbody.querySelectorAll("tr").length === 0) throw new Error("Attendance roll call table is empty.");
    
    // Simulate updating student attendance
    const presentBtn = tbody.querySelector("tr .btn-green");
    if (!presentBtn) throw new Error("Present action button is missing in attendance list.");
    presentBtn.click();
    await delay(300);
    
    // Toggle subtab
    const insightsTab = document.getElementById("subtab-insights");
    if (!insightsTab) throw new Error("Attendance Insights tab is missing.");
    insightsTab.click();
    await delay(300);
    
    const calendarContainer = document.getElementById("attendance-calendar-container");
    if (!calendarContainer || !calendarContainer.querySelector(".calendar-widget")) throw new Error("Attendance Insights calendar widget failed to draw.");
    
    updateBadge("attendance", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("attendance", "failed", err.message);
  }
  testProgressBar.style.width = "50%";

  // Run Test 6: Grades & PTM
  try {
    updateBadge("grades", "running");
    await delay(600);
    navigateTo("grades");
    await delay(500);
    
    const meritTable = document.querySelector(".grades-layout table tbody");
    if (!meritTable || meritTable.querySelectorAll("tr").length === 0) throw new Error("Merit list comparison table is empty.");
    
    // Test PTM form scheduling
    const select = document.getElementById("ptm-student");
    if (!select) throw new Error("PTM Student selection input is missing.");
    select.selectedIndex = 0;
    
    const dateInput = document.getElementById("ptm-date");
    if (!dateInput) throw new Error("PTM date input is missing.");
    dateInput.value = "2026-06-15";
    
    const ptmForm = document.getElementById("ptm-form");
    ptmForm.dispatchEvent(new Event("submit"));
    await delay(400);
    
    updateBadge("grades", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("grades", "failed", err.message);
  }
  testProgressBar.style.width = "60%";

  // Run Test 7: Timetable View
  try {
    updateBadge("timetable", "running");
    await delay(600);
    navigateTo("timetable");
    await delay(500);
    
    const slots = document.querySelectorAll(".timetable-slot");
    if (slots.length === 0) throw new Error("Timetable grid contains no classes/slots.");
    
    let hasCoCurricular = false;
    slots.forEach(slot => {
      if (slot.classList.contains("co-curricular")) hasCoCurricular = true;
    });
    if (!hasCoCurricular) throw new Error("Timetable is missing standard Indian co-curricular slots (Yoga, Carnatic music, etc.).");
    
    updateBadge("timetable", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("timetable", "failed", err.message);
  }
  testProgressBar.style.width = "70%";

  // Run Test 8: Fees UPI Checkout & Receipt
  try {
    updateBadge("fees", "running");
    await delay(600);
    navigateTo("fees");
    await delay(500);
    
    const payBtn = document.querySelector(".fees-grid .pay-btn");
    if (!payBtn) throw new Error("No outstanding payment button found.");
    payBtn.click();
    await delay(400);
    
    const pModal = document.getElementById("payment-modal");
    if (pModal.classList.contains("hidden")) throw new Error("UPI payment gateway modal failed to open.");
    
    const confirmBtn = document.getElementById("confirm-payment-btn");
    if (!confirmBtn) throw new Error("Simulate Payment Success button is missing.");
    confirmBtn.click();
    await delay(500);
    
    if (!pModal.classList.contains("hidden")) throw new Error("UPI payment gateway modal failed to close.");
    
    // Receipt Modal Verification
    const receiptModal = document.getElementById("receipt-modal");
    if (receiptModal.classList.contains("hidden")) throw new Error("GST Tax Invoice receipt modal failed to load immediately.");
    
    const closeBtn = document.getElementById("close-receipt-modal");
    if (closeBtn) closeBtn.click();
    await delay(200);
    
    updateBadge("fees", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("fees", "failed", err.message);
  }
  testProgressBar.style.width = "80%";

  // Run Test 9: Search Functionality
  try {
    updateBadge("search", "running");
    await delay(600);
    navigateTo("dashboard");
    await delay(500);
    
    const globalSearch = document.getElementById("global-search");
    if (!globalSearch) throw new Error("Global Search bar input is missing.");
    
    // Simulate user typing in header search
    globalSearch.value = "Ananya";
    globalSearch.dispatchEvent(new Event("input"));
    await delay(500);
    
    if (state.currentView !== "students") throw new Error("Search input failed to auto-redirect user to the Students directory.");
    
    const grid = document.getElementById("students-grid-container");
    const visibleCards = grid.querySelectorAll(".student-card");
    if (visibleCards.length !== 1) throw new Error(`Search filtering failed. Expected 1 card, found ${visibleCards.length}.`);
    
    // Reset search
    globalSearch.value = "";
    globalSearch.dispatchEvent(new Event("input"));
    await delay(500);
    
    updateBadge("search", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("search", "failed", err.message);
  }
  testProgressBar.style.width = "90%";

  // Run Test 10: A11y Themes & Font Scaling
  try {
    updateBadge("a11y", "running");
    await delay(600);
    
    // High contrast toggle test
    const contrastToggle = document.getElementById("contrast-toggle");
    if (!contrastToggle) throw new Error("Accessibility high-contrast checkbox is missing.");
    
    contrastToggle.checked = true;
    contrastToggle.dispatchEvent(new Event("change"));
    await delay(200);
    if (document.documentElement.getAttribute("data-theme") !== "high-contrast") throw new Error("High-contrast theme style attribute not set on HTML element.");
    
    contrastToggle.checked = false;
    contrastToggle.dispatchEvent(new Event("change"));
    await delay(200);
    if (document.documentElement.getAttribute("data-theme") === "high-contrast") throw new Error("Theme style attribute failed to revert to default.");
    
    // Font scale test
    const incBtn = document.getElementById("font-inc");
    if (!incBtn) throw new Error("Accessibility increase font button is missing.");
    incBtn.click();
    await delay(200);
    if (!document.body.classList.contains("a11y-text-lg")) throw new Error("Increase font class was not applied to document body.");
    
    const normalBtn = document.getElementById("font-normal");
    if (!normalBtn) throw new Error("Accessibility normal font button is missing.");
    normalBtn.click();
    await delay(200);
    if (document.body.classList.contains("a11y-text-lg")) throw new Error("Normal font reset failed to clean body classes.");
    
    updateBadge("a11y", "passed");
    passedCount++;
  } catch (err) {
    updateBadge("a11y", "failed", err.message);
  }
  testProgressBar.style.width = "100%";

  // Post-Execution Cleanup & Rollbacks
  await delay(800);
  
  // Restore database arrays from backup to maintain zero footprint
  state.students = JSON.parse(originalStudentsJSON);
  state.paymentHistory = JSON.parse(originalHistoryJSON);
  localStorage.setItem("gurukul_students", JSON.stringify(state.students));
  localStorage.setItem("gurukul_history", JSON.stringify(state.paymentHistory));
  
  // Revert UI settings
  navigateTo(initialView);
  state.theme = initialTheme;
  document.documentElement.setAttribute("data-theme", initialTheme);
  const contrastCheck = document.getElementById("contrast-toggle");
  if (contrastCheck) contrastCheck.checked = (initialTheme === "high-contrast");
  
  changeFontSize(initialTextSize);
  
  // Update footer results summary
  resetBtn.disabled = false;
  if (passedCount === testCases.length) {
    testSummaryText.innerText = `SUCCESS: All ${passedCount}/${testCases.length} test suites passed!`;
    testSummaryText.style.color = "var(--color-green)";
  } else {
    testSummaryText.innerText = `FAILURE: ${passedCount}/${testCases.length} passed, ${testCases.length - passedCount} failed. Check error logs.`;
    testSummaryText.style.color = "var(--color-danger)";
  }
}

