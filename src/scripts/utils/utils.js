import { imagePopupSelector, addFormElement, cardsTemplateSelector, elementsItemsSelector, profileTitle,
    profileSubtitle} from "./constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";

export function handleCardClick({link, name}) {
    const popupImage = new PopupWithImage(imagePopupSelector);
    popupImage.open({link, name});
    popupImage.setEventListeners();
}

export function handleAddFormSubmit(evt, valuesObj) {
    evt.preventDefault();

    const item = new Card({name: valuesObj.description, link: valuesObj.image, handleCardClick}, cardsTemplateSelector);
    const newCard = item.getCard({name: valuesObj.description, link: valuesObj.image}, cardsTemplateSelector);
    addFormElement.reset();

    document.querySelector(elementsItemsSelector).prepend(newCard);
}

export function handleOpenValidation(validator) {
        validator.hideErrorOpen();
        validator.toggleButtonState();
}