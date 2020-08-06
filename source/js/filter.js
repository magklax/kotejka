'use strict';

(() => {
  const roomArr = window.data.roomArr;
  const createRoomCards = window.render.createRoomCards;
  let newRoomArr = roomArr;

  const overlay = document.querySelector('.overlay');
  const roomIndex = document.querySelector('.rooms__index');

  const filterOpen = document.querySelector('#filters-open');
  const filterPopup = document.querySelector('#filters-form');
  const filterClose = filterPopup.querySelector('#filters-close');
  const filterSubmit = filterPopup.querySelector('#filters-submit');
  const filterReset = filterPopup.querySelector('#filters-reset');

  const minPriceInput = filterPopup.querySelector('#min-price');
  const maxPriceInput = filterPopup.querySelector('#max-price');
  const squareFieldset = filterPopup.querySelector('#squareFieldset');
  const facilityFieldset = filterPopup.querySelector('#facilityFieldset');

  const sortingBtn = document.querySelector('#sorting-open');
  const sortingList = document.querySelector('#sorting-list');
  const sortingOptions = sortingList.querySelectorAll('.sorting__item');

  /* filter */

  const replaceRoomCards = (arr) => {
    while (roomIndex.firstChild) {
      roomIndex.removeChild(roomIndex.firstChild);
    }

    createRoomCards(arr);
  };

  const getCheckboxArr = (fieldset) => {
    var checkedArr = [];
    var checkedCollection = fieldset.querySelectorAll(':checked');

    checkedCollection.forEach((el) => {
      checkedArr.push(el.value);
    });

    return checkedArr;
  };

  const Filters = function () {
    this.minPrice = this.setMinPrice(minPriceInput.value);
    this.maxPrice = this.setMaxPrice(maxPriceInput.value);
    this.square = this.getSquare();
    this.facilities = this.getFacilities();
  };

  Filters.prototype = {
    setMinPrice: (min) => {
      return min ? min : 100;
    },
    setMaxPrice: (max) => {
      return max ? max : 600;
    },
    getSquare: () => {
      return getCheckboxArr(squareFieldset);
    },
    getFacilities: () => {
      return getCheckboxArr(facilityFieldset);
    },
  };

  filterPopup.addEventListener('change', (evt) => {
    evt.preventDefault();

    const newFilters = new Filters();

    const checkFilters = (room) => {
      let able = true;

      if (newFilters.minPrice > room.price || newFilters.maxPrice < room.price) {
        able = false;
      }

      if (newFilters.square.length > 0) {
        if (!newFilters.square.includes(room.square)) {
          able = false;
        }
      }

      if (newFilters.facilities.length > 0) {
        newFilters.facilities.forEach((el) => {
          room.facilities.includes(el) ? able : able = false;
        });
      }

      return able;
    };

    newRoomArr = roomArr.filter(checkFilters);
    replaceRoomCards(newRoomArr);
  });

  /* sorting */

  const sortElementsUp = (key) => {
    return newRoomArr.sort((left, right) => {
      return left[key] - right[key];
    });
  };

  const sortElementsDown = (key) => {
    return newRoomArr.sort((left, right) => {
      return right[key] - left[key];
    });
  };

  const sortRoomsCards = (id) => {
    switch(id) {
      case 'square-up':
        newRoomArr = sortElementsUp('square');
        break;
      case 'square-down':
        newRoomArr = sortElementsDown('square');
        break;
      case 'price-up':
        newRoomArr = sortElementsUp('price');
        break;
      case 'price-down':
        newRoomArr = sortElementsDown('price');
        break;
    }
    replaceRoomCards(newRoomArr);
  };

  /* filter open/close */

  const onFilterPopupEscPress = (evt) => {
    window.utils.isEscKeycode(evt, closeFilterPopup);
  };

  const openFilterPopup = () => {
    overlay.classList.add('active');
    window.utils.showElement(filterPopup);

    document.addEventListener('keydown', onFilterPopupEscPress);
  };

  const closeFilterPopup = () => {
    overlay.classList.remove('active');
    window.utils.hideElement(filterPopup);

    document.removeEventListener('keydown', onFilterPopupEscPress);
  };

  const resetFilters = () => {
    replaceRoomCards(roomArr);
  };

  const onFilterOpenClick = (evt) => {
    evt.preventDefault();
    openFilterPopup();
  };

  const onFilterOpenEnterPress = (evt) => {
    evt.preventDefault();
    window.utils.isEnterKeycode(evt, openFilterPopup);
  };

  const onFilterCloseClick = (evt) => {
    evt.preventDefault();
    closeFilterPopup();
  };

  const onFilterCloseEnterPress = (evt) => {
    evt.preventDefault();
    window.utils.isEnterKeycode(evt, closeFilterPopup);
  };

  const onFilterResetClick = (evt) => {
    resetFilters();
  }

  const onFilterResetEnterPress = (evt) => {
    window.utils.isEnterKeycode(evt, resetFilters);
  };

  filterReset.addEventListener('click', onFilterResetClick);
  filterReset.addEventListener('click', onFilterResetEnterPress);
  filterOpen.addEventListener('click', onFilterOpenClick);
  filterOpen.addEventListener('keydown', onFilterOpenEnterPress);
  filterClose.addEventListener('click', onFilterCloseClick);
  filterClose.addEventListener('keydown', onFilterCloseEnterPress);
  filterSubmit.addEventListener('click', onFilterCloseClick);
  filterSubmit.addEventListener('keydown', onFilterCloseEnterPress);

  /* sorting open/close */

  const openSortingList = () => {
    window.utils.showElement(sortingList);

    sortingBtn.classList.add('active');
    document.addEventListener('keydown', onSortingListEscPress);
    document.addEventListener('click', outSortingListClick, true);
  };

  const closeSortingList = () => {
    window.utils.hideElement(sortingList);

    sortingBtn.classList.remove('active');
    sortingBtn.addEventListener('click', onSortingBtnClick);
  };

  const onSortingListEscPress = (evt) => {
    window.utils.isEscKeycode(evt, closeSortingList);
  };

  const outSortingListClick = (evt) => {
    if (evt.target !== sortingBtn) {
      closeSortingList();

      document.removeEventListener('click', outSortingListClick, true);
    }
  };

  const onSortingOptionClick = (evt) => {
    sortRoomsCards(evt.target.id);
    sortingBtn.textContent = evt.target.textContent;
  };

  const onSortingBtnClick = (evt) => {
    if (sortingBtn.classList.contains('active')) {
      closeSortingList();
    } else {
      openSortingList();
    }
  };

  sortingBtn.addEventListener('click', onSortingBtnClick);
  sortingList.addEventListener('click', onSortingOptionClick);
})();
