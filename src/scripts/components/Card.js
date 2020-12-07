import { imagePopup, likeButtonActiveClass } from "../utils/constants.js";

export default class Card {
    constructor( {data, handleCardClick}, templateSelector, handleCardRemove, api, userId){
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleCardclick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
        this._api = api;
        this._userId = userId;
    }

   _toggleLike(id, likeButton, likeCounter, api) {
        if (likeButton.classList.contains(likeButtonActiveClass)) {
            api.deleteLike(id).then((result) => {
                likeButton.classList.remove(likeButtonActiveClass);
                likeCounter.textContent = result.likes.length;
            });
        } else {
            api.putLike(id).then((result) => {
                likeButton.classList.add(likeButtonActiveClass);
                likeCounter.textContent = result.likes.length;
            });
        }
    }

    _handleOpenPopup(element, data) {
        this._handleCardclick(data);
    }

    _getTemplate(data, templateSelector) {
        const card = document.querySelector(templateSelector).content.cloneNode(true);

        const cardText = card.querySelector(".element__text");
        const cardImage = card.querySelector(".element__image");
        const likes = card.querySelector(".element__like-counter");
        const cardLikeButton = card.querySelector(".element__like-button");
        const deleteButton = card.querySelector(".element__delete-button");

        cardText.innerText = data.name;
        cardImage.setAttribute("src", data.link);
        cardImage.setAttribute("alt", data.name);
        likes.textContent = data.likes.length;
        for (let i = 0; i < data.likes.length; i++) {
            if(this._userId === data.likes[i]._id) {
                cardLikeButton.classList.add(likeButtonActiveClass);
            }
        }
        if(this._userId !== data.owner._id) {
            deleteButton.style.display = 'none';
        }
        return card;
    }

    _setEventListeners(data) {
        const cardDeleteButton = this._element.querySelector(".element__delete-button");
        const cardLikeButton = this._element.querySelector(".element__like-button");
        const cardImage = this._element.querySelector(".element__image");
        const cardId = data._id;
        const cardLikeCounter = this._element.querySelector(".element__like-counter");

        cardDeleteButton.addEventListener("click", () => this._handleCardRemove(cardId, this._api, cardDeleteButton));
        cardLikeButton.addEventListener("click", () => this._toggleLike(cardId, cardLikeButton, cardLikeCounter, this._api));
        cardImage.addEventListener("click", () => this._handleOpenPopup(imagePopup, data));
    }

    getCard(data, templateSelector) {
        this._element = this._getTemplate(data, templateSelector)
        this._setEventListeners(data);
        return this._element;
    }
}


