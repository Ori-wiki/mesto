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
  validationConfig,
  profilePopupOpenButton,
  cardPopupOpenButton,
  avatarPopupOpenButton,
  profileInputName,
  profileInputProfession,
  cardListSelector,
  profileNameSelector,
  profileProfessionSelector,
  porfileAvatarSelector,
} from "../scripts/utils/constants.js";
import { addLoading, removeLoading } from "../scripts/utils/utils.js";
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

// Поставить лайк
const putLike = (data) => {
  return api.putLike(data).catch((err) => console.log(err));
};

// Удалить лайк
const deleteLike = (data) => {
  return api.deleteLike(data).catch((err) => console.log(err));
};

const confrimDeleteCard = (data) => {
  popupDeleteCard.data = data;
  popupDeleteCard.open();
};

const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-54/",
  token: "e9f215c8-c72b-443d-a34a-34c279d27704",
});

const userInfo = new UserInfo({
  profileNameSelector,
  profileProfessionSelector,
  porfileAvatarSelector,
});

// Попап редактирования формы
const popupEditProfileInfo = new PopupWithForm(".popup_edit_profile-info", {
  handleFormSubmit: (data, button) => {
    addLoading(button);
    api
      .patchUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditProfileInfo.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        removeLoading(button);
      });
  },
});
popupEditProfileInfo.setEventListeners();

//Попап редактирования аватара
const popupEditAvatar = new PopupWithForm(".popup_edit_avatar", {
  handleFormSubmit: (data, button) => {
    addLoading(button);
    api
      .patchUserAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
        popupEditAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        removeLoading(button);
      });
  },
});
popupEditAvatar.setEventListeners();

//Попап добавления карточки
const popupAddCard = new PopupWithForm(".popup_add_card", {
  handleFormSubmit: (data, button) => {
    addLoading(button);
    const element = {
      name: data.cardName,
      link: data.cardLink,
    };
    api
      .postCard(element)
      .then((res) => {
        cardList.addItem(createCard(res));
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        removeLoading(button);
      });
  },
});
popupAddCard.setEventListeners();

//Попап удаления карточки
const popupDeleteCard = new PopupWithConfirm(".popup_confrim", {
  handleFormSubmit: (data) => {
    api
      .deleteCard(data._id)
      .then(() => {
        data.card.remove();
        data.card = null;
        popupDeleteCard.close();
      })
      .catch((err) => console.log(err));
  },
});
popupDeleteCard.setEventListeners();
// Фулл скрин фото
const fullImage = new PopupWithImage(".popup_open_img");
fullImage.setEventListeners();

// функция создания карточки
const createCard = (item) => {
  const card = new Card(
    item,
    ".card_template",
    userId,
    openFullScreenImgPopup,
    confrimDeleteCard,
    putLike,
    deleteLike
  );
  const cardElement = card.createCard(item);
  return cardElement;
};

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardListSelector
);

//Слушатели
cardPopupOpenButton.addEventListener("click", () => {
  formValidators[cardForm.getAttribute("name")].resetValidation();
  popupAddCard.open();
});

profilePopupOpenButton.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  profileInputName.value = user.name;
  profileInputProfession.value = user.about;
  formValidators[profileForm.getAttribute("name")].resetValidation();
  popupEditProfileInfo.open();
});

avatarPopupOpenButton.addEventListener("click", () => {
  formValidators[profileFormAvatar.getAttribute("name")].resetValidation();
  popupEditAvatar.open();
});

let userId;
const initialData = [api.getUserInfo(), api.getCards()];
Promise.all(initialData)
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardList.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));
