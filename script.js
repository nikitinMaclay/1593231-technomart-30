let popupContact = document.querySelector('.modal-write-us');
let openContactPopupButton = document.querySelector('.contacts-button');
let closeContactPopupButton = popupContact.querySelector('.modal-closing-button');
let popup = document.querySelector('.modal-map');
let openPopupButton = document.querySelector('.contacts-img');
let closePopupButton = popup.querySelector('.modal-closing-button');

openContactPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupContact.classList.add('modal--show');
});

closeContactPopupButton.addEventListener('click', function () {
  popupContact.classList.remove('modal--show');
});

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});


// openCatalogPopupButton.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popupCatalog.classList.add('modal--show');
// });

// closeCatalogPopupButton.addEventListener('click', function () {
//   popupCatalog.classList.remove('modal--show');
// });
