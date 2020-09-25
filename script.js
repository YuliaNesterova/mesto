let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_title');
let jobInput = document.querySelector('.popup__input_subtitle');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__container');

const togglePopup = function togglePopup() {
  popup.classList.toggle("popup_opened");
}

const autoFill = function autoFill() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}


function formSubmitHandler (evt) {
  evt.preventDefault();

  nameInput.value;
  jobInput.value;
    
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

}

editButton.addEventListener("click", togglePopup);
editButton.addEventListener("click", autoFill);
popupCloseButton.addEventListener("click", togglePopup);
formElement.addEventListener('submit', formSubmitHandler);  



