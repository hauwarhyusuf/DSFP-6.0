// Data models and LocalStorage persistence engine

const STORAGE_KEYS = {
  JOBS: 'jobtrack_jobs_v1',
  APPLICATIONS: 'jobtrack_applications_v1',
  SAVED_JOBS: 'jobtrack_saved_jobs_v1',
  CURRENT_USER: 'jobtrack_current_user_v1',
  NOTIFICATIONS: 'jobtrack_notifications_v1',
  SETTINGS: 'jobtrack_settings_v1'
};

const SEED_JOBS = [
  {
    id: "job_1",
    title: "Senior Full Stack Engineer",
    company: "CloudScale Technologies",
    department: "Engineering",
    type: "Full-time",
    workplace: "Remote",
    location: "San Francisco, CA (or US Remote)",
    experience: "Senior (5+ yrs)",
    salaryMin: 145000,
    salaryMax: 180000,
    currency: "USD",
    status: "Active",
    description: "CloudScale is seeking a talented Senior Full Stack Engineer to lead the design and scaling of our distributed workflow platform. You will work closely with product managers and architects to deliver high-throughput, low-latency microservices and intuitive frontend interfaces.",
    responsibilities: [
      "Architect and implement scalable web applications using TypeScript, React, and Node.js.",
      "Design resilient REST and GraphQL APIs with PostgreSQL and Redis caching.",
      "Collaborate with DevOps to streamline CI/CD pipelines and Kubernetes workloads.",
      "Mentor junior and mid-level software engineers through code reviews and pairing."
    ],
    requirements: [
      "5+ years of production experience in modern web development.",
      "Deep understanding of JavaScript/TypeScript, React, Node.js, and relational databases.",
      "Experience with cloud infrastructure (AWS or GCP) and Docker.",
      "Strong communication and collaborative problem-solving skills."
    ],
    benefits: [
      "100% Employer-covered Health, Dental, and Vision insurance.",
      "401(k) with 5% immediate company match.",
      "Flexible PTO policy and mandatory 2-week annual recharge.",
      "$2,500 annual home office setup and learning stipend."
    ],
    postedAt: "2026-11-02",
    deadline: "2026-12-20",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: "job_2",
    title: "Product Designer (UI/UX)",
    company: "Aura Creative Labs",
    department: "Design",
    type: "Full-time",
    workplace: "Hybrid",
    location: "New York, NY",
    experience: "Mid-Level (3-5 yrs)",
    salaryMin: 110000,
    salaryMax: 135000,
    currency: "USD",
    status: "Active",
    description: "We are looking for a visual and systems-minded Product Designer to craft elegant user journeys and cohesive design systems for our flagship enterprise suite.",
    responsibilities: [
      "Create high-fidelity wireframes, interactive prototypes, and specs in Figma.",
      "Conduct user research interviews and usability testing to validate design concepts.",
      "Maintain and evolve our multi-brand design system with engineering partners.",
      "Advocate for user accessibility (WCAG AA) and intuitive UX best practices."
    ],
    requirements: [
      "3+ years of UX/UI design experience in B2B or SaaS products.",
      "Strong portfolio demonstrating user-centric process and micro-interactions.",
      "Mastery of Figma, design tokens, and prototyping tools.",
      "Basic understanding of HTML/CSS capabilities and design system implementation."
    ],
    benefits: [
      "Comprehensive medical, dental, and vision coverage.",
      "Annual conference ticket & travel stipend.",
      "Hybrid work schedule: 2 days in Chelsea office, 3 days remote.",
      "Wellness allowance and commuter transit benefits."
    ],
    postedAt: "2026-11-05",
    deadline: "2026-12-10",
    tags: ["Figma", "UI/UX", "Design Systems", "Prototyping", "User Research"]
  },
  {
    id: "job_3",
    title: "DevOps & Cloud Infrastructure Engineer",
    company: "BluePulse Networks",
    department: "Engineering",
    type: "Full-time",
    workplace: "Remote",
    location: "Austin, TX (Remote)",
    experience: "Senior (4+ yrs)",
    salaryMin: 140000,
    salaryMax: 170000,
    currency: "USD",
    status: "Active",
    description: "BluePulse is hiring a DevOps Engineer to own our cloud infrastructure, automated deployments, monitoring, and zero-downtime scalability across multi-region environments.",
    responsibilities: [
      "Manage infrastructure as code using Terraform and Ansible.",
      "Build and optimize CI/CD pipelines in GitHub Actions.",
      "Implement robust observability stacks using Prometheus, Grafana, and OpenTelemetry.",
      "Ensure SOC2 compliance and automated security scanning."
    ],
    requirements: [
      "4+ years experience operating Kubernetes clusters and AWS environments in production.",
      "Proficient in Terraform, bash scripting, and Python or Go.",
      "Strong knowledge of network security, VPCs, and TLS certificates.",
      "Proven track record reducing build times and increasing reliability."
    ],
    benefits: [
      "Equity grants in high-growth Series B startup.",
      "Top-tier medical, dental, vision plans.",
      "Remote ergonomics grant ($1,500).",
      "Quarterly team offsites in major tech hubs."
    ],
    postedAt: "2026-11-06",
    deadline: "2026-12-31",
    tags: ["Kubernetes", "AWS", "Terraform", "CI/CD", "Docker"]
  },
  {
    id: "job_4",
    title: "Senior Product Manager",
    company: "Horizon Health Tech",
    department: "Product",
    type: "Full-time",
    workplace: "On-site",
    location: "Boston, MA",
    experience: "Senior (5+ yrs)",
    salaryMin: 150000,
    salaryMax: 185000,
    currency: "USD",
    status: "Active",
    description: "Horizon Health Tech is modernizing clinical workflows. We need an empathetic, data-driven Product Manager to lead our patient engagement and telehealth solutions.",
    responsibilities: [
      "Define product strategy, roadmap, and sprint priorities with clinical stakeholders.",
      "Transform complex healthcare compliance needs into clear user stories.",
      "Track product metrics, engagement funnels, and retention KPIs.",
      "Coordinate product launches with marketing, clinical operations, and sales."
    ],
    requirements: [
      "5+ years in product management, preferably with health-tech or regulated SaaS.",
      "Strong analytical mindset (SQL, Mixpanel, Amplitude).",
      "Exceptional communication and cross-functional leadership skills."
    ],
    benefits: [
      "Full family healthcare coverage.",
      "Generous parental leave (16 weeks paid).",
      "401(k) retirement plan with employer contribution.",
      "Gym membership and on-site healthy lunches."
    ],
    postedAt: "2026-11-08",
    deadline: "2026-12-15",
    tags: ["Product Strategy", "Agile", "HealthTech", "Analytics", "SaaS"]
  },
  {
    id: "job_5",
    title: "Content Marketing & Social Lead",
    company: "EchoMedia Agency",
    department: "Marketing",
    type: "Part-time",
    workplace: "Remote",
    location: "Chicago, IL (Remote)",
    experience: "Mid-Level (2-4 yrs)",
    salaryMin: 45000,
    salaryMax: 60000,
    currency: "USD",
    status: "Active",
    description: "EchoMedia is looking for a creative, agile Content Marketing Specialist to drive our brand voice, thought leadership articles, case studies, and social media campaigns.",
    responsibilities: [
      "Produce engaging blogs, whitepapers, newsletters, and social snippets.",
      "Manage our editorial calendar and distribute content across LinkedIn and X.",
      "Analyze organic traffic performance using Google Analytics 4 and SEMrush."
    ],
    requirements: [
      "2-4 years of digital marketing and copywriting experience.",
      "Excellent portfolio of published articles and creative campaigns.",
      "Familiarity with SEO keyword research and content distribution."
    ],
    benefits: [
      "Flexible working hours (20-25 hrs/week).",
      "Monthly home internet and subscription allowance.",
      "Opportunity to transition to full-time."
    ],
    postedAt: "2026-11-09",
    deadline: "2026-12-05",
    tags: ["Copywriting", "SEO", "Content Marketing", "Social Media"]
  },
  {
    id: "job_6",
    title: "Junior Data Analyst",
    company: "Apex Analytics",
    department: "Data & BI",
    type: "Full-time",
    workplace: "Hybrid",
    location: "Seattle, WA",
    experience: "Entry-Level (1-2 yrs)",
    salaryMin: 75000,
    salaryMax: 90000,
    currency: "USD",
    status: "Active",
    description: "Kickstart your data career with Apex Analytics! You will clean, model, and visualize business datasets to help executives make strategic data-backed decisions.",
    responsibilities: [
      "Write SQL queries to extract and aggregate business data.",
      "Build dynamic dashboards in PowerBI and Tableau.",
      "Collaborate with marketing and finance to automate weekly reporting."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Statistics, Mathematics, or related field.",
      "Proficiency with SQL and Excel; basic Python or R is a plus.",
      "Curious mindset and strong desire to learn."
    ],
    benefits: [
      "Mentorship program with Principal Data Scientists.",
      "Full health, dental, and vision insurance.",
      "Tuition reimbursement for certifications.",
      "Paid transit pass."
    ],
    postedAt: "2026-11-10",
    deadline: "2026-12-25",
    tags: ["SQL", "PowerBI", "Python", "Data Visualization", "Excel"]
  }
];

