const modal = document.getElementById('w-t-modal');
const closeBtn = document.getElementById('w-t-close-btn');
const modalBackdrop = document.querySelector('.w-t-modal-backdrop');
const modalContent = document.querySelector('.w-t-modal-content');

function closeModal() {
  modalContent.classList.add('closing');

  setTimeout(() => {
    modal.style.display = 'none';
    modalContent.classList.remove('closing');
    document.body.classList.remove('modal-open');
  }, 500);
}

function openModal() {
  modal.style.display = 'flex';
  modalContent.classList.remove('closing'); 
  document.body.classList.add('modal-open');
}

closeBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const form = document.getElementById('work-together-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  openModal();
});

const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('email-message');

emailInput.addEventListener('input', function () {
  const emailValue = emailInput.value;
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (emailValue === '') {
    emailInput.classList.remove('valid', 'invalid');
    messageDiv.textContent = '';
    messageDiv.classList.remove('success', 'error');
  } else if (emailPattern.test(emailValue)) {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
    messageDiv.textContent = 'Success!';
    messageDiv.classList.remove('error');
    messageDiv.classList.add('success');
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
    messageDiv.textContent = 'Invalid email, try again';
    messageDiv.classList.remove('success');
    messageDiv.classList.add('error');
  }
});
