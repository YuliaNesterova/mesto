import './index.css';
import Card from '../scripts/components/Card.js';
import Section from "../scripts/components/Section.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithError from "../scripts/components/PopupWithError.js";
import Api from "../scripts/components/Api.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { handleCardClick, handleOpenValidation, handleCardRemove, handleError, renderLoading} from "../scripts/utils/utils.js";
import { validationParams, editFormElement, addFormElement, profilePicFormElement, cardsTemplateSelector, profileTitle, profileSubtitle, profileImage,
        nameInput, jobInput, elementsItemsSelector, editButton, profileAddButton, editProfilePicButton, editProfileSubmitButton,
        addCardSubmitButton, newProfilePicSubmitButton} from "../scripts/utils/constants.js";

const api = new Api({baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-18',
    authorization: '04df758b-41ec-45dd-81f7-1b0f03936357', contentType: 'application/json'}, handleError);
const initialCards = api.getInitialCards();

const currentUserInfo = new UserInfo({userName: profileTitle, userProfession: profileSubtitle, userAvatar: profileImage});
const user = api.getUserInfo();
user.then((data) => {
    currentUserInfo.setUserInfo({name: data.name, profession: data.about});
    currentUserInfo.setUserPic(data.avatar);
})

function handleUserPicEdit(evt, valuesObj) {
    evt.preventDefault();
    renderLoading(true, newProfilePicSubmitButton);
    const newUserPic = api.getNewUserPic(valuesObj);

    newUserPic.then((result) => {
        currentUserInfo.setUserPic(result.avatar);
    })
        .finally(() => {
            renderLoading(false, newProfilePicSubmitButton);
            profilePicForm.close();
        })
}

function handleAddFormSubmit(evt, valuesObj) {
    evt.preventDefault();
    renderLoading(true, addCardSubmitButton);
    const newCard = api.addNewCard(valuesObj);
    newCard.then((data) => {
        user.then((info) => {
            const item = new Card({data, handleCardClick}, cardsTemplateSelector, handleCardRemove, api, info._id);
            const newCard = item.getCard(data, cardsTemplateSelector);
            document.querySelector(elementsItemsSelector).prepend(newCard);
        })
            .finally(() => {
                renderLoading(false, addCardSubmitButton);
                addForm.close();
            })
    });
    addFormElement.reset();
}
function handleEditFormSubmit(evt, valuesObj) {
    evt.preventDefault();
    renderLoading(true, editProfileSubmitButton);
    const newUser = api.changeUserInfo(valuesObj);
    newUser.then((data) => {
        currentUserInfo.setUserInfo({name: data.name, profession: data.about});
    })
        .finally(() => {
            renderLoading(false, editProfileSubmitButton);
            editForm.close();
        })
}

initialCards.then((cards) => {
    const cardList = new Section({
        items: cards,
        renderer: (cards) => {

            user.then((data) => {
                const card = new Card({cards, handleCardClick}, cardsTemplateSelector, handleCardRemove, api, data._id);
                const cardElement = card.getCard(cards, cardsTemplateSelector);
                cardList.addItem(cardElement);
            })
        }
    }, elementsItemsSelector)
    cardList.renderItems();
})

const addFormElementValidation = new FormValidator(validationParams, addFormElement);
addFormElementValidation.enableValidation();
const editFormElementValidation = new FormValidator(validationParams, editFormElement);
editFormElementValidation.enableValidation();
const profilePicFormElementValidation = new FormValidator(validationParams, profilePicFormElement);
profilePicFormElementValidation.enableValidation();

const addForm = new PopupWithForm(".popup_type_add", handleAddFormSubmit, handleOpenValidation, addFormElementValidation, api, currentUserInfo);
addForm.setEventListeners();
const editForm = new PopupWithForm(".popup_type_edit", handleEditFormSubmit, handleOpenValidation, editFormElementValidation, api, currentUserInfo);
editForm.setEventListeners();
const profilePicForm = new PopupWithForm(".popup_type_edit-pic", handleUserPicEdit, handleOpenValidation, profilePicFormElementValidation, api, currentUserInfo);
profilePicForm.setEventListeners();
const errorPopup = new PopupWithError(".popup_type_error");
errorPopup.setEventListeners();

editButton.addEventListener("click", () => {
    nameInput.value = currentUserInfo.getUserInfo().name;
    jobInput.value = currentUserInfo.getUserInfo().profession;
    editForm.open();
});
profileAddButton.addEventListener("click", () => addForm.open());
editProfilePicButton.addEventListener("click", () => profilePicForm.open());