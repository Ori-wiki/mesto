import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    const data = {};
    console.log(this._inputs)
    this._inputs.forEach((input) => {
      data[input.name] = input.value;

    })
    return data
  }

  setEventListeners() {
    this._popup.addEventListener('submit', () => {
      this._handleFormSubmit
    })
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }
}


const zxc = new PopupWithForm('.popup_edit_profile-info')
// console.log(zxc._inputs)
// console.log(zxc._getInputValues())
