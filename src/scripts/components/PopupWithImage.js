import Popup from "./Popup.js";
import {imagePopupPicture, imagePopupCaption} from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    open({link, name}) {

        imagePopupPicture.src = link;
        imagePopupPicture.alt = name;
        imagePopupCaption.textContent = name;

        super.open();
    }
}