'use strict';

(() => {
  const pictureWrapper = document.querySelector('.rooms__wrapper');
  const mainPictureBlock = pictureWrapper.querySelector('#main-picture');
  const roomPicMobile = mainPictureBlock.querySelector('img');
  const roomPicTablet = mainPictureBlock.querySelector('[media*="768"]');
  const roomPicDesktop = mainPictureBlock.querySelector('[media*="1366"]');

  const togglePictures = (target, index) => {
    pictureWrapper.querySelectorAll('a[href="#"]').forEach((el) => {
      el.style.opacity = '.5';
    });

    target.style.opacity = '1';

    roomPicMobile.src = 'img/room-card-mobile-' + index + '.png';
    roomPicTablet.srcset = 'img/room-card-tablet-' + index  + '.png';
    roomPicDesktop.srcset = 'img/room-card-desktop-' + index  + '.png';
  };

  pictureWrapper.addEventListener('click', (evt) => {
    const target = evt.target.closest('a[href="#"]');
    if (target) {
      evt.preventDefault();

      togglePictures(target, target.dataset.index);
    }
  });

  pictureWrapper.addEventListener('keydown', window.utils.isEnterKeycode((evt) => {
    const target = evt.target;

    if (target === 'a[href="#"]') {
      evt.preventDefault();

      togglePictures(target, target.dataset.index);
    }
  }));
})();

