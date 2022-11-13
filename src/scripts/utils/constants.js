export const initialCards = [
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

export const ValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  fieldSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
}

//popup
export const profilePopup = document.querySelector('.popup_edit_profile-info');

//popup open button
export const profilePopupOpenButton = document.querySelector('.profile__info-edit-button');
export const cardPopupOpenButton = document.querySelector('.profile__add-button');

//popup inputs
export const profileInputName = profilePopup.querySelector('.popup__input_data_name');
export const profileInputProfession = profilePopup.querySelector('.popup__input_data_profession');

//profile info
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
// селектор info
export const profileNameSelector = '.profile__name';
export const profileProfessionSelector = '.profile__profession';
//селектор контейнера
export const cardListSelector = '.cards__list';
