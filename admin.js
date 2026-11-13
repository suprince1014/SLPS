/**
 * SLPS VAPI - EXECUTIVE ADMIN PORTAL CONTROLLER
 * Administrator: Suprince Kakadiya
 * Credentials: suprincehere / adminslps
 */

const ADMIN_CREDENTIALS = {
  username: "suprincehere",
  password: "adminslps"
};

const SESSION_KEY = "slps_admin_session";
const DIRECTORY_STORAGE_KEY = "slps_members_directory";

// In-memory member repository
let membersList = [];
let currentFilter = {
  search: "",
  city: "all",
  blood: "all",
  gender: "all"
};

// ==========================================================
// 1. SOUND EFFECT: HIGH-FIDELITY CHAT PING / POP CHIME
// ==========================================================
function playSuccessPing() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const now = ctx.currentTime;

    // Pop transient (E5 to A5 soft bubble chime)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(659.25, now);
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.05);
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.35);

    // High sparkling ping (E6 to A6 crystal chime)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1318.51, now + 0.06);
    osc2.frequency.exponentialRampToValueAtTime(1760, now + 0.14);
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.setValueAtTime(0.35, now + 0.06);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.06);
    osc2.stop(now + 0.55);
  } catch (err) {
    console.info("Audio playback unavailable:", err);
  }
}

