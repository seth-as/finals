// Predefined admin account as required by the system
const adminUsername = "admin";
const adminPassword = "Pa$$word1";

// Function to validate login credentials
function login() {
    // Get user input from login form
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if credentials match admin account
    if (username === adminUsername && password === adminPassword) {
        alert("Admin login successful!");
        window.location.href = "admin.html"; // Redirect to admin page
    } else {
        alert("Invalid username or password!");
    }
}

// Function to validate registration form
function validateRegistration() {
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    // Simple validation to ensure fields are not empty
    if (email === "" || contact === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    alert("Registration successful!");
    return true;
}
