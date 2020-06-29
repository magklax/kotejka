'use strict';

(() => {
  const mainHeader = document.querySelector('.page-header');
  const mainNav = document.querySelector('.main-nav');
  const menuToggle = document.querySelector('.main-nav__toggle');

  const openMenu = () => {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    mainHeader.style.backgroundColor = '#fac663';

    menuToggle.removeEventListener('click', onToggleOpenClick);
    menuToggle.removeEventListener('keydown', onToggleOpenEnterPress);
    menuToggle.addEventListener('click', onToggleCloseClick);
    menuToggle.addEventListener('keydown', onToggleCloseEnterPress);
  };

  const closeMenu = () => {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    mainHeader.style.backgroundColor = '#fffefd';

    menuToggle.removeEventListener('click', onToggleCloseClick);
    menuToggle.removeEventListener('keydown', onToggleCloseEnterPress);
    menuToggle.addEventListener('click', onToggleOpenClick);
    menuToggle.addEventListener('keydown', onToggleOpenEnterPress);
  };

  const onToggleOpenClick = (evt) => {
    evt.preventDefault();
    openMenu();
  };

  const onToggleCloseClick = (evt) => {
    evt.preventDefault();
    closeMenu();
  };

  const onOpenMenuEscPress = (evt) => {
    window.utils.isEscKeycode(evt, closeMenu);
  };

  const onToggleOpenEnterPress = (evt) => {
    evt.preventDefault();
    window.utils.isEnterKeycode(evt, openMenu);
  };

  const onToggleCloseEnterPress = (evt) => {
    evt.preventDefault();
    window.utils.isEscKeycode(evt, closeMenu);
  };

  menuToggle.addEventListener('click', onToggleOpenClick);
  menuToggle.addEventListener('keydown', onToggleOpenEnterPress);
  document.addEventListener('keydown', onOpenMenuEscPress);

})();
