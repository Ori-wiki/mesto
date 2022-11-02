//popup список
const popups = document.querySelectorAll('.popup');







//popup close button
const closeButtons = document.querySelectorAll('.popup__button-close');

//popup open button
const editProfilePopupOpenButton = document.querySelector('.profile__info-edit-button');
const addCardPopupOpenButton = document.querySelector('.profile__add-button');

//popup inputs
const profileInputName = editProfilePopup.querySelector('.popup__input_data_name');
const profileInputProfession = editProfilePopup.querySelector('.popup__input_data_profession');


//profile info
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');



//template
// const cardTemplate = document.querySelector('.card_template').content;

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
}


// //Функия создания карточки
// function createCard(cardNameValue, cardLinkValue) {
//   const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
//   const cardImage = cardElement.querySelector('.card__list-img');

//   cardElement.querySelector('.card__title').textContent = cardNameValue;
//   cardImage.addEventListener('click', () => {
//     imgPopup.src = cardLinkValue;
//     imgPopup.alt = cardNameValue;
//     imgSubtitle.textContent = cardNameValue;
//     openPopup(openImgPopup);
//   });
//   cardImage.src = cardLinkValue;
//   cardImage.alt = cardNameValue;
//   cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
//     evt.target.classList.toggle('card__like-button_active');
//   });
//   cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
//     cardElement.remove();
//   });
//   return cardElement;

// }

// //Функция добавления карточки
// function addCard(cardNameValue, cardLinkValue) {
//   return cardElement = createCard(cardNameValue, cardLinkValue);

// }

// function putCard(cardElement) {
//   cardsContainer.prepend(cardElement);
// }

//Функции отпарвки формы профиля
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value
  profileProfession.textContent = profileInputProfession.value
  closePopup(editProfilePopup);
}



// // Вызов 6 карточек
// renderCards();

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function openFullScreenImgPopup(name, link) {
  imgPopup.src = link;
  imgPopup.alt = name;
  imgSubtitle.textContent = name;
  openPopup(openImgPopup);
}


//Функция закрытия попапа на Escape
function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }
}
function handleOverlayClose(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
}

// editProfilePopupOpenButton.addEventListener('click', () => {
//   profileInputName.value = profileName.textContent;
//   profileInputProfession.value = profileProfession.textContent;
//   // resetButton(popupButtonSave);
//   // resetInputError(editProfilePopupForm);
//   openPopup(editProfilePopup);
// });





popups.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClose)
});



