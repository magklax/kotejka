"use strict";ymaps.ready(function(){const e=new ymaps.Map("map",{center:[59.938635,30.323118],zoom:15,controls:["zoomControl","typeSelector","fullscreenControl","routeButtonControl"]},{searchControlProvider:"yandex#search"}),o=(ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),new ymaps.Placemark(e.getCenter(),{hintContent:"Санкт-Петербург, ул Большая Конюшенная, д 19"},{iconLayout:"default#image",iconImageHref:"../img/icon-pin.svg",iconImageSize:[27,49],iconImageOffset:[-13.5,-24.5]})),t=new ymaps.Placemark(e.getCenter(),{hintContent:"Санкт-Петербург, ул Большая Конюшенная, д 19"},{iconLayout:"default#image",iconImageHref:"../img/icon-pin.svg",iconImageSize:[32,58],iconImageOffset:[-16,-29]});e.behaviors.disable("scrollZoom"),screen.width<768?e.geoObjects.add(o):e.geoObjects.add(t)});