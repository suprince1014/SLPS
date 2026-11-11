// Member dashboard logic (using local session storage)

const dashboard = document.querySelector("#dashboard-main");
const loading = document.querySelector("#dashboard-loading");
const errorMessage = document.querySelector("#dashboard-error");
const signOutButton = document.querySelector("#sign-out");

const yearEl = document.querySelector("#current-year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function showError(message) {
  if (loading) loading.hidden = true;
  if (dashboard) dashboard.hidden = true;
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.hidden = false;
  }
}

function formatGender(value) {
  const labels = {
    female: "Female",
    male: "Male",
    non_binary: "Non-binary",
    prefer_not_to_say: "Prefer not to say"
  };
  return labels[value] || "Not specified";
}

function loadDashboard() {
  let profile = null;
  try {
    const raw = localStorage.getItem("slps_current_user");
    if (raw) profile = JSON.parse(raw);
  } catch (err) {
    console.error("Failed to parse user session", err);
  }

  if (!profile) {
    window.location.replace("index.html");
    return;
  }

  const fullName = [profile.first_name, profile.middle_name, profile.last_name].filter(Boolean).join(" ");
  const memberDisplay = document.querySelector("#member-display-name");
  const profileName = document.querySelector("#profile-name");
  const profilePhone = document.querySelector("#profile-phone");
  const profileEmail = document.querySelector("#profile-email");
  const profileDob = document.querySelector("#profile-dob");
  const profileGender = document.querySelector("#profile-gender");

  if (memberDisplay) memberDisplay.textContent = `${profile.first_name || "Member"}.`;
  if (profileName) profileName.textContent = fullName || "—";
  if (profilePhone) profilePhone.textContent = profile.phone || "—";
  if (profileEmail) profileEmail.textContent = profile.email || "—";

  if (profileDob && profile.date_of_birth) {
    try {
      profileDob.textContent = new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(new Date(`${profile.date_of_birth}T00:00:00`));
    } catch {
      profileDob.textContent = profile.date_of_birth;
    }
  }

  if (profileGender) profileGender.textContent = formatGender(profile.gender);

  if (loading) loading.hidden = true;
  if (dashboard) dashboard.hidden = false;
  if (signOutButton) signOutButton.hidden = false;

  if (signOutButton) {
    signOutButton.addEventListener("click", () => {
      localStorage.removeItem("slps_current_user");
      window.location.replace("index.html");
    });
  }
}

try {
  loadDashboard();
} catch (error) {
  showError(`Couldn't load your member account: ${error.message || "Please try again."}`);
}
