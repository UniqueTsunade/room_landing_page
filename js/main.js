//Swiper 

const swiper = new Swiper('.swiper', {

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
  
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  if (ScrollTrigger.isTouch !==1) {
    
    ScrollSmoother.create({
      wrapper: ".wrapper", 
      content: ".content", 
      smooth: 1.5,
      effects: true,
  })


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
    x: 100,
    duration: 1,
  })
  .to(".presentation-content__text_left", {
    x: -100,
    duration: 1,
  })
  .to("#last", {
    x: 100,
    duration: 1,
  });

  }

  
});


