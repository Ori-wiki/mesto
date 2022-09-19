//popup
const editProfilePopup = document.querySelector('.popup_edit_profile-info');
const addCardPopup = document.querySelector('.popup_add_card');
const openImgPopup = document.querySelector('.popup_open_img');

// cardContainer
const cardsContainer = document.querySelector('.cards__list');

//popup close button
const editProfilePopupCloseButton = editProfilePopup.querySelector('.popup__button-close');
const addCardPopupCloseButton = addCardPopup.querySelector('.popup__button-close');
const openImgPopupCloseButton = openImgPopup.querySelector('.popup__button-close');

//popup open button
const editProfilePopupOpenButton = document.querySelector('.profile__info-edit-button');
const addCardPopupOpenButton = document.querySelector('.profile__add-button');

//popup inputs
const profileInputName = editProfilePopup.querySelector('.popup__input_data_name');
const profileInputProfession = editProfilePopup.querySelector('.popup__input_data_profession');
const cardNameInput = addCardPopup.querySelector('.popup__input_data_card-name');
const cardLinkInput = addCardPopup.querySelector('.popup__input_data_card-link');

//popup form
const editProfilePopupForm = editProfilePopup.querySelector('.popup__form');
const addCardPopupForm = addCardPopup.querySelector('.popup__form');

//profile info
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//popup img
const imgPopup = openImgPopup.querySelector('.popup__image');
const imgSubtitle = openImgPopup.querySelector('.popup__image-subtitle');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//Функция рендеринга
function renderCards() {
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
  initialCards.forEach((function (element) {
    addCard(element.name, element.link);
  }))
};

//Функия создания карточки
function createCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector('.card_template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__list-img');

  cardElement.querySelector('.card__title').textContent = cardNameValue;
  cardImage.addEventListener('click', () => {
    imgPopup.src = cardLinkValue;
    imgSubtitle.textContent = cardNameValue;
    openPopup(openImgPopup);
  });
  cardImage.src = cardLinkValue;
  cardImage.alt = cardLinkValue;
  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  return cardElement;
}

//Функция добавления карточки
function addCard(cardNameValue, cardLinkValue) {
  const cardElement = createCard(cardNameValue, cardLinkValue);
  cardsContainer.prepend(cardElement);
}

//Функции отпрвки формы
function formSubmitEditProfileHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value
  profileProfession.textContent = profileInputProfession.value
  closePopup(editProfilePopup);
}

function formSubmitAddCardHandler(evt) {
  evt.preventDefault();

  addCard(cardNameInput.value, cardLinkInput.value);

  closePopup(addCardPopup);

  evt.target.reset();
}

renderCards();


// Слушатели открытия popup
editProfilePopupOpenButton.addEventListener('click', () => {
  openPopup(editProfilePopup);
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
});
addCardPopupOpenButton.addEventListener('click', () => {
  openPopup(addCardPopup);
});

// Слушатели закрытия popup
editProfilePopupCloseButton.addEventListener('click', () => {
  closePopup(editProfilePopup);
});
addCardPopupCloseButton.addEventListener('click', () => {
  closePopup(addCardPopup);
  cardNameInput.value = '';
  cardLinkInput.value = '';
});
openImgPopupCloseButton.addEventListener('click', () => {
  closePopup(openImgPopup);
});
editProfilePopupForm.addEventListener('submit', formSubmitEditProfileHandler);
addCardPopupForm.addEventListener('submit', formSubmitAddCardHandler);

