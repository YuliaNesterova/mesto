import './index.css';
import Card from '../scripts/components/Card.js';
import Section from "../scripts/components/Section.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Api from "../scripts/components/Api.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { handleCardClick, handleOpenValidation, handleCardRemove, handleError, renderLoading, renderLoader} from "../scripts/utils/utils.js";
import {
    validationParams,
    editFormElement,
    addFormElement,
    profilePicFormElement,
    cardsTemplateSelector,
    profileTitle,
    profileSubtitle,
    profileImage,
    nameInput,
    jobInput,
    elementsItemsSelector,
    editButton,
    profileAddButton,
    editProfilePicButton,
    editProfileSubmitButton,
    addCardSubmitButton,
    newProfilePicSubmitButton,
    submitButtonRenderingText,
    submitButtonInitialText, likeButtonActiveClass
} from "../scripts/utils/constants.js";

const api = new Api({baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-18',
    authorization: '04df758b-41ec-45dd-81f7-1b0f03936357', contentType: 'application/json'}, handleError);
const initialCards =  api.getInitialCards();

const currentUserInfo = new UserInfo({userName: profileTitle, userProfession: profileSubtitle, userAvatar: profileImage});
const user = api.getUserInfo();

renderLoader(true);

function createCard(cards, id) {
    const card = new Card({cards, handleCardClick,
    handleCardLike: (cardId, likeButton, likeCounter) => {
        if(likeButton.classList.contains(likeButtonActiveClass)) {
           api.deleteLike(cardId).then((result) => {
               card.putLike(likeButton, likeCounter, result);
           })
               .catch(() => {
                   handleError("Неизвестная ошибка, попробуйте еще раз");
               });
        } else {
            api.putLike(cardId).then((result) => {
                card.deleteLike(likeButton, likeCounter, result);
            })
                .catch(() => {
                    handleError("Неизвестная ошибка, попробуйте еще раз");
                });
        }
    }}, cardsTemplateSelector, handleCardRemove, api, id);
    const cardElement = card.getCard(cards, cardsTemplateSelector);
    return cardElement;
}
const list = new Section({
        renderer: (data, id) => {
            list.addItem(createCard(data, id));
        }
    }, elementsItemsSelector
);

function handleUserPicEdit(evt, valuesObj) {
    evt.preventDefault();
    renderLoading(true, newProfilePicSubmitButton, submitButtonRenderingText, submitButtonInitialText);
    const newUserPic = api.getNewUserPic(valuesObj);

    newUserPic.then((result) => {
        currentUserInfo.setUserPic(result.avatar);
        profilePicForm.close();
    })
        .finally(() => {
            renderLoading(false, newProfilePicSubmitButton, submitButtonRenderingText, submitButtonInitialText);
        })
        .catch(() => {
            handleError("Неизвестная ошибка, попробуйте еще раз");
    });
}

function handleAddFormSubmit(evt, valuesObj) {
    evt.preventDefault();
    renderLoading(true, addCardSubmitButton, submitButtonRenderingText, submitButtonInitialText);
    const newCard = api.addNewCard(valuesObj);
    Promise.all([newCard, user])
        .then(([card, user]) => {
            const newCard = createCard(card, user._id);
            list.addNewItem(newCard);
            addForm.close();
        })
        .finally(() => {
            renderLoading(false, addCardSubmitButton, submitButtonRenderingText, submitButtonInitialText);
        })
        .catch(() => {
                handleError("Неизвестная ошибка, попробуйте еще раз");
            });
    addFormElement.reset();
}



    Promise.all([initialCards, user]).then(([cards, user]) => {
        list.renderItems(cards, user._id);
        currentUserInfo.setUserInfo({name: user.name, profession: user.about});
        currentUserInfo.setUserPic(user.avatar);
    })
        .finally(() => {
            renderLoader(false);
        })
        .catch(() => {
            handleError("Неизвестная ошибка, попробуйте еще раз");
        });



function handleEditFormSubmit(evt, valuesObj) {
    evt.preventDefault();
    renderLoading(true, editProfileSubmitButton, submitButtonRenderingText, submitButtonInitialText);
    const newUser = api.changeUserInfo(valuesObj);
    newUser.then((data) => {
        currentUserInfo.setUserInfo({name: data.name, profession: data.about});
        editForm.close();
    })
        .finally(() => {
            renderLoading(false, editProfileSubmitButton, submitButtonRenderingText, submitButtonInitialText);
        })
        .catch(() => {
            handleError("Неизвестная ошибка, попробуйте еще раз");
        });
}

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

editButton.addEventListener("click", () => {
    nameInput.value = currentUserInfo.getUserInfo().name;
    jobInput.value = currentUserInfo.getUserInfo().profession;
    editForm.open();
});
profileAddButton.addEventListener("click", () => addForm.open());
editProfilePicButton.addEventListener("click", () => profilePicForm.open());

