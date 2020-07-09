'use strict';

var TITLE = [ // это заголовки
  'title1',
  'title2',
  'title3',
  'title4',
  'title5',
  'title6',
  'title7',
  'title8'
];

var TYPE = [
  'palace',
  'flat',
  'house',
  'bungalo'
];

var CHECKINS = [
  '12:00',
  '13:00',
  '14:00'
];

var CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var DESCRIPTION = [
  'description1',
  'description2',
  'description3',
  'description4',
  'description5',
  'description6',
  'description7',
  'description8'
];

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

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

var getRandomArrayElement = function (array) {
  var randomValue = (Math.floor(Math.random() * array.length));

  return array[randomValue];
};

var data = [];

var generatedData = function (index) { // придумать название функции по - лучше
  var locationX = getRandomInteger(100, 1200);
  var locationY = getRandomInteger(130, 630);

  return {
    'author': {
      'avatar': 'img/avatars/user0' + (index + 1) + '.png'
    },
    'offer': {
      'title': getRandomArrayElement(TITLE),
      'address': locationX + ', ' + locationY,
      'price': getRandomInteger(15000, 50000),
      'type': getRandomArrayElement(TYPE),
      'rooms': getRandomInteger(1, 15),
      'guests': getRandomInteger(1, 6),
      'checkin': getRandomArrayElement(CHECKINS),
      'checkout': getRandomArrayElement(CHECKOUTS),
      'features': getRandomArray(FEATURES),
      'description': getRandomArrayElement(DESCRIPTION),
      'photos': getRandomArray(PHOTOS)
    },
    'location': {
      'x': locationX,
      'y': locationY
    }
  };
};

var generateData = function () {
  for (var i = 0; i <= 7; i++) {
    data[i] = generatedData(i);
  }
};

generateData();

var map = document.querySelector('.map');
var mapPinTemplate = document.querySelector('#pin')
.content
.querySelector('.map__pin');
var mapPins = document.querySelector('.map__pins');
map.classList.remove('map--faded');

// функция создания пинов на карте
var renderPin = function (pinData) {
  var pin = mapPinTemplate.cloneNode(true);
  var pinImage = pin.querySelector('img');
  pinImage.src = pinData.author.avatar;
  pin.style.left = pinData.location.x + 'px';
  pin.style.top = pinData.location.y + 'px';

  return pin;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < data.length; j++) {
  fragment.appendChild(renderPin(data[j]));
}

mapPins.appendChild(fragment);
