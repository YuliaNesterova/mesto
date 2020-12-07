import { imagePopupSelector, errorPopupSelector} from "./constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithButton from "../components/PopupWithButton.js";
import PopupWithError from "../components/PopupWithError.js";

export function renderLoading(isLoading, button) {
    if(isLoading) {
        button.innerText = "Сохранение...";
    } else {
        button.innerText = "Сохранить";
    }
}
export function handleError(error) {
        const popup = new PopupWithError(errorPopupSelector);
        popup.fillErrorField(error)
        popup.open();
}
export function handleCardClick({link, name}) {
    const popupImage = new PopupWithImage(imagePopupSelector);
    popupImage.open({link, name});
    popupImage.setEventListeners();
}

export function handleDeleteButtonSubmit(evt, api, cardId, deleteButton) {
    evt.preventDefault();
    if(evt.type === "submit") {
        api.deleteCard(cardId);
        deleteButton.closest(".element").remove();
}
}

export function handleCardRemove(cardId, api, deleteButton) {
    const cardDeletePopup = new PopupWithButton(".popup_type_delete", handleDeleteButtonSubmit, api, cardId, deleteButton);
    cardDeletePopup.setEventListeners();
    cardDeletePopup.open();
}

export function handleOpenValidation(validator) {
        validator.hideErrorOpen();
        validator.toggleButtonState();
}