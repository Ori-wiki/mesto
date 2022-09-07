
// Открытие и закрытие попапа
const editProfile = document.querySelector('#editProfile');
const closeEditProfileButton = editProfile.querySelector('.popup__button-close');
const openEditProfileButton = document.querySelector('.profile__info-edit-button');


openEditProfileButton.addEventListener('click', () => {
  editProfile.classList.remove('popup__close');
})

closeEditProfileButton.addEventListener('click', () => {
  editProfile.classList.add('popup__close');
})


// Поля формы
const profileInputName = editProfile.querySelector('#popup__name-input');
const profileInputProfession = editProfile.querySelector('#popup__profession-input');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');


profileInputName.setAttribute('value', profileName.textContent);
profileInputProfession.setAttribute('value', profileProfession.textContent);


//Редактирование имени и информации о себе
const profileInputForm = editProfile.querySelector('.popup__form');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value
  profileProfession.textContent = profileInputProfession.value
  editProfile.classList.add('popup__close');
}
profileInputForm.addEventListener('submit', formSubmitHandler);
