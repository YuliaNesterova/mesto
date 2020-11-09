const imagePopup = document.querySelector(".popup_type_image");
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

    _handleOpenPopup(data) {
        imagePopup.classList.add("popup_opened");
        imagePopupPicture.src = data.link;
        imagePopupPicture.alt = data.name;
        imagePopupCaption.textContent = data.name;
    }

    getCard(data, templateSelector) {
        const card = document.querySelector(templateSelector).content.cloneNode(true);

        const cardDeleteButton = card.querySelector(".element__delete-button");
        const cardLikeButton = card.querySelector(".element__like-button");
        const cardImage = card.querySelector(".element__image");
        const cardText = card.querySelector(".element__text");

        cardText.innerText = data.name;
        cardImage.setAttribute("src", data.link);
        cardImage.setAttribute("alt", data.name);

        cardDeleteButton.addEventListener("click", this._handleCardRemove);
        cardLikeButton.addEventListener("click", () => this._toggleLike(cardLikeButton));

        cardImage.addEventListener("click", () => this._handleOpenPopup(data));



        return card;
    }
}


