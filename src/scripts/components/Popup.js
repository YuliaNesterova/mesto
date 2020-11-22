import { popupClass, popupOpenClass, popupCloseButtonSelector } from "../utils/constants.js";


export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
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
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        document.addEventListener("click", this._handleBackgroundClick.bind(this));
    }

    close() {
        this._popup.classList.remove(popupOpenClass);
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        document.removeEventListener("click", this._handleBackgroundClick.bind(this));
    }

    setEventListeners() {
       const popupCloseButton =  this._popup.querySelector(popupCloseButtonSelector);

       popupCloseButton.addEventListener("click", this.close.bind(this));
    }
}