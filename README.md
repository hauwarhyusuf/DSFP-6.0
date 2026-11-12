# 💼 SkyTrack — Job Tracking Application

A modern, responsive web application for job tracking, featuring role-based workflows for both **Admins (Recruiters / Hiring Managers)** and **Candidates (Job Seekers)**, styled in a sleek **light blue** design theme.

---

## 🎨 Theme & Design
- **Primary Color**: Light Blue (`#0284c7`, `#0ea5e9`, `#38bdf8`, `#e0f2fe`, `#f0f9ff`)
- Clean, accessible typography with high-contrast text and subtle sky accents.
- Responsive design tailored for desktops, laptops, and tablets.
- Zero external runtime or CDN dependency required — runs completely offline or on any browser.

---

## 🚀 Key Features

### 👤 Candidate / Job Seeker View
1. **Browse & Search Jobs**:
   - Live search by job title, skills, tags, or company.
   - Filter by location, workplace (Remote, Hybrid, On-site), and job type (Full-time, Part-time, Contract).
   - Filter pills for departments: *Engineering, Design, Product, Marketing, Data & BI, Remote Only*.
   - Sorting by newest first, highest salary, and alphabetical.
2. **Detailed Job View**:
   - Inspect role description, key responsibilities, requirements, benefits, and salary range.
3. **Job Application Submission**:
   - Quick & comprehensive application form.
   - Attach resume documents (PDF, DOCX, TXT) via drag-and-drop file upload.
   - Experience, portfolio links, and personalized pitch/cover letter.
   - Automatic duplicate submission prevention for the same position.
4. **Interactive "My Applications" Tracker**:
   - 4-stage visual progress stepper (`1. Applied` ➔ `2. Screening` ➔ `3. Interview` ➔ `4. Offer`).
   - Alerts for scheduled interviews with interview time, interviewers, and one-click "Join Video Meeting" link.
   - Application reference ID and withdrawal option.
5. **Saved Jobs**:
   - Bookmark jobs with a single click to review and apply later.

### 🛡️ Admin / Recruiter View
1. **Overview Dashboard & Analytics**:
   - Real-time KPI metric cards: *Active Openings, Total Candidate Applications, Interviews Scheduled, Offers Extended*.
   - Latest applications review table with quick evaluation triggers.
2. **Job Postings Management**:
   - Create, edit, publish, pause, or close job requisitions.
   - Real-time applicant count badges per job.
   - Full requisition specs: department, workplace policy, salary range (min-max), skill tags, and perks.
3. **Applicant Tracking System (ATS) Pipeline**:
   - Interactive 5-column Kanban board:
     1. **Applied** (New)
     2. **Screening**
     3. **Interview**
     4. **Offer**
     5. **Archived / Rejected**
   - Drag-and-drop candidate cards directly between hiring stages.
   - 1-click stage advancement buttons on cards.
   - Filter candidates by specific job opening or view all requisitions.
4. **Candidate Review Drawer**:
   - View full candidate dossier: contact details, experience, links, and cover letter.
   - Download/view uploaded resume.
   - Interactive hiring rating (1 to 5 stars).
   - Built-in Interview Scheduler (date/time, meeting link, interviewer names) which synchronizes directly with the candidate's tracker.
   - Internal recruiter notes log with timestamps and author signatures.

### 🔔 Notifications & Role Switching
- Seamless toggle between **Candidate View** and **Admin / Recruiter View** in the top navigation bar.
- Notification bell with unread indicator alerting candidates of stage updates/interviews and alerting recruiters of new incoming applications.
- "Reset Demo Data" button to restore fresh sample data at any time.

---

## 🏃 How to Run the Application

### Option 1: Direct in Browser (No Server Needed)
Simply double-click or open [index.html](file:///c:/Users/user/Desktop/DSFP6.0/index.html) in Google Chrome, Microsoft Edge, Firefox, or any modern web browser.

### Option 2: Run Local Server via PowerShell
Double-click `start.bat` or run the following command in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
Then navigate to: **`http://localhost:3000/`**

---

## 📁 File Structure
```
DSFP6.0/
├── index.html          # Core single-page application layout and modals
├── css/
│   └── styles.css      # Light blue design system and animations
├── js/
│   ├── app.js          # Core app controller, router, event listeners
│   ├── data.js         # LocalStorage persistence and initial seed data
│   └── icons.js        # Self-contained SVG icon definitions
├── serve.ps1           # Lightweight .NET HttpListener local server
├── start.bat           # 1-click startup batch script
└── README.md           # Documentation
```

