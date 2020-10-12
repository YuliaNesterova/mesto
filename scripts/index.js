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

function togglePopup(popupElement) {
  popupElement.classList.toggle("popup_opened");
}

function fillAuto() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

  togglePopup(popupEdit);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  togglePopup(popupEdit);
}

function renderCards() {
  const cards = initialCards.map((element) => getCard(element));

  cardsContainer.append(...cards);
}

function handleCardRemove(evt) {
  evt.target.closest(".element").remove();
}

function toggleLike(element) {
  element.classList.toggle("element__like-button_clicked");
}

function getCard(data) {
  const card = cardsTemplate.content.cloneNode(true);

  const cardDeleteButton = card.querySelector(".element__delete-button");
  const cardLikeButton = card.querySelector(".element__like-button");
  const cardImage = card.querySelector(".element__image");

  card.querySelector(".element__text").innerText = data.name;
  card.querySelector(".element__image").setAttribute("src", data.link);
  card.querySelector(".element__image").setAttribute("alt", data.name);

  cardDeleteButton.addEventListener("click", handleCardRemove);
  cardLikeButton.addEventListener("click", () => toggleLike(cardLikeButton));

  cardImage.addEventListener("click", function () {
    togglePopup(imagePopup);

    imagePopupPicture.setAttribute("src", data.link);
    imagePopupPicture.setAttribute("alt", data.name);
    imagePopupCaption.textContent = data.name;
  })

  return card;
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const item = getCard({
    name: descriptionInput.value,
    link: linkInput.value,
  });

  descriptionInput.value = "";
  linkInput.value = "";

  cardsContainer.prepend(item);

  togglePopup(popupAdd);
}

editButton.addEventListener("click", fillAuto);
popupCloseButtonEdit.addEventListener("click", () => togglePopup(popupEdit));
editFormElement.addEventListener("submit", handleEditFormSubmit);
profileAddButton.addEventListener("click", () => togglePopup(popupAdd));
popupCloseButtonAdd.addEventListener("click", () => togglePopup(popupAdd));
addFormElement.addEventListener("submit", handleAddFormSubmit);
imagePopupCloseButton.addEventListener("click", () => togglePopup(imagePopup));

renderCards();
