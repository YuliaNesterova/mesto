import { handleEscPopup } from './index.js';
import { handlePopupBackgroundClick } from './index.js';
import {validationParams} from "./constants.js";
import { editFormElementValidation } from "./index.js";
import { addFormElementValidation } from "./index.js";
import { editFormElement } from "./index.js";
import { addFormElement } from "./index.js";

export function openPopup(popupElement) {
    popupElement.classList.add("popup_opened");

    const formElement = popupElement.querySelector(validationParams.formSelector)

    if(formElement && formElement.classList.contains("popup__form_type_edit")) {
        editFormElementValidation.checkOpenValidity(editFormElement);
    } else if(formElement && formElement.classList.contains("popup__form_type_add")) {
        addFormElementValidation.checkOpenValidity(addFormElement);
        }
    document.addEventListener("keydown", (evt) => handleEscPopup(evt, popupElement));
    document.addEventListener("click", (evt) => handlePopupBackgroundClick(evt, popupElement));
}