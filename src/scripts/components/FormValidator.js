export default class FormValidator {
    constructor(params, formElement) {
        this._params = params;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._params.submitButtonSelector);
        this._currentInputElements = Array.from(this._formElement.querySelectorAll(this._params.inputSelector));
    }

    _showError(input) {
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._params.inputErrorClass);
    }

    _hideError(input) {
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
        errorElement.textContent = "";
        input.classList.remove(this._params.inputErrorClass);
    }

    _checkInputValidity(input) {
        if (input.checkValidity()) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    }

    hideErrorOpen() {
        this._currentInputElements.forEach((input) => {
                this._hideError(input, this._params);
            })
    }

    toggleButtonState() {
        if (this._formElement.checkValidity()) {
            this._buttonElement.classList.remove(this._params.inactiveButtonClass);
            this._buttonElement.disabled = false;
        } else {
            this._buttonElement.classList.add(this._params.inactiveButtonClass);
            this._buttonElement.disabled = true;
        }
    }

    _setEventListeners() {
        this._currentInputElements.forEach((input) => {
            input.addEventListener("input", (evt) => {
                this._checkInputValidity(evt.target);
                this.toggleButtonState();
            });
        });
       this.toggleButtonState();
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        })
        this._setEventListeners()
    }
}