clearInterval 
function validateForm() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let mobile=document.getElementById("mobile").value;
    let errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = "";

    // Username validation (non-empty)
    if (first === "") {
        errorMessage.textContent = "Username is required.";
        return false;
    }
    if (last === "") {
        errorMessage.textContent = "Username is required.";
        return false;
    }
 
    if(mobile.length<10) {
        errorMessage.textContent="mobile number must be 10 digits. ";
    }
    // Email validation (basic pattern check)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email.";
        return false;
    }

    // Password validation (minimum length 6 characters)
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    // Password confirmation check
    if (password !== repassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }


    // If all validations pass
    alert("Registration successful!");
    return true; // Proceed with form submission
}
