function showError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add("popup__input_invalid");
}

function hideError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove("popup__input_invalid");
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
        buttonElement.classList.remove("popup__button_inactive");
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add("popup__button_inactive");
        buttonElement.disabled = true;
    }
}

function setEventListeners(form) {
    const formInput = Array.from(form.querySelectorAll(".popup__input"));
    const buttonElement = form.querySelector(".popup__button");

    formInput.forEach((input) => {
        input.addEventListener("input", (evt) => {
            checkInputValidity(form, evt.target);
            toggleButtonState(form, buttonElement);
        });
    });
    toggleButtonState(form, buttonElement);
}

function enableValidation() {
    const popupForm = Array.from(document.querySelectorAll(".popup__form"));

    popupForm.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form);
    });
}

enableValidation();



