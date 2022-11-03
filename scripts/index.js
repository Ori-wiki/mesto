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

//Положить карточку в DOM
function putCard(cardElement) {
  cardsContainer.prepend(cardElement);
}

function createCard(item) {
  const newCard = new Card(item, '.card_template', openFullScreenImgPopup);
  const cardElement = newCard.createCard();
  return cardElement
}

//функция добавления 6 карточек
const renderElements = () => {
  initialCards.forEach((function (element) {
    const cardElement = createCard(element)
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
  const obj = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  }
  const cardElement = createCard(obj)
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
  addCardPopupValidation.resetValidation();
  openPopup(addCardPopup);
});

addCardPopupForm.addEventListener('submit', handleAddCardFormSubmit);

editProfilePopupOpenButton.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  editProfilePopupValidation.resetValidation();
  openPopup(editProfilePopup);
});

editProfilePopupForm.addEventListener('submit', handleEditProfileFormSubmit);

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__button-close')) {
          closePopup(popup)
        }
    })
})
