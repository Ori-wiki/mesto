const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__button-close');
const popupOpenButton = document.querySelector('.profile__info-edit-button');
const profileInputName = popup.querySelector('#popup__name-input');
const profileInputProfession = popup.querySelector('#popup__profession-input');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupForm = popup.querySelector('.popup__form');


function closePopup() {
  popup.classList.remove('popup_opened');
}
function openPopup() {
  popup.classList.add('popup_opened');
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value
  profileProfession.textContent = profileInputProfession.value
  closePopup();
}

popupOpenButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler);


