import Popup from "./Popup.js";
import {validationParams} from "../utils/constants.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit, handleOpenValidation, formValidator) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._handleOpenValidation = handleOpenValidation;
        this._formValidator = formValidator;
        this._popupForm = this._popup.querySelector(validationParams.formSelector);
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
        this._handleOpenValidation(this._formValidator);
    }
    close() {
        this._popupForm.reset();
        super.close();
    }

    setEventListeners() {
        this._popupForm.addEventListener("submit", (evt) => {
            this._handleFormSubmit(evt, this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
}