// ==========================================================
// 2. DATA LOADER & SYNCHRONIZER
// ==========================================================
async function loadMembersData() {
  try {
    const res = await fetch(`members.json?_t=${Date.now()}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        membersList = data;
        localStorage.setItem(DIRECTORY_STORAGE_KEY, JSON.stringify(data));
        return data;
      }
    }
  } catch (err) {
    console.info("Falling back to local storage:", err.message);
  }

  // Local storage fallback
  try {
    const raw = localStorage.getItem(DIRECTORY_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        membersList = parsed;
        return parsed;
      }
    }
  } catch (e) {}

  return [];
}

function saveMembersData(newList) {
  membersList = newList;
  localStorage.setItem(DIRECTORY_STORAGE_KEY, JSON.stringify(newList));
}

// ==========================================================
// 3. UI TOAST NOTIFICATION
// ==========================================================
function showToast(message) {
  const toast = document.querySelector("#admin-toast");
  const msgEl = document.querySelector("#admin-toast-msg");
  if (!toast || !msgEl) return;
  msgEl.textContent = message;
  toast.classList.add("is-show");
  setTimeout(() => {
    toast.classList.remove("is-show");
  }, 3200);
}

// ==========================================================
// 4. AUTHENTICATION CONTROLLER
// ==========================================================
function checkSession() {
  const isAuth = sessionStorage.getItem(SESSION_KEY) === "active";
  const authScreen = document.querySelector("#admin-auth-screen");
  const dashboardScreen = document.querySelector("#admin-dashboard-screen");

  if (isAuth) {
    if (authScreen) authScreen.hidden = true;
    if (dashboardScreen) dashboardScreen.hidden = false;
    initDashboard();
  } else {
    if (authScreen) authScreen.hidden = false;
    if (dashboardScreen) dashboardScreen.hidden = true;
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const userEl = document.querySelector("#admin-user");
  const passEl = document.querySelector("#admin-pass");
  const errorBox = document.querySelector("#admin-error");
  const authCardForm = document.querySelector("#admin-auth-form-wrap");
  const successState = document.querySelector("#admin-success-state");

  const inputUser = (userEl?.value || "").trim();
  const inputPass = (passEl?.value || "").trim();

  if (inputUser !== ADMIN_CREDENTIALS.username || inputPass !== ADMIN_CREDENTIALS.password) {
    if (errorBox) {
      errorBox.hidden = false;
      errorBox.textContent = "Invalid username or password. Please try again.";
      errorBox.style.animation = "none";
      void errorBox.offsetWidth;
      errorBox.style.animation = "adminShake 0.4s ease";
    }
    return;
  }

  // Clear any errors
  if (errorBox) errorBox.hidden = true;

  // 1. Hide form fields & buttons
  if (authCardForm) authCardForm.hidden = true;

  // 2. Show the exact same correct animation sign (NO TEXT on it)
  if (successState) successState.hidden = false;

  // 3. Play the crisp audio ping/pop sound effect
  playSuccessPing();

  // 4. Save session and transition to admin dashboard
  sessionStorage.setItem(SESSION_KEY, "active");

  setTimeout(() => {
    checkSession();
  }, 950);
}

function handleSignOut() {
  sessionStorage.removeItem(SESSION_KEY);
  const authCardForm = document.querySelector("#admin-auth-form-wrap");
  const successState = document.querySelector("#admin-success-state");
  const userEl = document.querySelector("#admin-user");
  const passEl = document.querySelector("#admin-pass");
  if (authCardForm) authCardForm.hidden = false;
  if (successState) successState.hidden = true;
  if (userEl) userEl.value = "";
  if (passEl) passEl.value = "";
  checkSession();
  showToast("Administrator signed out successfully.");
}

// ==========================================================
// 5. MASTER DASHBOARD RENDERER & STATS
// ==========================================================
function updateDashboardKPIs() {
  const kpiTotal = document.querySelector("#kpi-total-members");
  const kpiVerified = document.querySelector("#kpi-verified-members");
  const kpiBlood = document.querySelector("#kpi-blood-donors");
  const kpiBiz = document.querySelector("#kpi-total-biz");
  const kpiJobs = document.querySelector("#kpi-total-jobs");
  const kpiMatri = document.querySelector("#kpi-total-matri");

  if (kpiTotal) kpiTotal.textContent = membersList.length;
  if (kpiVerified) kpiVerified.textContent = membersList.filter((m) => m.verified).length;
  if (kpiBlood) kpiBlood.textContent = membersList.filter((m) => m.blood).length;

  // Read secondary registries from localStorage if available
  try {
    const rawBiz = localStorage.getItem("slps_businesses");
    if (kpiBiz) kpiBiz.textContent = rawBiz ? JSON.parse(rawBiz).length : 5;
    const rawJobs = localStorage.getItem("slps_job_profiles");
    if (kpiJobs) kpiJobs.textContent = rawJobs ? JSON.parse(rawJobs).length : 4;
    const rawMatri = localStorage.getItem("slps_matrimonial_profiles");
    if (kpiMatri) kpiMatri.textContent = rawMatri ? JSON.parse(rawMatri).length : 6;
  } catch (e) {}
}

function populateCityFilter() {
  const citySelect = document.querySelector("#filter-city");
  if (!citySelect) return;
  const currentVal = citySelect.value;
  const cities = Array.from(new Set(membersList.map((m) => m.city).filter(Boolean))).sort();

  citySelect.innerHTML = `<option value="all">All Cities (${membersList.length})</option>` +
    cities.map((c) => `<option value="${c}">${c}</option>`).join("");
  citySelect.value = currentVal || "all";
}

function renderMembersTable() {
  const tbody = document.querySelector("#admin-members-tbody");
  const countEl = document.querySelector("#filtered-count-tag");
  if (!tbody) return;

  const q = currentFilter.search.toLowerCase();
  const filtered = membersList.filter((m) => {
    const matchSearch =
      !q ||
      (m.name && m.name.toLowerCase().includes(q)) ||
      (m.id && m.id.toLowerCase().includes(q)) ||
      (m.occupation && m.occupation.toLowerCase().includes(q)) ||
      (m.phone && m.phone.toLowerCase().includes(q)) ||
      (m.city && m.city.toLowerCase().includes(q));

    const matchCity = currentFilter.city === "all" || m.city === currentFilter.city;
    const matchBlood = currentFilter.blood === "all" || m.blood === currentFilter.blood;
    const matchGender = currentFilter.gender === "all" || m.gender === currentFilter.gender;

    return matchSearch && matchCity && matchBlood && matchGender;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${membersList.length} members`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:36px; color:var(--adm-muted);">
          No member records matched your active filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered
    .map((m) => {
      const initials = (m.name || "M")
        .split(" ")
        .map((x) => x[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

      const birthYear = m.dob ? new Date(m.dob).getFullYear() : null;
      const age = birthYear ? new Date().getFullYear() - birthYear : "";

      return `
      <tr data-id="${m.id}">
        <td>
          <span class="member-id-badge">${m.id}</span>
        </td>
        <td>
          <div class="member-name-cell">
            <strong>${m.name}</strong>
            <small>${m.gender || "Member"}${age ? ` &bull; ${age} yrs` : ""}</small>
          </div>
        </td>
        <td>
          <span class="blood-badge">${m.blood || "N/A"}</span>
        </td>
        <td>
          <strong>${m.city || "Vapi"}</strong>
          <small style="display:block; color:var(--adm-muted); font-size:11px;">${m.district || "Valsad"}</small>
        </td>
        <td>${m.occupation || "Member"}</td>
        <td>
          <div>${m.phone || "—"}</div>
          <small style="color:var(--adm-muted); font-size:11px;">${m.email || ""}</small>
        </td>
        <td>
          <span class="status-tag-verified">
            <span style="width:6px; height:6px; border-radius:50%; background:#2e7d32;"></span>
            ${m.verified ? "Verified" : "Pending"}
          </span>
        </td>
        <td>
          <div class="action-btn-group">
            <button class="table-btn view-dossier-btn" data-id="${m.id}" title="View Every Information">
              👁️ View Info
            </button>
            <button class="table-btn edit-member-btn" data-id="${m.id}" title="Edit Member">
              ✏️
            </button>
            <button class="table-btn table-btn-danger delete-member-btn" data-id="${m.id}" title="Delete Record">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
    })
    .join("");

  // Attach Table Action Handlers
  tbody.querySelectorAll(".view-dossier-btn").forEach((btn) => {
    btn.onclick = () => openMemberDossier(btn.dataset.id);
  });

  tbody.querySelectorAll(".edit-member-btn").forEach((btn) => {
    btn.onclick = () => openEditMemberModal(btn.dataset.id);
  });

  tbody.querySelectorAll(".delete-member-btn").forEach((btn) => {
    btn.onclick = () => handleDeleteMember(btn.dataset.id);
  });
}

// ==========================================================
// 6. VIEW EVERY INFORMATION: FULL MEMBER DOSSIER MODAL
// ==========================================================
function openMemberDossier(memberId) {
  const m = membersList.find((x) => x.id === memberId);
  if (!m) return;

  const modal = document.querySelector("#admin-dossier-modal");
  const content = document.querySelector("#dossier-modal-content");
  if (!modal || !content) return;

  const initials = (m.name || "M")
    .split(" ")
    .map((x) => x[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const birthYear = m.dob ? new Date(m.dob).getFullYear() : null;
  const age = birthYear ? new Date().getFullYear() - birthYear : "—";

  content.innerHTML = `
    <div class="dossier-hero">
      <div class="dossier-avatar">${initials}</div>
      <div class="dossier-hero-info">
        <h4>${m.name}</h4>
        <div style="display:flex; gap:8px; align-items:center;">
          <span class="member-id-badge">${m.id}</span>
          <span class="status-tag-verified">✓ Verified Life Member</span>
        </div>
      </div>
    </div>

    <div class="dossier-section-title">1. Personal Demographics</div>
    <div class="dossier-grid">
      <div class="dossier-item">
        <span class="dossier-label">Full Legal Name</span>
        <span class="dossier-val">${m.name}</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Member Identification ID</span>
        <span class="dossier-val">${m.id}</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Gender</span>
        <span class="dossier-val">${m.gender || "Male"}</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Date of Birth &amp; Age</span>
        <span class="dossier-val">${m.dob || "—"} (${age} years old)</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Blood Group</span>
        <span class="dossier-val"><strong style="color:#b71c1c;">${m.blood || "N/A"}</strong> (Emergency Donor Network)</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Profession / Occupation</span>
        <span class="dossier-val">${m.occupation || "Not Specified"}</span>
      </div>
    </div>

    <div class="dossier-section-title">2. Contact &amp; Communication</div>
    <div class="dossier-grid">
      <div class="dossier-item">
        <span class="dossier-label">Primary Mobile Phone</span>
        <span class="dossier-val"><a href="tel:${m.phone}" style="color:var(--adm-green); font-weight:700;">${m.phone || "—"}</a></span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Official Email Address</span>
        <span class="dossier-val">${m.email || `${m.id.toLowerCase()}@slpsvapi.org`}</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Administrative Chapter</span>
        <span class="dossier-val">Vapi &amp; Valsad District Chapter</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Samaj Membership Type</span>
        <span class="dossier-val">Active Verified Life Member</span>
      </div>
    </div>

    <div class="dossier-section-title">3. Permanent Residential Address</div>
    <div class="dossier-grid">
      <div class="dossier-item" style="grid-column: 1 / -1;">
        <span class="dossier-label">Residential Address (South Gujarat)</span>
        <span class="dossier-val">Near Sardar Chowk, ${m.city || "Vapi"}, Dist. ${m.district || "Valsad"}, Gujarat - 396191</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Current City</span>
        <span class="dossier-val">${m.city || "Vapi"}</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">District &amp; State</span>
        <span class="dossier-val">${m.district || "Valsad"}, Gujarat</span>
      </div>
    </div>

    <div class="dossier-section-title">4. Native Saurashtra Homeland</div>
    <div class="dossier-grid">
      <div class="dossier-item">
        <span class="dossier-label">Native Village / Homeland</span>
        <span class="dossier-val">Saurashtra Leuva Patel Homeland</span>
      </div>
      <div class="dossier-item">
        <span class="dossier-label">Homeland Region</span>
        <span class="dossier-val">Saurashtra, Gujarat</span>
      </div>
    </div>

    <div style="margin-top:20px; padding-top:14px; border-top:1px solid var(--adm-line); display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:12px; color:var(--adm-muted);">SLPS Official Member Dossier Record</span>
      <div style="display:flex; gap:8px;">
        <button type="button" class="admin-btn admin-btn-primary" onclick="generateSingleMemberPdf('${m.id}')">
          <span>📄 Download Dossier PDF</span>
        </button>
      </div>
    </div>
  `;

  modal.hidden = false;
}

// ==========================================================
// 7. ADD & EDIT MEMBER MODALS
// ==========================================================
function openAddMemberModal() {
  const modal = document.querySelector("#admin-edit-modal");
  const title = document.querySelector("#edit-modal-title");
  const form = document.querySelector("#admin-member-form");
  if (!modal || !form) return;

  title.textContent = "Add New Community Member";
  form.reset();

  // Auto generate next ID
  const maxNum = membersList.reduce((max, m) => {
    const num = parseInt((m.id || "").replace(/\D/g, ""), 10);
    return !isNaN(num) && num > max ? num : max;
  }, 1012);

  document.querySelector("#edit-member-id").value = `SLPS-2026-${maxNum + 1}`;
  document.querySelector("#edit-member-mode").value = "add";
  modal.hidden = false;
}

function openEditMemberModal(memberId) {
  const m = membersList.find((x) => x.id === memberId);
  if (!m) return;

  const modal = document.querySelector("#admin-edit-modal");
  const title = document.querySelector("#edit-modal-title");
  if (!modal) return;

  title.textContent = `Edit Member: ${m.name}`;
  document.querySelector("#edit-member-mode").value = "edit";
  document.querySelector("#edit-member-id").value = m.id;
  document.querySelector("#edit-member-name").value = m.name || "";
  document.querySelector("#edit-member-gender").value = m.gender || "Male";
  document.querySelector("#edit-member-dob").value = m.dob || "";
  document.querySelector("#edit-member-blood").value = m.blood || "B+";
  document.querySelector("#edit-member-city").value = m.city || "Vapi";
  document.querySelector("#edit-member-district").value = m.district || "Valsad";
  document.querySelector("#edit-member-occ").value = m.occupation || "";
  document.querySelector("#edit-member-phone").value = m.phone || "";
  document.querySelector("#edit-member-email").value = m.email || "";

  modal.hidden = false;
}

function handleSaveMember(e) {
  e.preventDefault();
  const mode = document.querySelector("#edit-member-mode").value;
  const id = document.querySelector("#edit-member-id").value.trim();
  const name = document.querySelector("#edit-member-name").value.trim();
  const gender = document.querySelector("#edit-member-gender").value;
  const dob = document.querySelector("#edit-member-dob").value;
  const blood = document.querySelector("#edit-member-blood").value;
  const city = document.querySelector("#edit-member-city").value.trim();
  const district = document.querySelector("#edit-member-district").value.trim() || "Valsad";
  const occupation = document.querySelector("#edit-member-occ").value.trim();
  const phone = document.querySelector("#edit-member-phone").value.trim();
  const email = document.querySelector("#edit-member-email").value.trim();

  if (!id || !name) {
    alert("Please provide both Member ID and Full Name.");
    return;
  }

  const newEntry = {
    id,
    name,
    gender,
    dob,
    blood,
    city,
    district,
    occupation,
    phone,
    email,
    verified: true
  };

  if (mode === "add") {
    membersList.unshift(newEntry);
    showToast(`Added member ${name} (${id})`);
  } else {
    const idx = membersList.findIndex((x) => x.id === id);
    if (idx >= 0) {
      membersList[idx] = newEntry;
      showToast(`Updated member ${name}`);
    }
  }

  saveMembersData(membersList);
  updateDashboardKPIs();
  populateCityFilter();
  renderMembersTable();

  document.querySelector("#admin-edit-modal").hidden = true;
}

function handleDeleteMember(memberId) {
  const m = membersList.find((x) => x.id === memberId);
  if (!m) return;

  const confirmed = confirm(`Are you sure you want to remove member "${m.name}" (${m.id}) from the directory?`);
  if (!confirmed) return;

  membersList = membersList.filter((x) => x.id !== memberId);
  saveMembersData(membersList);
  updateDashboardKPIs();
  populateCityFilter();
  renderMembersTable();
  showToast(`Member ${m.name} removed successfully.`);
}

// ==========================================================
// 8. EXPORT MEMBERS DIRECTORY AS PDF ("WHOLE ENTRY OF MEMBERS")
// ==========================================================
function generateMembersPdf() {
  if (!membersList || membersList.length === 0) {
    showToast("No member records available to generate PDF.");
    return;
  }

  showToast("Compiling official members PDF directory...");

  // Try jsPDF + AutoTable
  const jsPDFConstructor = window.jspdf ? window.jspdf.jsPDF : (window.jsPDF || null);

  if (typeof jsPDFConstructor === "function") {
    try {
      // Landscape A4: 841.89 pt x 595.28 pt
      const doc = new jsPDFConstructor({
        orientation: "landscape",
        unit: "pt",
        format: "a4",
      });

      const primaryColor = [30, 58, 39]; // #1e3a27 - SLPS Brand Green
      const secondaryColor = [40, 84, 52]; // #285434
      const terracottaColor = [186, 73, 44]; // #ba492c
      const lightBgColor = [248, 247, 242]; // #f8f7f2

      // Top Header decorative bar
      doc.setFillColor(...primaryColor);
      doc.rect(0, 0, 842, 8, "F");

      // Title & Subtitle
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(...primaryColor);
      doc.text("SAURASHTRA LEUVA PATEL SAMAJ (SLPS) - VAPI", 40, 36);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...secondaryColor);
      doc.text("Official Community Members Master Registry & Directory", 40, 52);

      // Meta info on the right
      const now = new Date();
      const dateStr =
        now.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) +
        " • " +
        now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 110, 100);
      doc.text(`Generated: ${dateStr}`, 802, 34, { align: "right" });
      doc.text(`Administrator: Suprince Kakadiya`, 802, 48, { align: "right" });
      doc.text(`Total Records: ${membersList.length} Verified Members`, 802, 62, { align: "right" });

      // Subtle horizontal divider rule
      doc.setDrawColor(210, 218, 212);
      doc.setLineWidth(0.8);
      doc.line(40, 70, 802, 70);

      // Section 1 Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...primaryColor);
      doc.text("SECTION I: MASTER MEMBERSHIP REGISTER", 40, 88);

      // Table 1: Master Directory Grid
      const headers = [
        [
          "#",
          "Member ID",
          "Full Legal Name",
          "Gender",
          "Age / DOB",
          "Blood",
          "Occupation",
          "City & District",
          "Mobile Phone",
          "Email Address",
          "Status",
        ],
      ];

      const body = membersList.map((m, idx) => {
        let ageStr = "—";
        if (m.dob) {
          const birthYear = new Date(m.dob).getFullYear();
          if (!isNaN(birthYear)) {
            const age = 2026 - birthYear;
            ageStr = `${age} yrs (${m.dob})`;
          }
        }
        return [
          String(idx + 1),
          m.id || "—",
          m.name || "—",
          m.gender || "—",
          ageStr,
          m.blood || "—",
          m.occupation || "—",
          `${m.city || "—"}, ${m.district || "—"}`,
          m.phone || "—",
          m.email || "—",
          m.verified !== false ? "Verified Life" : "Pending",
        ];
      });

      // AutoTable render for Master Register
      const autoTableFn = doc.autoTable || (window.jspdf && window.jspdf.autoTable);
      if (typeof autoTableFn === "function") {
        autoTableFn.call(doc, {
          head: headers,
          body: body,
          startY: 96,
          margin: { top: 75, right: 40, bottom: 42, left: 40 },
          styles: {
            font: "helvetica",
            fontSize: 8.5,
            cellPadding: { top: 5, right: 5, bottom: 5, left: 5 },
            textColor: [38, 55, 46],
            lineColor: [225, 232, 226],
            lineWidth: 0.5,
            valign: "middle",
          },
          headStyles: {
            fillColor: primaryColor,
            textColor: [255, 255, 255],
            fontStyle: "bold",
            fontSize: 8.5,
            halign: "left",
          },
          alternateRowStyles: {
            fillColor: [250, 251, 249],
          },
          columnStyles: {
            0: { halign: "center", cellWidth: 24 }, // #
            1: { halign: "center", fontStyle: "bold", cellWidth: 76 }, // Member ID
            2: { fontStyle: "bold", cellWidth: 122 }, // Full Name
            3: { cellWidth: 44 }, // Gender
            4: { cellWidth: 80 }, // Age / DOB
            5: { halign: "center", fontStyle: "bold", textColor: [186, 73, 44], cellWidth: 38 }, // Blood
            6: { cellWidth: 94 }, // Occupation
            7: { cellWidth: 76 }, // City
            8: { cellWidth: 76 }, // Phone
            9: { cellWidth: 104 }, // Email
            10: { halign: "center", fontStyle: "bold", textColor: [40, 84, 52], cellWidth: 48 }, // Status
          },
          didDrawPage: function (data) {
            const pageSize = doc.internal.pageSize;
            const pageHeight = pageSize.height || pageSize.getHeight();
            const pageWidth = pageSize.width || pageSize.getWidth();

            doc.setDrawColor(220, 226, 221);
            doc.setLineWidth(0.5);
            doc.line(40, pageHeight - 30, pageWidth - 40, pageHeight - 30);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.setTextColor(120, 130, 122);
            doc.text(
              "Confidential Document • Saurashtra Leuva Patel Samaj (SLPS) Community Administration Only",
              40,
              pageHeight - 16
            );

            const pageNumber = data.pageNumber;
            const pageCount = doc.internal.getNumberOfPages();
            doc.text(`Page ${pageNumber} of ${pageCount}`, pageWidth - 40, pageHeight - 16, { align: "right" });
          },
        });

        // Now add Section 2: Detailed Member Entry Profiles (Dossiers)
        doc.addPage();
        const startY2 = 45;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(...primaryColor);
        doc.text("SECTION II: COMPLETE MEMBER ENTRY DOSSIERS", 40, startY2);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(100, 110, 100);
        doc.text(
          "Unabridged demographic, professional, contact, and emergency circle records for each registered life member.",
          40,
          startY2 + 15
        );

        const dossierHeaders = [
          [
            "Member Identification",
            "Personal Demographics",
            "Occupation & Residence",
            "Direct Communication",
            "Membership Status",
          ],
        ];

        const dossierBody = membersList.map((m) => {
          let ageStr = "—";
          if (m.dob) {
            const birthYear = new Date(m.dob).getFullYear();
            if (!isNaN(birthYear)) {
              const age = 2026 - birthYear;
              ageStr = `${age} years old`;
            }
          }
          return [
            `${m.id}\n${m.name}`,
            `Gender: ${m.gender || "—"}\nDOB: ${m.dob || "—"} (${ageStr})\nBlood: ${m.blood || "—"}`,
            `Profession: ${m.occupation || "—"}\nCity: ${m.city || "—"}\nDistrict: ${m.district || "Valsad"}`,
            `Mobile: ${m.phone || "—"}\nEmail: ${m.email || "—"}\nEmergency: Active Donor`,
            `✓ Verified Life Member\nChapter: Vapi & Valsad\nID Card: Issued & Active`,
          ];
        });

        autoTableFn.call(doc, {
          head: dossierHeaders,
          body: dossierBody,
          startY: startY2 + 25,
          margin: { top: 50, right: 40, bottom: 42, left: 40 },
          styles: {
            font: "helvetica",
            fontSize: 8.5,
            cellPadding: { top: 6, right: 6, bottom: 6, left: 6 },
            textColor: [38, 55, 46],
            lineColor: [225, 232, 226],
            lineWidth: 0.5,
            valign: "top",
          },
          headStyles: {
            fillColor: secondaryColor,
            textColor: [255, 255, 255],
            fontStyle: "bold",
            fontSize: 9,
            halign: "left",
          },
          alternateRowStyles: {
            fillColor: [250, 251, 249],
          },
          columnStyles: {
            0: { fontStyle: "bold", cellWidth: 140 },
            1: { cellWidth: 155 },
            2: { cellWidth: 160 },
            3: { cellWidth: 175 },
            4: { fontStyle: "bold", textColor: [40, 84, 52], cellWidth: 132 },
          },
          didDrawPage: function (data) {
            const pageSize = doc.internal.pageSize;
            const pageHeight = pageSize.height || pageSize.getHeight();
            const pageWidth = pageSize.width || pageSize.getWidth();

            doc.setDrawColor(220, 226, 221);
            doc.setLineWidth(0.5);
            doc.line(40, pageHeight - 30, pageWidth - 40, pageHeight - 30);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.setTextColor(120, 130, 122);
            doc.text(
              "Confidential Document • Saurashtra Leuva Patel Samaj (SLPS) Community Administration Only",
              40,
              pageHeight - 16
            );

            const pageNumber = data.pageNumber;
            const pageCount = doc.internal.getNumberOfPages();
            doc.text(`Page ${pageNumber} of ${pageCount}`, pageWidth - 40, pageHeight - 16, { align: "right" });
          },
        });

        // Trigger PDF file download
        doc.save("SLPS_Members_Registry_2026.pdf");
        showToast("Official PDF downloaded: SLPS_Members_Registry_2026.pdf");
        return;
      }
    } catch (pdfErr) {
      console.warn("jsPDF compilation error, falling back to printable view:", pdfErr);
    }
  }

  // Universal Fallback: Formatted Printable Report (Print to PDF)
  openPrintableMembersReport();
}

function openPrintableMembersReport() {
  const printWin = window.open("", "_blank");
  if (!printWin) {
    showToast("Pop-up blocked. Please allow pop-ups to generate PDF.");
    return;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const rowsHtml = membersList
    .map((m, idx) => {
      const birthYear = m.dob ? new Date(m.dob).getFullYear() : null;
      const age = birthYear ? 2026 - birthYear : "—";
      return `
      <tr>
        <td style="text-align:center;">${idx + 1}</td>
        <td><strong>${m.id}</strong></td>
        <td><strong>${m.name}</strong></td>
        <td>${m.gender || "—"}</td>
        <td>${age} yrs (${m.dob || "—"})</td>
        <td style="text-align:center; color:#b71c1c; font-weight:700;">${m.blood || "—"}</td>
        <td>${m.occupation || "—"}</td>
        <td>${m.city || "—"}, ${m.district || "—"}</td>
        <td>${m.phone || "—"}</td>
        <td>${m.email || "—"}</td>
        <td style="text-align:center; color:#2e7d32; font-weight:700;">Verified Life</td>
      </tr>
    `;
    })
    .join("");

  const dossiersHtml = membersList
    .map((m) => {
      const birthYear = m.dob ? new Date(m.dob).getFullYear() : null;
      const age = birthYear ? 2026 - birthYear : "—";
      return `
      <div style="border:1px solid #d4ddd6; border-radius:6px; padding:12px; margin-bottom:12px; page-break-inside:avoid; background:#fff;">
        <div style="display:flex; justify-content:space-between; border-bottom:1px solid #eee; padding-bottom:6px; margin-bottom:8px;">
          <div><strong style="font-size:14px; color:#1e3a27;">${m.name}</strong> <span style="font-size:12px; color:#555; margin-left:8px;">ID: ${m.id}</span></div>
          <span style="color:#2e7d32; font-weight:700; font-size:12px;">✓ Verified Life Member</span>
        </div>
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:8px; font-size:11px;">
          <div><strong>Gender:</strong> ${m.gender || "—"}</div>
          <div><strong>DOB & Age:</strong> ${m.dob || "—"} (${age} yrs)</div>
          <div><strong>Blood Group:</strong> <span style="color:#b71c1c; font-weight:700;">${m.blood || "—"}</span></div>
          <div><strong>Occupation:</strong> ${m.occupation || "—"}</div>
          <div><strong>Phone:</strong> ${m.phone || "—"}</div>
          <div><strong>Email:</strong> ${m.email || "—"}</div>
          <div><strong>City & District:</strong> ${m.city || "—"}, ${m.district || "—"}</div>
          <div><strong>Chapter:</strong> Vapi & Valsad</div>
        </div>
      </div>
    `;
    })
    .join("");

  printWin.document.write(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>SLPS Members Registry 2026 - Official Report</title>
        <style>
          @page { size: A4 landscape; margin: 10mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #222; margin: 0; padding: 15px; font-size: 11px; }
          .header { border-bottom: 2px solid #285434; padding-bottom: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-end; }
          .title { font-size: 18px; font-weight: 700; color: #1e3a27; }
          .subtitle { font-size: 12px; color: #285434; font-weight: 600; margin-top: 3px; }
          .meta { font-size: 10px; color: #666; text-align: right; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 10px; }
          th, td { border: 1px solid #d4ddd6; padding: 5px 6px; text-align: left; }
          th { background: #1e3a27; color: #fff; font-weight: 600; }
          tr:nth-child(even) { background: #fbfbf9; }
          .section-title { font-size: 13px; font-weight: 700; color: #1e3a27; margin: 16px 0 8px; border-bottom: 1px solid #ccc; padding-bottom: 4px; }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom:15px; background:#e8f5e9; border:1px solid #c8e6c9; padding:10px 14px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
          <span style="color:#2e7d32; font-weight:600;">Print or Save as PDF using your browser dialog (Ctrl+P / Cmd+P)</span>
          <button onclick="window.print()" style="padding:6px 16px; background:#285434; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">🖨️ Print / Save as PDF</button>
        </div>
        <div class="header">
          <div>
            <div class="title">SAURASHTRA LEUVA PATEL SAMAJ (SLPS) - VAPI</div>
            <div class="subtitle">Official Community Members Master Registry &amp; Directory</div>
          </div>
          <div class="meta">
            <div><strong>Generated:</strong> ${dateStr}</div>
            <div><strong>Administrator:</strong> Suprince Kakadiya</div>
            <div><strong>Total Records:</strong> ${membersList.length} Verified Life Members</div>
          </div>
        </div>

        <div class="section-title">SECTION I: MASTER MEMBERSHIP REGISTER</div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Member ID</th>
              <th>Full Legal Name</th>
              <th>Gender</th>
              <th>Age &amp; DOB</th>
              <th>Blood</th>
              <th>Occupation</th>
              <th>City &amp; District</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <div style="page-break-before: always;"></div>
        <div class="section-title">SECTION II: COMPLETE MEMBER ENTRY DOSSIERS</div>
        ${dossiersHtml}
      </body>
    </html>
  `);
  printWin.document.close();
  setTimeout(() => {
    printWin.print();
  }, 400);
}

// ==========================================================
// 8B. EXPORT SINGLE MEMBER DOSSIER AS PDF
// ==========================================================
function generateSingleMemberPdf(memberId) {
  const m = membersList.find((x) => x.id === memberId);
  if (!m) return;

  const jsPDFConstructor = window.jspdf ? window.jspdf.jsPDF : (window.jsPDF || null);
  if (typeof jsPDFConstructor !== "function") {
    window.print();
    return;
  }

  try {
    const doc = new jsPDFConstructor({ orientation: "portrait", unit: "pt", format: "a4" });
    const primaryColor = [30, 58, 39];
    const secondaryColor = [40, 84, 52];

    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 595, 8, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text("SAURASHTRA LEUVA PATEL SAMAJ (SLPS)", 40, 42);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(...secondaryColor);
    doc.text("Official Verified Member Dossier & Certificate of Registration", 40, 58);

    doc.setDrawColor(210, 218, 212);
    doc.setLineWidth(0.8);
    doc.line(40, 72, 555, 72);

    const birthYear = m.dob ? new Date(m.dob).getFullYear() : null;
    const age = birthYear ? 2026 - birthYear : "—";

    const autoTableFn = doc.autoTable || (window.jspdf && window.jspdf.autoTable);
    if (typeof autoTableFn === "function") {
      autoTableFn.call(doc, {
        head: [["Category", "Official Recorded Information"]],
        body: [
          ["Membership Identification", m.id || "—"],
          ["Full Legal Name", m.name || "—"],
          ["Gender", m.gender || "—"],
          ["Date of Birth & Age", `${m.dob || "—"} (${age} years old)`],
          ["Blood Group", `${m.blood || "—"} (Emergency Donor Registry)`],
          ["Profession / Occupation", m.occupation || "—"],
          ["Residential City & District", `${m.city || "—"}, ${m.district || "Valsad"}, Gujarat`],
          ["Primary Mobile Contact", m.phone || "—"],
          ["Official Email Address", m.email || "—"],
          ["Administrative Chapter", "Vapi & Valsad District Chapter"],
          ["Community Membership Status", "✓ Verified Life Member (Active)"],
        ],
        startY: 88,
        margin: { top: 88, right: 40, bottom: 50, left: 40 },
        styles: {
          font: "helvetica",
          fontSize: 9.5,
          cellPadding: 8,
          textColor: [38, 55, 46],
          lineColor: [225, 232, 226],
          lineWidth: 0.5,
        },
        headStyles: { fillColor: primaryColor, textColor: [255, 255, 255], fontStyle: "bold" },
        columnStyles: {
          0: { fontStyle: "bold", cellWidth: 160, fillColor: [248, 249, 247] },
          1: { cellWidth: 355 },
        },
      });

      const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 30 : 400;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...primaryColor);
      doc.text("Official Verification Authority", 40, finalY);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(100, 110, 100);
      doc.text("Administrator: Suprince Kakadiya", 40, finalY + 14);
      doc.text("Saurashtra Leuva Patel Samaj (SLPS) Central Committee", 40, finalY + 26);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(40, 84, 52);
      doc.text("[ SEAL: VERIFIED LIFE MEMBER ]", 380, finalY + 20);

      doc.save(`SLPS_Member_${m.id}_Dossier.pdf`);
      showToast(`Member PDF downloaded: SLPS_Member_${m.id}_Dossier.pdf`);
    }
  } catch (e) {
    console.error("Single member PDF error:", e);
    window.print();
  }
}

// ==========================================================
// 8C. CATEGORY STATE & SECONDARY MODULE DATA (LIVE SYNC)
// ==========================================================
let currentAdminCategory = "members";
let announcementsList = [];
let businessesList = [];
let jobsList = [];
let matrimonialList = [];

const DEFAULT_ANNOUNCEMENTS = [
  {
    id: "ANN-01",
    title: "Mega Blood Donation & Free Medical Health Screening Camp",
    priority: "Normal",
    pinned: true,
    published_by: "Medical Aid Committee",
    published_date: "11 Nov 2026",
    description: "Annual voluntary blood donation drive and comprehensive medical health screening organized at Samaj Bhavan in association with Haria L.G. Rotary Hospital, Vapi. All youth members and families are cordially invited to participate.",
    attachment: "Blood_Camp_Notice_11Nov.pdf"
  },
  {
    id: "ANN-02",
    title: "SLPS Annual Sneha Milan & Cultural Night 2026 - Registration Open",
    priority: "Important",
    pinned: true,
    published_by: "Central Executive Committee",
    published_date: "08 Nov 2026",
    description: "We cordially invite all Leuva Patel community families to the Grand Sneha Milan & Cultural Festival on 28th November 2026 at Vapi Samaj Bhavan. Features traditional Kathiyawadi community dinner, folk dance, and student felicitation.",
    attachment: "Sneha_Milan_Schedule_2026.pdf"
  },
  {
    id: "ANN-03",
    title: "Higher Education Merit Scholarships 2026-27 Applications Invited",
    priority: "Important",
    pinned: false,
    published_by: "Shreeji Education Trust",
    published_date: "01 Nov 2026",
    description: "Applications are open for meritorious students scoring above 80% in 10th/12th or pursuing professional degrees (Engineering, Medical, Law, CA). Submit academic records online by 15th December 2026.",
    attachment: "Scholarship_Criteria_2026.pdf"
  },
  {
    id: "ANN-04",
    title: "Samaj Bhavan Renovated AC Banquet Hall Available for Booking",
    priority: "Normal",
    pinned: false,
    published_by: "Property & Infrastructure Committee",
    published_date: "25 Oct 2026",
    description: "The newly renovated air-conditioned Main Banquet Hall (capacity 1,200 persons) and dining pavilions are now open for family functions and weddings with 40% subsidized tariff for verified Samaj life members.",
    attachment: "Hall_Booking_Tariff_2026.pdf"
  }
];

const DEFAULT_BUSINESSES = [
  {
    id: "BIZ-101",
    name: "Kakadiya Textiles & Exports",
    category: "Textiles & Fabrics",
    owner: "Vijaybhai M. Kakadiya",
    phone: "+91 98251 12345",
    email: "vijay.kakadiya@gmail.com",
    city: "GIDC Phase 2, Vapi",
    description: "Leading manufacturer and exporter of premium synthetic grey fabrics, jacquard sarees, and industrial packaging textiles."
  },
  {
    id: "BIZ-102",
    name: "Savani Precision Tools & Dies",
    category: "Manufacturing & Tooling",
    owner: "Rameshbhai B. Savani",
    phone: "+91 98795 44321",
    email: "ramesh.savani@gmail.com",
    city: "GIDC Phase 1, Vapi",
    description: "High-precision CNC machined press tools, injection molds, and stamping dies for automobile and engineering assemblies."
  },
  {
    id: "BIZ-103",
    name: "Vaghani Infra & Developers",
    category: "Real Estate & Construction",
    owner: "Mansukhbhai Vaghani",
    phone: "+91 98241 55667",
    email: "mansukh.vaghani@gmail.com",
    city: "Tithal Road, Valsad",
    description: "Developing modern residential gated communities, commercial shopping complexes, and industrial warehousing parks across South Gujarat."
  },
  {
    id: "BIZ-104",
    name: "Radadiya Agro Chemicals & Fertilisers",
    category: "Agro Chemicals",
    owner: "Dineshbhai K. Radadiya",
    phone: "+91 98250 11223",
    email: "dinesh.radadiya@gmail.com",
    city: "Station Road, Pardi",
    description: "Distributor of bio-fertilizers, organic micro-nutrients, crop protection sprays, and high-yield seeds to regional Saurashtra farmers."
  },
  {
    id: "BIZ-105",
    name: "Kathiyawadi Swad Restaurant & Catering",
    category: "Food & Catering",
    owner: "Bhaveshbhai R. Gajera",
    phone: "+91 99245 88990",
    email: "bhavesh.gajera@gmail.com",
    city: "NH 48 Gunjan, Vapi",
    description: "Authentic Saurashtra Kathiyawadi dining with traditional wood-fired preparations. Full-scale banquet catering for community weddings and events."
  }
];

const DEFAULT_JOBS = [
  {
    id: "JOB-201",
    name: "Suprince Vijaybhai Kakadiya",
    title: "Full Stack Web Developer & Cloud Engineer",
    exp: "2 Years",
    edu: "B.Tech Computer Science",
    skills: "React, Node.js, Python, TypeScript, Cloud Architecture, PostgreSQL",
    phone: "+91 94081 91506",
    email: "kakadiyasuprince@gmail.com",
    city: "Vapi"
  },
  {
    id: "JOB-202",
    name: "Priyaben D. Radadiya",
    title: "Senior Regulatory Affairs Executive - Pharma",
    exp: "3.5 Years",
    edu: "M.Sc Biotechnology & Regulatory Sciences",
    skills: "USFDA Filing, eCTD Dossiers, Stability Data Review, GMP Audits",
    phone: "+91 98250 11223",
    email: "priya.radadiya@gmail.com",
    city: "Vapi"
  },
  {
    id: "JOB-203",
    name: "Kevin R. Savani",
    title: "Mechanical Design Engineer - CAD/CAM",
    exp: "4 Years",
    edu: "B.E. Mechanical Engineering",
    skills: "SolidWorks, AutoCAD, Mold Flow Analysis, CNC Toolpath Programming",
    phone: "+91 98795 44321",
    email: "kevin.savani@gmail.com",
    city: "Vapi"
  },
  {
    id: "JOB-204",
    name: "Drashti M. Vaghani",
    title: "Quality Assurance (QA) Manager - Pharma Formulation",
    exp: "5 Years",
    edu: "M.Pharm Quality Assurance",
    skills: "GLP/GMP Auditing, Analytical Method Validation, QMS Documentation, HPLC",
    phone: "+91 98240 77889",
    email: "drashti.vaghani@gmail.com",
    city: "Valsad"
  }
];

const DEFAULT_MATRIMONIAL = [
  {
    id: "MATRI-301",
    name: "Drashti M. Vaghani",
    gender: "Female",
    age: "27",
    height: "5' 4\"",
    edu: "M.Pharm Quality Assurance",
    occ: "Pharma QA Manager, Valsad",
    village: "Bagasara (Amreli)",
    phone: "+91 98240 77889",
    city: "Valsad"
  },
  {
    id: "MATRI-302",
    name: "Kevin R. Savani",
    gender: "Male",
    age: "28",
    height: "5' 9\"",
    edu: "B.E. Mechanical Engineering",
    occ: "Senior Design Engineer, Vapi",
    village: "Lathi (Amreli)",
    phone: "+91 98795 44321",
    city: "Vapi"
  },
  {
    id: "MATRI-303",
    name: "Priyaben D. Radadiya",
    gender: "Female",
    age: "25",
    height: "5' 3\"",
    edu: "M.Sc Biotechnology",
    occ: "Regulatory Affairs Executive",
    village: "Dhari (Amreli)",
    phone: "+91 98250 11223",
    city: "Vapi"
  },
  {
    id: "MATRI-304",
    name: "Hardik K. Kakadiya",
    gender: "Male",
    age: "29",
    height: "5' 11\"",
    edu: "B.Tech IT / Cloud Architect",
    occ: "IT Software Lead, Surat/Vapi",
    village: "Kunkavav (Amreli)",
    phone: "+91 98251 12345",
    city: "Vapi"
  }
];

function loadSecondaryAdminData() {
  try {
    const rawAnn = localStorage.getItem("slps_announcements");
    announcementsList = rawAnn ? JSON.parse(rawAnn) : DEFAULT_ANNOUNCEMENTS;
    if (!rawAnn) localStorage.setItem("slps_announcements", JSON.stringify(DEFAULT_ANNOUNCEMENTS));

    const rawBiz = localStorage.getItem("slps_businesses");
    businessesList = rawBiz ? JSON.parse(rawBiz) : DEFAULT_BUSINESSES;
    if (!rawBiz) localStorage.setItem("slps_businesses", JSON.stringify(DEFAULT_BUSINESSES));

    const rawJobs = localStorage.getItem("slps_job_profiles");
    jobsList = rawJobs ? JSON.parse(rawJobs) : DEFAULT_JOBS;
    if (!rawJobs) localStorage.setItem("slps_job_profiles", JSON.stringify(DEFAULT_JOBS));

    const rawMatri = localStorage.getItem("slps_matrimonial_profiles");
    matrimonialList = rawMatri ? JSON.parse(rawMatri) : DEFAULT_MATRIMONIAL;
    if (!rawMatri) localStorage.setItem("slps_matrimonial_profiles", JSON.stringify(DEFAULT_MATRIMONIAL));
  } catch (err) {
    console.error("Error loading secondary admin data:", err);
    announcementsList = DEFAULT_ANNOUNCEMENTS;
    businessesList = DEFAULT_BUSINESSES;
    jobsList = DEFAULT_JOBS;
    matrimonialList = DEFAULT_MATRIMONIAL;
  }
  updateCategoryPillCounts();
}

function updateCategoryPillCounts() {
  const pMembers = document.querySelector("#cat-count-members");
  const pAnn = document.querySelector("#cat-count-announcements");
  const pBiz = document.querySelector("#cat-count-businesses");
  const pJobs = document.querySelector("#cat-count-jobs");
  const pMatri = document.querySelector("#cat-count-matrimonial");

  if (pMembers) pMembers.textContent = membersList.length;
  if (pAnn) pAnn.textContent = announcementsList.length;
  if (pBiz) pBiz.textContent = businessesList.length;
  if (pJobs) pJobs.textContent = jobsList.length;
  if (pMatri) pMatri.textContent = matrimonialList.length;

  // Also update top KPI cards
  const kpiBiz = document.querySelector("#kpi-total-biz");
  const kpiJobs = document.querySelector("#kpi-total-jobs");
  const kpiMatri = document.querySelector("#kpi-total-matri");
  if (kpiBiz) kpiBiz.textContent = businessesList.length;
  if (kpiJobs) kpiJobs.textContent = jobsList.length;
  if (kpiMatri) kpiMatri.textContent = matrimonialList.length;
}

// Category Switcher
function switchAdminCategory(catId) {
  currentAdminCategory = catId;
  document.querySelectorAll(".admin-cat-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.cat === catId);
  });
  document.querySelectorAll(".admin-cat-pane").forEach((pane) => {
    pane.hidden = pane.id !== `admin-pane-${catId}`;
  });

  if (catId === "announcements") renderAnnouncementsGrid();
  if (catId === "businesses") renderBusinessesGrid();
  if (catId === "jobs") renderJobsGrid();
  if (catId === "matrimonial") renderMatrimonialGrid();
}

// ----------------------------------------------------
// ANNOUNCEMENTS CRUD (Full Control for Admin)
// ----------------------------------------------------
function renderAnnouncementsGrid(filterPrio = "all") {
  const grid = document.querySelector("#admin-announcements-grid");
  const tag = document.querySelector("#ann-count-tag");
  if (!grid) return;

  const filtered = filterPrio === "all" ? announcementsList : announcementsList.filter((a) => a.priority === filterPrio);
  if (tag) tag.textContent = `Showing ${filtered.length} of ${announcementsList.length} notices`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--adm-muted);">No announcements published in this filter.</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((a) => {
      const pClass =
        a.priority === "Urgent"
          ? "priority-pill-urgent"
          : a.priority === "Important"
            ? "priority-pill-important"
            : "priority-pill-normal";
      const icon = a.priority === "Urgent" ? "🚨" : a.priority === "Important" ? "⭐" : "📢";

      return `
      <div class="admin-item-card" data-id="${a.id}">
        <div class="admin-item-card-header">
          <div>
            <h4 class="admin-item-card-title">${a.title}</h4>
            <div class="admin-item-card-meta">Published: ${a.published_date || "Today"} by ${a.published_by || "Central Executive Committee"}</div>
          </div>
          <span class="priority-pill ${pClass}">${icon} ${a.priority}</span>
        </div>
        <div class="admin-item-card-body">
          ${a.description}
          ${a.attachment ? `<div style="margin-top:8px; font-size:11px; color:var(--adm-green); font-weight:600;">📎 ${a.attachment}</div>` : ""}
        </div>
        <div class="admin-item-card-footer">
          <span style="font-size:11px; color:var(--adm-muted);">${a.id}</span>
          <button class="table-btn table-btn-danger delete-ann-btn" data-id="${a.id}" type="button">
            🗑️ Delete Notice
          </button>
        </div>
      </div>
    `;
    })
    .join("");

  grid.querySelectorAll(".delete-ann-btn").forEach((btn) => {
    btn.onclick = () => deleteAnnouncement(btn.dataset.id);
  });
}

