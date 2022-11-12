export default class Popup {
  constructor(popupSelector) {

    this._popup = document.querySelector(popupSelector);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) =>{
      this._handleEscClose(evt)
  });
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) =>{
      this._handleEscClose(evt)
  });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners(){
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__button-close')) {
        this.close()
      }
    })
  }

}
