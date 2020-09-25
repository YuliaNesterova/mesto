let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupInputTitle = document.querySelector('.popup__input_title');
let popupInputSubtitle = document.querySelector('.popup__input_subtitle');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

const togglePopup = function togglePopup() {
  popup.classList.toggle("popup_opened");
}

const autoFill = function autoFill() {
  popupInputTitle.value = profileTitle.textContent;
  popupInputSubtitle.value = profileSubtitle.textContent;
}




editButton.addEventListener("click", togglePopup);
editButton.addEventListener("click", autoFill);
popupCloseButton.addEventListener("click", togglePopup);


