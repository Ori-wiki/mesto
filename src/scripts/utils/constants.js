export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  fieldSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-error_active",
};

//popup
export const profilePopup = document.querySelector(".popup_edit_profile-info");

//popup open button
export const profilePopupOpenButton = document.querySelector(
  ".profile__info-edit-button"
);
export const cardPopupOpenButton = document.querySelector(
  ".profile__add-button"
);
export const avatarPopupOpenButton = document.querySelector(
  ".profile__avatar-box"
);

//popup inputs
export const profileInputName = profilePopup.querySelector(
  ".popup__input_data_name"
);
export const profileInputProfession = profilePopup.querySelector(
  ".popup__input_data_profession"
);

// селектор info
export const profileNameSelector = ".profile__name";
export const profileProfessionSelector = ".profile__profession";
export const porfileAvatarSelector = ".profile__avatar";
//селектор контейнера
export const cardListSelector = ".cards__list";
