import Popup from "./Popup.js";
import {validationParams} from "../utils/constants.js";

export default class PopupWithButton extends Popup {
    constructor(popupSelector, handleFormSubmit, api, cardId, deleteButton) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector(validationParams.formSelector);
this._deleteButton = deleteButton;
this._api = api;
this._cardId = cardId;

    }
    setEventListeners() {
        this._popupForm.addEventListener("submit", (evt) => {
            this._handleFormSubmit(evt, this._api, this._cardId, this._deleteButton);
            this.close();
        });
        super.setEventListeners();
    }
}