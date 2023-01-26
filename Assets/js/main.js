const button = document.querySelector(".footer__button");
const container = document.querySelector(".footer__container");
const share = document.querySelector(".footer__share");

button.addEventListener("click", function () {
  container.classList.toggle("active");
  share.classList.toggle("active");
  this.classList.toggle("active");
});
