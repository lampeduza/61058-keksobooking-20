'use strict'

var TITLE = [
  "title1",
  "title2",
  "title3",
  "title4",
  "title5",
  "title6",
  "title7",
  "title8"
];

var ADDRESS = [
  "Коммунистическая, 1",
  "Новая, 1",
  "Доватора, 1",
  "Центральная, 1",
  "Широкая, 1",
  "Летейная, 1",
  "Международная, 1",
  "Объединения, 1"
];

var TYPE = [
  "palace",
  "flat",
  "house",
  "bungalo"
];

var CHECKINS = [
  "12:00",
  "13:00",
  "14:00"
];

var CHECKOUTS = [
  "12:00",
  "13:00",
  "14:00"
];

var FEATURES = [ // нужно сделать массив строк случайной длины. Как понять?
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
];

var DESCRIPTION = [
  "description1",
  "description2",
  "description3",
  "description4",
  "description5",
  "description6",
  "description7",
  "description8"
];

var PHOTOS = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

// Функция для создания массива
var renderingArray = function () {};

// Функция генерации рандомного числа
var getRandomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArrayElement = function (array) {
  var randomValue = (Math.floor(Math.random() * array.length));

  return array[randomValue];
};

var generateData = function () {
  // Генерация объекта

var data = [];
for (var i = 1; i <= 7; i++) {
  data[i] = {
    "autor": {
      "avatar": "img/avatars/user0" + i + ".png"
    },
    "offer": {
      "title": getRandomArrayElement(TITLE),
      "address": "", // не понимаю, как делать вот это
      "price": getRandomInteger(15000, 50000),
      "type": getRandomArrayElement(TYPE),
      "rooms": getRandomInteger(1, 15),
      "guests": getRandomInteger(1, 6),
      "checkin": getRandomArrayElement(CHECKINS),
      "checkout": getRandomArrayElement(CHECKOUTS),
      "features": getRandomArrayElement(FEATURES), // тут по сути должно выбираться больше 1, да? я же правильно понимаю? как же это реализовать? Другую функцию писать?
      "description": getRandomArrayElement(DESCRIPTION),
      "photos": getRandomArrayElement(PHOTOS) // и тут тоже должно быть не по одной фото, а может быть и по 2 - 3?
    },
    "location": {
      "x": getRandomInteger(100, 1200),
      "y": getRandomInteger(130, 630)
    }
  }
}

return data;
};

console.log(generateData());



var map = document.querySelector('.map');
map.classList.remove('map--faded');

var mapPinTemplate = document.querySelector('#pin')
.content
.querySelector('.map__pin');