function openAddAnnouncementModal() {
  const modal = document.querySelector("#admin-ann-modal");
  const form = document.querySelector("#admin-ann-form");
  if (!modal || !form) return;
  form.reset();
  modal.hidden = false;
}

function handleSaveAnnouncement(e) {
  e.preventDefault();
  const title = document.querySelector("#edit-ann-title").value.trim();
  const priority = document.querySelector("#edit-ann-priority").value;
  const published_by = document.querySelector("#edit-ann-published-by").value.trim() || "Central Executive Committee";
  const attachment = document.querySelector("#edit-ann-attach").value.trim();
  const description = document.querySelector("#edit-ann-desc").value.trim();

  if (!title || !description) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

  const newAnn = {
    id: `ANN-${String(announcementsList.length + 1).padStart(2, "0")}`,
    title,
    priority,
    pinned: priority === "Urgent" || priority === "Important",
    published_by,
    published_date: dateStr,
    description,
    attachment: attachment || null
  };

  announcementsList.unshift(newAnn);
  localStorage.setItem("slps_announcements", JSON.stringify(announcementsList));
  updateCategoryPillCounts();
  renderAnnouncementsGrid();

  document.querySelector("#admin-ann-modal").hidden = true;
  showToast("Notice published live! Reflected on all member screens.");
}

