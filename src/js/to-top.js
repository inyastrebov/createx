// const body = document.body;


// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView ({
//             behavior: "smooth",
//             block: "start"
//         })
//     })
// }

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.to-top')
    scroll.classList.toggle("to-top__active", window.scrollY>500)
})