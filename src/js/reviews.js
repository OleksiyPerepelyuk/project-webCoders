import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
async function getReviews() {
  try {
    console.log('Fetching reviews...');
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    console.log('API Response:', response.data);
    if (!response.data || response.data.length === 0) {
      throw new Error('No reviews found');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    iziToast.error({
      title: 'Error',
      message: 'Sorry, something went wrong with reviews.',
    });
    return [];
  }
}
function renderReviews(reviews) {
  const reviewsList = document.getElementById('reviews-list');
  if (!reviewsList) {
    console.error('Element #reviews-list not found in DOM!');
    return;
  }
  reviewsList.innerHTML = '';
  if (!reviews || reviews.length === 0) {
    reviewsList.innerHTML = '<p class="error">Not found</p>';
    console.log('No reviews to display.');
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
  console.log('Inserted reviews into DOM:', markup);
}
function updateButtonState(swiper) {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  if (!prevButton || !nextButton) {
    console.error('Swiper navigation buttons not found!');
    return;
  }
  prevButton.classList.toggle('disabled', swiper.isBeginning);
  nextButton.classList.toggle('disabled', swiper.isEnd);
  prevButton.disabled = swiper.isBeginning;
  nextButton.disabled = swiper.isEnd;
}
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded!');
  const reviews = await getReviews();
  renderReviews(reviews);
  setTimeout(() => {
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
      keyboard: { enabled: true, onlyInViewport: true },
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
    console.log('Swiper re-initialized:', swiper);
    document
      .getElementById('prev')
      ?.addEventListener('keydown', function (event) {
        if (['ArrowLeft', 'Enter', ' '].includes(event.key)) {
          event.preventDefault();
          swiper.slidePrev();
        }
      });
    document
      .getElementById('next')
      ?.addEventListener('keydown', function (event) {
        if (['ArrowRight', 'Enter', ' '].includes(event.key)) {
          event.preventDefault();
          swiper.slideNext();
        }
      });
  }, 100);
});
