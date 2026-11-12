import { DataStore } from './data.js';
import { Icons } from './icons.js';

// Application State
const state = {
  currentRole: 'candidate', // 'candidate' | 'admin'
  currentTab: 'tabBrowseJobs',
  searchQuery: '',
  locationQuery: '',
  selectedType: '',
  selectedDept: '',
  sortBy: 'newest',
  pipelineFilterJobId: '',
  candidateAppFilter: 'all',
  selectedResumeFile: null
};

// DOM Elements Cache
const DOM = {
  // Nav & Role
  btnRoleCandidate: document.getElementById('btnRoleCandidate'),
  btnRoleAdmin: document.getElementById('btnRoleAdmin'),
  candidateNavTabs: document.getElementById('candidateNavTabs'),
  adminNavTabs: document.getElementById('adminNavTabs'),
  navPostJobBtn: document.getElementById('navPostJobBtn'),
  navAvatar: document.getElementById('navAvatar'),
  navUserName: document.getElementById('navUserName'),
  navUserRole: document.getElementById('navUserRole'),
  brandLogoBtn: document.getElementById('brandLogoBtn'),
  myAppsBadge: document.getElementById('myAppsBadge'),
  savedJobsBadge: document.getElementById('savedJobsBadge'),
  adminJobsBadge: document.getElementById('adminJobsBadge'),
  adminCandidatesBadge: document.getElementById('adminCandidatesBadge'),
  resetDataBtn: document.getElementById('resetDataBtn'),
  notifBtn: document.getElementById('notifBtn'),
  notifDot: document.getElementById('notifDot'),
  notifDropdown: document.getElementById('notifDropdown'),
  notifListContainer: document.getElementById('notifListContainer'),
  markReadBtn: document.getElementById('markReadBtn'),

  // Candidate Browse Elements
  jobSearchInput: document.getElementById('jobSearchInput'),
  jobLocationInput: document.getElementById('jobLocationInput'),
  jobTypeFilter: document.getElementById('jobTypeFilter'),
  btnSearchFilter: document.getElementById('btnSearchFilter'),
  deptFilterPills: document.getElementById('deptFilterPills'),
  jobsSortSelect: document.getElementById('jobsSortSelect'),
  jobsCountText: document.getElementById('jobsCountText'),
  jobListingsGrid: document.getElementById('jobListingsGrid'),

  // Candidate Applications & Saved
  candidateApplicationsList: document.getElementById('candidateApplicationsList'),
  candidateAppFilterGroup: document.getElementById('candidateAppFilterGroup'),
  savedJobsGrid: document.getElementById('savedJobsGrid'),

  // Admin Dashboard Elements
  adminCreateJobQuickBtn: document.getElementById('adminCreateJobQuickBtn'),
  statActiveJobs: document.getElementById('statActiveJobs'),
  statTotalApps: document.getElementById('statTotalApps'),
  statInterviews: document.getElementById('statInterviews'),
  statOffers: document.getElementById('statOffers'),
  dashboardRecentAppsTable: document.getElementById('dashboardRecentAppsTable'),
  viewAllCandidatesPipelineBtn: document.getElementById('viewAllCandidatesPipelineBtn'),

  // Admin Jobs Management
  btnAdminOpenCreateJobModal: document.getElementById('btnAdminOpenCreateJobModal'),
  adminJobsTableBody: document.getElementById('adminJobsTableBody'),

  // Admin Pipeline
  pipelineJobSelectFilter: document.getElementById('pipelineJobSelectFilter'),
  atsKanbanBoard: document.getElementById('atsKanbanBoard'),

  // Modals
  jobDetailModal: document.getElementById('jobDetailModal'),
  detailModalLogo: document.getElementById('detailModalLogo'),
  detailModalTitle: document.getElementById('detailModalTitle'),
  detailModalCompany: document.getElementById('detailModalCompany'),
  detailModalMetaRow: document.getElementById('detailModalMetaRow'),
  detailModalDesc: document.getElementById('detailModalDesc'),
  detailModalResponsibilities: document.getElementById('detailModalResponsibilities'),
  detailModalRequirements: document.getElementById('detailModalRequirements'),
  detailModalBenefits: document.getElementById('detailModalBenefits'),
  detailModalApplyBtn: document.getElementById('detailModalApplyBtn'),

  applyModal: document.getElementById('applyModal'),
  applyJobForm: document.getElementById('applyJobForm'),
  applyJobId: document.getElementById('applyJobId'),
  applyModalJobSubtitle: document.getElementById('applyModalJobSubtitle'),
  applyFullName: document.getElementById('applyFullName'),
  applyEmail: document.getElementById('applyEmail'),
  applyPhone: document.getElementById('applyPhone'),
  applyLocation: document.getElementById('applyLocation'),
  applyLinkedin: document.getElementById('applyLinkedin'),
  applyPortfolio: document.getElementById('applyPortfolio'),
  applyExperience: document.getElementById('applyExperience'),
  applyCoverLetter: document.getElementById('applyCoverLetter'),
  resumeDropzone: document.getElementById('resumeDropzone'),
  resumeFileInput: document.getElementById('resumeFileInput'),
  dropzoneText: document.getElementById('dropzoneText'),

  postJobModal: document.getElementById('postJobModal'),
  postJobForm: document.getElementById('postJobForm'),
  adminJobEditId: document.getElementById('adminJobEditId'),
  postJobModalTitle: document.getElementById('postJobModalTitle'),
  postJobTitle: document.getElementById('postJobTitle'),
  postJobCompany: document.getElementById('postJobCompany'),
  postJobDepartment: document.getElementById('postJobDepartment'),
  postJobType: document.getElementById('postJobType'),
  postJobWorkplace: document.getElementById('postJobWorkplace'),
  postJobLocation: document.getElementById('postJobLocation'),
  postJobExperience: document.getElementById('postJobExperience'),
  postJobStatus: document.getElementById('postJobStatus'),
  postJobSalaryMin: document.getElementById('postJobSalaryMin'),
  postJobSalaryMax: document.getElementById('postJobSalaryMax'),
  postJobTags: document.getElementById('postJobTags'),
  postJobDesc: document.getElementById('postJobDesc'),
  postJobResponsibilities: document.getElementById('postJobResponsibilities'),
  postJobRequirements: document.getElementById('postJobRequirements'),
  postJobBenefits: document.getElementById('postJobBenefits'),

  candidateReviewModal: document.getElementById('candidateReviewModal'),
  reviewModalAppId: document.getElementById('reviewModalAppId'),
  reviewModalAvatar: document.getElementById('reviewModalAvatar'),
  reviewModalName: document.getElementById('reviewModalName'),
  reviewModalJobTitle: document.getElementById('reviewModalJobTitle'),
  reviewModalStageSelect: document.getElementById('reviewModalStageSelect'),
  reviewModalStarRating: document.getElementById('reviewModalStarRating'),
  reviewModalEmail: document.getElementById('reviewModalEmail'),
  reviewModalPhone: document.getElementById('reviewModalPhone'),
  reviewModalLocationExp: document.getElementById('reviewModalLocationExp'),
  reviewModalLinks: document.getElementById('reviewModalLinks'),
  reviewModalResumeName: document.getElementById('reviewModalResumeName'),
  reviewModalResumeSize: document.getElementById('reviewModalResumeSize'),
  btnPreviewResumeMock: document.getElementById('btnPreviewResumeMock'),
  reviewModalCoverLetter: document.getElementById('reviewModalCoverLetter'),
  schedInterviewDate: document.getElementById('schedInterviewDate'),
  schedInterviewType: document.getElementById('schedInterviewType'),
  schedInterviewers: document.getElementById('schedInterviewers'),
  schedMeetingLink: document.getElementById('schedMeetingLink'),
  btnSaveInterviewSchedule: document.getElementById('btnSaveInterviewSchedule'),
  reviewModalNotesFeed: document.getElementById('reviewModalNotesFeed'),
  newAdminNoteInput: document.getElementById('newAdminNoteInput'),
  btnAddAdminNoteBtn: document.getElementById('btnAddAdminNoteBtn'),
  btnDeleteCandidateApp: document.getElementById('btnDeleteCandidateApp'),

  toastContainer: document.getElementById('toastContainer')
};

