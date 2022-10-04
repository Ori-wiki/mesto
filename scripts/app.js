//popup список
const popups = document.querySelectorAll('.popup');

//popup
const editProfilePopup = document.querySelector('.popup_edit_profile-info');
const addCardPopup = document.querySelector('.popup_add_card');
const openImgPopup = document.querySelector('.popup_open_img');

// cardContainer
const cardsContainer = document.querySelector('.cards__list');

//popup button-save
const popupButtonSave = editProfilePopup.querySelector('.popup__button-save');

//popup close button
const closeButtons = document.querySelectorAll('.popup__button-close');

//popup open button
const editProfilePopupOpenButton = document.querySelector('.profile__info-edit-button');
const addCardPopupOpenButton = document.querySelector('.profile__add-button');

//popup inputs
const profileInputName = editProfilePopup.querySelector('.popup__input_data_name');
const profileInputProfession = editProfilePopup.querySelector('.popup__input_data_profession');
const cardNameInput = addCardPopup.querySelector('.popup__input_data_card-name');
const cardLinkInput = addCardPopup.querySelector('.popup__input_data_card-link');

//popup form
const editProfilePopupForm = editProfilePopup.querySelector('.popup__form');
const addCardPopupForm = addCardPopup.querySelector('.popup__form');

//profile info
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//popup img
const imgPopup = openImgPopup.querySelector('.popup__image');
const imgSubtitle = openImgPopup.querySelector('.popup__image-subtitle');

//template
const cardTemplate = document.querySelector('.card_template').content;

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
}
//Функция рендеринга
function renderCards() {
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Рио-де-Жанейро',
      link: 'https://images.unsplash.com/photo-1662504431607-6714410af32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  initialCards.forEach((function (element) {
    addCard(element.name, element.link);
  }))
};

//Функия создания карточки
function createCard(cardNameValue, cardLinkValue) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__list-img');

  cardElement.querySelector('.card__title').textContent = cardNameValue;
  cardImage.addEventListener('click', () => {
    imgPopup.src = cardLinkValue;
    imgPopup.alt = cardNameValue;
    imgSubtitle.textContent = cardNameValue;
    openPopup(openImgPopup);
  });
  cardImage.src = cardLinkValue;
  cardImage.alt = cardLinkValue;
  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
    cardElement.remove();
  });
  return cardElement;
}

//Функция добавления карточки
function addCard(cardNameValue, cardLinkValue) {
  cardElement = createCard(cardNameValue, cardLinkValue);
  cardsContainer.prepend(cardElement);
}

//Функции отпарвки формы профиля
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value
  profileProfession.textContent = profileInputProfession.value
  closePopup(editProfilePopup);
}

//Функции отпрвки формы card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  addCard(cardNameInput.value, cardLinkInput.value);

  closePopup(addCardPopup);

  evt.target.reset();
}
// Вызов 6 карточек
renderCards();

// Функция ресета валидации editProfilePopup
function resetValidEditProfilePopup() {
  popupButtonSave.removeAttribute('disabled');
  popupButtonSave.classList.remove('popup__button_inactive');
  checkInputValidity(editProfilePopup, profileInputName);
  checkInputValidity(editProfilePopup, profileInputProfession);
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//Функция закрытия попапа на Escape
function handleEscClose(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened)
  }
}

function handleOverlayClose(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target === popupOpened) {
    closePopup(popupOpened)
  };
}

editProfilePopupOpenButton.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  openPopup(editProfilePopup);
  resetValidEditProfilePopup();
});

addCardPopupOpenButton.addEventListener('click', () => {
  openPopup(addCardPopup);
});

editProfilePopupForm.addEventListener('submit', handleEditProfileFormSubmit);
addCardPopupForm.addEventListener('submit', handleAddCardFormSubmit);

popups.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClose)
});



