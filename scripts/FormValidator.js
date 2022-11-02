export default class FormValidator {
  constructor(enableValidationObj, popupField) {
    this._field = popupField;
    this._formSelector = enableValidationObj.formSelector;
    this._fieldSelector = enableValidationObj.fieldSelector;
    this._inputSelector = enableValidationObj.inputSelector;
    this._submitButtonSelector = enableValidationObj.submitButtonSelector;
    this._inactiveButtonClass = enableValidationObj.inactiveButtonClass;
    this._inputErrorClass = enableValidationObj.inputErrorClass;
    this._errorClass = enableValidationObj.errorClass;
    this._inputList = Array.from(this._field.querySelectorAll(this._inputSelector));
  }

  _showInputError() {
    const errorElement = this._field.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError() {
    const errorElement = this._field.querySelector(`.${this._inputElement.id}-error`);
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
    this._buttonElement = this._field.querySelector(this._submitButtonSelector);

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
    this._field.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

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

  resetInputError() {
    this._inputErrorActiveList = this._field.querySelectorAll(`.${this._errorClass}`);
    this._inputList.forEach((inputElement) => {
      const errorElement = this._field.querySelector(`.${inputElement.id}-error`);
      errorElement.textContent = '';
      inputElement.classList.remove(this._inputErrorClass);
    })
    this._inputErrorActiveList.forEach((errorElement) => {
      errorElement.classList.remove(this._errorClass);
    })
    this._disableButtonSubmit()
  }
}