// Init application
document.addEventListener('DOMContentLoaded', () => {
  DataStore.init();
  const user = DataStore.getCurrentUser();
  state.currentRole = user.role || 'candidate';
  setupEventListeners();
  updateRoleView(state.currentRole, false);
});

// Setup event handlers
function setupEventListeners() {
  // Role switcher
  DOM.btnRoleCandidate.addEventListener('click', () => switchRole('candidate'));
  DOM.btnRoleAdmin.addEventListener('click', () => switchRole('admin'));

  // Brand logo home
  DOM.brandLogoBtn.addEventListener('click', () => {
    if (state.currentRole === 'candidate') {
      switchTab('tabBrowseJobs');
    } else {
      switchTab('tabAdminDashboard');
    }
  });

  // Nav tabs clicking
  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target) switchTab(target);
    });
  });

  // Candidate Search & Filter
  DOM.btnSearchFilter.addEventListener('click', handleCandidateSearch);
  DOM.jobSearchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleCandidateSearch();
  });
  DOM.jobLocationInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleCandidateSearch();
  });
  DOM.jobTypeFilter.addEventListener('change', handleCandidateSearch);

  // Department Filter pills
  DOM.deptFilterPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    DOM.deptFilterPills.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.selectedDept = pill.dataset.dept || '';
    renderJobListings();
  });

  // Sort dropdown
  DOM.jobsSortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderJobListings();
  });

  // Candidate applications filter
  DOM.candidateAppFilterGroup.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    DOM.candidateAppFilterGroup.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.candidateAppFilter = pill.dataset.filter;
    renderCandidateApplications();
  });

  // Admin Dashboard actions
  DOM.adminCreateJobQuickBtn.addEventListener('click', () => openPostJobModal());
  DOM.btnAdminOpenCreateJobModal.addEventListener('click', () => openPostJobModal());
  DOM.navPostJobBtn.addEventListener('click', () => openPostJobModal());
  DOM.viewAllCandidatesPipelineBtn.addEventListener('click', () => switchTab('tabAdminPipeline'));

  // Admin Pipeline Job Filter
  DOM.pipelineJobSelectFilter.addEventListener('change', (e) => {
    state.pipelineFilterJobId = e.target.value;
    renderAtsKanban();
  });

  // Post / Edit Job Form Submit
  DOM.postJobForm.addEventListener('submit', handleSaveJobForm);

  // Apply Job Form Submit
  DOM.applyJobForm.addEventListener('submit', handleApplyJobSubmit);

  // Resume File Drop & Selection
  DOM.resumeDropzone.addEventListener('click', () => DOM.resumeFileInput.click());
  DOM.resumeFileInput.addEventListener('change', handleResumeFileInput);
  DOM.resumeDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    DOM.resumeDropzone.style.borderColor = 'var(--primary-600)';
  });
  DOM.resumeDropzone.addEventListener('dragleave', () => {
    DOM.resumeDropzone.style.borderColor = 'var(--primary-300)';
  });
  DOM.resumeDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    DOM.resumeDropzone.style.borderColor = 'var(--primary-300)';
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processResumeFile(e.dataTransfer.files[0]);
    }
  });

  // Candidate Review Drawer Actions
  DOM.reviewModalStageSelect.addEventListener('change', handleStageSelectChange);
  DOM.btnSaveInterviewSchedule.addEventListener('click', handleSaveInterviewSchedule);
  DOM.btnAddAdminNoteBtn.addEventListener('click', handleAddAdminNote);
  DOM.newAdminNoteInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleAddAdminNote();
  });
  DOM.btnDeleteCandidateApp.addEventListener('click', handleDeleteCurrentCandidateApp);
  DOM.btnPreviewResumeMock.addEventListener('click', () => {
    showToast("Resume document downloaded / opened successfully.", "success");
  });

  // Reset Demo Data
  DOM.resetDataBtn.addEventListener('click', () => {
    if (confirm("Reset all jobs, candidates, and applications back to initial demo data?")) {
      DataStore.resetDefaults();
      showToast("Data reset to initial state.", "info");
      refreshCurrentView();
    }
  });

  // Notifications dropdown toggle
  DOM.notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.notifDropdown.classList.toggle('hidden');
    renderNotificationsList();
  });

  DOM.markReadBtn.addEventListener('click', () => {
    DataStore.markNotificationsRead();
    renderNotificationsList();
    updateBadges();
  });

  document.addEventListener('click', (e) => {
    if (!DOM.notifDropdown.contains(e.target) && !DOM.notifBtn.contains(e.target)) {
      DOM.notifDropdown.classList.add('hidden');
    }
  });

  // Modal close buttons
  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      if (modalId) {
        document.getElementById(modalId).classList.add('hidden');
      }
    });
  });

  // Close modals when clicking overlay
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // Setup ATS Kanban Drag & Drop
  setupKanbanDragDrop();
}

// Switch between Candidate & Admin Roles
function switchRole(newRole) {
  state.currentRole = newRole;
  DataStore.switchRole(newRole);
  updateRoleView(newRole, true);
  showToast(`Switched to ${newRole === 'admin' ? 'Admin / Recruiter' : 'Candidate'} view`, 'info');
}

function updateRoleView(role, defaultTabSwitch = false) {
  const user = DataStore.getCurrentUser();

  // Role button styles
  if (role === 'admin') {
    DOM.btnRoleAdmin.classList.add('active');
    DOM.btnRoleCandidate.classList.remove('active');
    DOM.candidateNavTabs.classList.add('hidden');
    DOM.adminNavTabs.classList.remove('hidden');
    DOM.navPostJobBtn.classList.remove('hidden');

    DOM.navAvatar.textContent = "SJ";
    DOM.navAvatar.style.background = "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)";
    DOM.navUserName.textContent = user.name || "Sarah Jenkins";
    DOM.navUserRole.textContent = "Admin / Recruiter";

    if (defaultTabSwitch || state.currentTab.startsWith('tabBrowse') || state.currentTab.startsWith('tabMy') || state.currentTab.startsWith('tabSaved')) {
      switchTab('tabAdminDashboard');
    } else {
      refreshCurrentView();
    }
  } else {
    DOM.btnRoleCandidate.classList.add('active');
    DOM.btnRoleAdmin.classList.remove('active');
    DOM.candidateNavTabs.classList.remove('hidden');
    DOM.adminNavTabs.classList.add('hidden');
    DOM.navPostJobBtn.classList.add('hidden');

    DOM.navAvatar.textContent = "AM";
    DOM.navAvatar.style.background = "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)";
    DOM.navUserName.textContent = user.name || "Alex Morgan";
    DOM.navUserRole.textContent = "Candidate";

    if (defaultTabSwitch || state.currentTab.startsWith('tabAdmin')) {
      switchTab('tabBrowseJobs');
    } else {
      refreshCurrentView();
    }
  }

  updateBadges();
}

// Switch Tab Navigation
function switchTab(tabId) {
  state.currentTab = tabId;

  // Update tabs active state
  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === tabId);
  });

  // Toggle tab panels
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('hidden', pane.id !== tabId);
  });

  refreshCurrentView();
}

