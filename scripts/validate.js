// // const enableValidationObj = {
// //   formSelector: '.popup__form',
// //   inputSelector: '.popup__input',
// //   fieldSelector: '.popup__field',
// //   submitButtonSelector: '.popup__button',
// //   inactiveButtonClass: 'popup__button_inactive',
// //   inputErrorClass: 'popup__input_error',
// //   errorClass: 'popup__input-error_active'
// // }

// const showInputError = (fieldSet, inputElement, errorMessage, { inputErrorClass, errorClass, }) => {
  // const errorElement = fieldSet.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorClass);
// };

// const hideInputError = (fieldSet, inputElement, { inputErrorClass, errorClass }) => {
//   const errorElement = fieldSet.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (fieldSet, inputElement, rest) => {
//   if (!inputElement.validity.valid) {
//     showInputError(fieldSet, inputElement, inputElement.validationMessage, rest);
//   } else {
//     hideInputError(fieldSet, inputElement, rest);
//   }
// };



// const setEventListeners = (fieldSet, { inputSelector, submitButtonSelector, ...rest }) => {
//   const inputList = Array.from(fieldSet.querySelectorAll(inputSelector));
//   const buttonElement = fieldSet.querySelector(submitButtonSelector);

//   toggleButtonState(inputList, buttonElement, rest)
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       toggleButtonState(inputList, buttonElement, rest)
//       checkInputValidity(fieldSet, inputElement, rest);
//     })
//   });
// };

// //1
// const enableValidation = ({ formSelector, fieldSelector, ...rest }) => {
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });

//     const fieldsetList = Array.from(formElement.querySelectorAll(fieldSelector));
//     fieldsetList.forEach((fieldSet) => {
//       console.log(fieldSet)
//       setEventListeners(fieldSet, rest);
//     });
//   });
// };
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// };

// const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }) => {

//   if (hasInvalidInput(inputList)) {
//     buttonElement.setAttribute('disabled', 'true')
//     buttonElement.classList.add(inactiveButtonClass);
//   } else {
//     buttonElement.removeAttribute('disabled')
//     buttonElement.classList.remove(inactiveButtonClass);
//   }
// };

// // enableValidation(enableValidationObj)


const resetInputError = (fieldSet) => {
  const inputErrorList = fieldSet.querySelectorAll('.popup__input_error');
  const inputErrorActiveList = fieldSet.querySelectorAll('.popup__input-error_active');
  inputErrorList.forEach((inputElement) => {
    const errorElement = fieldSet.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove('popup__input_error');
  })
  inputErrorActiveList.forEach((errorElement) => {
    errorElement.classList.remove('popup__input-error_active');
  })
}
const resetButton = (buttonElement,) => {
  buttonElement.setAttribute('disabled', 'true')
  buttonElement.classList.add('popup__button_inactive');
}