function deleteAnnouncement(annId) {
  const a = announcementsList.find((x) => x.id === annId);
  const title = a ? a.title : "notice";
  if (!confirm(`Are you sure you want to delete announcement "${title}"? This will remove it from the user dashboard and marquee immediately.`)) return;

  announcementsList = announcementsList.filter((x) => x.id !== annId);
  localStorage.setItem("slps_announcements", JSON.stringify(announcementsList));
  updateCategoryPillCounts();
  renderAnnouncementsGrid();
  showToast("Announcement deleted live from all member screens.");
}

// ----------------------------------------------------
// BUSINESSES CRUD
// ----------------------------------------------------
function renderBusinessesGrid() {
  const grid = document.querySelector("#admin-businesses-grid");
  if (!grid) return;

  grid.innerHTML = businessesList
    .map(
      (b) => `
    <div class="admin-item-card" data-id="${b.id}">
      <div class="admin-item-card-header">
        <div>
          <h4 class="admin-item-card-title">${b.name}</h4>
          <div class="admin-item-card-meta">Owner: <strong>${b.owner}</strong> &bull; ${b.city}</div>
        </div>
        <span class="blood-badge" style="background:rgba(40,84,52,0.1); color:var(--adm-green); border:none;">${b.category}</span>
      </div>
      <div class="admin-item-card-body">
        ${b.description}
        <div style="margin-top:8px; font-size:11.5px; color:var(--adm-muted);">
          📞 ${b.phone} ${b.email ? `&bull; ✉️ ${b.email}` : ""}
        </div>
      </div>
      <div class="admin-item-card-footer">
        <span style="font-size:11px; color:var(--adm-muted);">${b.id}</span>
        <button class="table-btn table-btn-danger delete-biz-btn" data-id="${b.id}" type="button">
          🗑️ Delete Business
        </button>
      </div>
    </div>
  `
    )
    .join("");

  grid.querySelectorAll(".delete-biz-btn").forEach((btn) => {
    btn.onclick = () => deleteBusiness(btn.dataset.id);
  });
}