function refreshCurrentView() {
  updateBadges();

  switch (state.currentTab) {
    case 'tabBrowseJobs':
      renderJobListings();
      break;
    case 'tabMyApplications':
      renderCandidateApplications();
      break;
    case 'tabSavedJobs':
      renderSavedJobs();
      break;
    case 'tabAdminDashboard':
      renderAdminDashboard();
      break;
    case 'tabAdminJobs':
      renderAdminJobs();
      break;
    case 'tabAdminPipeline':
      renderAtsKanban();
      break;
  }
}

// Update Badges & Counters
function updateBadges() {
  const jobs = DataStore.getJobs();
  const apps = DataStore.getApplications();
  const user = DataStore.getCurrentUser();
  const saved = DataStore.getSavedJobIds();
  const notifs = DataStore.getNotifications();

  // Candidate Badges
  const myApps = DataStore.getApplicationsByUserEmail(user.email);
  DOM.myAppsBadge.textContent = myApps.length;
  DOM.savedJobsBadge.textContent = saved.length;

  // Admin Badges
  const activeJobs = jobs.filter(j => j.status === 'Active');
  DOM.adminJobsBadge.textContent = activeJobs.length;
  DOM.adminCandidatesBadge.textContent = apps.length;

  // Unread notifications dot
  const unreadCount = notifs.filter(n => !n.read && (state.currentRole === 'admin' ? n.recipientRole === 'admin' : (n.recipientRole === 'candidate' && n.recipientEmail === user.email))).length;
  DOM.notifDot.classList.toggle('hidden', unreadCount === 0);
}

// =========================================================================
// CANDIDATE VIEW: BROWSE JOBS
// =========================================================================
function handleCandidateSearch() {
  state.searchQuery = DOM.jobSearchInput.value.trim().toLowerCase();
  state.locationQuery = DOM.jobLocationInput.value.trim().toLowerCase();
  state.selectedType = DOM.jobTypeFilter.value;
  renderJobListings();
}

function renderJobListings() {
  const allJobs = DataStore.getJobs();
  const savedIds = DataStore.getSavedJobIds();
  const user = DataStore.getCurrentUser();
  const myApps = DataStore.getApplicationsByUserEmail(user.email);
  const appliedJobIds = new Set(myApps.map(a => a.jobId));

  // Filter
  let filtered = allJobs.filter(job => {
    if (job.status !== 'Active') return false;

    if (state.searchQuery) {
      const matchTitle = job.title.toLowerCase().includes(state.searchQuery);
      const matchComp = job.company.toLowerCase().includes(state.searchQuery);
      const matchDesc = job.description.toLowerCase().includes(state.searchQuery);
      const matchTags = (job.tags || []).some(t => t.toLowerCase().includes(state.searchQuery));
      if (!matchTitle && !matchComp && !matchDesc && !matchTags) return false;
    }

    if (state.locationQuery) {
      const matchLoc = job.location.toLowerCase().includes(state.locationQuery) ||
                       job.workplace.toLowerCase().includes(state.locationQuery);
      if (!matchLoc) return false;
    }

    if (state.selectedType && job.type !== state.selectedType) {
      return false;
    }

    if (state.selectedDept) {
      if (state.selectedDept === 'Remote') {
        if (job.workplace !== 'Remote' && !job.location.toLowerCase().includes('remote')) return false;
      } else if (job.department !== state.selectedDept) {
        return false;
      }
    }

    return true;
  });

  // Sort
  if (state.sortBy === 'salaryHigh') {
    filtered.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
  } else if (state.sortBy === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered.sort((a, b) => new Date(b.postedAt || 0) - new Date(a.postedAt || 0));
  }

  DOM.jobsCountText.textContent = `Showing ${filtered.length} job${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    DOM.jobListingsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: white; border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <div style="color: var(--primary-500); margin-bottom: 1rem; display: flex; justify-content: center;">
          ${Icons.search("w-12 h-12")}
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">No jobs match your search</h3>
        <p style="color: var(--text-muted); max-width: 400px; margin: 0 auto 1.5rem auto;">Try broadening your keywords or removing some filters to see more available positions.</p>
        <button class="btn btn-secondary btn-sm" id="btnResetFilters">Reset Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('btnResetFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        DOM.jobSearchInput.value = '';
        DOM.jobLocationInput.value = '';
        DOM.jobTypeFilter.value = '';
        DOM.deptFilterPills.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        DOM.deptFilterPills.querySelector('[data-dept=""]').classList.add('active');
        state.searchQuery = '';
        state.locationQuery = '';
        state.selectedType = '';
        state.selectedDept = '';
        renderJobListings();
      });
    }
    return;
  }

  // Render cards
  DOM.jobListingsGrid.innerHTML = filtered.map(job => {
    const isSaved = savedIds.includes(job.id);
    const hasApplied = appliedJobIds.has(job.id);
    const initials = getInitials(job.company);

    const salaryFormatted = job.salaryMin && job.salaryMax
      ? `$${(job.salaryMin / 1000).toFixed(0)}k - $${(job.salaryMax / 1000).toFixed(0)}k <span class="job-salary-sub">/ year</span>`
      : 'Competitive';

    const tagsHtml = (job.tags || []).slice(0, 4).map(tag => `<span class="tag-badge">${tag}</span>`).join('');

    return `
      <div class="job-card" data-job-id="${job.id}">
        <div class="job-card-header">
          <div class="job-company-badge">
            <div class="company-logo">${initials}</div>
            <div>
              <h3 class="job-title">${escapeHtml(job.title)}</h3>
              <div class="job-company">${escapeHtml(job.company)} &bull; ${escapeHtml(job.department)}</div>
            </div>
          </div>
          <button class="btn-bookmark ${isSaved ? 'bookmarked' : ''}" data-job-id="${job.id}" title="${isSaved ? 'Remove from Saved' : 'Save Job'}" aria-label="Save Job">
            ${Icons.bookmark("w-5 h-5", isSaved)}
          </button>
        </div>

        <div class="job-meta-row">
          <span class="job-meta-item">
            ${Icons.location("w-4 h-4")}
            ${escapeHtml(job.location)}
          </span>
          <span class="job-meta-item">
            ${Icons.briefcase("w-4 h-4")}
            ${escapeHtml(job.workplace)} &bull; ${escapeHtml(job.type)}
          </span>
          <span class="job-meta-item">
            ${Icons.clock("w-4 h-4")}
            ${escapeHtml(job.experience)}
          </span>
        </div>

        <p class="job-description-excerpt">${escapeHtml(job.description)}</p>

        <div class="job-tags">${tagsHtml}</div>

        <div class="job-card-footer">
          <div class="job-salary">${salaryFormatted}</div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm btn-view-job-details" data-job-id="${job.id}">
              ${Icons.eye("w-3.5 h-3.5")}
              Details
            </button>
            ${hasApplied
              ? `<button class="btn btn-light-blue btn-sm" disabled style="opacity: 0.9; cursor: default;">
                   ${Icons.checkCircle("w-4 h-4")} Applied
                 </button>`
              : `<button class="btn btn-primary btn-sm btn-open-apply-modal" data-job-id="${job.id}">
                   ${Icons.send("w-3.5 h-3.5")}
                   Apply Now
                 </button>`
            }
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach card event listeners
  DOM.jobListingsGrid.querySelectorAll('.btn-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const jobId = btn.dataset.jobId;
      const isNowSaved = DataStore.toggleSaveJob(jobId);
      btn.classList.toggle('bookmarked', isNowSaved);
      btn.innerHTML = Icons.bookmark("w-5 h-5", isNowSaved);
      showToast(isNowSaved ? 'Job saved to bookmarks' : 'Job removed from bookmarks', 'info');
      updateBadges();
    });
  });

  DOM.jobListingsGrid.querySelectorAll('.btn-view-job-details').forEach(btn => {
    btn.addEventListener('click', () => openJobDetailModal(btn.dataset.jobId));
  });

  DOM.jobListingsGrid.querySelectorAll('.btn-open-apply-modal').forEach(btn => {
    btn.addEventListener('click', () => openApplyModal(btn.dataset.jobId));
  });
}

