import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


new Accordion('.about-me-list', {
  duration: 500,
  showMultiple: true,
  openOnInit: [0],
  elementClass: 'about-me-item',
  triggerClass: 'about-btn',
  panelClass: 'accordion-content',
  activeClass: 'is-active',
});

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Keyboard } from 'swiper/modules';
const aboutSwiperContainer = document.querySelector('.skills-slider');


if (aboutSwiperContainer) {
  const aboutSwiper = new Swiper(aboutSwiperContainer, {
    modules: [Navigation, Keyboard],
    loop: true,
    slidesPerView: 2,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1,
    keyboard: { enabled: true, onlyInViewport: true },
    mousewheel: true,
    speed: 500,
    navigation: {
      nextEl: '.skills-button',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    centeredSlidesBounds: true,
  });
}



