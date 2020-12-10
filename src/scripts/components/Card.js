import { imagePopup, likeButtonActiveClass } from "../utils/constants.js";

export default class Card {
    constructor( {data, handleCardClick, handleCardLike}, templateSelector, handleCardRemove, api, userId){
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleCardclick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
        this._handleCardLike = handleCardLike;
        this._api = api;
        this._userId = userId;

    }

    putLike(likeButton, likeCounter, result) {
    likeButton.classList.remove(likeButtonActiveClass);
    likeCounter.textContent = result.likes.length;
    }

    deleteLike(likeButton, likeCounter, result) {
        likeButton.classList.add(likeButtonActiveClass);
        likeCounter.textContent = result.likes.length;
    }

    _toggleLike(id, likeButton, likeCounter) {
        this._handleCardLike(id, likeButton, likeCounter);
    }

    _handleOpenPopup(element, data) {
        this._handleCardclick(data);
    }

    _toggleAuthorShow(element) {
        element.classList.add("element__author_shown");
    }

    _toggleAuthorHide(element) {
        element.classList.remove("element__author_shown");
    }

    _handleDeleteButtonClick(id, api, element) {
        this._handleCardRemove(id, api, element);
    }

    _getTemplate(data, templateSelector) {
        const card = document.querySelector(templateSelector).content.cloneNode(true);

        const cardText = card.querySelector(".element__text");
        const cardImage = card.querySelector(".element__image");
        const likes = card.querySelector(".element__like-counter");
        const cardLikeButton = card.querySelector(".element__like-button");
        const deleteButton = card.querySelector(".element__delete-button");
        const authorImage = card.querySelector(".element__card-author");
        const cardAuthor = card.querySelector(".element__author");

        cardAuthor.textContent = data.owner.name;
        authorImage.setAttribute("src", data.owner.avatar)
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
        const element = this._element.querySelector(".element");
        const cardAuthor = this._element.querySelector(".element__author");
        const authorImage = this._element.querySelector(".element__card-author");

        authorImage.addEventListener("mouseover", () => this._toggleAuthorShow(cardAuthor));
        authorImage.addEventListener("mouseout", () => this._toggleAuthorHide(cardAuthor));
        cardDeleteButton.addEventListener("click", () => this._handleDeleteButtonClick(cardId, this._api, element));
        cardLikeButton.addEventListener("click", () => this._toggleLike(cardId, cardLikeButton, cardLikeCounter));
        cardImage.addEventListener("click", () => this._handleOpenPopup(imagePopup, data));
    }

    getCard(data, templateSelector) {
        this._element = this._getTemplate(data, templateSelector)
        this._setEventListeners(data);
        return this._element;
    }
}


