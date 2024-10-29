document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = "");
    let formValid = true;

    // Username validation
    const username = document.getElementById('username').value.trim();
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = "The username must be at least 3 characters.";
        formValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        formValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 
            "Password must be at least 8 characters long, with uppercase, lowercase, numbers, and special characters.";
        formValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        formValid = false;
    }

    // Terms agreement validation
    const agreeTerms = document.getElementById('agreeTerms').checked;
    if (!agreeTerms) {
        document.getElementById('termsError').textContent = "You must agree to the terms & conditions to proceed.";
        formValid = false;
    }

    // If all validations pass, submit the form
    if (formValid) {
        alert("The form was submitted successfully!");
        document.getElementById("registrationForm").submit(); // This line submits the form
    }
});
