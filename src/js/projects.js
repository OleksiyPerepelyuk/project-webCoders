const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.project-swiper-slide');
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

prevButton.addEventListener('click', () => changeSlide(currentSlide - 1));
nextButton.addEventListener('click', () => changeSlide(currentSlide + 1));

function changeSlide(index) {
  slides[currentSlide].classList.remove('active');
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  slides[currentSlide].classList.add('active');
  updateButtonsState();
}

function updateButtonsState() {
  prevButton.disabled = false;
  nextButton.disabled = false;

  if (currentSlide === 0) {
    prevButton.disabled = true;
  }

  if (currentSlide === slides.length - 1) {
    nextButton.disabled = true;
  }

  prevButton.classList.toggle('disabled', prevButton.disabled);
  nextButton.classList.toggle('disabled', nextButton.disabled);
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    changeSlide(currentSlide - 1);
  } else if (e.key === 'ArrowRight') {
    changeSlide(currentSlide + 1);
  } else if (e.key === 'Tab') {
    if (e.shiftKey) {
      changeSlide(currentSlide - 1);
    } else {
      changeSlide(currentSlide + 1);
    }
  }
});

const swiperWrapper = document.querySelector('.project-swiper-wrapper');

swiperWrapper.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

swiperWrapper.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 50) {
    changeSlide(currentSlide - 1);
  } else if (swipeDistance < -50) {
    changeSlide(currentSlide + 1);
  }
}

updateButtonsState();
