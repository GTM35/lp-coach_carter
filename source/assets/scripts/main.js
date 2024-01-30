const btnMenuMobile = document.querySelector(".menu-mobile");

btnMenuMobile.addEventListener("click", () => {
  menuMobile();
});

document.addEventListener("DOMContentLoaded", () => {
  cardAnimation();
});

function menuMobile() {
  const menuMobile = document.querySelector(".header__menu");

  menuMobile.classList.toggle("header__menu--is-active");
}

function cardAnimation() {
  const icon = document.querySelectorAll(".curiosity__header__icon img");
  icon.forEach((element) => {
    element.addEventListener("click", (el) => {
      el.target.parentNode.parentNode.nextElementSibling.classList.toggle(
        "curiosity__description--is-active"
      );

      if (
        el.target.parentNode.parentNode.nextElementSibling.classList.contains(
          "curiosity__description--is-active"
        )
      ) {
        el.target.setAttribute("src", "./source/images/icon-.svg");
      } else {
        el.target.setAttribute("src", "./source/images/icon+.svg");
      }
    });
  });
}
