class Card {
  constructor(cardNameValue, cardLinkValue, templateSelector) {
    this._templateSelector = templateSelector;
    this._cardNameValue = cardNameValue;
    this._cardLinkValue = cardLinkValue;
  }

  _getTemplate() {

    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();

    const cardImage = this._element.querySelector('.card__list-img');

    this._element.querySelector('.card__title').textContent = this._cardNameValue;

    this._setEventListeners()

    cardImage.src = this._cardLinkValue;
    cardImage.alt = this._cardNameValue;


    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.card__list-img').addEventListener('click', () => {
      imgPopup.src = this._cardLinkValue;
      imgPopup.alt = this._cardNameValue;
      imgSubtitle.textContent = this._cardNameValue;
      openPopup(openImgPopup);
    });
    this._element.querySelector('.card__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like-button_active');
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._element.remove();
    });
  }



  //   _addCard() {
  //   return cardElement = createCard(cardNameValue, cardLinkValue);
  // }


}



// let user = new Card('пеним', 'пениа', '.card_template')
// console.log()








const renderElements = () => {
  let cardCard = new Card('пеним', 'https://im.wampi.ru/2022/10/25/2896979787.jpg', '.card_template')
  console.log(cardCard)
  const cardElement = cardCard.createCard();
  console.log(cardElement)
  cardsContainer.prepend(cardElement);

};
renderElements()

// defaultCardButton.addEventListener('click', () => {
//   renderElements(true);
// });




// const putCard = (cardElement) => {
//   cardsContainer.prepend(cardElement);
// }
