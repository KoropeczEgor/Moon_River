"use strict";

let menuBtn = document.querySelector(".menu__burger");
let menu = document.querySelector(".header__menu__open");
let logo = document.querySelector(".header");
let ring = document.querySelector(".logo");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  logo.classList.toggle("active");
  ring.classList.toggle("active");
});

//корзина
const cardAddArr = Array.from(document.querySelectorAll(".card__add"));
const cartNum = document.querySelector(".shop-cart__num");
const cart = document.querySelector(".shop-cart");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");
const popupDiscount = document.querySelector("#popup_discount");
const popupCostDiscount = document.querySelector("#popup_cost_discount");

cart.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("popup--open");
  body.classList.add("lock");
});

popupClose.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("popup--open");
  body.classList.remove("lock");
});
//slider
new Swiper(".social__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dinamicBullets: true,
  },
  //переключения с помощью стрелок на клавиатуре
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  //управления с помощью мыши
  // mousewheel: {
  //   sensitivity: 1,
  //   // eventsTarget: ".slider__img",
  // },
  slidesPerView: 5,
  spaceBetween: 30,
});