function openAddBusinessModal() {
  const modal = document.querySelector("#admin-biz-modal");
  const form = document.querySelector("#admin-biz-form");
  if (!modal || !form) return;
  form.reset();
  modal.hidden = false;
}

function handleSaveBusiness(e) {
  e.preventDefault();
  const name = document.querySelector("#edit-biz-name").value.trim();
  const category = document.querySelector("#edit-biz-category").value.trim();
  const owner = document.querySelector("#edit-biz-owner").value.trim();
  const phone = document.querySelector("#edit-biz-phone").value.trim();
  const email = document.querySelector("#edit-biz-email").value.trim();
  const city = document.querySelector("#edit-biz-city").value.trim();
  const description = document.querySelector("#edit-biz-desc").value.trim();

  if (!name || !owner) return;

  const newBiz = {
    id: `BIZ-${Date.now().toString().slice(-4)}`,
    name,
    category,
    owner,
    phone,
    email,
    city,
    description
  };

  businessesList.unshift(newBiz);
  localStorage.setItem("slps_businesses", JSON.stringify(businessesList));
  updateCategoryPillCounts();
  renderBusinessesGrid();

  document.querySelector("#admin-biz-modal").hidden = true;
  showToast(`Business "${name}" added live to directory.`);
}

function deleteBusiness(bizId) {
  const b = businessesList.find((x) => x.id === bizId);
  if (!confirm(`Delete business "${b ? b.name : bizId}" from directory?`)) return;

  businessesList = businessesList.filter((x) => x.id !== bizId);
  localStorage.setItem("slps_businesses", JSON.stringify(businessesList));
  updateCategoryPillCounts();
  renderBusinessesGrid();
  showToast("Business removed live.");
}

