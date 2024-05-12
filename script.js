var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

var tl = gsap.timeline()

tl.from('.logo', {
    y: -30,
    opacity: 0,
    duration: 0.4,
    delay: 0.5,
})
tl.from('.nav-links li', {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
})