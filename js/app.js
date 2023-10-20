const mySwiper = new Swiper('.swiper-container', {
   loop: true,
   effect: 'cube',
   cubeEffect: {
     slideShadows: true,
     shadow: true,
     shadowOffset: 20,
     shadowScale: 0.94,
   },
   speed: 800, 
   autoplay: {
     delay: 3000,
   },
   fadeEffect: {
     crossFade: true,
   },
 });

 