const popup = document.querySelector('.popup_edit_profile-info');
const popupCloseButton = popup.querySelector('.popup__button-close');
const popupOpenButton = document.querySelector('.profile__info-edit-button');
const profileInputName = popup.querySelector('.popup__input_data_name');
const profileInputProfession = popup.querySelector('.popup__input_data_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupForm = popup.querySelector('.popup__form');

function closePopup() {
  popup.classList.remove('popup_opened');
}

function openPopup() {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  popup.classList.add('popup_opened');
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



