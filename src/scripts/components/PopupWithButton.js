import Popup from "./Popup.js";
import {validationParams} from "../utils/constants.js";

export default class PopupWithButton extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector(validationParams.formSelector);
        this._submitButton = this._popup.querySelector(validationParams.submitButtonSelector);
    }

    open(id, api, element) {
        this._api = api;
        this._cardId = id;
        this._element = element;

        super.open();
    }
    setEventListeners() {
        this._popupForm.addEventListener("submit", (evt) => this._handleFormSubmit(evt, this._api, this._cardId, this._element, this._submitButton));
        super.setEventListeners();
    }
}