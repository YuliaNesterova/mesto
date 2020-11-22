import './index.css';
import Card from '../scripts/components/Card.js';
import Section from "../scripts/components/Section.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { handleCardClick, handleAddFormSubmit, handleEditFormSubmit, handleOpenValidation} from "../scripts/utils/utils.js";
import { initialCards } from "../scripts/utils/initial-cards.js";
import { validationParams, editFormElement, addFormElement, cardsTemplateSelector, profileTitle, profileSubtitle,
    nameInput, jobInput, elementsItemsSelector, editButton, profileAddButton} from "../scripts/utils/constants.js";

const cardList = new Section({
    items: initialCards,
    renderer: (initialCards) => {
        const card = new Card({initialCards, handleCardClick}, cardsTemplateSelector);
        const cardElement = card.getCard(initialCards, cardsTemplateSelector);
        cardList.addItem(cardElement);
    }
}, elementsItemsSelector)

const addForm = new PopupWithForm(".popup_type_add", handleAddFormSubmit, handleOpenValidation);
addForm.setEventListeners();
const editForm = new PopupWithForm(".popup_type_edit", handleEditFormSubmit, handleOpenValidation);
editForm.setEventListeners();

const editFormElementValidation = new FormValidator(validationParams, editFormElement);
editFormElementValidation.enableValidation(validationParams, editFormElement);
const addFormElementValidation = new FormValidator(validationParams, addFormElement);
addFormElementValidation.enableValidation(validationParams, addFormElement);

const currentUserInfo = new UserInfo({userName: profileTitle, userProfession: profileSubtitle});

editButton.addEventListener("click", () => {
    nameInput.value = currentUserInfo.getUserInfo().name;
    jobInput.value = currentUserInfo.getUserInfo().profession;
    editForm.open();
});
profileAddButton.addEventListener("click", () => addForm.open());

cardList.renderItems();
