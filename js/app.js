// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const heroSwiper = new Swiper(".Hero-swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("login-modal");
  const openModalBtn = document.querySelector(".open-modal-button");
  const closeModalBtn = document.getElementById("close-login");

  // Modalni ochish
  openModalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("active");
  });

  // Modalni yopish
  closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  // Tashqarisini bosganda yopish
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});

const select = document.getElementById("language-select");
const current = document.getElementById("current-lang");
const options = document.getElementById("lang-options");

select.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

options.querySelectorAll("div").forEach((option) => {
  option.addEventListener("click", () => {
    current.textContent = option.textContent;
    options.style.display = "none";
    console.log("Tanlangan til:", option.dataset.lang);
  });
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    options.style.display = "none";
  }
});