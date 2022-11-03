export default class Card {
  constructor(data, templateSelector, openFullScreenImgPopup) {
    this._cardNameValue = data.name;
    this._cardLinkValue = data.link;
    this._templateSelector = templateSelector;
    this._openFullScreenImgPopup = openFullScreenImgPopup;
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
    this._cardImage = this._element.querySelector('.card__list-img');
    this._element.querySelector('.card__title').textContent = this._cardNameValue;
    this._cardImage.src = this._cardLinkValue;
    this._cardImage.alt = this._cardNameValue;
    this._setEventListeners()

    return this._element;
  }

  _handleDeleteCard() {
    this._element.remove()
  }

  _handleSetLike(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._openFullScreenImgPopup(this._cardNameValue, this._cardLinkValue)
    });
    this._element.querySelector('.card__like-button').addEventListener('click', (evt) => {
      this._handleSetLike(evt)
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDeleteCard()
    });
  }
}




