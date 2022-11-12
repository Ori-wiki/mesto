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

export const enableValidationObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  fieldSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
}

//popup
export const editProfilePopup = document.querySelector('.popup_edit_profile-info');
export const addCardPopup = document.querySelector('.popup_add_card');
export const openImgPopup = document.querySelector('.popup_open_img');

//popup open button
export const editProfilePopupOpenButton = document.querySelector('.profile__info-edit-button');
export const addCardPopupOpenButton = document.querySelector('.profile__add-button');

//popup inputs
export const profileInputName = editProfilePopup.querySelector('.popup__input_data_name');
export const profileInputProfession = editProfilePopup.querySelector('.popup__input_data_profession');

//profile info
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');


//селектор контейнера
export const cardListSelector = '.cards__list';
