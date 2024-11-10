// Get the form and response message elements
const feedbackForm = document.getElementById('feedback-form');
const responseMessage = document.getElementById('response-message');

// Add an event listener to handle form submission
feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = document.getElementById('rating').value;

    // Here you can implement AJAX to send the form data to the server (e.g., via a POST request)
    // For now, we just simulate successful submission

    // Check if all fields are filled
    if (name && email && message && rating) {
        // Simulate successful form submission
        setTimeout(() => {
            // Display a success message
            responseMessage.style.color = 'green';
            responseMessage.textContent = 'Thank you for your feedback! We appreciate your input.';
            
            // Optionally, clear the form after submission
            feedbackForm.reset();
        }, 500); // Simulate a slight delay for the submission
    } else {
        // If any field is missing, show an error message
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please fill in all fields.';
    }
});
