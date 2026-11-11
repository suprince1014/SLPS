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
const heroCopy = document.querySelector(".hero-copy");
const heroBackgroundLayers = Array.from(document.querySelectorAll(".hero-background-layer"));
const title = document.querySelector("#hero-title");
const description = document.querySelector("#hero-description");
const dots = Array.from(document.querySelectorAll(".carousel-dot"));
const announcement = document.querySelector("#carousel-announcement");
const heroImages = slides.map((_, index) => `assets/hero-${String(index + 1).padStart(2, "0")}.webp`);
let activeSlide = 0;
let currentBackgroundLayer = 0;
let currentBackgroundIndex = -1;
let pendingBackgroundIndex = null;
let isBackgroundTransitioning = false;

heroImages.forEach((source) => {
  const image = new Image();
  image.src = source;
});

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  const requestedBackgroundIndex = activeSlide;
  const backgroundImage = `url("${heroImages[requestedBackgroundIndex]}")`;
  if (currentBackgroundIndex === -1) {
    const currentLayer = heroBackgroundLayers[currentBackgroundLayer];
    currentLayer.style.backgroundImage = backgroundImage;
    currentLayer.dataset.slideIndex = String(requestedBackgroundIndex);
    currentLayer.classList.add("is-visible");
    currentBackgroundIndex = requestedBackgroundIndex;
  } else if (isBackgroundTransitioning) {
    pendingBackgroundIndex = requestedBackgroundIndex;
  } else if (requestedBackgroundIndex !== currentBackgroundIndex) {
    const incomingLayerIndex = 1 - currentBackgroundLayer;
    const incomingLayer = heroBackgroundLayers[incomingLayerIndex];
    incomingLayer.style.backgroundImage = backgroundImage;
    incomingLayer.dataset.slideIndex = String(requestedBackgroundIndex);
    isBackgroundTransitioning = true;
    window.requestAnimationFrame(() => incomingLayer.classList.add("is-visible"));
  }

  heroCopy.classList.remove("is-changing");
  void heroCopy.offsetWidth;
  heroCopy.classList.add("is-changing");
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

heroBackgroundLayers.forEach((layer, layerIndex) => {
  layer.addEventListener("transitionend", (event) => {
    if (!isBackgroundTransitioning || event.propertyName !== "opacity" || !layer.classList.contains("is-visible")) return;
    heroBackgroundLayers[currentBackgroundLayer].classList.remove("is-visible");
    currentBackgroundLayer = layerIndex;
    currentBackgroundIndex = Number(layer.dataset.slideIndex);
    isBackgroundTransitioning = false;

    if (pendingBackgroundIndex !== null) {
      const nextBackgroundIndex = pendingBackgroundIndex;
      pendingBackgroundIndex = null;
      if (nextBackgroundIndex !== currentBackgroundIndex) showSlide(nextBackgroundIndex);
    }
  });
});

showSlide(0);
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

document.querySelectorAll("[data-open-auth]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMenu();
    if (!authDialog.open) authDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

if (window.location.search.includes("auth=true")) {
  if (authDialog && !authDialog.open) {
    authDialog.showModal();
    document.body.classList.add("dialog-open");
  }
}

document.querySelector(".dialog-close").addEventListener("click", () => authDialog.close());
authDialog.addEventListener("click", (event) => {
  if (event.target === authDialog) authDialog.close();
});
authDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
