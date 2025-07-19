'use strict';

const modal = document.querySelector('.modals');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


  btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




const modalA = document.querySelector('.modals2');
const overlayA = document.querySelector('.overlay2');
const btnCloseModalA = document.querySelector('.close-modal2');
const btnsOpenModalA = document.querySelector('.show-modal-2');

const openModalA = function () {
  modalA.classList.remove('hidden');
  overlayA.classList.remove('hidden');
};

const closeModalA = function () {
  modalA.classList.add('hidden');
  overlayA.classList.add('hidden');
};

 btnsOpenModalA.addEventListener('click', openModalA);

btnCloseModalA.addEventListener('click', closeModalA);
overlayA.addEventListener('click', closeModalA);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalA();
  }
});




const modalB = document.querySelector('.modals3');
const overlayB = document.querySelector('.overlay3');
const btnCloseModalB = document.querySelector('.close-modal3');
const btnsOpenModalB = document.querySelector('.show-modal-3');

const openModalB = function () {
  modalB.classList.remove('hidden');
  overlayB.classList.remove('hidden');
};

const closeModalB = function () {
  modalB.classList.add('hidden');
  overlayB.classList.add('hidden');
};

 btnsOpenModalB.addEventListener('click', openModalB);

btnCloseModalB.addEventListener('click', closeModalB);
overlayB.addEventListener('click', closeModalB);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalB();
  }
});








