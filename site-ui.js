const whatsappCta = document.querySelector(".whatsapp-cta");
const siteFooter = document.querySelector(".site-footer");

function updateWhatsAppVisibility() {
  if (!whatsappCta || !siteFooter) return;

  const footerBounds = siteFooter.getBoundingClientRect();
  const footerIsVisible = footerBounds.top < window.innerHeight && footerBounds.bottom > 0;
  whatsappCta.classList.toggle("is-hidden", footerIsVisible);
}

window.addEventListener("scroll", updateWhatsAppVisibility, { passive: true });
window.addEventListener("resize", updateWhatsAppVisibility);
updateWhatsAppVisibility();
