import { popupClass, popupOpenClass, popupCloseButtonSelector, popupAnimationClass } from "../utils/constants.js";


export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleBackgroundClick = this._handleBackgroundClick.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._container = this._popup.querySelector(".popup__container");
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleBackgroundClick(evt) {
        if(evt.target.classList.contains(popupClass)) {
            this.close();
        }
    }

    open() {
        this._popup.classList.add(popupOpenClass);
        this._container.classList.add(popupAnimationClass);
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener("click", this._handleBackgroundClick);
    }

    close() {
        this._popup.classList.remove(popupOpenClass);
        this._container.classList.remove(popupAnimationClass);
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener("click", this._handleBackgroundClick);
    }

    setEventListeners() {
       const popupCloseButton =  this._popup.querySelector(popupCloseButtonSelector);

       popupCloseButton.addEventListener("click", this.close.bind(this));
    }
}