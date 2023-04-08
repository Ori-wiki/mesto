export default class Card {
  constructor(
    data,
    templateSelector,
    userId,
    openFullScreenImgPopup,
    confrimDeleteCard,
    putLike,
    deleteLike
  ) {
    this._data = data;
    this._cardNameValue = this._data.name;
    this._cardLinkValue = this._data.link;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._cardOwnerId = this._data.owner._id;
    this._cardId = this._data._id;
    this._openFullScreenImgPopup = openFullScreenImgPopup;
    this._confrimDeleteCard = confrimDeleteCard;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
    this._element = this._getTemplate();
    this._cardDeleteButton = this._element.querySelector(
      ".card__delete-button"
    );
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeCounter = this._element.querySelector(".card__like-counter");
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
    this._likeCounter.textContent = this._data.likes.length;
    this._setEventListeners();
    this._setIsLiked();
    return this._element;
  }

  _handleDeleteCard() {
    const data = {
      card: this._element,
      _id: this._cardId,
    };
    this._confrimDeleteCard(data);
  }

  _handleSetLike() {
    if (!this._likeButton.classList.contains("card__like-button_active")) {
      this._putLike(this._cardId).then((res) => {
        this._likeCounter.textContent = res.likes.length;
        this._likeButton.classList.add("card__like-button_active");
      });
    } else {
      this._deleteLike(this._cardId).then((res) => {
        this._likeCounter.textContent = res.likes.length;
        this._likeButton.classList.remove("card__like-button_active");
      });
    }
  }

  _setIsLiked() {
    if (this._data.likes.some((item) => item._id === this._userId)) {
      this._likeButton.classList.add("card__like-button_active");
    }
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._openFullScreenImgPopup(this._data);
    });
    this._likeButton.addEventListener("click", (evt) => {
      this._handleSetLike(evt);
    });
    if (this._cardOwnerId === this._userId) {
      this._cardDeleteButton.addEventListener("click", () => {
        this._handleDeleteCard();
      });
    } else {
      this._cardDeleteButton.classList.add("card__like-button_inactive");
    }
  }
}