// =========================================================================
// CANDIDATE VIEW: MY APPLICATIONS
// =========================================================================
function renderCandidateApplications() {
  const user = DataStore.getCurrentUser();
  const allApps = DataStore.getApplicationsByUserEmail(user.email);

  const filteredApps = allApps.filter(app => {
    if (state.candidateAppFilter === 'all') return true;
    return app.status === state.candidateAppFilter;
  });

  if (filteredApps.length === 0) {
    DOM.candidateApplicationsList.innerHTML = `
      <div style="text-align: center; padding: 4rem 1.5rem;">
        <div style="color: var(--primary-400); margin-bottom: 1rem; display: flex; justify-content: center;">
          ${Icons.fileText("w-12 h-12")}
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">No Applications Found</h3>
        <p style="color: var(--text-muted); max-width: 420px; margin: 0 auto 1.5rem auto;">
          ${state.candidateAppFilter === 'all'
            ? "You haven't applied for any jobs yet. Browse our openings and apply in seconds!"
            : `You have no applications currently in the "${state.candidateAppFilter}" stage.`
          }
        </p>
        <button class="btn btn-primary" onclick="window.switchTab('tabBrowseJobs')">
          ${Icons.briefcase("w-4 h-4")} Browse Open Positions
        </button>
      </div>
    `;
    return;
  }

  DOM.candidateApplicationsList.innerHTML = filteredApps.map(app => {
    const job = DataStore.getJobById(app.jobId) || {
      title: "Position Archived",
      company: "Company",
      location: "Remote",
      type: "Full-time"
    };

    const formattedDate = new Date(app.appliedAt).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });

    const stages = [
      { id: 'Applied', label: '1. Applied', icon: Icons.fileCheck("w-3.5 h-3.5") },
      { id: 'Screening', label: '2. Screening', icon: Icons.eye("w-3.5 h-3.5") },
      { id: 'Interview', label: '3. Interview', icon: Icons.calendar("w-3.5 h-3.5") },
      { id: 'Offer', label: '4. Offer', icon: Icons.award("w-3.5 h-3.5") }
    ];

    const currentStageIndex = stages.findIndex(s => s.id === app.status);
    const isRejected = app.status === 'Rejected';

    const stepperHtml = isRejected ? `
      <div style="background: var(--status-rejected-bg); border: 1px solid var(--status-rejected-border); padding: 0.75rem 1rem; border-radius: var(--radius-md); color: var(--status-rejected-text); font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
        ${Icons.xCircle("w-4 h-4")} Application Archived / Not selected for this opening.
      </div>
    ` : `
      <div class="status-stepper">
        <div class="stepper-line">
          <div class="stepper-progress" style="width: ${currentStageIndex >= 0 ? (currentStageIndex / (stages.length - 1)) * 100 : 0}%;"></div>
        </div>
        ${stages.map((stage, idx) => {
          const isCompleted = idx < currentStageIndex;
          const isCurrent = idx === currentStageIndex;
          return `
            <div class="status-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
              <div class="step-indicator">
                ${isCompleted ? Icons.check("w-3.5 h-3.5") : stage.icon}
              </div>
              <div class="step-label">${stage.label}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    const interviewHtml = (app.status === 'Interview' && app.interviewDetails && app.interviewDetails.scheduledDate) ? `
      <div style="background: #e0f2fe; border: 1px solid #7dd3fc; border-radius: var(--radius-md); padding: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="background: #0284c7; color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);">
            ${Icons.video("w-4.5 h-4.5")}
          </div>
          <div>
            <div style="font-weight: 700; color: #0369a1; font-size: 0.9rem;">
              Upcoming Interview: ${escapeHtml(app.interviewDetails.type || 'Technical Round')}
            </div>
            <div style="font-size: 0.8rem; color: #075985;">
              ${new Date(app.interviewDetails.scheduledDate).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
              &bull; Interviewer: ${escapeHtml(app.interviewDetails.interviewer || 'Hiring Lead')}
            </div>
          </div>
        </div>
        ${app.interviewDetails.meetingLink ? `
          <a href="${escapeHtml(app.interviewDetails.meetingLink)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="text-decoration: none;">
            ${Icons.video("w-3.5 h-3.5")}
            Join Video Meeting
            ${Icons.externalLink("w-3 h-3")}
          </a>
        ` : ''}
      </div>
    ` : '';

    return `
      <div class="app-timeline-card" data-app-id="${app.id}">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div class="company-logo">${getInitials(job.company)}</div>
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.2rem;">${escapeHtml(job.title)}</h3>
              <div style="font-size: 0.85rem; color: var(--text-muted);">
                ${escapeHtml(job.company)} &bull; ${escapeHtml(job.location)} &bull; Applied on ${formattedDate}
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="status-badge ${app.status}">
              ${app.status}
            </span>
            <button class="btn btn-secondary btn-sm btn-withdraw-app" data-app-id="${app.id}" title="Withdraw Application">
              ${Icons.xCircle("w-3.5 h-3.5")}
              Withdraw
            </button>
          </div>
        </div>

        ${stepperHtml}
        ${interviewHtml}

        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            ${Icons.fileText("w-4 h-4")}
            Attached Resume: <strong style="color: var(--text-main);">${escapeHtml(app.resumeFileName || 'Resume.pdf')}</strong> (${escapeHtml(app.resumeSize || '150 KB')})
          </div>
          <div>
            Application Reference ID: <code style="background: var(--primary-50); padding: 2px 6px; border-radius: 4px; color: var(--primary-700); font-weight: 600;">${app.id}</code>
          </div>
        </div>
      </div>
    `;
  }).join('');

  DOM.candidateApplicationsList.querySelectorAll('.btn-withdraw-app').forEach(btn => {
    btn.addEventListener('click', () => {
      const appId = btn.dataset.appId;
      if (confirm("Are you sure you want to withdraw this application? This action cannot be undone.")) {
        DataStore.deleteApplication(appId);
        showToast("Application withdrawn successfully", "info");
        renderCandidateApplications();
        updateBadges();
      }
    });
  });
}

