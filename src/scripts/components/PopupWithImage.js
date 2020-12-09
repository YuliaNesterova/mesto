import Popup from "./Popup.js";
import {imagePopupPictureSelector, imagePopupCaptionSelector, imagePopupContainerSelector, popupAnimationClass} from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePopupPicture = this._popup.querySelector(imagePopupPictureSelector);
        this._imagePopupCaption = this._popup.querySelector(imagePopupCaptionSelector);
        this._container = this._popup.querySelector(imagePopupContainerSelector);
    }
    open({link, name}) {
        this._container.classList.add(popupAnimationClass);
        this._imagePopupPicture.src = link;
        this._imagePopupPicture.alt = name;
        this._imagePopupCaption.textContent = name;

        super.open();
    }
}