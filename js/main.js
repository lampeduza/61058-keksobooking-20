'use strict'

var TITLE = [ // это заголовки
  "title1",
  "title2",
  "title3",
  "title4",
  "title5",
  "title6",
  "title7",
  "title8"
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

var FEATURES = [
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

var getRandomArray = function (array) {
  var randomArrayLength = getRandomInteger(0, array.length);
  var copyArray = array.slice();
  var newArray = [];

  for (var i = 0; i < randomArrayLength; i++) {
    newArray[i] = copyArray.splice(getRandomInteger(0, copyArray.length - 1), 1)[0];
  }

  return newArray;
};

var locationX = getRandomInteger(100, 1200);
var locationY = getRandomInteger(130, 630);

var getRandomArrayElement = function (array) {
  var randomValue = (Math.floor(Math.random() * array.length));

  return array[randomValue];
};

// функция, там должен быть цикл по массиву объектов.

var generateData = function () {

  return data;
};

var data = [];

for (var i = 1; i <= 7; i++) {
  data[i] = {
    "autor": {
      "avatar": "img/avatars/user0" + i + ".png"
    },
    "offer": {
      "title": getRandomArrayElement(TITLE),
      "address": locationX + ", " + locationY,
      "price": getRandomInteger(15000, 50000),
      "type": getRandomArrayElement(TYPE),
      "rooms": getRandomInteger(1, 15),
      "guests": getRandomInteger(1, 6),
      "checkin": getRandomArrayElement(CHECKINS),
      "checkout": getRandomArrayElement(CHECKOUTS),
      "features": getRandomArray(FEATURES),
      "description": getRandomArrayElement(DESCRIPTION),
      "photos": getRandomArray(PHOTOS)
    },
    "location": {
      "x": locationX,
      "y": locationY
    }
  }
}

console.log(generateData());

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var mapPinTemplate = document.querySelector('#pin')
.content
.querySelector('.map__pin');
