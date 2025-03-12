import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
async function getReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return await response.json();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, something went wrong with reviews.',
    });
    return [];
  }
}
function renderReviews(reviews) {
  const reviewsList = document.getElementById('reviews-list');
  reviewsList.innerHTML = '';
  if (!reviews || reviews.length === 0) {
    reviewsList.innerHTML = '<p class="error">Not found</p>';
    return;
  }
  const markup = reviews
    .map(
      review => `
    <li class="swiper-slide swiper-slide-reviews" id="review">
      <img class="reviewer-image" src="${review.avatar_url}" alt="user photo" width="48" height="48"/>
      <h3 class="reviewer-name">${review.author}</h3>
      <p class="review-text">${review.review}</p>
    </li>
  `
    )
    .join('');
  reviewsList.insertAdjacentHTML('beforeend', markup);
}
function updateButtonState(swiper) {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  prevButton.classList.toggle('disabled', swiper.isBeginning);
  nextButton.classList.toggle('disabled', swiper.isEnd);
  prevButton.disabled = swiper.isBeginning;
  nextButton.disabled = swiper.isEnd;
}
document.addEventListener('DOMContentLoaded', async () => {
  const reviews = await getReviews();
  renderReviews(reviews);
  const swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      375: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
    touchRatio: 1,
    loop: false,
    on: {
      init: function () {
        updateButtonState(this);
      },
      slideChange: function () {
        updateButtonState(this);
      },
    },
  });
  document.getElementById('prev').addEventListener('keydown', function (event) {
    if (
      event.key === 'ArrowLeft' ||
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();
      swiper.slidePrev();
    }
  });
  document.getElementById('next').addEventListener('keydown', function (event) {
    if (
      event.key === 'ArrowRight' ||
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();
      swiper.slideNext();
    }
  });
});