// =========================================================================
// CANDIDATE VIEW: SAVED JOBS
// =========================================================================
function renderSavedJobs() {
  const savedIds = DataStore.getSavedJobIds();
  const allJobs = DataStore.getJobs();
  const savedJobs = allJobs.filter(j => savedIds.includes(j.id));

  if (savedJobs.length === 0) {
    DOM.savedJobsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem;">
        <div style="color: var(--primary-400); margin-bottom: 1rem; display: flex; justify-content: center;">
          ${Icons.bookmark("w-12 h-12")}
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">No Bookmarked Jobs</h3>
        <p style="color: var(--text-muted); max-width: 400px; margin: 0 auto 1.5rem auto;">Bookmark jobs while browsing to save them for quick review and one-click application.</p>
        <button class="btn btn-primary" onclick="window.switchTab('tabBrowseJobs')">
          ${Icons.briefcase("w-4 h-4")} Browse Open Positions
        </button>
      </div>
    `;
    return;
  }

  DOM.savedJobsGrid.innerHTML = savedJobs.map(job => {
    const salaryFormatted = job.salaryMin && job.salaryMax
      ? `$${(job.salaryMin / 1000).toFixed(0)}k - $${(job.salaryMax / 1000).toFixed(0)}k`
      : 'Competitive';

    return `
      <div class="job-card" data-job-id="${job.id}">
        <div class="job-card-header">
          <div class="job-company-badge">
            <div class="company-logo">${getInitials(job.company)}</div>
            <div>
              <h3 class="job-title">${escapeHtml(job.title)}</h3>
              <div class="job-company">${escapeHtml(job.company)}</div>
            </div>
          </div>
          <button class="btn-bookmark bookmarked" data-job-id="${job.id}">
            ${Icons.bookmark("w-5 h-5", true)}
          </button>
        </div>

        <div class="job-meta-row">
          <span class="job-meta-item">${Icons.location("w-4 h-4")} ${escapeHtml(job.location)}</span>
          <span class="job-meta-item">${Icons.briefcase("w-4 h-4")} ${escapeHtml(job.type)}</span>
        </div>

        <p class="job-description-excerpt">${escapeHtml(job.description)}</p>

        <div class="job-card-footer">
          <div class="job-salary">${salaryFormatted}</div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm btn-view-job-details" data-job-id="${job.id}">
              ${Icons.eye("w-3.5 h-3.5")} Details
            </button>
            <button class="btn btn-primary btn-sm btn-open-apply-modal" data-job-id="${job.id}">
              ${Icons.send("w-3.5 h-3.5")} Apply Now
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  DOM.savedJobsGrid.querySelectorAll('.btn-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const jobId = btn.dataset.jobId;
      DataStore.toggleSaveJob(jobId);
      showToast("Job removed from bookmarks", "info");
      renderSavedJobs();
      updateBadges();
    });
  });

  DOM.savedJobsGrid.querySelectorAll('.btn-view-job-details').forEach(btn => {
    btn.addEventListener('click', () => openJobDetailModal(btn.dataset.jobId));
  });

  DOM.savedJobsGrid.querySelectorAll('.btn-open-apply-modal').forEach(btn => {
    btn.addEventListener('click', () => openApplyModal(btn.dataset.jobId));
  });
}

