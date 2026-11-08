const slides = [
  {
    title: "A community that<br /><em>grows together.</em>",
    description: "Celebrating our roots, supporting one another, and building a brighter future for every generation."
  },
  {
    title: "Traditions that<br /><em>bring us closer.</em>",
    description: "Keeping our culture alive through shared celebrations, stories and the bonds we build together."
  },
  {
    title: "A helping hand.<br /><em>A stronger future.</em>",
    description: "Standing alongside our community and creating opportunities for people to learn, grow and thrive."
  },
  {
    title: "A place to meet,<br /><em>share and celebrate.</em>",
    description: "Our community spaces welcome gatherings, celebrations and the moments that bring people closer."
  },
  {
    title: "Proud of our roots.<br /><em>Open to the future.</em>",
    description: "Our shared identity connects generations and inspires us to build a stronger community together."
  },
  {
    title: "Faith, culture<br /><em>and community.</em>",
    description: "Honouring the traditions and values that connect our community, wherever life takes us."
  },
  {
    title: "Together, we make<br /><em>room to thrive.</em>",
    description: "When we share our time and support, we create more opportunities for every generation."
  },
  {
    title: "One community.<br /><em>Many generations.</em>",
    description: "A welcoming Samaj where our heritage is celebrated and every generation has a place."
  }
];

const hero = document.querySelector(".hero");
const title = document.querySelector("#hero-title");
const description = document.querySelector("#hero-description");
const dots = Array.from(document.querySelectorAll(".carousel-dot"));
const announcement = document.querySelector("#carousel-announcement");
const heroImages = slides.map((_, index) => `assets/hero-${String(index + 1).padStart(2, "0")}.webp`);
let activeSlide = 0;
let transitionTimeout;

heroImages.forEach((source) => {
  const image = new Image();
  image.src = source;
});

function showSlide(index, animate = true) {
  activeSlide = (index + slides.length) % slides.length;
  if (transitionTimeout) window.clearTimeout(transitionTimeout);
  if (animate) {
    hero.classList.add("is-transitioning");
    transitionTimeout = window.setTimeout(() => {
      hero.style.setProperty("--hero-image", `url("${heroImages[activeSlide]}")`);
      hero.classList.remove("is-transitioning");
      transitionTimeout = undefined;
    }, 180);
  } else {
    hero.style.setProperty("--hero-image", `url("${heroImages[activeSlide]}")`);
  }
  title.innerHTML = slides[activeSlide].title;
  description.textContent = slides[activeSlide].description;
  dots.forEach((dot, dotIndex) => {
    const active = dotIndex === activeSlide;
    dot.classList.toggle("is-active", active);
    if (active) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
  announcement.textContent = `Slide ${activeSlide + 1} of ${slides.length}`;
}

showSlide(0, false);
document.querySelector("#slide-prev").addEventListener("click", () => showSlide(activeSlide - 1));
document.querySelector("#slide-next").addEventListener("click", () => showSlide(activeSlide + 1));
dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
window.setInterval(() => showSlide(activeSlide + 1), 5000);

const fontThemes = ["default", "editorial", "classic", "modern"];
let activeFontTheme = 0;
window.setInterval(() => {
  activeFontTheme = (activeFontTheme + 1) % fontThemes.length;
  if (fontThemes[activeFontTheme] === "default") {
    document.body.removeAttribute("data-font-theme");
  } else {
    document.body.dataset.fontTheme = fontThemes[activeFontTheme];
  }
}, 30000);

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  primaryNav.classList.toggle("is-open", !isExpanded);
});
primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const authDialog = document.querySelector(".auth-dialog");
const authTabs = Array.from(document.querySelectorAll(".auth-tab"));
const authTitle = document.querySelector("#auth-title");
const authDescription = document.querySelector(".auth-description");
const authSubmit = document.querySelector(".auth-submit");
const registerFields = document.querySelector(".register-fields");
const memberName = document.querySelector("#member-name");

function setAuthMode(mode) {
  const isRegister = mode === "register";
  authTitle.innerHTML = isRegister ? "Join our <em>community.</em>" : "Welcome <em>back.</em>";
  authDescription.textContent = isRegister
    ? "The online member portal is coming soon. Contact us and our team will be happy to help you get started."
    : "The online member portal is coming soon. Please contact the Samaj for membership enquiries.";
  authSubmit.innerHTML = isRegister
    ? 'Ask about registration <span aria-hidden="true">↗</span>'
    : 'Contact us about membership <span aria-hidden="true">↗</span>';
  registerFields.hidden = !isRegister;
  memberName.required = isRegister;
  authTabs.forEach((tab) => {
    const active = tab.dataset.authMode === mode;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

document.querySelectorAll("[data-open-auth]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMenu();
    if (!authDialog.open) authDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});
authTabs.forEach((tab) => tab.addEventListener("click", () => setAuthMode(tab.dataset.authMode)));
document.querySelector(".dialog-close").addEventListener("click", () => authDialog.close());
authDialog.addEventListener("click", (event) => {
  if (event.target === authDialog) authDialog.close();
});
authDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
document.querySelector(".auth-form").addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "mailto:slpsvapi@gmail.com?subject=SLPS%20Vapi%20membership";
});
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
