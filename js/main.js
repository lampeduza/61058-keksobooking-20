'use strict'

var TYPES = [
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

var generateData = function () {

};

// Генерация объекта
for (var i = 0; i <= 7; i++) {
  var data = [
  {
    "autor": {
      "avatar": "img/avatars/user0" + i + ".png"
    },
    "offer": {
      "title": "",
      "address": "",
      "price": getRandomInteger(15000, 50000),
      "type": "",
      "rooms": getRandomInteger(1, 15),
      "guests": getRandomInteger(1, 6),
      "checkin": "",
      "checkout": "",
      "features": "",
      "description": "",
      "photos": ""
    },
    "location": {
      "x": "",
      "y": ""
    }
  }
  ];
}

console.log(generateData());
