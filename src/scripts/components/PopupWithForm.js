import Popup from "./Popup.js";
import {validationParams} from "../utils/constants.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit, handleOpenValidation) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._handleOpenValidation = handleOpenValidation;
    }

    _getInputValues() {
        this._inputs = this._popup.querySelectorAll(validationParams.inputSelector);
        this._inputValues = {};
        this._inputs.forEach((input) => {
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    }

    open() {
        super.open();
        const popupForm = this._popup.querySelector(validationParams.formSelector);
        this._handleOpenValidation(validationParams, popupForm);
    }
    close() {
        this._popup.querySelector(".popup__form").reset();
        super.close();
    }

    setEventListeners() {
        const form = this._popup.querySelector(validationParams.formSelector);

        form.addEventListener("submit", (evt) => {
            this._handleFormSubmit(evt, this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
}