// =========================================================================
// ADMIN VIEW: DASHBOARD & METRICS
// =========================================================================
function renderAdminDashboard() {
  const jobs = DataStore.getJobs();
  const apps = DataStore.getApplications();

  const activeJobs = jobs.filter(j => j.status === 'Active');
  const interviews = apps.filter(a => a.status === 'Interview');
  const offers = apps.filter(a => a.status === 'Offer');

  DOM.statActiveJobs.textContent = activeJobs.length;
  DOM.statTotalApps.textContent = apps.length;
  DOM.statInterviews.textContent = interviews.length;
  DOM.statOffers.textContent = offers.length;

  const recentApps = [...apps].sort((a, b) => new Date(b.appliedAt || 0) - new Date(a.appliedAt || 0)).slice(0, 8);

  if (recentApps.length === 0) {
    DOM.dashboardRecentAppsTable.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">
          No candidate applications received yet.
        </td>
      </tr>
    `;
    return;
  }

  DOM.dashboardRecentAppsTable.innerHTML = recentApps.map(app => {
    const job = DataStore.getJobById(app.jobId) || { title: "Archived Role" };
    const dateFormatted = new Date(app.appliedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const starsHtml = renderStarRatingHtml(app.rating || 3);

    return `
      <tr style="border-bottom: 1px solid var(--border-light); transition: var(--transition);">
        <td style="padding: 1rem 1.25rem;">
          <div style="font-weight: 700; color: var(--text-main);">${escapeHtml(app.candidateName)}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(app.candidateEmail)}</div>
        </td>
        <td style="padding: 1rem;">
          <div style="font-weight: 600; color: var(--primary-800);">${escapeHtml(job.title)}</div>
        </td>
        <td style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">
          ${escapeHtml(app.experienceYears || 0)} yrs
        </td>
        <td style="padding: 1rem;">
          <span class="status-badge ${app.status}">${app.status}</span>
        </td>
        <td style="padding: 1rem;">
          <div class="rating-stars">${starsHtml}</div>
        </td>
        <td style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">
          ${dateFormatted}
        </td>
        <td style="padding: 1rem 1.25rem; text-align: right;">
          <button class="btn btn-secondary btn-sm btn-open-candidate-drawer" data-app-id="${app.id}">
            Review
            ${Icons.arrowRight("w-3.5 h-3.5")}
          </button>
        </td>
      </tr>
    `;
  }).join('');

  DOM.dashboardRecentAppsTable.querySelectorAll('.btn-open-candidate-drawer').forEach(btn => {
    btn.addEventListener('click', () => openCandidateReviewModal(btn.dataset.appId));
  });
}

// =========================================================================
// ADMIN VIEW: MANAGE JOBS
// =========================================================================
function renderAdminJobs() {
  const jobs = DataStore.getJobs();
  const apps = DataStore.getApplications();

  if (jobs.length === 0) {
    DOM.adminJobsTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">
          No job requisitions created yet. Click "Post a New Job" to start recruiting.
        </td>
      </tr>
    `;
    return;
  }

  DOM.adminJobsTableBody.innerHTML = jobs.map(job => {
    const jobApps = apps.filter(a => a.jobId === job.id);
    const salaryFormatted = `$${(job.salaryMin / 1000).toFixed(0)}k - $${(job.salaryMax / 1000).toFixed(0)}k`;

    return `
      <tr style="border-bottom: 1px solid var(--border-light);">
        <td style="padding: 1rem 1.25rem;">
          <div style="font-weight: 700; color: var(--text-main);">${escapeHtml(job.title)}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(job.company)}</div>
        </td>
        <td style="padding: 1rem; font-weight: 500;">
          ${escapeHtml(job.department)}
        </td>
        <td style="padding: 1rem; font-size: 0.85rem; color: var(--text-muted);">
          ${escapeHtml(job.workplace)} &bull; ${escapeHtml(job.location)}
        </td>
        <td style="padding: 1rem; font-weight: 600; color: var(--primary-800); font-size: 0.85rem;">
          ${salaryFormatted}
        </td>
        <td style="padding: 1rem;">
          <span style="background: var(--primary-50); border: 1px solid var(--primary-200); color: var(--primary-800); font-weight: 700; font-size: 0.8rem; padding: 2px 8px; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 0.3rem;">
            ${Icons.users("w-3.5 h-3.5")}
            ${jobApps.length} applicants
          </span>
        </td>
        <td style="padding: 1rem;">
          <span class="status-badge ${job.status === 'Active' ? 'Offer' : 'Rejected'}">
            ${job.status}
          </span>
        </td>
        <td style="padding: 1rem 1.25rem; text-align: right;">
          <div style="display: inline-flex; gap: 0.4rem;">
            <button class="btn btn-secondary btn-sm btn-edit-job" data-job-id="${job.id}" title="Edit Job">
              ${Icons.edit("w-3.5 h-3.5")} Edit
            </button>
            <button class="btn btn-secondary btn-sm btn-toggle-job-status" data-job-id="${job.id}" title="Toggle Active / Closed">
              ${Icons.refresh("w-3.5 h-3.5")} ${job.status === 'Active' ? 'Close' : 'Reopen'}
            </button>
            <button class="btn btn-danger btn-sm btn-delete-job" data-job-id="${job.id}" title="Delete Job">
              ${Icons.trash("w-3.5 h-3.5")}
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  DOM.adminJobsTableBody.querySelectorAll('.btn-edit-job').forEach(btn => {
    btn.addEventListener('click', () => openPostJobModal(btn.dataset.jobId));
  });

  DOM.adminJobsTableBody.querySelectorAll('.btn-toggle-job-status').forEach(btn => {
    btn.addEventListener('click', () => {
      const jobId = btn.dataset.jobId;
      const job = DataStore.getJobById(jobId);
      if (job) {
        job.status = job.status === 'Active' ? 'Closed' : 'Active';
        DataStore.saveJob(job);
        showToast(`Job is now ${job.status}`, 'info');
        renderAdminJobs();
        updateBadges();
      }
    });
  });

  DOM.adminJobsTableBody.querySelectorAll('.btn-delete-job').forEach(btn => {
    btn.addEventListener('click', () => {
      const jobId = btn.dataset.jobId;
      if (confirm("Are you sure you want to delete this job posting?")) {
        DataStore.deleteJob(jobId);
        showToast("Job posting deleted", "info");
        renderAdminJobs();
        updateBadges();
      }
    });
  });
}

// =========================================================================
// ADMIN VIEW: ATS KANBAN PIPELINE
// =========================================================================
function renderAtsKanban() {
  const jobs = DataStore.getJobs();
  const allApps = DataStore.getApplications();

  DOM.pipelineJobSelectFilter.innerHTML = `
    <option value="">All Job Requisitions (${allApps.length} candidates)</option>
    ${jobs.map(j => {
      const count = allApps.filter(a => a.jobId === j.id).length;
      return `<option value="${j.id}" ${state.pipelineFilterJobId === j.id ? 'selected' : ''}>${escapeHtml(j.title)} (${count})</option>`;
    }).join('')}
  `;

  const filteredApps = allApps.filter(app => {
    if (!state.pipelineFilterJobId) return true;
    return app.jobId === state.pipelineFilterJobId;
  });

  const stages = ['Applied', 'Screening', 'Interview', 'Offer', 'Rejected'];

  stages.forEach(stage => {
    const stageApps = filteredApps.filter(a => a.status === stage);
    const countEl = document.getElementById(`count-${stage}`);
    const containerEl = document.getElementById(`cards-${stage}`);

    if (countEl) countEl.textContent = stageApps.length;

    if (!containerEl) return;

    if (stageApps.length === 0) {
      containerEl.innerHTML = `
        <div style="text-align: center; padding: 2rem 0.5rem; color: var(--text-light); font-size: 0.8rem; border: 1px dashed #cbd5e1; border-radius: var(--radius-md);">
          No candidates
        </div>
      `;
      return;
    }

    containerEl.innerHTML = stageApps.map(app => {
      const job = DataStore.getJobById(app.jobId) || { title: "Position" };
      const starsHtml = renderStarRatingHtml(app.rating || 3);

      return `
        <div class="kanban-card" draggable="true" data-app-id="${app.id}" id="card-${app.id}">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem;">
            <div>
              <div class="candidate-name">${escapeHtml(app.candidateName)}</div>
              <div class="candidate-job">${escapeHtml(job.title)}</div>
            </div>
            <div class="rating-stars">${starsHtml}</div>
          </div>

          <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.6rem;">
            ${escapeHtml(app.experienceYears || 0)} yrs exp &bull; ${escapeHtml(app.candidateLocation || 'Remote')}
          </div>

          ${app.interviewDetails && app.interviewDetails.scheduledDate ? `
            <div style="background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 4px; padding: 4px 6px; font-size: 0.75rem; color: #0284c7; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.35rem;">
              ${Icons.calendar("w-3.5 h-3.5")}
              <span>${new Date(app.interviewDetails.scheduledDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          ` : ''}

          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-light); padding-top: 0.5rem; margin-top: 0.5rem;">
            <button class="btn btn-secondary btn-sm btn-open-candidate-drawer" data-app-id="${app.id}" style="padding: 2px 8px; font-size: 0.75rem;">
              ${Icons.eye("w-3 h-3")} Review
            </button>
            <div style="display: flex; gap: 0.25rem;">
              ${getNextStageBtn(app)}
            </div>
          </div>
        </div>
      `;
    }).join('');

    containerEl.querySelectorAll('.btn-open-candidate-drawer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCandidateReviewModal(btn.dataset.appId);
      });
    });

    containerEl.querySelectorAll('.btn-quick-advance').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const appId = btn.dataset.appId;
        const targetStage = btn.dataset.nextStage;
        DataStore.updateApplicationStatus(appId, targetStage);
        showToast(`Candidate moved to ${targetStage}`, 'success');
        renderAtsKanban();
        updateBadges();
      });
    });
  });

  setupKanbanDragDrop();
}

function getNextStageBtn(app) {
  const stageFlow = {
    'Applied': 'Screening',
    'Screening': 'Interview',
    'Interview': 'Offer',
    'Offer': null,
    'Rejected': 'Applied'
  };

  const next = stageFlow[app.status];
  if (!next) return '';

  return `
    <button class="btn btn-light-blue btn-sm btn-quick-advance" data-app-id="${app.id}" data-next-stage="${next}" style="padding: 2px 7px; font-size: 0.75rem;">
      &rarr; ${next}
    </button>
  `;
}

function setupKanbanDragDrop() {
  const cards = document.querySelectorAll('.kanban-card');
  const columns = document.querySelectorAll('.kanban-column');

  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', card.dataset.appId);
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });
  });

  columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
      e.preventDefault();
      column.style.background = '#e0f2fe';
    });

    column.addEventListener('dragleave', () => {
      column.style.background = '#f1f5f9';
    });

    column.addEventListener('drop', (e) => {
      e.preventDefault();
      column.style.background = '#f1f5f9';
      const appId = e.dataTransfer.getData('text/plain');
      const targetStage = column.dataset.stage;

      if (appId && targetStage) {
        DataStore.updateApplicationStatus(appId, targetStage);
        showToast(`Candidate moved to ${targetStage}`, 'success');
        renderAtsKanban();
        updateBadges();
      }
    });
  });
}

// =========================================================================
// MODALS: JOB DETAILS & APPLICATION
// =========================================================================
function openJobDetailModal(jobId) {
  const job = DataStore.getJobById(jobId);
  if (!job) return;

  DOM.detailModalLogo.textContent = getInitials(job.company);
  DOM.detailModalTitle.textContent = job.title;
  DOM.detailModalCompany.textContent = `${job.company} • ${job.location}`;

  const salaryFormatted = job.salaryMin && job.salaryMax
    ? `$${(job.salaryMin / 1000).toFixed(0)}k - $${(job.salaryMax / 1000).toFixed(0)}k USD / year`
    : 'Competitive Salary';

  DOM.detailModalMetaRow.innerHTML = `
    <span class="job-meta-item">${Icons.briefcase("w-4 h-4")} ${escapeHtml(job.type)}</span>
    <span class="job-meta-item">${Icons.building("w-4 h-4")} ${escapeHtml(job.workplace)}</span>
    <span class="job-meta-item">${Icons.clock("w-4 h-4")} ${escapeHtml(job.experience)}</span>
    <span class="job-meta-item" style="color: var(--primary-700); font-weight: 700;">${Icons.dollar("w-4 h-4")} ${salaryFormatted}</span>
  `;

  DOM.detailModalDesc.textContent = job.description;

  DOM.detailModalResponsibilities.innerHTML = (job.responsibilities || []).map(r => `<li>${escapeHtml(r)}</li>`).join('');
  DOM.detailModalRequirements.innerHTML = (job.requirements || []).map(r => `<li>${escapeHtml(r)}</li>`).join('');
  DOM.detailModalBenefits.innerHTML = (job.benefits || []).map(b => `<li>${escapeHtml(b)}</li>`).join('');

  const user = DataStore.getCurrentUser();
  const myApps = DataStore.getApplicationsByUserEmail(user.email);
  const alreadyApplied = myApps.some(a => a.jobId === job.id);

  if (alreadyApplied) {
    DOM.detailModalApplyBtn.innerHTML = `${Icons.checkCircle("w-4 h-4")} Already Applied`;
    DOM.detailModalApplyBtn.disabled = true;
    DOM.detailModalApplyBtn.classList.remove('btn-primary');
    DOM.detailModalApplyBtn.classList.add('btn-light-blue');
  } else {
    DOM.detailModalApplyBtn.innerHTML = `${Icons.send("w-4 h-4")} Apply For This Job &rarr;`;
    DOM.detailModalApplyBtn.disabled = false;
    DOM.detailModalApplyBtn.classList.add('btn-primary');
    DOM.detailModalApplyBtn.classList.remove('btn-light-blue');
    DOM.detailModalApplyBtn.onclick = () => {
      DOM.jobDetailModal.classList.add('hidden');
      openApplyModal(job.id);
    };
  }

  DOM.jobDetailModal.classList.remove('hidden');
}

function openApplyModal(jobId) {
  const job = DataStore.getJobById(jobId);
  if (!job) return;

  const user = DataStore.getCurrentUser();

  DOM.applyJobId.value = job.id;
  DOM.applyModalJobSubtitle.textContent = `Applying for: ${job.title} at ${job.company}`;

  DOM.applyFullName.value = user.name || '';
  DOM.applyEmail.value = user.email || '';
  DOM.applyPhone.value = user.phone || '';
  DOM.applyLocation.value = user.location || '';
  DOM.applyLinkedin.value = user.linkedin || '';
  DOM.applyPortfolio.value = user.portfolio || '';
  DOM.applyExperience.value = '5';
  DOM.applyCoverLetter.value = '';

  state.selectedResumeFile = null;
  DOM.dropzoneText.innerHTML = `Drag and drop resume here, or <span class="highlight-browse">browse file</span>`;
  DOM.resumeDropzone.classList.remove('has-file');

  DOM.applyModal.classList.remove('hidden');
}

function handleResumeFileInput(e) {
  if (e.target.files && e.target.files[0]) {
    processResumeFile(e.target.files[0]);
  }
}

function processResumeFile(file) {
  state.selectedResumeFile = file;
  DOM.dropzoneText.innerHTML = `Attached: <strong>${file.name}</strong> (${(file.size / 1024).toFixed(0)} KB)`;
  DOM.resumeDropzone.classList.add('has-file');
}

function handleApplyJobSubmit(e) {
  e.preventDefault();
  const jobId = DOM.applyJobId.value;
  const candidateEmail = DOM.applyEmail.value.trim();

  const existingApps = DataStore.getApplicationsByJob(jobId);
  const alreadyApplied = existingApps.some(a => (a.candidateEmail || '').toLowerCase() === candidateEmail.toLowerCase());

  if (alreadyApplied) {
    showToast("You have already submitted an application for this position.", "error");
    return;
  }

  const newApp = {
    jobId,
    candidateName: DOM.applyFullName.value.trim(),
    candidateEmail,
    candidatePhone: DOM.applyPhone.value.trim(),
    candidateLocation: DOM.applyLocation.value.trim(),
    linkedin: DOM.applyLinkedin.value.trim(),
    portfolio: DOM.applyPortfolio.value.trim(),
    experienceYears: parseInt(DOM.applyExperience.value) || 0,
    coverLetter: DOM.applyCoverLetter.value.trim(),
    resumeFileName: state.selectedResumeFile ? state.selectedResumeFile.name : `${DOM.applyFullName.value.replace(/\s+/g, '_')}_Resume.pdf`,
    resumeSize: state.selectedResumeFile ? `${(state.selectedResumeFile.size / 1024).toFixed(0)} KB` : "142 KB",
    status: "Applied"
  };

  DataStore.saveApplication(newApp);

  DataStore.setCurrentUser({
    name: newApp.candidateName,
    email: newApp.candidateEmail,
    phone: newApp.candidatePhone,
    location: newApp.candidateLocation,
    linkedin: newApp.linkedin,
    portfolio: newApp.portfolio
  });

  DOM.applyModal.classList.add('hidden');
  showToast("Application submitted successfully! Recruiter has been notified.", "success");

  switchTab('tabMyApplications');
}

// =========================================================================
// MODALS: ADMIN POST / EDIT JOB
// =========================================================================
function openPostJobModal(jobId = null) {
  DOM.postJobForm.reset();
  DOM.adminJobEditId.value = '';

  if (jobId) {
    const job = DataStore.getJobById(jobId);
    if (!job) return;

    DOM.postJobModalTitle.textContent = "Edit Job Requisition";
    DOM.adminJobEditId.value = job.id;
    DOM.postJobTitle.value = job.title;
    DOM.postJobCompany.value = job.company;
    DOM.postJobDepartment.value = job.department;
    DOM.postJobType.value = job.type;
    DOM.postJobWorkplace.value = job.workplace;
    DOM.postJobLocation.value = job.location;
    DOM.postJobExperience.value = job.experience;
    DOM.postJobStatus.value = job.status;
    DOM.postJobSalaryMin.value = job.salaryMin;
    DOM.postJobSalaryMax.value = job.salaryMax;
    DOM.postJobTags.value = (job.tags || []).join(', ');
    DOM.postJobDesc.value = job.description;
    DOM.postJobResponsibilities.value = (job.responsibilities || []).join('\n');
    DOM.postJobRequirements.value = (job.requirements || []).join('\n');
    DOM.postJobBenefits.value = (job.benefits || []).join('\n');
  } else {
    DOM.postJobModalTitle.textContent = "Post a New Job Opportunity";
    DOM.postJobCompany.value = "SkyScale Tech";
    DOM.postJobLocation.value = "Remote";
    DOM.postJobSalaryMin.value = 130000;
    DOM.postJobSalaryMax.value = 160000;
  }

  DOM.postJobModal.classList.remove('hidden');
}

function handleSaveJobForm(e) {
  e.preventDefault();
  const editId = DOM.adminJobEditId.value;

  const jobData = {
    title: DOM.postJobTitle.value.trim(),
    company: DOM.postJobCompany.value.trim(),
    department: DOM.postJobDepartment.value,
    type: DOM.postJobType.value,
    workplace: DOM.postJobWorkplace.value,
    location: DOM.postJobLocation.value.trim(),
    experience: DOM.postJobExperience.value,
    status: DOM.postJobStatus.value,
    salaryMin: parseInt(DOM.postJobSalaryMin.value) || 0,
    salaryMax: parseInt(DOM.postJobSalaryMax.value) || 0,
    currency: "USD",
    tags: DOM.postJobTags.value.split(',').map(t => t.trim()).filter(Boolean),
    description: DOM.postJobDesc.value.trim(),
    responsibilities: DOM.postJobResponsibilities.value.split('\n').map(r => r.trim()).filter(Boolean),
    requirements: DOM.postJobRequirements.value.split('\n').map(r => r.trim()).filter(Boolean),
    benefits: DOM.postJobBenefits.value.split('\n').map(b => b.trim()).filter(Boolean)
  };

  if (editId) {
    jobData.id = editId;
  }

  DataStore.saveJob(jobData);
  DOM.postJobModal.classList.add('hidden');
  showToast(editId ? "Job posting updated successfully!" : "New job posted and live for applicants!", "success");

  refreshCurrentView();
}

// =========================================================================
// MODALS: ADMIN CANDIDATE REVIEW & ATS DRAWER
// =========================================================================
function openCandidateReviewModal(appId) {
  const app = DataStore.getApplicationById(appId);
  if (!app) return;

  const job = DataStore.getJobById(app.jobId) || { title: "Position" };

  DOM.reviewModalAppId.value = app.id;
  DOM.reviewModalAvatar.textContent = getInitials(app.candidateName);
  DOM.reviewModalName.textContent = app.candidateName;
  DOM.reviewModalJobTitle.textContent = `Applied for: ${job.title}`;

  DOM.reviewModalStageSelect.value = app.status;

  renderCandidateReviewStars(app.rating || 3);

  DOM.reviewModalEmail.textContent = app.candidateEmail || 'N/A';
  DOM.reviewModalPhone.textContent = app.candidatePhone || 'N/A';
  DOM.reviewModalLocationExp.textContent = `${app.candidateLocation || 'N/A'} • ${app.experienceYears || 0} years experience`;

  let linksHtml = '';
  if (app.linkedin) {
    linksHtml += `<a href="${escapeHtml(app.linkedin)}" target="_blank" rel="noopener" style="color: var(--primary-600); text-decoration: underline; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.25rem;">LinkedIn ${Icons.externalLink("w-3 h-3")}</a>`;
  }
  if (app.portfolio) {
    linksHtml += `<a href="${escapeHtml(app.portfolio)}" target="_blank" rel="noopener" style="color: var(--primary-600); text-decoration: underline; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.25rem;">Portfolio ${Icons.externalLink("w-3 h-3")}</a>`;
  }
  DOM.reviewModalLinks.innerHTML = linksHtml || '<span style="color: var(--text-muted); font-size: 0.85rem;">None provided</span>';

  DOM.reviewModalResumeName.textContent = app.resumeFileName || 'Resume.pdf';
  DOM.reviewModalResumeSize.textContent = `${app.resumeSize || '140 KB'} • Document`;
  DOM.reviewModalCoverLetter.textContent = app.coverLetter || 'No cover letter submitted.';

  if (app.interviewDetails) {
    DOM.schedInterviewDate.value = app.interviewDetails.scheduledDate || '';
    DOM.schedInterviewType.value = app.interviewDetails.type || '';
    DOM.schedInterviewers.value = app.interviewDetails.interviewer || '';
    DOM.schedMeetingLink.value = app.interviewDetails.meetingLink || '';
  } else {
    DOM.schedInterviewDate.value = '';
    DOM.schedInterviewType.value = '';
    DOM.schedInterviewers.value = '';
    DOM.schedMeetingLink.value = '';
  }

  renderAdminNotesFeed(app.adminNotes || []);

  DOM.candidateReviewModal.classList.remove('hidden');
}

function renderCandidateReviewStars(rating) {
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    starsHtml += `<span class="star-click" data-star="${i}" title="${i} stars">${Icons.star("w-5 h-5", filled)}</span>`;
  }
  DOM.reviewModalStarRating.innerHTML = starsHtml;

  DOM.reviewModalStarRating.querySelectorAll('.star-click').forEach(star => {
    star.addEventListener('click', () => {
      const newRating = parseInt(star.dataset.star);
      const appId = DOM.reviewModalAppId.value;
      DataStore.updateRating(appId, newRating);
      renderCandidateReviewStars(newRating);
      showToast(`Hiring rating updated to ${newRating} stars`, 'info');
      refreshCurrentView();
    });
  });
}

function handleStageSelectChange(e) {
  const newStage = e.target.value;
  const appId = DOM.reviewModalAppId.value;
  DataStore.updateApplicationStatus(appId, newStage);
  showToast(`Candidate stage moved to ${newStage}`, 'success');
  refreshCurrentView();
}

function handleSaveInterviewSchedule() {
  const appId = DOM.reviewModalAppId.value;
  const scheduledDate = DOM.schedInterviewDate.value;
  const type = DOM.schedInterviewType.value.trim();
  const interviewer = DOM.schedInterviewers.value.trim();
  const meetingLink = DOM.schedMeetingLink.value.trim();

  if (!scheduledDate) {
    showToast("Please pick an interview date and time.", "error");
    return;
  }

  const interviewDetails = { scheduledDate, type, interviewer, meetingLink };
  DataStore.updateApplicationStatus(appId, 'Interview', interviewDetails);
  DOM.reviewModalStageSelect.value = 'Interview';

  showToast("Interview scheduled and sent to candidate!", "success");
  refreshCurrentView();
}

function renderAdminNotesFeed(notes) {
  if (notes.length === 0) {
    DOM.reviewModalNotesFeed.innerHTML = `
      <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
        No internal notes recorded yet. Add your feedback below.
      </div>
    `;
    return;
  }

  DOM.reviewModalNotesFeed.innerHTML = notes.map(n => `
    <div style="background: white; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.6rem 0.8rem; font-size: 0.85rem;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.2rem;">
        <strong style="color: var(--primary-900); font-size: 0.8rem;">${escapeHtml(n.author || 'Recruiter')}</strong>
        <span style="font-size: 0.75rem; color: var(--text-light);">${new Date(n.date).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}</span>
      </div>
      <div style="color: #334155;">${escapeHtml(n.text)}</div>
    </div>
  `).join('');
}

function handleAddAdminNote() {
  const text = DOM.newAdminNoteInput.value.trim();
  if (!text) return;

  const appId = DOM.reviewModalAppId.value;
  const user = DataStore.getCurrentUser();
  DataStore.addAdminNote(appId, `${user.name} (${user.title || 'Recruiter'})`, text);

  DOM.newAdminNoteInput.value = '';
  const app = DataStore.getApplicationById(appId);
  renderAdminNotesFeed(app.adminNotes || []);
  showToast("Note added to candidate file", "info");
}

function handleDeleteCurrentCandidateApp() {
  const appId = DOM.reviewModalAppId.value;
  if (confirm("Are you sure you want to permanently delete this candidate application?")) {
    DataStore.deleteApplication(appId);
    DOM.candidateReviewModal.classList.add('hidden');
    showToast("Application deleted", "info");
    refreshCurrentView();
  }
}

// =========================================================================
// NOTIFICATIONS
// =========================================================================
function renderNotificationsList() {
  const allNotifs = DataStore.getNotifications();
  const user = DataStore.getCurrentUser();

  const filtered = allNotifs.filter(n => {
    if (state.currentRole === 'admin') return n.recipientRole === 'admin';
    return n.recipientRole === 'candidate' && n.recipientEmail === user.email;
  });

  if (filtered.length === 0) {
    DOM.notifListContainer.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No notifications. You are all caught up!
      </div>
    `;
    return;
  }

  DOM.notifListContainer.innerHTML = filtered.map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}" data-notif-id="${n.id}">
      <div style="color: var(--primary-600); margin-top: 2px;">
        ${Icons.bell("w-4 h-4")}
      </div>
      <div>
        <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-main); margin-bottom: 2px;">${escapeHtml(n.title)}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">${escapeHtml(n.message)}</div>
        <div style="font-size: 0.7rem; color: var(--text-light); margin-top: 4px;">${new Date(n.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    </div>
  `).join('');
}

// =========================================================================
// TOAST ALERTS & HELPERS
// =========================================================================
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconSvg = type === 'success'
    ? Icons.checkCircle("w-5 h-5")
    : (type === 'error' ? Icons.xCircle("w-5 h-5") : Icons.info("w-5 h-5"));

  toast.innerHTML = `
    <span style="color: ${type === 'success' ? '#10b981' : (type === 'error' ? '#ef4444' : 'var(--primary-600)')}">
      ${iconSvg}
    </span>
    <span style="flex: 1;">${escapeHtml(message)}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function renderStarRatingHtml(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += Icons.star("w-3.5 h-3.5", i <= rating);
  }
  return stars;
}

function getInitials(name = '') {
  return name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'JB';
}

function escapeHtml(text = '') {
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
}

window.switchTab = switchTab;
