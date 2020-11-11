import { openPopup } from "./utils.js";
import { imagePopup } from "./index.js";
const imagePopupPicture = document.querySelector(".popup__image");
const imagePopupCaption = document.querySelector(".popup__caption");


export class Card {
    constructor(data, templateSelector) {
        this._data = data;
        this._templateSelector = templateSelector;
    }

   _toggleLike(element) {
        element.classList.toggle("element__like-button_clicked");
    }

    _handleCardRemove(evt) {
        evt.target.closest(".element").remove();
    }

    _handleOpenPopup(element, data) {
        openPopup(element);

        imagePopupPicture.src = data.link;
        imagePopupPicture.alt = data.name;
        imagePopupCaption.textContent = data.name;
    }

    _getTemplate(data, templateSelector) {
        const card = document.querySelector(templateSelector).content.cloneNode(true);

        const cardText = card.querySelector(".element__text");
        const cardImage = card.querySelector(".element__image");

        cardText.innerText = data.name;
        cardImage.setAttribute("src", data.link);
        cardImage.setAttribute("alt", data.name);

        return card;
    }

    _setEventListeners(data) {
        const cardDeleteButton = this._element.querySelector(".element__delete-button");
        const cardLikeButton = this._element.querySelector(".element__like-button");
        const cardImage = this._element.querySelector(".element__image");

        cardDeleteButton.addEventListener("click", this._handleCardRemove);
        cardLikeButton.addEventListener("click", () => this._toggleLike(cardLikeButton));

        cardImage.addEventListener("click", () => this._handleOpenPopup(imagePopup, data));
    }

    getCard(data, templateSelector) {
        this._element = this._getTemplate(data, templateSelector)

        this._setEventListeners(data);

        return this._element;
    }
}


