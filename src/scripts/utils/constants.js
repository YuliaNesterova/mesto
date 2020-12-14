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
const profilePicFormElement = document.querySelector(".popup__form_type_edit-pic");
const popupClass = "popup";
const popupOpenClass = "popup_opened";

const popupCloseButtonSelector = ".popup__close-button";
const imagePopupPictureSelector = ".popup__image";
const imagePopupCaptionSelector = ".popup__caption";
const imagePopupSelector = ".popup_type_image";
const errorPopupSelector = ".popup_type_error";
const deletePopupSelector = ".popup_type_delete";
const cardsTemplateSelector = ".cards-template";
const elementsItemsSelector = ".elements__items";
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileImage = document.querySelector(".profile__image");
const nameInput = document.querySelector(".popup__input_type_title");
const jobInput = document.querySelector(".popup__input_type_subtitle");
const likeButtonActiveClass = "element__like-button_clicked";
const editButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const editProfilePicButton = document.querySelector(".profile__image-button");
const editProfileSubmitButton = document.querySelector(".popup__button_type_edit");
const addCardSubmitButton = document.querySelector(".popup__button_type_create");
const newProfilePicSubmitButton = document.querySelector(".popup__button_type_edit-pic");
const popupAnimationClass = "popup__open-animation";
const imagePopupContainerSelector = ".popup__container-image";
const submitButtonRenderingText = "Сохранение...";
const submitButtonInitialText = "Сохранить";
const deleteButtonRenderingText = "Удаление...";
const deleteButtonInitialText = "Да";
const loader = document.querySelector(".loader");
const loaderShownClass = "loader_shown";

export {imagePopup, editFormElement, addFormElement, profilePicFormElement, popupClass, popupOpenClass, popupCloseButtonSelector,
        imagePopupPictureSelector, imagePopupCaptionSelector, imagePopupSelector, cardsTemplateSelector, elementsItemsSelector,
        profileTitle, profileSubtitle, profileImage, nameInput, jobInput, likeButtonActiveClass, editButton, profileAddButton, editProfilePicButton,
        errorPopupSelector, editProfileSubmitButton, addCardSubmitButton, newProfilePicSubmitButton, popupAnimationClass, imagePopupContainerSelector,
        submitButtonRenderingText, submitButtonInitialText, deleteButtonRenderingText, deleteButtonInitialText, deletePopupSelector,
        loader, loaderShownClass};