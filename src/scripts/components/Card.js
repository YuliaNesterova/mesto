import { imagePopup, likeButtonActiveClass } from "../utils/constants.js";

export default class Card {
    constructor( {data, handleCardClick}, templateSelector){
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleCardclick = handleCardClick;
    }

   _toggleLike(element) {
        element.classList.toggle(likeButtonActiveClass);
    }

    _handleCardRemove(evt) {
        evt.target.closest(".element").remove();
    }

    _handleOpenPopup(element, data) {
        this._handleCardclick(data);
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


