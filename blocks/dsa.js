const fieldsetList = Array.from(formElement.querySelectorAll(fieldSelector));
    fieldsetList.forEach((fieldSet) => {
      console.log(fieldSet)
      setEventListeners(fieldSet, rest);
    });
  ;

  const enableValidation = ({ formSelector, fieldSelector, ...rest }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

      const fieldsetList = Array.from(formElement.querySelectorAll(fieldSelector));
      fieldsetList.forEach((fieldSet) => {
        console.log(fieldSet)
        setEventListeners(fieldSet, rest);
      });
    });
  };
