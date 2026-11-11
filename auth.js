// Member Authentication and Registration flow (Local client-side flow with Demo credentials)

const dialog = document.querySelector(".auth-dialog");
const title = document.querySelector("#auth-title");
const description = document.querySelector("#auth-description");
const tabs = Array.from(document.querySelectorAll(".auth-tab"));
const tabList = document.querySelector(".auth-tabs");
const registrationForm = document.querySelector("#registration-form");
const loginForm = document.querySelector("#login-form");
const otpForm = document.querySelector("#otp-form");
const successPanel = document.querySelector("#auth-success");
const statusMessage = document.querySelector("#auth-status");
const sendOtpButton = document.querySelector("#send-otp");
const resendButton = document.querySelector("#resend-otp");
const otpSentMessage = document.querySelector("#otp-sent-message");
const otpInput = document.querySelector("#otp-code");
const demoActiveOtpEl = document.querySelector("#demo-active-otp");
const demoAutofillOtpBtn = document.querySelector("#demo-autofill-otp");
const demoBannerLogin = document.querySelector("#demo-banner-login");
const demoBannerRegister = document.querySelector("#demo-banner-register");
const demoFillLoginBtn = document.querySelector("#demo-fill-login");
const demoFillRegisterBtn = document.querySelector("#demo-fill-register");

let mode = "login";
let pendingPhone = "";
let pendingProfile = null;
let resendTimer = null;
let redirectTimer = null;
let generatedOtp = "123456";

// Default Demo Member Credentials
const DEMO_MEMBER = {
  first_name: "Suprince",
  middle_name: "Vijaybhai",
  last_name: "Kakadiya",
  phone: "+91 9408191506",
  email: "kakadiyasuprince@gmail.com",
  date_of_birth: "2006-01-11",
  gender: "male",
  member_id: "SLPS-2026-1001",
  blood_group: "B+",
  chapter: "Vapi & Valsad District",
  address: "401, Yashvi Nestoya, Chharwada Vapi",
  native_place: "Roghel, Saurashtra",
  membership_type: "Active Life Member",
  joined_date: "14 Jan 2024",
  verified: true,
  permanent_address: {
    house: "401, Yashvi Nestoya",
    street: "Chharwada Road",
    city: "Vapi",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396191"
  },
  native_address: {
    house: "Sardar Chowk",
    street: "Main Bazar Road",
    city: "Roghel",
    district: "Amreli",
    state: "Gujarat",
    pincode: "365601"
  }
};

function getStoredMembers() {
  try {
    const raw = localStorage.getItem("slps_registered_members");
    const members = raw ? JSON.parse(raw) : {};
    // Ensure default demo member is always accessible with latest details
    members[DEMO_MEMBER.phone] = { ...DEMO_MEMBER, ...(members[DEMO_MEMBER.phone] || {}) };
    localStorage.setItem("slps_registered_members", JSON.stringify(members));

    // Also update existing user session if it was using old demo member
    const currentRaw = localStorage.getItem("slps_current_user");
    if (!currentRaw || currentRaw.includes("Aarav") || currentRaw.includes("9876543210")) {
      localStorage.setItem("slps_current_user", JSON.stringify(DEMO_MEMBER));
    }

    return members;
  } catch {
    return { [DEMO_MEMBER.phone]: DEMO_MEMBER };
  }
}

// Initialize demo credentials in localStorage
getStoredMembers();

