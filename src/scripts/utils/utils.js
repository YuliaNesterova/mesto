import {
    imagePopupSelector,
    errorPopupSelector,
    deletePopupSelector,
    deleteButtonRenderingText,
    deleteButtonInitialText,
    loader,
    loaderShownClass
} from "./constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithButton from "../components/PopupWithButton.js";
import PopupWithError from "../components/PopupWithError.js";

const errorPopup = new PopupWithError(errorPopupSelector);
errorPopup.setEventListeners();
const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();
const cardDeletePopup = new PopupWithButton(deletePopupSelector, handleDeleteButtonSubmit);
cardDeletePopup.setEventListeners();

export function renderLoader(isLoading) {
    if(isLoading) {
        loader.classList.add(loaderShownClass);
    } else {
        loader.classList.remove(loaderShownClass);
    }
}
export function renderLoading(isLoading, button, renderingText, initialText) {
    if(isLoading) {
        button.innerText = renderingText;
    } else {
        button.innerText = initialText;
    }
}
export function handleError(error) {
    console.log(error)
        errorPopup.fillErrorField(error)
        errorPopup.open();
}

export function handleCardClick({link, name}) {
    popupImage.open({link, name});
}

export function handleDeleteButtonSubmit(evt, api, cardId, element, submitButton) {
    evt.preventDefault();
    renderLoading(true, submitButton, deleteButtonRenderingText, deleteButtonInitialText);
    if(evt.type === "submit") {
    api.deleteCard(cardId).then(() => {
        element.remove();
        cardDeletePopup.close();
    })
        .finally(() => {
            renderLoading(false, submitButton, deleteButtonRenderingText, deleteButtonInitialText);
        })
        .catch(() => {
            handleError("Неизвестная ошибка, попробуйте еще раз");
        });
}
}

export function handleCardRemove(cardId, api, element) {
    cardDeletePopup.open(cardId, api, element);
}

export function handleOpenValidation(validator) {
        validator.hideErrorOpen();
        validator.toggleButtonState();
}