'use strict';
const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');

const CAROUSEL = document.querySelector('#carousel');

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
};

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', () => {
  CAROUSEL.classList.remove('transition-left');
  BTN_LEFT.addEventListener('click', moveLeft);
});

CAROUSEL.addEventListener('animationend', () => {
  CAROUSEL.classList.remove('transition-right');
  BTN_RIGHT.addEventListener('click', moveRight);
});
