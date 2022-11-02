


//Положитьь карточку в DOM
function putCard(cardElement) {
    cardsContainer.prepend(cardElement);
  }

//функция добавления 6 карточек
const renderElements = () => {
  initialCards.forEach((function (element) {
    let cardCard = new Card(element, '.card_template', openFullScreenImgPopup);
    const cardElement = cardCard.createCard();
    putCard(cardElement)
  }))
};
renderElements()



//Функции отпрвки формы card

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const obi = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  }
  let cardCard = new Card(obi, '.card_template', openFullScreenImgPopup);
  const cardElement = cardCard.createCard();
  putCard(cardElement)
  closePopup(addCardPopup)
  evt.target.reset();
}



//Вызов валидации форм
const editProfilePopupValidation = new FormValidator(
  enableValidationObj,
  editProfilePopupField
);
editProfilePopupValidation.enableValidation()

const addCardPopupValidation = new FormValidator(
  enableValidationObj,
  addCardPopupField
);
addCardPopupValidation.enableValidation()




//Слушатели
addCardPopupOpenButton.addEventListener('click', () => {
  addCardPopupForm.reset();
  addCardPopupValidation.resetInputError();
  openPopup(addCardPopup);
});


addCardPopupForm.addEventListener('submit', handleAddCardFormSubmit);


editProfilePopupOpenButton.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
  editProfilePopupValidation.resetInputError();
  openPopup(editProfilePopup);
});

editProfilePopupForm.addEventListener('submit', handleEditProfileFormSubmit);
