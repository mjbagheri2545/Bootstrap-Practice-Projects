// humburger-menu
function toggleMenu(el){
    el.classList.toggle('active');
    console.log(el.attributes);
}

// header animation
let wordOneSpan = document.querySelectorAll('.word-one span');
let wordTwoSpan = document.querySelectorAll('.word-two span');
let wordThreeSpan = document.querySelectorAll('.word-three span');

for(let i = 0;i<=wordOneSpan.length - 1;i++){
  wordOneSpan[i].style.animationDelay = `${(0.6 + i/9)}s`;
}
for(let i = 0;i<=wordTwoSpan.length - 1;i++){
  wordTwoSpan[i].style.animationDelay = `${(0.6 + i/9)}s`;
}
for(let i = 0;i<=wordThreeSpan.length - 1;i++){
  wordThreeSpan[i].style.animationDelay = `${(0.6 + i/8)}s`;
}



// scroll animation
let navigationBar = document.querySelector('.navigation-bar');
let scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll',windowScroll);

function windowScroll(){
    // navbar
    if(window.scrollY >= 75 || window.innerWidth <= 992){
        navigationBar.classList.remove('bg-transparent');
        navigationBar.classList.add('bg-white');
        navigationBar.classList.add('navbar-shadow');
    }else{
        navigationBar.classList.remove('bg-white');
        navigationBar.classList.remove('navbar-shadow');
        navigationBar.classList.add('bg-transparent');
    }
    
    // scroll-to-top
    window.scrollY >= 750
    ? (scrollToTopBtn.style.visibility = 'visible',scrollToTopBtn.style.opacity = 1) 
    : (scrollToTopBtn.style.visibility = 'hidden',scrollToTopBtn.style.opacity = 0);
}
windowScroll();

// scroll-to-top
function scrollToTop(){
    window.scrollTo(0,0);
}

// swiper testimonial slider
let testimonialSlider = new Swiper(".testimonial-slider", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768:{
        slidesPerView: 2,
      }
    },
});

// swiper blog slider
let blogSlider = new Swiper(".blog-slider", {
  spaceBetween: 20,
  breakpoints: {
    576:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 3,
    }
  },
});
