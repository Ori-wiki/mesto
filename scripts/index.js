import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import {
  initialCards,
  enableValidationObj,
  editProfilePopup,
  addCardPopup,
  openImgPopup,
  editProfilePopupForm,
  addCardPopupForm,
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
  cardListSelector
} from './constants.js';

const formValidators = {

}
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const fieldsetList = Array.from(formElement.querySelectorAll(config.fieldSelector));
    fieldsetList.forEach((fieldSet) => {
      const validator = new FormValidator(config, fieldSet)
      const formName = formElement.getAttribute('name')
      formValidators[formName] = validator;
      validator.enableValidation();
    });
  });
};

enableValidation(enableValidationObj);

const openFullScreenImgPopup = (evt) => {
  const data = {
      name: evt.target.alt,
      link: evt.target.src
     }
  fullImage.open(data)
}



// Попап редактирования формы
const editPopup = new PopupWithForm('.popup_edit_profile-info', {
  handleFormSubmit: () => {

    profileName.textContent = profileInputName.value
    profileProfession.textContent = profileInputProfession.value
    editPopup.close()
  }
})
editPopup.setEventListeners()

//Попап добавления карточки
const addCard = new PopupWithForm('.popup_add_card', {
  handleFormSubmit: (data) => {
    const obj = [{
      name: data.cardName,
      link: data.cardLink
    }]
    const cardElement = new Section({
      items: obj,
      renderer: (item) => {
        cardElement.addItem(createCard(item));
      }
    }, cardListSelector);
    cardElement.renderItems();
    addCard.close()
  }
})
addCard.setEventListeners()

// Фулл скрин фото
const fullImage = new PopupWithImage('.popup_open_img')
fullImage.setEventListeners()

// функция создания карточки
const createCard = (item) => {
  const card = new Card(item, '.card_template', openFullScreenImgPopup );
  const cardElement = card.createCard();
  return cardElement
}

//Добавление 6 карточек в DOM
const cardList = new Section({
  items: initialCards,

  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardListSelector);

cardList.renderItems()



// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleEscClose);
// } //// DONE

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', handleEscClose);
// } //// DONE

//Функции отпрвки формы card
// function handleAddCardFormSubmit(evt) {
//   evt.preventDefault();
//   const obj = [{
//     name: cardNameInput.value,
//     link: cardLinkInput.value
//   }]

//   const cardElement = new Section({
//     items: obj,
//     renderer: (item) => {
//       cardElement.addItem(createCard(item));
//     }
//   }, cardListSelector);
//   cardElement.renderItems();
//   addCardPopup.classList.remove('popup_opened');
//   evt.target.reset();
// }
//Функция закрытия попапа на Escape
// function handleEscClose(evt) {
//   if (evt.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     closePopup(popupOpened)
//   }
// } //DONe
//



// function handleEditProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = profileInputName.value
//   profileProfession.textContent = profileInputProfession.value
//   closePopup(editProfilePopup);
// }

//Слушатели
addCardPopupOpenButton.addEventListener('click', () => {
  addCardPopupForm.reset();
  formValidators[cardForm.getAttribute('name')].resetValidation()
  addCardPopup.classList.add('popup_opened');
});

// addCardPopupForm.addEventListener('submit', handleAddCardFormSubmit);

editProfilePopupOpenButton.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  formValidators[profileForm.getAttribute('name')].resetValidation()

  editPopup.open()
});

// editProfilePopupForm.addEventListener('submit', handleEditProfileFormSubmit);

// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_opened')) {
//       closePopup(popup)
//     }
//     if (evt.target.classList.contains('popup__button-close')) {
//       closePopup(popup)
//     }
//   })
// }) // DONE

