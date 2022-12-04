import "../pages/index.css";
import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithConfirm from "../scripts/components/PopupWithConfirm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js";
import {
  initialCards,
  validationConfig,
  profilePopupOpenButton,
  cardPopupOpenButton,
  profileInputName,
  profileInputProfession,
  profileName,
  profileProfession,
  cardListSelector,
  profileNameSelector,
  profileProfessionSelector,
} from "../scripts/utils/constants.js";

const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

const openFullScreenImgPopup = (data) => {
  fullImage.open(data);
};

// Попап редактирования формы
const popupEditProfileInfo = new PopupWithForm(".popup_edit_profile-info", {
  handleFormSubmit: (data) => {
    profileName.textContent = data.name;
    profileProfession.textContent = data.profession;
    popupEditProfileInfo.close();
  },
});
popupEditProfileInfo.setEventListeners();

//Попап добавления карточки
const popupAddCard = new PopupWithForm(".popup_add_card", {
  handleFormSubmit: (data) => {
    const element = {
      name: data.cardName,
      link: data.cardLink,
    };
    cardList.addItem(createCard(element));
    popupAddCard.close();
  },
});
popupAddCard.setEventListeners();

//User info
const userInfo = new UserInfo({
  profileNameSelector,
  profileProfessionSelector,
});

// Фулл скрин фото
const fullImage = new PopupWithImage(".popup_open_img");
fullImage.setEventListeners();

// функция создания карточки
const createCard = (item) => {
  const card = new Card(
    item,
    ".card_template",
    openFullScreenImgPopup,
    confrimDeleteCard
  );
  const cardElement = card.createCard();
  return cardElement;
};

//колбек
const confrimDeleteCard = (data) => {
  popupDeleteCard.data = data;
  popupDeleteCard.open();
};

//попап удаления карточки
const popupDeleteCard = new PopupWithConfirm(".popup_confrim", {
  handleFormSubmit: (data) => {
    api.deleteCard(data);
    popupDeleteCard.close();
  },
});
popupDeleteCard.setEventListeners();

//Добавление 6 карточек в DOM
const cardList = new Section(
  {
    items: initialCards,

    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardListSelector
);

cardList.renderItems();

//Слушатели
cardPopupOpenButton.addEventListener("click", () => {
  formValidators[cardForm.getAttribute("name")].resetValidation();
  popupAddCard.open();
});

profilePopupOpenButton.addEventListener("click", () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  formValidators[profileForm.getAttribute("name")].resetValidation();
  popupEditProfileInfo.open();
});

// fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards", {
//   headers: {
//     authorization: "e9f215c8-c72b-443d-a34a-34c279d27704",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {

//   });

// fetch("https://mesto.nomoreparties.co/v1/cohort-54/users/me", {
//   headers: {
//     authorization: "e9f215c8-c72b-443d-a34a-34c279d27704",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {

//   });

//api
const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-54/",
  token: "e9f215c8-c72b-443d-a34a-34c279d27704",
});

const dataSkartikame = {
  name: "pups",
  link: "https://sun9-72.userapi.com/c851020/v851020154/1085b8/Bp249OcjX6M.jpg",
};

function zoli() {
  // api.getCards()
  // api.postCard(dataSkartikame)
  // api.deleteCard('638bf2de194b5a1a6c2a8557')
  // api.getUserInfo()
  // api.patchUserInfo()
  // api.patchUserAvatar()
  // api.putLike('638bf2de194b5a1a6c2a8557')
  // api.deleteLike('638bf2de194b5a1a6c2a8557')
}

zoli();
