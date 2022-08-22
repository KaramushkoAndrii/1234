let PopUp = document.querySelector(".footer__popup");
let btnPopUp = document.querySelector(".main__button");
let PopUpClose = document.querySelector(".popup__close");
let PopUpBtn = document.querySelector(".popup__button");
let PopUp2 = document.querySelector(".footer__popup2");
let PopUp2Close = document.querySelector(".popup2__close");
let PopUp2Back = document.querySelector(".popup2__button")
let PopUp2Send = document.querySelector(".popup2__button--form")
let PopUpCompleate = document.querySelector(".footer__popup-compleate")
let PopUpCompleateOk = document.querySelector(".popup-compleate__button")
let PopUpCompleateClose = document.querySelector(".popup-compleate__close")
let PopUpCallback = document.querySelector(".footer__popup-callback") 
let btnCallbackPopUp = document.querySelector(".footer__button")
let PopUpCallbackClose = document.querySelector(".callback__close")
let PopUpCallbackOk = document.querySelector(".callback__button")
const swiperEl = document.querySelector('.mySwiper');

if(swiperEl) {
    let swiper = new Swiper(swiperEl, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 161,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (btnPopUp) {
    btnPopUp.addEventListener("click", function () {
        PopUp.classList.add('footer__popup-show')
    })
}

PopUpClose.addEventListener("click", function() {
    PopUp.classList.remove('footer__popup-show')
})

PopUpBtn.addEventListener("click",function (evt) {
    evt.preventDefault();
    PopUp2.classList.add('footer__popup2-show')
    PopUp.classList.remove('footer__popup-show')
})

PopUp2Close.addEventListener("click", function() {
    PopUp2.classList.remove('footer__popup2-show')
})

PopUp2Back.addEventListener("click", function () {
    PopUp2.classList.remove('footer__popup2-show')
    PopUp.classList.add('footer__popup-show')
})

PopUp2Send.addEventListener("click", function (evt) {
    evt.preventDefault();
    PopUpCompleate.classList.add('footer__popup-compleate-show')
    PopUp2.classList.remove('footer__popup2-show')
})

PopUpCompleateOk.addEventListener("click", function () {
    PopUpCompleate.classList.remove('footer__popup-compleate-show')
})

PopUpCompleateClose.addEventListener("click", function () {
    PopUpCompleate.classList.remove('footer__popup-compleate-show')
})

btnCallbackPopUp.addEventListener("click", function () {
    PopUpCallback.classList.add('footer__popup-callback-show')
})

PopUpCallbackClose.addEventListener("click", function () {
    PopUpCallback.classList.remove('footer__popup-callback-show')
})

PopUpCallbackOk.addEventListener("click", function () {
    PopUpCompleate.classList.add('footer__popup-compleate-show')
    PopUpCallback.classList.remove('footer__popup-callback-show')
})
