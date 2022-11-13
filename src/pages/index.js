import '../pages/index.css';
import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from '../scripts/components/UserInfo.js';
import {
  initialCards,
  ValidationConfig,
  profilePopupOpenButton,
  cardPopupOpenButton,
  profileInputName,
  profileInputProfession,
  profileName,
  profileProfession,
  cardListSelector,
  profileNameSelector,
  profileProfessionSelector
} from '../scripts/utils/constants.js';

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

enableValidation(ValidationConfig);

const openFullScreenImgPopup = (data) => {
  fullImage.open(data)
}

// Попап редактирования формы
const popupEditProfileInfo = new PopupWithForm('.popup_edit_profile-info', {
  handleFormSubmit: (data) => {
    profileName.textContent = data.name
    profileProfession.textContent = data.profession
    popupEditProfileInfo.close()
  }
})
popupEditProfileInfo.setEventListeners()
//

const cardElement = new Section({
  renderer: (item) => {
    cardElement.addItem(createCard(item));
  }
}, cardListSelector);

//Попап добавления карточки
const popupAddCard = new PopupWithForm('.popup_add_card', {
  handleFormSubmit: (data) => {
    const element = {
      name: data.cardName,
      link: data.cardLink
    }
    cardElement.addItem(createCard(element))
    popupAddCard.close()
  }
})
popupAddCard.setEventListeners()

//User info
const userInfo = new UserInfo({ profileNameSelector, profileProfessionSelector})

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
cardPopupOpenButton.addEventListener('click', () => {
  formValidators[cardForm.getAttribute('name')].resetValidation()
  popupAddCard.open()
});

profilePopupOpenButton.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  formValidators[profileForm.getAttribute('name')].resetValidation()
  popupEditProfileInfo.open()
});