// ----------------------------------------------------
// JOBS CRUD
// ----------------------------------------------------
function renderJobsGrid() {
  const grid = document.querySelector("#admin-jobs-grid");
  if (!grid) return;

  grid.innerHTML = jobsList
    .map(
      (j) => `
    <div class="admin-item-card" data-id="${j.id}">
      <div class="admin-item-card-header">
        <div>
          <h4 class="admin-item-card-title">${j.name}</h4>
          <div class="admin-item-card-meta" style="color:var(--adm-green); font-weight:700;">${j.title}</div>
        </div>
        <span class="blood-badge" style="background:#eef1ee; color:var(--adm-ink); border:none;">${j.exp} Exp</span>
      </div>
      <div class="admin-item-card-body">
        <div><strong>Education:</strong> ${j.edu}</div>
        <div style="margin-top:4px;"><strong>Skills:</strong> ${j.skills}</div>
        <div style="margin-top:8px; font-size:11.5px; color:var(--adm-muted);">
          📞 ${j.phone} &bull; 📍 ${j.city}
        </div>
      </div>
      <div class="admin-item-card-footer">
        <span style="font-size:11px; color:var(--adm-muted);">${j.id}</span>
        <button class="table-btn table-btn-danger delete-job-btn" data-id="${j.id}" type="button">
          🗑️ Delete Job
        </button>
      </div>
    </div>
  `
    )
    .join("");

  grid.querySelectorAll(".delete-job-btn").forEach((btn) => {
    btn.onclick = () => deleteJob(btn.dataset.id);
  });
}

