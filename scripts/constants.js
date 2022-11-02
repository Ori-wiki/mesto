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

//popup
const editProfilePopup = document.querySelector('.popup_edit_profile-info');
const addCardPopup = document.querySelector('.popup_add_card');
const openImgPopup = document.querySelector('.popup_open_img');

//popup form
const editProfilePopupForm = editProfilePopup.querySelector('.popup__form');
const addCardPopupForm = addCardPopup.querySelector('.popup__form');

// popup field
const editProfilePopupField = editProfilePopupForm.querySelector('.popup__field')
const addCardPopupField = addCardPopupForm.querySelector('.popup__field')

// input addCardPopup
const cardNameInput = addCardPopup.querySelector('.popup__input_data_card-name');
const cardLinkInput = addCardPopup.querySelector('.popup__input_data_card-link');

//popup img
const imgPopup = openImgPopup.querySelector('.popup__image');
const imgSubtitle = openImgPopup.querySelector('.popup__image-subtitle');

//popup button-save
const popupButtonSave = editProfilePopup.querySelector('.popup__button-save');

//popup button-add
const popupButtonAdd = addCardPopup.querySelector('.popup__button-save');

// cardContainer
const cardsContainer = document.querySelector('.cards__list');
