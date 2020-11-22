import Card from '../components/Card.js';
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { handleCardClick, handleAddFormSubmit, handleEditFormSubmit, handleOpenValidation} from "../utils/utils.js";
import { initialCards } from "../utils/initial-cards.js";
import { validationParams, editFormElement, addFormElement, cardsTemplateSelector, profileTitle, profileSubtitle,
    nameInput, jobInput, elementsItemsSelector, editButton, profileAddButton} from "../utils/constants.js";

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
