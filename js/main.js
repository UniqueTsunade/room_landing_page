//Swiper 1

  const swiper = new Swiper(".coverflow .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 800,
      depth: 300,
      modifier: 1,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

      navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

  });

//Scroll 
document.addEventListener("DOMContentLoaded", function () {

  if (window.matchMedia("(min-width: 900px)").matches) {
    gsap.registerPlugin(ScrollTrigger);

    let tt = gsap.timeline({
      scrollTrigger: {
        trigger: ".presentation__description",
        start: "top center",
        end: "bottom center", 
        scrub: true,
        toggleActions: "play pause resume reset"
      }
    });

    tt.fromTo(".presentation__description", {x: -50, opacity: 0.3}, {
      opacity: 1, x: 0,
      duration: 1,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".presentation-content",
        start: "top center",
        end: "bottom center", 
        scrub: true,
        toggleActions: "play pause resume reset"
      }
    });

    tl.to("#first", {
      x: 75,
      duration: 1,
    })
    .to(".presentation-content__text_left", {
      x: -75,
      duration: 1,
    })
    .to("#last", {
      x: 75,
      duration: 1,
    });
  }
});




//Swiper 2

const swiperAuto = new Swiper(".swiper-auto", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }

});


//Mobile nav

const mobileNavOpen = document.querySelector("#open-mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const navBottomIcons = document.querySelector(".nav-bottom__icons");


mobileNavOpen.addEventListener("click", function() {
  mobileNav.classList.add("mobile-nav--open");
  navBottomIcons.classList.add("none");

})


mobileNavCloseBtn.addEventListener("click", function() {
  mobileNav.classList.remove("mobile-nav--open");
  navBottomIcons.classList.remove("none");
})


