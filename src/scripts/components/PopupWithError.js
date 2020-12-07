import Popup from "./Popup.js";

export default class PopupWithError extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    fillErrorField(error) {
        const popupError = this._popup.querySelector(".popup__subtitle");
        popupError.textContent = error;
    }
}