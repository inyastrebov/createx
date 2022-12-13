const body = document.body;
const popupSub = document.querySelector('.popup-sub');
const popupCv = document.querySelector('.popup-cv');

const subscribeBtn = document.querySelectorAll('.subscribe');

for (let open of subscribeBtn) {
    open.addEventListener("click", () => {
        popupSub.classList.add('subscribe-active')
        body.classList.add('noscroll');
    })
};

const cvBtn = document.querySelectorAll('.cv');

for (let open of cvBtn) {
    open.addEventListener("click", () => {
        popupCv.classList.add('subscribe-active');
        body.classList.add('noscroll');
    })
};

const popupClose = document.querySelectorAll('.popup__close');

for (let close of popupClose) {
    close.addEventListener('click', () => {
        popupSub.classList.remove('subscribe-active');
        popupCv.classList.remove('subscribe-active');
        body.classList.remove('noscroll');
    })
}

// popupClose.addEventListener("click", () => {
//     popupSub.classList.remove('subscribe-active');
//     body.classList.remove('noscroll');
// });

// popupClose.addEventListener("click", () => {
//     popupCv.classList.remove('subscribe-active');
//     body.classList.remove('noscroll');
// });