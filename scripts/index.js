const popupEdit = document.querySelector(".popup_type_edit");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseButtonEdit = document.querySelector(".popup__close-button_type_edit");
const nameInput = document.querySelector(".popup__input_type_title");
const jobInput = document.querySelector(".popup__input_type_subtitle");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formElement = document.querySelector(".popup__form");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const popupCloseButtonAdd = document.querySelector(".popup__close-button_type_add");
const cardsContainer = document.querySelector(".elements__items");
const cardsTemplate = document.querySelector(".cards-template");
const initialCards = [
  {
      name: 'Ущелье Викос',
      link: 'https://images.unsplash.com/photo-1542322461-4a528f906952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
  },
  {
      name: 'Акрополь',
      link: 'https://images.unsplash.com/photo-1599423217192-34da246be9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80'
  },
  {
      name: 'Балос',
      link: 'https://images.unsplash.com/photo-1531169356216-34b7e403b91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
  },
  {
      name: 'Метеора',
      link: 'https://images.unsplash.com/photo-1552482496-3c03befc5c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
      name: 'Монемвасия',
      link: 'https://images.unsplash.com/photo-1560454758-babbc0393c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
      name: 'Остров Лефкада',
      link: 'https://images.unsplash.com/photo-1599953092601-03fe8d25340d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1485&q=80'
  }
];


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

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  togglePopupEdit();
}

const renderCards = () => {
  const cards = initialCards.map(element => getCards(element));

  cardsContainer.append(...cards);
}

const getCards = function getCards(data) {
  const card = cardsTemplate.content.cloneNode(true);
  
  card.querySelector(".element__text").innerText = data.name;
  card.querySelector(".element__image").setAttribute("src", data.link);
  card.querySelector(".element__image").setAttribute("alt", data.name);
  return card;
};

editButton.addEventListener("click", autoFillEdit);
popupCloseButtonEdit.addEventListener("click", togglePopupEdit);
formElement.addEventListener("submit", formSubmitHandler);
profileAddButton.addEventListener("click", togglePopupAdd);
popupCloseButtonAdd.addEventListener("click", togglePopupAdd);

renderCards();
getCards();