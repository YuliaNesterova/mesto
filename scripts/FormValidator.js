import {validationParams} from "./constants.js";

export class FormValidator {
    constructor(params, formElement) {
        this._params = params;
        this._formElement = formElement;
    }

    _showError(form, input, params) {
        const errorElement = form.querySelector(`#${input.id}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.add(params.inputErrorClass);
    }

    _hideError(form, input, params) {
        const errorElement = form.querySelector(`#${input.id}-error`);
        errorElement.textContent = "";
        input.classList.remove(params.inputErrorClass);
    }

    checkOpenValidity(form) {
       if(form) {
            const currentButtonElement = form.querySelector(validationParams.submitButtonSelector);
            this._toggleButtonState(form, currentButtonElement, validationParams)
        }
    }

    _checkInputValidity(form, input, params) {
        if (input.checkValidity()) {
            this._hideError(form, input, params);
        } else {
            this._showError(form, input, params);
        }
    }

    hideErrorClose(form, params) {
       if(form) {
            const currentInputElements = Array.from(form.querySelectorAll(validationParams.inputSelector));

            currentInputElements.forEach((input) => {
                this._hideError(form, input, params);
            })
        }
    }

    _toggleButtonState(form, buttonElement, params) {
        if (form.checkValidity()) {
            buttonElement.classList.remove(params.inactiveButtonClass);
            buttonElement.disabled = false;
        } else {
            buttonElement.classList.add(params.inactiveButtonClass);
            buttonElement.disabled = true;
        }
    }

    _setEventListeners(form, params) {
        const formInput = Array.from(form.querySelectorAll(params.inputSelector));
        const buttonElement = form.querySelector(params.submitButtonSelector);


        formInput.forEach((input) => {
            input.addEventListener("input", (evt) => {
                this._checkInputValidity(form, evt.target, params);
                this._toggleButtonState(form, buttonElement, params);
            });
        });
       this._toggleButtonState(form, buttonElement, params);
    }

    enableValidation(params, formElement) {
        const popupForm = Array.from(document.querySelectorAll(params.formSelector));

        popupForm.forEach((form) => {
            form.addEventListener("submit", (evt) => {
                evt.preventDefault();
            });
            this._setEventListeners(form, params);
        });
    }
}