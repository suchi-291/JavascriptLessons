'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const showModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i].textContent);

  btnsShowModal[i].addEventListener('click', showModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (eventInfo) {
  //console.log('A Key was pressed');
  //console.log(eventInfo.key);
  if (eventInfo.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
