'use strict';

(() => {
  const roomArr = [];
  const dataArr = [
    {src: '1.png', title: 'Эконом', a: 90, b: 70, c: 180, price: 100, facilities: ['Пустой номер']},
    {src: '2.png', title: 'Эконом плюс',a: 90, b: 100, c: 180, price: 200, facilities: ['Лежак', 'Когтеточка']},
    {src: '3.png', title: 'Комфорт', a: 90, b: 125, c: 180, price: 250, facilities: ['Лежак', 'Игровой комплекс', 'Когтеточка']},
    {src: '4.png', title: 'Сьют', a: 125, b: 125, c: 180, price: 350, facilities: ['Лежак', 'Игровой комплекс', 'Когтеточка']},
    {src: '5.png', title: 'Люкс', a: 160, b: 160, c: 180, price: 500, facilities: ['Лежак', 'Домик', 'Игровой комплекс', 'Когтеточка']},
    {src: '6.png', title: 'Супер-Люкс', a: 180, b: 160, c: 180, price: 600, facilities: ['Лежак', 'Домик', 'Игровой комплекс', 'Когтеточка']}
  ];

  const facilitiesArr = [
    {
      name: 'Пустой номер',
      src: 'icon-facs-1.svg',
      width: '18',
      height: '18'
    },{
      name: 'Лежак',
      src: 'icon-facs-2.svg',
      width: '18',
      height: '14'
    },{
      name: 'Когтеточка',
      src: 'icon-facs-3.svg',
      width: '16',
      height: '18'
    },{
      name: 'Игровой комплекс',
      src: 'icon-facs-4.svg',
      width: '16',
      height: '16'
    },{
      name: 'Домик',
      src: 'icon-facs-5.svg',
      width: '16',
      height: '16'
    }
  ];

  const Room = function (src, title, a, b, c, price, facilities) {
    this.src = src;
    this.title = title;
    this.a = a;
    this.b = b;
    this.c = c;
    this.price = price;
    this.facilities = facilities;
    this.size = this.setSize(a, b, c);
    this.square = this.setSquare(a, b);
  };

  Room.prototype = {
    setSize: (a, b, c) => {
      return a + 'х' + b + 'х' + c + ' см';
    },
    setSquare: (a, b) => {
      return ((a * b) / 10000).toFixed(2);
    }
  };

  dataArr.forEach( function(el) {
    let newRoom = new Room (el.src, el.title, el.a, el.b, el.c, el.price, el.facilities);
    return roomArr.push(newRoom);
  });

  window.data = {
    facilitiesArr: facilitiesArr,
    roomArr: roomArr
  };
})();


