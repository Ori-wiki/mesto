import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    // console.log(super(popupSelector))
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._imageSubtitle = this._popup.querySelector(
      ".popup__image-subtitle"
    );
  }

  open(data) {
    this._image.src = data.link;
    this._image.alt = data.name;
    this._imageSubtitle.textContent = data.name;
    super.open();
  }
}


 const qwe = new PopupWithImage('.popup_open_img')


