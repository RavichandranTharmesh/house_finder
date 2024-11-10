document.getElementById('signinForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for validation

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Initialize error message container
  let errorMessages = [];

  // Name validation
  if (name.trim() === '') {
      errorMessages.push('Full Name is required.');
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      errorMessages.push('Please enter a valid email address.');
  }

  // Password validation
  if (password.length < 8) {
      errorMessages.push('Password must be at least 8 characters long.');
  }

  // Confirm password validation
  if (password !== confirmPassword) {
      errorMessages.push('Passwords do not match.');
  }

  // Display error messages
  const errorContainer = document.createElement('div');
  errorContainer.style.color = 'red';
  errorContainer.style.marginTop = '10px';

  // Clear previous error messages if any
  const existingError = document.querySelector('.error-messages');
  if (existingError) {
      existingError.remove();
  }

  if (errorMessages.length > 0) {
      errorContainer.classList.add('error-messages');
      errorMessages.forEach(message => {
          const errorMessage = document.createElement('p');
          errorMessage.textContent = message;
          errorContainer.appendChild(errorMessage);
      });
      document.getElementById('signin-form').prepend(errorContainer);
  } else {
      // If no errors, display success message
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Sign in successfully!';
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '10px';
      document.getElementById('signin-form').prepend(successMessage);

      // Redirect to login page after 2 seconds
      setTimeout(function() {
          window.location.href = "login.html"; // Replace with your actual login page URL
      }, 2000);
  }
});
