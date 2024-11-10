document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents page reload on form submission
  
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Example simple validation
    if (username && password) {
      alert('Login successful');
      // You can redirect to the main page or handle the login logic
      window.location.href = 'index.html';  // Example redirect after successful login
    } else {
      alert('Please fill in both fields');
    }
  });
  