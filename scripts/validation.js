
const validationParams = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_invalid',
};

function showError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(validationParams.inputErrorClass);
}

function hideError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(validationParams.inputErrorClass);
}

function checkInputValidity(form, input) {
    if (input.checkValidity()) {
        hideError(form, input);
    } else {
        showError(form, input);
    }
}

function toggleButtonState(form, buttonElement) {
    if (form.checkValidity()) {
        buttonElement.classList.remove(validationParams.inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(validationParams.inactiveButtonClass);
        buttonElement.disabled = true;
    }
}

function setEventListeners(form) {
    const formInput = Array.from(form.querySelectorAll(validationParams.inputSelector));
    const buttonElement = form.querySelector(validationParams.submitButtonSelector);

    formInput.forEach((input) => {
        input.addEventListener("input", (evt) => {
            checkInputValidity(form, evt.target);
            toggleButtonState(form, buttonElement);
        });
    });
    toggleButtonState(form, buttonElement);
}

function enableValidation(validationParams) {
    const popupForm = Array.from(document.querySelectorAll(validationParams.formSelector));

    popupForm.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form);
    });
}

enableValidation(validationParams);
