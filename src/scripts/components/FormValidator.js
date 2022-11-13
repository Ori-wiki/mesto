export default class FormValidator {
  constructor(ValidationConfig, formElement) {
    this._formElement = formElement;
    this._formSelector = ValidationConfig.formSelector;
    this._fieldSelector = ValidationConfig.fieldSelector;
    this._inputSelector = ValidationConfig.inputSelector;
    this._submitButtonSelector = ValidationConfig.submitButtonSelector;
    this._inactiveButtonClass = ValidationConfig.inactiveButtonClass;
    this._inputErrorClass = ValidationConfig.inputErrorClass;
    this._errorClass = ValidationConfig.errorClass;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  _showInputError() {
    const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError() {
    const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    this._inputElement = inputElement
    if (!inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }
  _setEventListeners() {

    this._toggleButtonState()

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState()
        this._checkInputValidity(inputElement);
      })
    });
  }

  enableValidation() {
    this._setEventListeners()
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButtonSubmit()
    } else {
      this._buttonElement.removeAttribute('disabled')
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  _disableButtonSubmit() {
    this._buttonElement.setAttribute('disabled', 'true')
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement;
      this._hideInputError();
    })
    this._disableButtonSubmit()
  }
}