const SEED_APPLICATIONS = [
  {
    id: "app_1",
    jobId: "job_1",
    candidateName: "Alex Morgan",
    candidateEmail: "alex.morgan@example.com",
    candidatePhone: "+1 (555) 234-5678",
    candidateLocation: "Austin, TX",
    linkedin: "https://linkedin.com/in/alexmorgan-dev",
    portfolio: "https://alexmorgan.dev",
    experienceYears: 6,
    coverLetter: "I have been designing and scaling high-performance web applications for over six years. At my current role at Stripe-partner startup, I led the migration of our monolith to distributed services while boosting frontend page speed by 42%. CloudScale's mission aligns perfectly with my passions.",
    resumeFileName: "Alex_Morgan_Resume_2026.pdf",
    resumeSize: "148 KB",
    appliedAt: "2026-11-03T14:22:00Z",
    status: "Interview", // Applied, Screening, Interview, Offer, Rejected
    rating: 5,
    adminNotes: [
      { id: "note_1", author: "Sarah Jenkins (Recruiter)", text: "Impressive portfolio and deep React/Node background. Tech screen went exceptionally well.", date: "2026-11-04T10:15:00Z" },
      { id: "note_2", author: "David Chen (Engineering Manager)", text: "Very strong systems design answers. Scheduling final round technical interview.", date: "2026-11-06T16:45:00Z" }
    ],
    interviewDetails: {
      scheduledDate: "2026-11-16T15:00",
      interviewer: "David Chen & Architecture Panel",
      meetingLink: "https://meet.google.com/sky-lead-dev",
      type: "System Design & Architecture Deep Dive"
    }
  },
  {
    id: "app_2",
    jobId: "job_1",
    candidateName: "Jordan Vance",
    candidateEmail: "jordan.vance@techmail.io",
    candidatePhone: "+1 (555) 789-0123",
    candidateLocation: "Denver, CO",
    linkedin: "https://linkedin.com/in/jordanvance",
    portfolio: "https://github.com/jvance-dev",
    experienceYears: 5,
    coverLetter: "Excited about CloudScale! I bring 5 years of full-stack engineering with strong expertise in PostgreSQL query optimization and modern TypeScript interfaces.",
    resumeFileName: "Jordan_Vance_FullStack_CV.pdf",
    resumeSize: "135 KB",
    appliedAt: "2026-11-04T09:15:00Z",
    status: "Screening",
    rating: 4,
    adminNotes: [
      { id: "note_3", author: "Sarah Jenkins (Recruiter)", text: "Good match on TypeScript and database work. Reached out for 30-min intro call.", date: "2026-11-05T11:00:00Z" }
    ]
  },
  {
    id: "app_3",
    jobId: "job_2",
    candidateName: "Elena Rostova",
    candidateEmail: "elena.design@creativestudio.com",
    candidatePhone: "+1 (555) 456-7890",
    candidateLocation: "Brooklyn, NY",
    linkedin: "https://linkedin.com/in/elenarostova-ux",
    portfolio: "https://elenarostova.design",
    experienceYears: 4,
    coverLetter: "I've spent the past four years leading design system revamps for enterprise SaaS products. I love turning tangled user workflows into delightful, accessible experiences.",
    resumeFileName: "Elena_Rostova_Design_Portfolio.pdf",
    resumeSize: "2.1 MB",
    appliedAt: "2026-11-07T11:45:00Z",
    status: "Offer",
    rating: 5,
    adminNotes: [
      { id: "note_4", author: "Sarah Jenkins (Recruiter)", text: "Superb portfolio. Hiring team voted unanimous thumbs up on design challenge.", date: "2026-11-09T14:10:00Z" },
      { id: "note_5", author: "Marcus Brody (VP Design)", text: "Offer letter generated at $130,000 + equity. Awaiting candidate signature.", date: "2026-11-11T09:30:00Z" }
    ],
    interviewDetails: {
      scheduledDate: "2026-11-09T13:00",
      interviewer: "Marcus Brody (VP Design)",
      meetingLink: "https://meet.google.com/aura-design-meet",
      type: "Design Challenge Presentation"
    }
  },
  {
    id: "app_4",
    jobId: "job_3",
    candidateName: "Marcus Thorne",
    candidateEmail: "marcus.thorne@cloudops.net",
    candidatePhone: "+1 (555) 321-6540",
    candidateLocation: "Dallas, TX",
    linkedin: "https://linkedin.com/in/mthorne-devops",
    portfolio: "https://github.com/marcusthorne",
    experienceYears: 7,
    coverLetter: "Certified AWS Solutions Architect & CKA with extensive background migrating legacy workloads into GitOps-driven Kubernetes environments.",
    resumeFileName: "Marcus_Thorne_DevOps_CV.pdf",
    resumeSize: "112 KB",
    appliedAt: "2026-11-08T15:30:00Z",
    status: "Applied",
    rating: 4,
    adminNotes: []
  },
  {
    id: "app_5",
    jobId: "job_6",
    candidateName: "Maya Lin",
    candidateEmail: "maya.lin.data@gmail.com",
    candidatePhone: "+1 (555) 678-1234",
    candidateLocation: "Seattle, WA",
    linkedin: "https://linkedin.com/in/mayalindata",
    portfolio: "https://mayalin.github.io/portfolio",
    experienceYears: 2,
    coverLetter: "Recent Master's graduate in Data Science with 1.5 years experience building interactive PowerBI dashboards and ETL pipelines for e-commerce metrics.",
    resumeFileName: "Maya_Lin_Data_Analyst.pdf",
    resumeSize: "164 KB",
    appliedAt: "2026-11-10T16:00:00Z",
    status: "Applied",
    rating: 3,
    adminNotes: []
  }
];

