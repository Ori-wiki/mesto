const popup1 = document.querySelector('.popup_add_card');
const popupCloseButton1 = popup1.querySelector('.popup__button-close');
const popupOpenButton1 = document.querySelector('.profile__add-button');
const cardName = popup1.querySelector('.popup__input_data_card-name');
const cardLink = popup1.querySelector('.popup__input_data_card-link');
const profileName1 = document.querySelector('.profile__name');
const profileProfession1 = document.querySelector('.profile__profession');
const popupForm1 = popup1.querySelector('.popup__form');

function closePopup1() {
  popup1.classList.remove('popup_opened');
}

function openPopup1() {
  popup1.classList.add('popup_opened');
  console.log('КАРТОЧКУ(=-=)')
}

const cardsContainer = document.querySelector('.cards__list');

function addCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector('.card_template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardNameValue;
  cardElement.querySelector('.card__list-img').src = cardLinkValue;
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardsContainer.append(cardElement);
}

function formSubmitHandler1(evt) {
  evt.preventDefault();

  addCard(cardName.value, cardLink.value);

  closePopup1();
  cardName.value = '';
  cardLink.value = '';
}

popupOpenButton1.addEventListener('click', openPopup1);

popupCloseButton1.addEventListener('click', closePopup1);

popupForm1.addEventListener('submit', formSubmitHandler1);