function openAddJobModal() {
  const modal = document.querySelector("#admin-job-modal");
  const form = document.querySelector("#admin-job-form");
  if (!modal || !form) return;
  form.reset();
  modal.hidden = false;
}

function handleSaveJob(e) {
  e.preventDefault();
  const name = document.querySelector("#edit-job-name").value.trim();
  const title = document.querySelector("#edit-job-title").value.trim();
  const exp = document.querySelector("#edit-job-exp").value.trim();
  const edu = document.querySelector("#edit-job-edu").value.trim();
  const phone = document.querySelector("#edit-job-phone").value.trim();
  const city = document.querySelector("#edit-job-city").value.trim();
  const skills = document.querySelector("#edit-job-skills").value.trim();

  if (!name || !title) return;

  const newJob = {
    id: `JOB-${Date.now().toString().slice(-4)}`,
    name,
    title,
    exp,
    edu,
    skills,
    phone,
    email: `${name.toLowerCase().replace(/\s+/g, ".")}@gmail.com`,
    city
  };

  jobsList.unshift(newJob);
  localStorage.setItem("slps_job_profiles", JSON.stringify(jobsList));
  updateCategoryPillCounts();
  renderJobsGrid();

  document.querySelector("#admin-job-modal").hidden = true;
  showToast(`Career profile for "${name}" added live.`);
}

function deleteJob(jobId) {
  const j = jobsList.find((x) => x.id === jobId);
  if (!confirm(`Delete career profile "${j ? j.name : jobId}"?`)) return;

  jobsList = jobsList.filter((x) => x.id !== jobId);
  localStorage.setItem("slps_job_profiles", JSON.stringify(jobsList));
  updateCategoryPillCounts();
  renderJobsGrid();
  showToast("Career profile removed live.");
}

