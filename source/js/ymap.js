'use strict';

(() => {
  ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 15,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Санкт-Петербург, ул Большая Конюшенная, д 19',
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icon-pin.svg',
      iconImageSize: [27, 49],
      iconImageOffset: [-13.5, -24.5]
    }),
    myPlacemark2 = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Санкт-Петербург, ул Большая Конюшенная, д 19',
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icon-pin.svg',
      iconImageSize: [32, 58],
      iconImageOffset: [-16, -29]
    });

    myMap.behaviors
      .disable('scrollZoom');

    screen.width < 768 ? myMap.geoObjects.add(myPlacemark1) : myMap.geoObjects.add(myPlacemark2);
  });
})();