const SEED_NOTIFICATIONS = [
  {
    id: "notif_1",
    type: "status_change",
    recipientRole: "candidate",
    recipientEmail: "alex.morgan@example.com",
    title: "Application Status Update: Senior Full Stack Engineer",
    message: "Your application at CloudScale Technologies has moved to the 'Interview' stage! Check your application tracker for meeting details.",
    timestamp: "2026-11-06T16:50:00Z",
    read: false,
    linkId: "app_1"
  },
  {
    id: "notif_2",
    type: "new_application",
    recipientRole: "admin",
    title: "New Application Received",
    message: "Maya Lin just applied for Junior Data Analyst at Apex Analytics.",
    timestamp: "2026-11-10T16:02:00Z",
    read: false,
    linkId: "app_5"
  }
];

// LocalStorage helpers
export const DataStore = {
  // Initialization
  init() {
    if (!localStorage.getItem(STORAGE_KEYS.JOBS)) {
      localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(SEED_JOBS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.APPLICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(SEED_APPLICATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SAVED_JOBS)) {
      localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(["job_1", "job_3"]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(SEED_NOTIFICATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) {
      // Default to Candidate view, but can switch anytime
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify({
        role: "candidate", // 'admin' | 'candidate'
        name: "Alex Morgan",
        email: "alex.morgan@example.com",
        phone: "+1 (555) 234-5678",
        location: "Austin, TX",
        linkedin: "https://linkedin.com/in/alexmorgan-dev",
        portfolio: "https://alexmorgan.dev"
      }));
    }
  },

  resetDefaults() {
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(SEED_JOBS));
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(SEED_APPLICATIONS));
    localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(["job_1", "job_3"]));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(SEED_NOTIFICATIONS));
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify({
      role: "candidate",
      name: "Alex Morgan",
      email: "alex.morgan@example.com",
      phone: "+1 (555) 234-5678",
      location: "Austin, TX",
      linkedin: "https://linkedin.com/in/alexmorgan-dev",
      portfolio: "https://alexmorgan.dev"
    }));
  },

  // Jobs
  getJobs() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.JOBS)) || [];
    } catch (e) {
      return [];
    }
  },

  getJobById(id) {
    const jobs = this.getJobs();
    return jobs.find(j => j.id === id) || null;
  },

  saveJob(jobData) {
    const jobs = this.getJobs();
    if (jobData.id) {
      // update
      const index = jobs.findIndex(j => j.id === jobData.id);
      if (index !== -1) {
        jobs[index] = { ...jobs[index], ...jobData, updatedAt: new Date().toISOString() };
      } else {
        jobs.unshift(jobData);
      }
    } else {
      // create new
      const newJob = {
        ...jobData,
        id: "job_" + Date.now(),
        postedAt: new Date().toISOString().split('T')[0],
        status: jobData.status || "Active"
      };
      jobs.unshift(newJob);
      jobData.id = newJob.id;
    }
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(jobs));
    return jobData;
  },

  deleteJob(id) {
    let jobs = this.getJobs();
    jobs = jobs.filter(j => j.id !== id);
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(jobs));
  },

  // Applications
  getApplications() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS)) || [];
    } catch (e) {
      return [];
    }
  },

  getApplicationById(id) {
    const apps = this.getApplications();
    return apps.find(a => a.id === id) || null;
  },

  getApplicationsByJob(jobId) {
    const apps = this.getApplications();
    return apps.filter(a => a.jobId === jobId);
  },

  getApplicationsByUserEmail(email) {
    const apps = this.getApplications();
    return apps.filter(a => (a.candidateEmail || "").toLowerCase() === (email || "").toLowerCase());
  },

  saveApplication(applicationData) {
    const apps = this.getApplications();
    if (applicationData.id) {
      const idx = apps.findIndex(a => a.id === applicationData.id);
      if (idx !== -1) {
        apps[idx] = { ...apps[idx], ...applicationData };
      } else {
        apps.unshift(applicationData);
      }
    } else {
      const newApp = {
        ...applicationData,
        id: "app_" + Date.now(),
        appliedAt: new Date().toISOString(),
        status: applicationData.status || "Applied",
        rating: applicationData.rating || 3,
        adminNotes: applicationData.adminNotes || []
      };
      apps.unshift(newApp);
      applicationData = newApp;

      // Add admin notification
      const job = this.getJobById(applicationData.jobId);
      this.addNotification({
        type: "new_application",
        recipientRole: "admin",
        title: "New Application Received",
        message: `${newApp.candidateName} applied for ${job ? job.title : 'a position'}.`,
        linkId: newApp.id
      });
    }
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));
    return applicationData;
  },

  updateApplicationStatus(appId, newStatus, scheduledInterview = null) {
    const apps = this.getApplications();
    const app = apps.find(a => a.id === appId);
    if (!app) return null;

    const oldStatus = app.status;
    app.status = newStatus;
    if (scheduledInterview) {
      app.interviewDetails = scheduledInterview;
    }

    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));

    // Notify candidate
    const job = this.getJobById(app.jobId);
    this.addNotification({
      type: "status_change",
      recipientRole: "candidate",
      recipientEmail: app.candidateEmail,
      title: `Application Updated: ${job ? job.title : 'Job'}`,
      message: `Your application status was updated from ${oldStatus} to ${newStatus}.`,
      linkId: app.id
    });

    return app;
  },

  addAdminNote(appId, author, text) {
    const apps = this.getApplications();
    const app = apps.find(a => a.id === appId);
    if (!app) return null;

    if (!app.adminNotes) app.adminNotes = [];
    const newNote = {
      id: "note_" + Date.now(),
      author: author || "Admin",
      text,
      date: new Date().toISOString()
    };
    app.adminNotes.push(newNote);
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));
    return newNote;
  },

  updateRating(appId, rating) {
    const apps = this.getApplications();
    const app = apps.find(a => a.id === appId);
    if (app) {
      app.rating = rating;
      localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));
    }
  },

  deleteApplication(appId) {
    let apps = this.getApplications();
    apps = apps.filter(a => a.id !== appId);
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));
  },

  // Saved Jobs (Candidate Bookmarks)
  getSavedJobIds() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_JOBS)) || [];
    } catch (e) {
      return [];
    }
  },

  toggleSaveJob(jobId) {
    let saved = this.getSavedJobIds();
    const isSaved = saved.includes(jobId);
    if (isSaved) {
      saved = saved.filter(id => id !== jobId);
    } else {
      saved.push(jobId);
    }
    localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(saved));
    return !isSaved;
  },

  // Current User / Role State
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) || {
        role: "candidate",
        name: "Alex Morgan",
        email: "alex.morgan@example.com"
      };
    } catch (e) {
      return { role: "candidate", name: "Alex Morgan", email: "alex.morgan@example.com" };
    }
  },

  setCurrentUser(userData) {
    const current = this.getCurrentUser();
    const updated = { ...current, ...userData };
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(updated));
    return updated;
  },

  switchRole(role) {
    const user = this.getCurrentUser();
    user.role = role;
    if (role === 'admin') {
      user.name = "Sarah Jenkins";
      user.email = "sarah.jenkins@company.com";
      user.title = "Talent Acquisition Lead";
    } else {
      user.name = "Alex Morgan";
      user.email = "alex.morgan@example.com";
      user.title = "Frontend Developer";
    }
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    return user;
  },

  // Notifications
  getNotifications() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) || [];
    } catch (e) {
      return [];
    }
  },

  addNotification(notif) {
    const list = this.getNotifications();
    const newNotif = {
      id: "notif_" + Date.now(),
      timestamp: new Date().toISOString(),
      read: false,
      ...notif
    };
    list.unshift(newNotif);
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(list));
    return newNotif;
  },

  markNotificationsRead() {
    const list = this.getNotifications();
    list.forEach(n => n.read = true);
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(list));
  },

  clearNotifications() {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify([]));
  }
};

