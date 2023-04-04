import { isEscKey } from './util.js';
import { onDocumentEscKeyDown, onCloseForm } from './form.js';

const templateErrorElement = document.querySelector('#error').content.querySelector('.error');
const error = templateErrorElement.cloneNode(true);

const templateSuccessElement = document.querySelector('#success').content.querySelector('.success');
const success = templateSuccessElement.cloneNode(true);
const errorButton = error.querySelector('.error__button');
const successButton = success.querySelector('.success__button');


function closeErrorEsc (evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    document.addEventListener('keydown', onDocumentEscKeyDown);
    error.remove();
    
  }
}

function closeSuccessEsc (evt) {
    if (isEscKey(evt)) {
        success.remove();
        onCloseForm();
      }
}

const onClickCloseModal = (evt) => {
    if (evt.target.matches('.success')) {
      document.querySelector('.success').remove();
      onCloseForm();
    }
    if (evt.target.matches('.error')) {
      document.querySelector('.error').remove();
    }
  };

const closeErrorMessage = () => {
    document.querySelector('.error').remove();
}

const showError = function () {
    document.body.append(error);
    const errorMessage = document.querySelector('.error');
    errorMessage.addEventListener('click', onClickCloseModal)
    errorButton.addEventListener('click', closeErrorMessage)
    document.removeEventListener('keydown', onDocumentEscKeyDown);
    document.addEventListener('keydown', closeErrorEsc);
};

const closeSuccessMessage = () => {
    document.querySelector('.success').remove();
}

const showSuccess = function () {
  document.body.append(success);
  const successMessage = document.querySelector('.success');
  successMessage.addEventListener('click', onClickCloseModal)
  successButton.addEventListener('click', closeSuccessMessage)
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  document.addEventListener('keydown', closeSuccessEsc);
};


const showAlert = (err) => {
  };

export {showError, showSuccess, showAlert };
