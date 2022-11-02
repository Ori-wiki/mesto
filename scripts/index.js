import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {
  initialCards,
  enableValidationObj,
  editProfilePopup,
  addCardPopup,
  openImgPopup,
  editProfilePopupForm,
  addCardPopupForm,
  editProfilePopupField,
  addCardPopupField,
  cardNameInput,
  cardLinkInput,
  imgPopup,
  imgSubtitle,
  cardsContainer,
  popups,
  closeButtons,
  editProfilePopupOpenButton,
  addCardPopupOpenButton,
  profileInputName,
  profileInputProfession,
  profileName,
  profileProfession,
} from './constants.js';

//Вызов валидации форм
const editProfilePopupValidation = new FormValidator(
  enableValidationObj,
  editProfilePopupField
);
editProfilePopupValidation.enableValidation()

const addCardPopupValidation = new FormValidator(
  enableValidationObj,
  addCardPopupField
);
addCardPopupValidation.enableValidation()

//Положитьь карточку в DOM
function putCard(cardElement) {
  cardsContainer.prepend(cardElement);
}

//функция добавления 6 карточек
const renderElements = () => {
  initialCards.forEach((function (element) {
    let cardCard = new Card(element, '.card_template', openFullScreenImgPopup);
    const cardElement = cardCard.createCard();
    putCard(cardElement)
  }))
};
renderElements()

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
}

//Функции отпрвки формы card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const obi = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  }
  let cardCard = new Card(obi, '.card_template', openFullScreenImgPopup);
  const cardElement = cardCard.createCard();
  putCard(cardElement)
  closePopup(addCardPopup)
  evt.target.reset();
}
//Функция закрытия попапа на Escape
function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }
}
function handleOverlayClose(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
}

function openFullScreenImgPopup(name, link) {
  imgPopup.src = link;
  imgPopup.alt = name;
  imgSubtitle.textContent = name;
  openPopup(openImgPopup);
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value
  profileProfession.textContent = profileInputProfession.value
  closePopup(editProfilePopup);
}

//Слушатели
addCardPopupOpenButton.addEventListener('click', () => {
  addCardPopupForm.reset();
  addCardPopupValidation.resetInputError();
  openPopup(addCardPopup);
});

addCardPopupForm.addEventListener('submit', handleAddCardFormSubmit);

editProfilePopupOpenButton.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  editProfilePopupValidation.resetInputError();
  openPopup(editProfilePopup);
});

editProfilePopupForm.addEventListener('submit', handleEditProfileFormSubmit);

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popups.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClose)
});