// ----------------------------------------------------
// MATRIMONIAL CRUD
// ----------------------------------------------------
function renderMatrimonialGrid() {
  const grid = document.querySelector("#admin-matrimonial-grid");
  if (!grid) return;

  grid.innerHTML = matrimonialList
    .map(
      (m) => `
    <div class="admin-item-card" data-id="${m.id}">
      <div class="admin-item-card-header">
        <div>
          <h4 class="admin-item-card-title">${m.name}</h4>
          <div class="admin-item-card-meta">${m.gender} &bull; ${m.age} Years &bull; ${m.height}</div>
        </div>
        <span class="blood-badge" style="background:#fce4ec; color:#c2185b; border:none;">${m.city}</span>
      </div>
      <div class="admin-item-card-body">
        <div><strong>Education:</strong> ${m.edu}</div>
        <div style="margin-top:2px;"><strong>Occupation:</strong> ${m.occ}</div>
        <div style="margin-top:2px;"><strong>Homeland:</strong> ${m.village}</div>
        <div style="margin-top:8px; font-size:11.5px; color:var(--adm-muted);">
          📞 Family Contact: ${m.phone}
        </div>
      </div>
      <div class="admin-item-card-footer">
        <span style="font-size:11px; color:var(--adm-muted);">${m.id}</span>
        <button class="table-btn table-btn-danger delete-matri-btn" data-id="${m.id}" type="button">
          🗑️ Delete Profile
        </button>
      </div>
    </div>
  `
    )
    .join("");

  grid.querySelectorAll(".delete-matri-btn").forEach((btn) => {
    btn.onclick = () => deleteMatrimonial(btn.dataset.id);
  });
}

function openAddMatrimonialModal() {
  const modal = document.querySelector("#admin-matri-modal");
  const form = document.querySelector("#admin-matri-form");
  if (!modal || !form) return;
  form.reset();
  modal.hidden = false;
}

function handleSaveMatrimonial(e) {
  e.preventDefault();
  const name = document.querySelector("#edit-matri-name").value.trim();
  const gender = document.querySelector("#edit-matri-gender").value;
  const age = document.querySelector("#edit-matri-age").value.trim();
  const height = document.querySelector("#edit-matri-height").value.trim();
  const city = document.querySelector("#edit-matri-city").value.trim();
  const edu = document.querySelector("#edit-matri-edu").value.trim();
  const occ = document.querySelector("#edit-matri-occ").value.trim();
  const village = document.querySelector("#edit-matri-village").value.trim();
  const phone = document.querySelector("#edit-matri-phone").value.trim();

  if (!name || !age) return;

  const newMatri = {
    id: `MATRI-${Date.now().toString().slice(-4)}`,
    name,
    gender,
    age,
    height,
    edu,
    occ,
    village,
    phone,
    city
  };

  matrimonialList.unshift(newMatri);
  localStorage.setItem("slps_matrimonial_profiles", JSON.stringify(matrimonialList));
  updateCategoryPillCounts();
  renderMatrimonialGrid();

  document.querySelector("#admin-matri-modal").hidden = true;
  showToast(`Matrimonial profile for "${name}" added live.`);
}

function deleteMatrimonial(matriId) {
  const m = matrimonialList.find((x) => x.id === matriId);
  if (!confirm(`Delete matrimonial profile "${m ? m.name : matriId}"?`)) return;

  matrimonialList = matrimonialList.filter((x) => x.id !== matriId);
  localStorage.setItem("slps_matrimonial_profiles", JSON.stringify(matrimonialList));
  updateCategoryPillCounts();
  renderMatrimonialGrid();
  showToast("Matrimonial profile removed live.");
}

// ==========================================================
// 9. INITIALIZE & EVENT LISTENERS
// ==========================================================
async function initDashboard() {
  await loadMembersData();
  loadSecondaryAdminData();
  updateDashboardKPIs();
  populateCityFilter();
  renderMembersTable();
}

function initEventListeners() {
  // Category tabs navigation
  document.querySelectorAll(".admin-cat-tab").forEach((tab) => {
    tab.onclick = () => {
      switchAdminCategory(tab.dataset.cat);
    };
  });

  // Login Form
  const loginForm = document.querySelector("#admin-login-form");
  if (loginForm) loginForm.addEventListener("submit", handleLoginSubmit);

  // Password visibility toggle
  const passToggle = document.querySelector("#toggle-pass-visibility");
  if (passToggle) {
    passToggle.onclick = () => {
      const passInput = document.querySelector("#admin-pass");
      if (passInput) {
        passInput.type = passInput.type === "password" ? "text" : "password";
      }
    };
  }

  // Sign out buttons
  const signoutBtn = document.querySelector("#admin-signout-btn");
  if (signoutBtn) signoutBtn.onclick = handleSignOut;

  // Global search input
  const searchInput = document.querySelector("#admin-global-search");
  if (searchInput) {
    searchInput.oninput = (e) => {
      currentFilter.search = e.target.value;
      renderMembersTable();
    };
  }

  // City filter
  const cityFilter = document.querySelector("#filter-city");
  if (cityFilter) {
    cityFilter.onchange = (e) => {
      currentFilter.city = e.target.value;
      renderMembersTable();
    };
  }

  // Blood group filter
  const bloodFilter = document.querySelector("#filter-blood");
  if (bloodFilter) {
    bloodFilter.onchange = (e) => {
      currentFilter.blood = e.target.value;
      renderMembersTable();
    };
  }

  // Gender filter
  const genderFilter = document.querySelector("#filter-gender");
  if (genderFilter) {
    genderFilter.onchange = (e) => {
      currentFilter.gender = e.target.value;
      renderMembersTable();
    };
  }

  // Add member button
  const addBtn = document.querySelector("#admin-add-member-trigger");
  if (addBtn) addBtn.onclick = openAddMemberModal;

  // Export PDF button (Generates complete members PDF directory & dossiers)
  const exportPdfBtn = document.querySelector("#admin-export-pdf-btn");
  if (exportPdfBtn) exportPdfBtn.onclick = generateMembersPdf;

  // Export JSON button
  const exportBtn = document.querySelector("#admin-export-json-btn");
  if (exportBtn) exportBtn.onclick = downloadUpdatedMembersJson;

  // Refresh from disk button
  const reloadBtn = document.querySelector("#admin-reload-json-btn");
  if (reloadBtn) {
    reloadBtn.onclick = async () => {
      await loadMembersData();
      updateDashboardKPIs();
      populateCityFilter();
      renderMembersTable();
      showToast("Members data refreshed from members.json");
    };
  }

  // Member form save
  const memberForm = document.querySelector("#admin-member-form");
  if (memberForm) memberForm.onsubmit = handleSaveMember;

  // Announcements triggers & form
  const addAnnBtn = document.querySelector("#admin-add-ann-trigger");
  if (addAnnBtn) addAnnBtn.onclick = openAddAnnouncementModal;

  const annForm = document.querySelector("#admin-ann-form");
  if (annForm) annForm.onsubmit = handleSaveAnnouncement;

  const filterAnnPrio = document.querySelector("#filter-ann-priority");
  if (filterAnnPrio) {
    filterAnnPrio.onchange = (e) => {
      renderAnnouncementsGrid(e.target.value);
    };
  }

  // Business triggers & form
  const addBizBtn = document.querySelector("#admin-add-biz-trigger");
  if (addBizBtn) addBizBtn.onclick = openAddBusinessModal;

  const bizForm = document.querySelector("#admin-biz-form");
  if (bizForm) bizForm.onsubmit = handleSaveBusiness;

  // Job triggers & form
  const addJobBtn = document.querySelector("#admin-add-job-trigger");
  if (addJobBtn) addJobBtn.onclick = openAddJobModal;

  const jobForm = document.querySelector("#admin-job-form");
  if (jobForm) jobForm.onsubmit = handleSaveJob;

  // Matrimonial triggers & form
  const addMatriBtn = document.querySelector("#admin-add-matri-trigger");
  if (addMatriBtn) addMatriBtn.onclick = openAddMatrimonialModal;

  const matriForm = document.querySelector("#admin-matri-form");
  if (matriForm) matriForm.onsubmit = handleSaveMatrimonial;

  // Modal close buttons
  document.querySelectorAll(".admin-modal-close, .admin-modal-cancel").forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll(".admin-modal-backdrop").forEach((m) => (m.hidden = true));
    };
  });

  // Modal backdrop click close
  document.querySelectorAll(".admin-modal-backdrop").forEach((backdrop) => {
    backdrop.onclick = (e) => {
      if (e.target === backdrop) backdrop.hidden = true;
    };
  });
}

// Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  checkSession();
});

