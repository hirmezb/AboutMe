document.getElementById('form').addEventListener('submit', function(event) {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

     // Validate First Name
     const firstName = document.forms['form']['firstName'].value;
     let firstNameErrors = [];
     if (!firstName) {
         firstNameErrors.push('First name is required.');
     } 
     if (firstName.length > 0 && firstName.length < 2) {
         firstNameErrors.push('First name must be at least 2 characters long.');
     }
     if (firstName && !/^[A-Za-z]+$/.test(firstName)) {
         firstNameErrors.push('First name must contain letters only.');
     }
     if (firstNameErrors.length > 0) {
         displayError('firstNameError', firstNameErrors.join(' '));
         isValid = false;
     }
 
     // Validate Last Name
     const lastName = document.forms['form']['lastName'].value;
     let lastNameErrors = [];
     if (!lastName) {
         lastNameErrors.push('Last name is required.');
     }
     if (lastName.length > 0 && lastName.length < 2) {
         lastNameErrors.push('Last name must be at least 2 characters long.');
     }
     if (lastName && !/^[A-Za-z]+$/.test(lastName)) {
         lastNameErrors.push('Last name must contain letters only.');
     }
     if (lastNameErrors.length > 0) {
         displayError('lastNameError', lastNameErrors.join(' '));
         isValid = false;
     }

    // Validate Cellphone number field
    const cell = document.forms['form']['cell'].value;
    let cellErrors = [];
    if (!cell) {
        cellErrors.push('Phone number is required.');
    }
    if (cell && !/^\d{10}$/.test(cell)) {
        cellErrors.push('Invalid phone number.');
    }
    if (cellErrors.length > 0) {
        displayError('cellError', cellErrors.join(' '));
        isValid = false;
    }

    // Validate Email
    const email = document.forms['form']['email'].value;
    let emailErrors = [];
    if (!email) {
        emailErrors.push('Email address is required.');
    }
    if (email && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        emailErrors.push('Invalid email address.');
    }
    if (emailErrors.length > 0) {
        displayError('emailError', emailErrors.join(' '));
        isValid = false;
    }

    // Validate Checkboxes
    const contactMethod = document.forms['form']['contactMethod'];
    const contactChecked = [...contactMethod].some(checkbox => checkbox.checked);
    if (!contactChecked) {
        displayError('contactMethodError', 'Please select at least one contact method.');
        isValid = false;
    }

    // Validate Message
    const message = document.forms['form']['message'].value;
    let messageErrors = [];
    if (!message.trim()) {
        messageErrors.push('Message is required.');
    }
    
    if (messageErrors.length > 0) {
        displayError('messageError', messageErrors.join(' '));
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }

});

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

// Event listener for the Clear Form button to clear error messages as well
document.getElementById('clearFormButton').addEventListener('click', function() {
    // Clear all error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
    });
});
