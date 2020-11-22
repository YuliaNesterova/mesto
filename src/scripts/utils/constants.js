export const validationParams = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_invalid',
};

const imagePopup = document.querySelector(".popup_type_image");
const editFormElement = document.querySelector(".popup__form_type_edit");
const addFormElement = document.querySelector(".popup__form_type_add");
const popupClass = "popup";
const popupOpenClass = "popup_opened";

const popupCloseButtonSelector = ".popup__close-button";
const imagePopupPicture = document.querySelector(".popup__image");
const imagePopupCaption = document.querySelector(".popup__caption");
const imagePopupSelector = ".popup_type_image";
const cardsTemplateSelector = ".cards-template";
const elementsItemsSelector = ".elements__items";
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__input_type_title");
const jobInput = document.querySelector(".popup__input_type_subtitle");
const likeButtonActiveClass = "element__like-button_clicked";
const editButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

export {imagePopup, editFormElement, addFormElement, popupClass, popupOpenClass, popupCloseButtonSelector,
        imagePopupPicture, imagePopupCaption, imagePopupSelector, cardsTemplateSelector, elementsItemsSelector,
        profileTitle, profileSubtitle, nameInput, jobInput, likeButtonActiveClass, editButton, profileAddButton};