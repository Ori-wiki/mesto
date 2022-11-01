


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

addCardPopupOpenButton.addEventListener('click', () => {
  addCardPopupForm.reset();
  resetInputError(addCardPopupForm)
  resetButton(popupButtonAdd);
  openPopup(addCardPopup);
});

// addCard(cardNameInput.value, cardLinkInput.value);
addCardPopupForm.addEventListener('submit', handleAddCardFormSubmit);
