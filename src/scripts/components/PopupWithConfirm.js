import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form")
    this._submit = this._submit.bind(this);
  }

  _submit(evt) {
    evt.preventDefault();
    console.log(this.data)
    this._handleFormSubmit(this.data);
  }

  setEventListeners() {
    super.setEventListeners();
    console.log(this._form)
    this._form.addEventListener("submit", this._submit);
  }
}
