const btnMenuMobile = document.querySelector(".menu-mobile");

btnMenuMobile.addEventListener("click", () => {
  menuMobile();
});

function menuMobile() {
  const menuMobile = document.querySelector(".header__menu");

  menuMobile.classList.toggle("header__menu--is-active");
}
