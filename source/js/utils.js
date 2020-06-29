'use strict';

(() => {
  const isEnterKeycode = (evt, func) => {
    if (evt.keyCode === 13) {
      func();
    }
  };

  const isEscKeycode = (evt, func) => {
    if (evt.keyCode === 27) {
      func();
    }
  };

  const hideElement = (el) => {
    el.style.display = 'none';
  };

  const showElement = (el) => {
    el.style.display = 'block';
  };

  window.utils = {
    isEnterKeycode: isEnterKeycode,
    isEscKeycode: isEscKeycode,
    hideElement: hideElement,
    showElement: showElement,
  };
})();