function saveMember(phone, profile) {
  const members = getStoredMembers();
  // Ensure profile has consistent dashboard metadata
  if (!profile.member_id) {
    profile.member_id = phone === DEMO_MEMBER.phone ? DEMO_MEMBER.member_id : `SLPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  }
  if (!profile.blood_group) profile.blood_group = phone === DEMO_MEMBER.phone ? DEMO_MEMBER.blood_group : "B++";
  if (!profile.chapter) profile.chapter = DEMO_MEMBER.chapter;
  if (!profile.native_place) profile.native_place = phone === DEMO_MEMBER.phone ? DEMO_MEMBER.native_place : "Roghel, Saurashtra";
  if (!profile.address) profile.address = phone === DEMO_MEMBER.phone ? DEMO_MEMBER.address : "401, Yashvi Nestoya, Chharwada Vapi";
  if (!profile.permanent_address) profile.permanent_address = DEMO_MEMBER.permanent_address;
  if (!profile.native_address) profile.native_address = DEMO_MEMBER.native_address;
  if (!profile.membership_type) profile.membership_type = DEMO_MEMBER.membership_type;
  if (!profile.joined_date) profile.joined_date = DEMO_MEMBER.joined_date;
  profile.verified = true;

  members[phone] = profile;
  localStorage.setItem("slps_registered_members", JSON.stringify(members));
  localStorage.setItem("slps_current_user", JSON.stringify(profile));
}

function setStatus(message, isError = true) {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.classList.toggle("is-error", isError);
}

function clearStatus() {
  setStatus("", false);
}

function setMode(nextMode) {
  mode = nextMode;
  const isRegister = mode === "register";

  if (title) {
    title.hidden = false;
    title.innerHTML = isRegister ? "Join our <em>community.</em>" : "Welcome <em>back.</em>";
  }
  if (description) {
    description.hidden = false;
    description.textContent = isRegister
      ? "Create your member profile, then verify your mobile number to finish registration."
      : "Enter your registered mobile number and we’ll send you a secure sign-in code.";
  }

  if (registrationForm) registrationForm.hidden = !isRegister;
  if (loginForm) loginForm.hidden = isRegister;
  if (otpForm) otpForm.hidden = true;
  if (successPanel) successPanel.hidden = true;
  if (tabList) tabList.hidden = false;

  if (demoBannerLogin) demoBannerLogin.hidden = isRegister;
  if (demoBannerRegister) demoBannerRegister.hidden = !isRegister;

  tabs.forEach((tab) => {
    const active = tab.dataset.authMode === mode;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  clearStatus();
}

function normalizePhone(value) {
  const phone = value.trim().replace(/[()\s.-]/g, "");
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) {
    throw new Error("Enter a valid phone number in international format, including its country code (for example, +91 98765 43210).");
  }
  return phone;
}

function collectRegistration(form) {
  const data = new FormData(form);
  const profile = {
    first_name: String(data.get("firstName") || "").trim(),
    middle_name: String(data.get("middleName") || "").trim() || null,
    last_name: String(data.get("lastName") || "").trim(),
    phone: normalizePhone(String(data.get("phone") || "")),
    email: String(data.get("email") || "").trim().toLowerCase(),
    date_of_birth: String(data.get("dateOfBirth") || ""),
    gender: String(data.get("gender") || "")
  };

  if (!profile.first_name || !profile.last_name || !profile.email || !profile.date_of_birth || !profile.gender) {
    throw new Error("Complete all required fields before continuing.");
  }
  if (new Date(`${profile.date_of_birth}T00:00:00`) > new Date()) {
    throw new Error("Date of birth cannot be in the future.");
  }
  return profile;
}

function startResendCountdown() {
  if (!resendButton) return;
  window.clearInterval(resendTimer);
  const resendAvailableAt = Date.now() + 60_000;
  resendButton.disabled = true;

  const updateCountdown = () => {
    const secondsLeft = Math.max(0, Math.ceil((resendAvailableAt - Date.now()) / 1000));
    resendButton.disabled = secondsLeft > 0;
    resendButton.textContent = secondsLeft > 0 ? `Resend code in ${secondsLeft}s` : "Resend code";
    if (secondsLeft === 0) {
      window.clearInterval(resendTimer);
    }
  };

  updateCountdown();
  resendTimer = window.setInterval(updateCountdown, 1000);
}

function showOtpStep() {
  if (registrationForm) registrationForm.hidden = true;
  if (loginForm) loginForm.hidden = true;
  if (otpForm) otpForm.hidden = false;
  if (successPanel) successPanel.hidden = true;
  if (tabList) tabList.hidden = true;
  if (demoBannerLogin) demoBannerLogin.hidden = true;
  if (demoBannerRegister) demoBannerRegister.hidden = true;

  if (title) {
    title.hidden = false;
    title.textContent = "Verify your phone";
  }
  if (description) {
    description.hidden = false;
    description.textContent = `Enter the 6-digit verification code sent to ${pendingPhone}.`;
  }

  if (demoActiveOtpEl) {
    demoActiveOtpEl.textContent = generatedOtp;
  }

  if (otpSentMessage) {
    otpSentMessage.textContent = `Code sent to ${pendingPhone}. For instant testing, use demo code above or 123456.`;
  }

  if (otpInput) {
    otpInput.value = "";
    otpInput.focus();
  }

  clearStatus();
  startResendCountdown();
}

function sendPhoneCode(phone, isRegistration) {
  const members = getStoredMembers();
  if (isRegistration && members[phone] && phone !== DEMO_MEMBER.phone) {
    throw new Error("This mobile number is already registered. Please switch to Member login.");
  }
  if (!isRegistration && !members[phone]) {
    throw new Error("No member profile found for this mobile number. Please register first or use the Demo Account (+91 98765 43210).");
  }

  pendingPhone = phone;
  // Use a clean 6-digit random code or 123456
  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  showOtpStep();
}

function triggerVerificationSuccess(profile, isNewRegistration = false) {
  window.clearInterval(resendTimer);
  window.clearTimeout(redirectTimer);

  if (otpForm) otpForm.hidden = true;
  if (tabList) tabList.hidden = true;
  if (title) title.hidden = true;
  if (description) description.hidden = true;

  const successTitle = document.querySelector("#auth-success-title");
  const successDesc = document.querySelector("#auth-success-desc");
  if (successTitle) {
    successTitle.textContent = isNewRegistration ? "Registration Verified!" : "Signed In Successfully!";
  }
  if (successDesc) {
    successDesc.textContent = `Welcome, ${profile.first_name || "Member"}. Your mobile number is verified. Redirecting to your dashboard…`;
  }

  if (successPanel) successPanel.hidden = false;
  clearStatus();

  // Animate progress countdown bar smoothly
  const progressBar = document.querySelector("#redirect-bar-fill");
  if (progressBar) {
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    requestAnimationFrame(() => {
      progressBar.style.transition = "width 1.7s cubic-bezier(0.4, 0, 0.2, 1)";
      progressBar.style.width = "100%";
    });
  }

  // Automatic smooth redirect so user enjoys the animated green correct sign
  redirectTimer = window.setTimeout(() => {
    window.location.assign("dashboard.html");
  }, 1800);
}

// Tab Switching
tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.authMode)));

// 1-Click Demo Pre-fill for Registration Form
if (demoFillRegisterBtn && registrationForm) {
  demoFillRegisterBtn.addEventListener("click", () => {
    const firstName = registrationForm.querySelector("#member-first-name");
    const middleName = registrationForm.querySelector("#member-middle-name");
    const lastName = registrationForm.querySelector("#member-last-name");
    const phone = registrationForm.querySelector("#member-phone");
    const email = registrationForm.querySelector("#member-email");
    const dob = registrationForm.querySelector("#member-dob");
    const maleRadio = registrationForm.querySelector('input[name="gender"][value="male"]');

    if (firstName) firstName.value = DEMO_MEMBER.first_name;
    if (middleName) middleName.value = DEMO_MEMBER.middle_name;
    if (lastName) lastName.value = DEMO_MEMBER.last_name;
    if (phone) phone.value = DEMO_MEMBER.phone;
    if (email) email.value = DEMO_MEMBER.email;
    if (dob) dob.value = DEMO_MEMBER.date_of_birth;
    if (maleRadio) maleRadio.checked = true;

    clearStatus();
    setStatus(`Member details for ${DEMO_MEMBER.first_name} ${DEMO_MEMBER.last_name} loaded! Click continue below.`, false);
  });
}

// 1-Click Demo Pre-fill for Login Form
if (demoFillLoginBtn && loginForm) {
  demoFillLoginBtn.addEventListener("click", () => {
    const phoneInput = loginForm.querySelector("#login-phone");
    if (phoneInput) {
      phoneInput.value = DEMO_MEMBER.phone;
      phoneInput.focus();
    }
    clearStatus();
    setStatus(`Demo mobile (${DEMO_MEMBER.phone}) inserted! Click 'Send sign-in code'.`, false);
  });
}

// 1-Click Auto-fill Demo OTP
if (demoAutofillOtpBtn && otpInput) {
  demoAutofillOtpBtn.addEventListener("click", () => {
    otpInput.value = generatedOtp;
    otpInput.focus();
    clearStatus();
    // Visual ripple feedback on button
    demoAutofillOtpBtn.classList.add("is-copied");
    setTimeout(() => demoAutofillOtpBtn.classList.remove("is-copied"), 600);
  });
}

// Registration Form Submit
if (registrationForm) {
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearStatus();
    if (!registrationForm.reportValidity()) return;

    if (sendOtpButton) sendOtpButton.disabled = true;
    try {
      pendingProfile = collectRegistration(registrationForm);
      sendPhoneCode(pendingProfile.phone, true);
    } catch (error) {
      setStatus(error.message || "Failed to process registration.");
    } finally {
      if (sendOtpButton) sendOtpButton.disabled = false;
    }
  });
}

// Login Form Submit
if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearStatus();
    if (!loginForm.reportValidity()) return;

    const submitButton = loginForm.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;
    try {
      const phone = normalizePhone(String(new FormData(loginForm).get("phone") || ""));
      pendingProfile = null;
      sendPhoneCode(phone, false);
    } catch (error) {
      setStatus(error.message || "Failed to send code.");
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

// OTP Form Submit (Verification)
if (otpForm) {
  otpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearStatus();
    if (!otpForm.reportValidity()) return;

    const verifyButton = document.querySelector("#verify-otp");
    if (verifyButton) verifyButton.disabled = true;

    try {
      const enteredCode = otpInput?.value.trim();
      // Allow the active displayed OTP or the standard universal 123456
      if (enteredCode !== generatedOtp && enteredCode !== "123456") {
        throw new Error("Invalid verification code. Please check the active code on screen (or use 123456).");
      }

      const members = getStoredMembers();

      if (mode === "register") {
        if (!pendingProfile) throw new Error("Missing profile details. Please try registering again.");
        saveMember(pendingPhone, pendingProfile);
        triggerVerificationSuccess(pendingProfile, true);
        return;
      }

      // Login mode
      let member = members[pendingPhone];
      if (!member && pendingPhone === DEMO_MEMBER.phone) {
        member = DEMO_MEMBER;
      }
      if (!member) {
        throw new Error("Member profile not found. Please register or use the demo phone.");
      }

      localStorage.setItem("slps_current_user", JSON.stringify(member));
      triggerVerificationSuccess(member, false);
    } catch (error) {
      setStatus(error.message || "Verification failed. Check the code and try again.");
    } finally {
      if (verifyButton) verifyButton.disabled = false;
    }
  });
}

// Resend OTP Button
if (resendButton) {
  resendButton.addEventListener("click", () => {
    if (resendButton.disabled || !pendingPhone) return;
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    clearStatus();
    startResendCountdown();

    if (demoActiveOtpEl) demoActiveOtpEl.textContent = generatedOtp;
    if (otpSentMessage) otpSentMessage.textContent = `New code sent! For testing, use code: ${generatedOtp}`;
    if (description) description.textContent = `Enter the 6-digit verification code sent to ${pendingPhone}.`;
  });
}

// Change Phone Button
const changePhoneButton = document.querySelector("#change-phone");
if (changePhoneButton) {
  changePhoneButton.addEventListener("click", () => {
    window.clearInterval(resendTimer);
    if (otpForm) otpForm.hidden = true;
    if (mode === "register") {
      if (registrationForm) registrationForm.hidden = false;
      if (demoBannerRegister) demoBannerRegister.hidden = false;
    } else {
      if (loginForm) loginForm.hidden = false;
      if (demoBannerLogin) demoBannerLogin.hidden = false;
    }
    if (tabList) tabList.hidden = false;
    if (title) {
      title.hidden = false;
      title.innerHTML = mode === "register" ? "Join our <em>community.</em>" : "Welcome <em>back.</em>";
    }
    if (description) {
      description.hidden = false;
      description.textContent = mode === "register"
        ? "Create your member profile, then verify your mobile number to finish registration."
        : "Enter your registered mobile number and we’ll send you a secure sign-in code.";
    }
    clearStatus();
  });
}

// Initialize default mode
setMode("login");
