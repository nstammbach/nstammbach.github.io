/* Copyright 2020 Google LLC.
SPDX-License-Identifier: Apache-2.0 */

const form = document.querySelector('form');
const saveAddressButton = document.querySelector('button#save-address');

form.addEventListener('submit', handleFormSubmission);                       

function handleFormSubmission(event) {
  event.preventDefault();
  validate();
  form.reportValidity();
  if (form.checkValidity() === false) {
    // Handle invalid form data.
  } else {
    // submit form to server
    saveAddressButton.textContent = 'Saving...';
    saveAddressButton.disabled = 'true';
    alert('Saving address!');
  }
}

// Do form validation.
function validate() {
   let message= 'Whats wrong';
   if (!/someregex/.test(someInput.value)) {
     console.log(`Invalid value ${someInput.value} for someInput`);
	 	 message = 'Explain how to enter a valid value';
   }
   someInput.setCustomValidity(message);
}


const addressInput = document.querySelector('[address="address"]'); 

addressInput.addEventListener('invalid', () => {  
  addressInput.setCustomValidity('Please enter your address.');
});

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

function interval() {
    while (true) {
        setInterval(showImage, 1);
    }
}

function showImage() {

    var x = clientX;
    var y = clientY;
    var image = document.getElementById("img1");
    image.style.left = x;
    image.style.top = y;
 }