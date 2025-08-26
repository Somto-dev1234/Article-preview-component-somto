document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const footerShareBtn = document.querySelector(".footer-share");
  const closeShareBtn = document.querySelector(".close-share");

  function toggleShare() {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      card.classList.toggle("active-mobile");
    } else {
      card.classList.toggle("active-desktop");
    }
  }

  footerShareBtn.addEventListener("click", toggleShare);
  closeShareBtn.addEventListener("click", toggleShare);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      card.classList.remove("active-desktop");
    } else {
      card.classList.remove("active-mobile");
    }
  });
});
