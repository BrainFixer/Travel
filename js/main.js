const swiper = new Swiper(".destinations-section__swiper", {
  slidesPerView: 2,
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,
  initialSlide: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    390: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 1.8,
      spaceBetween: 60,
    },
  },
});

const loginBtn = document.querySelector(".header__login-button");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

loginBtn.onclick = function (event) {
  event.preventDefault();
  login.classList.add("login_visible");
  document.body.style.overflow = "hidden";
};

signup.addEventListener("click", function (event) {
  event.stopPropagation();
  const backdropFilter = window.getComputedStyle(event.target).backdropFilter;
  if (backdropFilter == "blur(3px)") {
    signup.classList.remove("signup_visible");
    document.body.style.overflow = "auto";
  }
});

login.addEventListener("click", function (event) {
  event.stopPropagation();
  const backdropFilter = window.getComputedStyle(event.target).backdropFilter;
  if (backdropFilter == "blur(3px)") {
    login.classList.remove("login_visible");
    document.body.style.overflow = "auto";
  }
});

const loginLink = document.querySelector(".login__link");
loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  login.classList.remove("login_visible");
  signup.classList.add("signup_visible");
});
