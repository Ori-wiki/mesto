export default class Card {
  constructor(
    data,
    templateSelector,
    userId,
    openFullScreenImgPopup,
    confrimDeleteCard
  ) {
    this._data = data;
    this._cardNameValue = this._data.name;
    this._cardLinkValue = this._data.link;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._openFullScreenImgPopup = openFullScreenImgPopup;
    this._confrimDeleteCard = confrimDeleteCard;
    this._element = this._getTemplate();
    this._cardDeleteButton = this._element.querySelector(
      ".card__delete-button"
    );
    this._likeButton = this._element.querySelector(".card__like-button");
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._cardImage = this._element.querySelector(".card__list-img");
    this._element.querySelector(".card__title").textContent =
      this._cardNameValue;
    this._cardImage.src = this._cardLinkValue;
    this._cardImage.alt = this._cardNameValue;
    this._setEventListeners();
    // console.log(this._data)
    return this._element;
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleSetLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._openFullScreenImgPopup(this._data);
    });
    this._likeButton.addEventListener("click", (evt) => {
      this._handleSetLike(evt);
    });
    if (this._data.owner._id === this._userId) {
      this._cardDeleteButton.addEventListener("click", () => {
        this._confrimDeleteCard();
        // this._handleDeleteCard();
      });
    } else {
      this._cardDeleteButton.classList.add("card__like-button_inactive");
    }
  }
}
