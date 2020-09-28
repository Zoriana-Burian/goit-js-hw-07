"use strict";


const inputValid = document.querySelector('#validation-input');
const inputLength = Number(inputValid.dataset.length);

inputValid.addEventListener('blur', onInputValueCheck);

function onInputValueCheck(event) {
  if (
    inputLength === event.currentTarget.value.length
  ) {
    inputValid.classList.add('valid');
    inputValid.classList.remove('invalid');
  } else {
    inputValid.classList.add('invalid');
    inputValid.classList.remove('valid');
  }
}