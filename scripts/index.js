import { Card } from './Card.js';
import { FormValidator } from "./FormValidator.js";
import { openPopup } from "./utils.js";
import { initialCards } from "./initial-cards.js";
import { validationParams } from "./constants.js";

const popupEdit = document.querySelector(".popup_type_edit");
const editButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__input_type_title");
const jobInput = document.querySelector(".popup__input_type_subtitle");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
export const editFormElement = document.querySelector(".popup__form_type_edit");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const cardsContainer = document.querySelector(".elements__items");
const cardsTemplateSelector = ".cards-template";
export const addFormElement = document.querySelector(".popup__form_type_add");
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
export const imagePopup = document.querySelector(".popup_type_image");
export const editFormElementValidation = new FormValidator(validationParams, editFormElement);
editFormElementValidation.enableValidation(validationParams, editFormElement);
export const addFormElementValidation = new FormValidator(validationParams, addFormElement);
addFormElementValidation.enableValidation(validationParams, addFormElement);

function clearInput(popupElement) {
    const popupInput = Array.from(popupElement.querySelectorAll(validationParams.inputSelector));

    popupInput.forEach((inputElement) => {
        inputElement.value = "";
    });
}

function closePopup(popupElement) {
    popupElement.classList.remove("popup_opened");

    const formElement = popupElement.querySelector(validationParams.formSelector)

    clearInput(popupElement);

    if(formElement && formElement.classList.contains("popup__form_type_edit")) {
        editFormElementValidation.checkOpenValidity(editFormElement);
        editFormElementValidation.hideErrorClose(formElement, validationParams);
    } else if(formElement && formElement.classList.contains("popup__form_type_add")) {
        addFormElementValidation.checkOpenValidity(addFormElement);
        addFormElementValidation.hideErrorClose(formElement, validationParams);
    }
    document.removeEventListener("keydown", (evt) => handleEscPopup(evt, popupElement));
    document.removeEventListener("click", (evt) => handlePopupBackgroundClick(evt, popupElement));
}

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

export function handleEscPopup(evt, popupElement) {
    if (popupElement.classList.contains("popup_opened") && evt.key === "Escape") {
        closePopup(popupElement);
    }
}

export function handlePopupBackgroundClick(evt, popupElement) {
    if(evt.target.classList.contains("popup")) {
        closePopup(popupElement);
    }
}

initialCards.forEach((item) => {
    const card = createCard(item, ".cards-template");

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
