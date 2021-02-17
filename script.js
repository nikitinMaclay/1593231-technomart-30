let popup = document.querySelector('.modal-map');
let openPopupButton = document.querySelector('.contacts-img');
let closePopupButton = popup.querySelector('.map-closing-button');
let popupContent = document.querySelector('.modal-write-us');
let openContactPopupButton = document.querySelector('.contacts-button');
let closeContactPopupButton = popupContent.querySelector('.contact-closing-button');

openContactPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupContent.classList.add('modal--show');
});

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closeContactPopupButton.addEventListener('click', function () {
  popupContent.classList.remove('modal--show');
  console.log('убрали класс')
});


closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});


