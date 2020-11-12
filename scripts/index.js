import { Card } from './Card.js';
import { FormValidator } from "./FormValidator.js";
import {closePopup, openPopup} from "./utils.js";
import { initialCards } from "./initial-cards.js";
import { validationParams, imagePopup, editFormElement, addFormElement } from "./constants.js";

const popupEdit = document.querySelector(".popup_type_edit");
const editButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__input_type_title");
const jobInput = document.querySelector(".popup__input_type_subtitle");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const cardsContainer = document.querySelector(".elements__items");
const cardsTemplateSelector = ".cards-template";
const descriptionInput = document.querySelector(
    ".popup__input_type_description"
);
const linkInput = document.querySelector(".popup__input_type_link");
const popupCloseButtonEdit = document.querySelector(
    ".popup__close-button_type_edit"
);
const popupCloseButtonAdd = document.querySelector(
    ".popup__close-button_type_add"
);
const imagePopupCloseButton = document.querySelector(
    ".popup__close-button_type_image"
);

const editFormElementValidation = new FormValidator(validationParams, editFormElement);
editFormElementValidation.enableValidation(validationParams, editFormElement);
const addFormElementValidation = new FormValidator(validationParams, addFormElement);
addFormElementValidation.enableValidation(validationParams, addFormElement);

function handleEditFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    closePopup(popupEdit);
}

function createCard(data, templateSelector) {
    const card = new Card().getCard(data, templateSelector);
    return card;
}

function handleAddFormSubmit(evt) {
    evt.preventDefault();

    const item = createCard({name:descriptionInput.value, link: linkInput.value}, cardsTemplateSelector);
    addFormElement.reset();

    cardsContainer.prepend(item);

    closePopup(popupAdd);
}

initialCards.forEach((item) => {
    const card = createCard(item, cardsTemplateSelector);

    cardsContainer.append(card);
});

editButton.addEventListener("click", () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupEdit);
});
editFormElement.addEventListener("submit", handleEditFormSubmit);
profileAddButton.addEventListener("click", () => openPopup(popupAdd));
addFormElement.addEventListener("submit", handleAddFormSubmit);
popupCloseButtonEdit.addEventListener("click", () => closePopup(popupEdit));
popupCloseButtonAdd.addEventListener("click", () => closePopup(popupAdd));
imagePopupCloseButton.addEventListener("click", () => closePopup(imagePopup));
