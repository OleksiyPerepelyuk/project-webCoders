import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded');

  const accordion = new Accordion('.faq-list', {
    elementClass: 'faq-item',
    triggerClass: 'faq-question',
    panelClass: 'faq-open',
    activeClass: 'active',
    showMultiple: true,
    closeOnClickOutside: true,
  });

  console.log('Accordion initialized:', accordion);
});
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
      const icon = item.querySelector('.faq-icon');
      icon.classList.toggle('rotated'); // Повертаємо іконку на 180°
    });
  });
});
