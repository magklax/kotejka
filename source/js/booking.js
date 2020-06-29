'use strict';

(() => {
  const bookingPopup = document.querySelector('#booking-form');
  const overlay = document.querySelector('.overlay');
  const bookingOpen = document.querySelector('#booking-open');
  const bookingClose = bookingPopup.querySelector('#booking-close');

  const confirmPopup = document.querySelector('#confirmation');
  const confirmClose = confirmPopup.querySelector('#confirmation-close');
  const confirmOk = confirmPopup.querySelector('#confirmation-ok');

  const onBookingPopupEscPress = (evt) => {
    window.utils.isEscKeycode(evt, closeBookingPopup);
  };

  const openBookingPopup = () => {
    overlay.classList.add('active');
    window.utils.showElement(bookingPopup);

    document.addEventListener('keydown', onBookingPopupEscPress);
  };

  const closeBookingPopup = () => {
    window.utils.hideElement(bookingPopup);
    overlay.classList.remove('active');

    document.removeEventListener('keydown', onBookingPopupEscPress);
  };

  const onBokingBtnOpenClick = (evt) => {
    evt.preventDefault();
    openBookingPopup();
  };

  const onBokingBtnOpenEnterPress = (evt) => {
    evt.preventDefault();
    window.utils.isEnterKeycode(evt, openBookingPopup);
  };

  const onBokingBtnCloseClick = (evt) => {
    evt.preventDefault();
    closeBookingPopup();
  };

  const onBokingBtnCloseEnterPress = (evt) => {
    evt.preventDefault();
    window.utils.isEnterKeycode(evt, closeBookingPopup);
  }

  /*********/

  const onConfirmPopupEscPress = (evt) => {
    window.utils.isEscKeycode(evt, closeConfirmPopup);
  };

  const openConfirmPopup = () => {
    overlay.classList.add('active');
    window.utils.showElement(confirmPopup);

    document.addEventListener('keydown', onConfirmPopupEscPress);
  };

  const closeConfirmPopup = () => {
    overlay.classList.remove('active');
    window.utils.hideElement(confirmPopup);

    document.removeEventListener('keydown', onConfirmPopupEscPress);
  };

  const onBookingSubmitSuccess = (evt) => {
    evt.preventDefault();
    closeBookingPopup();
    openConfirmPopup();
  };

  const onConfirmBtnClick = (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      evt.preventDefault();
      closeConfirmPopup();
    }
  };

  const onConfirmBtnEnterPress = (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      evt.preventDefault();
      window.utils.isEnterKeycode(evt, closeConfirmPopup);
    }
  }

  bookingOpen.addEventListener('click', onBokingBtnOpenClick);
  bookingOpen.addEventListener('keydown', onBokingBtnOpenEnterPress);
  bookingClose.addEventListener('click', onBokingBtnCloseClick);
  bookingClose.addEventListener('keydown', onBokingBtnCloseEnterPress);

  bookingPopup.addEventListener('submit', onBookingSubmitSuccess);
  confirmPopup.addEventListener('click', onConfirmBtnClick);
  confirmPopup.addEventListener('keydown', onConfirmBtnEnterPress);
})();