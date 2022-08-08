let checkbox = document.querySelector('#checkbox');
let checkboxCustom = document.querySelector('.w-checkbox-input--inputType-custom');

checkbox.addEventListener('click', (e) => {
  if (checkboxCustom.className.includes('w--redirected-checked')) {
    checkboxCustom.classList.remove('w--redirected-checked')
  } else {
    checkboxCustom.classList.add('w--redirected-checked')
  }
})