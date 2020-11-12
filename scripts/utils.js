import { validationParams } from "./constants.js";
import {FormValidator} from "./FormValidator.js";

function handlePopupBackgroundClick(evt, popupElement) {
    if(evt.target.classList.contains("popup")) {
        closePopup(popupElement);
    }
}

function handleEscPopup(evt, popupElement) {
    if (popupElement.classList.contains("popup_opened") && evt.key === "Escape") {
        closePopup(popupElement);
    }
}

function clearInput(popupElement) {
    const popupInput = Array.from(popupElement.querySelectorAll(validationParams.inputSelector));

    popupInput.forEach((inputElement) => {
        inputElement.value = "";
    });
}

export function closePopup(popupElement) {
    popupElement.classList.remove("popup_opened");

    const formElement = popupElement.querySelector(validationParams.formSelector)

    clearInput(popupElement);
    const formValidation = new FormValidator().hideErrorClose(formElement, validationParams);

    document.removeEventListener("keydown", (evt) => handleEscPopup(evt, popupElement));
    document.removeEventListener("click", (evt) => handlePopupBackgroundClick(evt, popupElement));
}

export function openPopup(popupElement) {
    popupElement.classList.add("popup_opened");

    const formElement = popupElement.querySelector(validationParams.formSelector)

    const formValidation = new FormValidator().checkOpenValidity(formElement, validationParams);

    document.addEventListener("keydown", (evt) => handleEscPopup(evt, popupElement));
    document.addEventListener("click", (evt) => handlePopupBackgroundClick(evt, popupElement));
}