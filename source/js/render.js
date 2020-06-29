'use strict';

(() => {
  const roomContainer = document.querySelector('.rooms__index');
  const roomTemplate = document.querySelector("#room")
    .content
    .querySelector('.rooms__block');
  const facilityTemplate = document.querySelector("#room")
    .content
    .querySelector('.rooms__facilities li');


  const renderFacility = (arr) => {
    const facilityElement = facilityTemplate.cloneNode(true);

    window.data.facilitiesArr.forEach((el) => {
      if (arr.includes(el.name)) {
        facilityElement.querySelector('img').src = 'img/' + el.src;
        facilityElement.querySelector('img').alt = el.name;
        facilityElement.querySelector('img').title = el.name;
        facilityElement.querySelector('img').width = el.width;
        facilityElement.querySelector('img').height = el.height;
      }
    });

    return facilityElement;
  };

  const createFacilityList = (arr, container) => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < arr.length; i++) {
      fragment.appendChild(renderFacility(arr[i]));
    }

    container.appendChild(fragment);
  };

  const renderRoomCard = (room) => {
    const roomElement = roomTemplate.cloneNode(true);

    const roomPicMobile = roomElement.querySelector('.picture');
    const roomPicTablet = roomElement.querySelector('[media*="768"]');
    const roomPicDesktop = roomElement.querySelector('[media*="1366"]');
    const roomTitle = roomElement.querySelector('.rooms__title');
    const roomSize = roomElement.querySelector('.rooms__size');
    const roomSquare = roomElement.querySelector('.rooms__square');
    const roomsFacilities = roomElement.querySelector('.rooms__facilities');
    const roomPrice = roomElement.querySelector('.rooms__price');

    roomPicMobile.src = 'img/room-pic-mobile-' + room.src;
    roomPicTablet.srcset = 'img/room-pic-tablet-' + room.src;
    roomPicDesktop.srcset = 'img/room-pic-desktop-' + room.src;

    roomTitle.textContent = room.title;
    roomSize.textContent = room.size;
    roomSquare.textContent = room.square + ' м2';
    roomPrice.textContent = room.price + '₽';

    while (roomsFacilities.firstChild) {
      roomsFacilities.removeChild(roomsFacilities.firstChild);
    }

    createFacilityList(room.facilities, roomsFacilities);

    return roomElement;
  };

  const createRoomCards = (data) => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < data.length; i++) {
      fragment.appendChild(renderRoomCard(data[i]));
    }

    roomContainer.appendChild(fragment);
  };

  createRoomCards(window.data.roomArr);

  window.render = {
    createRoomCards: createRoomCards
  };

})();