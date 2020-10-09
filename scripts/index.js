const popupEdit = document.querySelector(".popup_type_edit");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseButtonEdit = document.querySelector(
  ".popup__close-button_type_edit"
);
const nameInput = document.querySelector(".popup__input_type_title");
const jobInput = document.querySelector(".popup__input_type_subtitle");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const editFormElement = document.querySelector(".popup__form_type_edit");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const popupCloseButtonAdd = document.querySelector(
  ".popup__close-button_type_add"
);
const cardsContainer = document.querySelector(".elements__items");
const cardsTemplate = document.querySelector(".cards-template");
const card = cardsTemplate.content.cloneNode(true);
const initialCards = [
  {
    name: "Ущелье Викос",
    link:
      "https://images.unsplash.com/photo-1542322461-4a528f906952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
  },
  {
    name: "Акрополь",
    link:
      "https://images.unsplash.com/photo-1599423217192-34da246be9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
  },
  {
    name: "Балос",
    link:
      "https://images.unsplash.com/photo-1531169356216-34b7e403b91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  },
  {
    name: "Метеора",
    link:
      "https://images.unsplash.com/photo-1552482496-3c03befc5c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Монемвасия",
    link:
      "https://images.unsplash.com/photo-1560454758-babbc0393c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Остров Лефкада",
    link:
      "https://images.unsplash.com/photo-1599953092601-03fe8d25340d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1485&q=80",
  },
];
const addFormElement = document.querySelector(".popup__form_type_add");
const descriptionInput = document.querySelector(
  ".popup__input_type_description"
);
const linkInput = document.querySelector(".popup__input_type_link");
const imagePopup = document.querySelector(".popup_type_image");
const imagePopupCloseButton = document.querySelector(
  ".popup__close-button_type_image"
);
const imagePopupPicture = document.querySelector(".popup__image");
const imagePopupCaption = document.querySelector(".popup__caption");

const togglePopupEdit = function togglePopupEdit() {
  popupEdit.classList.toggle("popup_opened");
};

const autoFillEdit = function autoFill() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

  togglePopupEdit();
};

const togglePopupAdd = function togglePopupAdd() {
  popupAdd.classList.toggle("popup_opened");
};

const toggleImagePopup = function toggleImagePopup() {
  imagePopup.classList.toggle("popup_opened");
};

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  togglePopupEdit();
}

const renderCards = () => {
  const cards = initialCards.map((element) => getCards(element));

  cardsContainer.append(...cards);
};

function cardRemoveHandler(evt) {
  evt.target.closest(".element").remove();
}

const getCards = function getCards(data) {
  const card = cardsTemplate.content.cloneNode(true);

  const cardDeleteButton = card.querySelector(".element__delete-button");
  const cardLikeButton = card.querySelector(".element__like-button");
  const cardImage = card.querySelector(".element__image");

  card.querySelector(".element__text").innerText = data.name;
  card.querySelector(".element__image").setAttribute("src", data.link);
  card.querySelector(".element__image").setAttribute("alt", data.name);

  cardDeleteButton.addEventListener("click", cardRemoveHandler);
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("element__like-button_clicked");
  });

  cardImage.addEventListener("click", function () {
    imagePopup.classList.toggle("popup_opened");

    imagePopupPicture.setAttribute("src", data.link);
    imagePopupPicture.setAttribute("alt", data.name);
    imagePopupCaption.textContent = data.name;
  });
  
  imagePopupCloseButton.addEventListener("click", toggleImagePopup);

  return card;
};

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  const item = getCards({
    name: descriptionInput.value,
    link: linkInput.value,
  });

  descriptionInput.value = "";
  linkInput.value = "";

  cardsContainer.prepend(item);

  togglePopupAdd();
}

editButton.addEventListener("click", autoFillEdit);
popupCloseButtonEdit.addEventListener("click", togglePopupEdit);
editFormElement.addEventListener("submit", editFormSubmitHandler);
profileAddButton.addEventListener("click", togglePopupAdd);
popupCloseButtonAdd.addEventListener("click", togglePopupAdd);
addFormElement.addEventListener("submit", addFormSubmitHandler);

renderCards();
getCards();
