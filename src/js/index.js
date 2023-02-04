import 'regenerator-runtime/runtime';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);


//init zone
gsap.registerPlugin(ScrollTrigger);



document.body.onscroll = function() {
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
};





  var menu = ['Slide 1', 'Slide 2', 'Slide 3']
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
          },
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  




