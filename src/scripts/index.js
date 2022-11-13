import '../pages/index.css';
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from './UserInfo.js';
import {
  initialCards,
  enableValidationObj,
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

    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
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

//User info
const userInfo = new UserInfo({ profileName, profileProfession })

// Фулл скрин фото
const fullImage = new PopupWithImage('.popup_open_img')
fullImage.setEventListeners()

// функция создания карточки
const createCard = (item) => {
  const card = new Card(item, '.card_template', openFullScreenImgPopup);
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

//Слушатели
addCardPopupOpenButton.addEventListener('click', () => {
  formValidators[cardForm.getAttribute('name')].resetValidation()
  addCard.open()
});

editProfilePopupOpenButton.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  formValidators[profileForm.getAttribute('name')].resetValidation()
  editPopup.open()
});
