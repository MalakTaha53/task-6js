const registerBtn = document.querySelector(
  "header .navbar .authantication .register"
);
registerBtn.onclick = function () {
  document.querySelector(".registerPage").classList.add("reg-visible");
  document.querySelector("header").classList.add("overlay");
};
const closeBtn = document.querySelector(".registerPage .registerForm .close");
closeBtn.onclick = function () {
  document.querySelector(".registerPage").classList.remove("reg-visible");
  document.querySelector("header").classList.remove("overlay");
};
