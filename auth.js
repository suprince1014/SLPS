// Member Authentication and Registration flow (Local client-side flow for testing)

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

let mode = "login";
let pendingPhone = "";
let pendingProfile = null;
let resendTimer = null;
let generatedOtp = "123456";

function setStatus(message, isError = true) {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.classList.toggle("is-error", isError);
}

function clearStatus() {
  setStatus("", false);
}

function getStoredMembers() {
  try {
    return JSON.parse(localStorage.getItem("slps_registered_members") || "{}");
  } catch {
    return {};
  }
}

function saveMember(phone, profile) {
  const members = getStoredMembers();
  members[phone] = profile;
  localStorage.setItem("slps_registered_members", JSON.stringify(members));
  localStorage.setItem("slps_current_user", JSON.stringify(profile));
}

function setMode(nextMode) {
  mode = nextMode;
  const isRegister = mode === "register";
  if (title) title.innerHTML = isRegister ? "Join our <em>community.</em>" : "Welcome <em>back.</em>";
  if (description) {
    description.textContent = isRegister
      ? "Create your member profile, then verify your mobile number to finish registration."
      : "Enter your registered mobile number and we’ll send you a secure sign-in code.";
  }
  if (registrationForm) registrationForm.hidden = !isRegister;
  if (loginForm) loginForm.hidden = isRegister;
  if (otpForm) otpForm.hidden = true;
  if (successPanel) successPanel.hidden = true;
  if (tabList) tabList.hidden = false;
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
  if (title) title.textContent = "Verify your phone";
  if (description) description.textContent = `Enter the code sent to ${pendingPhone}. (Use test code: ${generatedOtp})`;
  if (otpSentMessage) otpSentMessage.textContent = `The code expires in 10 minutes. For testing, use code: ${generatedOtp}`;
  if (otpInput) {
    otpInput.value = "";
    otpInput.focus();
  }
  clearStatus();
  startResendCountdown();
}

function sendPhoneCode(phone, isRegistration) {
  const members = getStoredMembers();
  if (isRegistration && members[phone]) {
    throw new Error("This mobile number is already registered. Please switch to Member login.");
  }
  if (!isRegistration && !members[phone]) {
    throw new Error("No member profile found for this mobile number. Please register first.");
  }

  pendingPhone = phone;
  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  showOtpStep();
}

tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.authMode)));

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

if (otpForm) {
  otpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearStatus();
    if (!otpForm.reportValidity()) return;

    const verifyButton = document.querySelector("#verify-otp");
    if (verifyButton) verifyButton.disabled = true;

    try {
      const enteredCode = otpInput?.value.trim();
      if (enteredCode !== generatedOtp && enteredCode !== "123456") {
        throw new Error("Invalid verification code. Please check and try again.");
      }

      const members = getStoredMembers();

      if (mode === "register") {
        if (!pendingProfile) throw new Error("Missing profile details. Please try registering again.");
        saveMember(pendingPhone, pendingProfile);

        window.clearInterval(resendTimer);
        otpForm.hidden = true;
        if (successPanel) successPanel.hidden = false;
        if (tabList) tabList.hidden = true;
        if (title) title.textContent = "Registration complete";
        if (description) description.textContent = "Your mobile number has been verified.";
        clearStatus();
        return;
      }

      // Login mode
      const member = members[pendingPhone];
      if (!member) {
        throw new Error("Member profile not found. Please register.");
      }
      localStorage.setItem("slps_current_user", JSON.stringify(member));
      window.location.assign("dashboard.html");
    } catch (error) {
      setStatus(error.message || "Verification failed. Check the code and try again.");
    } finally {
      if (verifyButton) verifyButton.disabled = false;
    }
  });
}

if (resendButton) {
  resendButton.addEventListener("click", () => {
    if (resendButton.disabled || !pendingPhone) return;
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    clearStatus();
    startResendCountdown();
    if (otpSentMessage) otpSentMessage.textContent = `New code sent! For testing, use code: ${generatedOtp}`;
    if (description) description.textContent = `Enter the code sent to ${pendingPhone}. (Use test code: ${generatedOtp})`;
  });
}

const changePhoneButton = document.querySelector("#change-phone");
if (changePhoneButton) {
  changePhoneButton.addEventListener("click", () => {
    window.clearInterval(resendTimer);
    if (otpForm) otpForm.hidden = true;
    if (mode === "register") {
      if (registrationForm) registrationForm.hidden = false;
    } else {
      if (loginForm) loginForm.hidden = false;
    }
    if (title) title.innerHTML = mode === "register" ? "Join our <em>community.</em>" : "Welcome <em>back.</em>";
    if (description) {
      description.textContent = mode === "register"
        ? "Create your member profile, then verify your mobile number to finish registration."
        : "Enter your registered mobile number and we’ll send you a secure sign-in code.";
    }
    clearStatus();
  });
}

setMode("login");
