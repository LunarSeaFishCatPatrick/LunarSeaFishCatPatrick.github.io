// Show the login form
function showLoginForm() {
  document.getElementById("login-container").classList.remove("hidden");
  document.getElementById("registration-container").classList.add("hidden");
}

// Show the registration form
function showRegistrationForm() {
  document.getElementById("registration-container").classList.remove("hidden");
  document.getElementById("login-container").classList.add("hidden");
}

// Save user during registration
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;

  // Error handling: Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Retrieve existing users from local storage or initialize an empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email is already registered
  if (users.some((user) => user.email === email)) {
    alert("User already exists!");
    return;
  }

  // Save the new user to local storage
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");

  // Switch to the login form after successful registration
  showLoginForm();
}

// Handle user login
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Retrieve users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the entered email and password match any registered user
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    alert("Invalid email or password!");
    return;
  }

  // Extract the username part of the email (before @)
  const username = email.split("@")[0];

  // Successful login
  alert(`Welcome back, ${username}!`);

  // Hide the login form
  document.getElementById("login-container").classList.add("hidden");

  // Optionally, update the UI to reflect the logged-in state
  const loginButton = document.getElementById("login-button");
  loginButton.textContent = `Logged in as ${username}`;
  loginButton.style.pointerEvents = "none"; // Disable clicking
  loginButton.style.backgroundColor = "#28a745"; // Change button color to green
}

// Toggle password visibility
function togglePasswordVisibility(passwordFieldId, checkboxId) {
  const passwordField = document.getElementById(passwordFieldId);
  const checkbox = document.getElementById(checkboxId);

  if (checkbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

// Toggle password visibility for both "Password" and "Confirm Password" fields in registration
function togglePasswordVisibilityForBoth() {
  const passwordField = document.getElementById("register-password");
  const confirmPasswordField = document.getElementById(
    "register-confirm-password"
  );
  const checkbox = document.getElementById("show-register-password");

  if (checkbox.checked) {
    passwordField.type = "text";
    confirmPasswordField.type = "text";
  } else {
    passwordField.type = "password";
    confirmPasswordField.type = "password";
  }
}

// Close the login or registration form
function closeForm() {
  document.getElementById("login-container").classList.add("hidden");
  document.getElementById("registration-container").classList.add("hidden");
}
// // Function to log saved users (including passwords) to the console
// function displaySavedUsers() {
//   // Retrieve the users from localStorage
//   const users = JSON.parse(localStorage.getItem("users")) || [];

//   // Check if there are no users
//   if (users.length === 0) {
//     console.log("No users are saved in localStorage.");
//     return;
//   }

//   // Log the saved users (email and password) to the console
//   console.log("Saved Users:");
//   users.forEach((user, index) => {
//     console.log(
//       `${index + 1}. Email: ${user.email}, Password: ${user.password}`
//     );
//   });
// }

// // Call the function to log saved users
// displaySavedUsers();

// // Function to delete a specific user by email
// function deleteUserByEmail(email) {
//   // Retrieve the users array from localStorage
//   const users = JSON.parse(localStorage.getItem("users")) || [];

//   // Filter out the user with the specified email
//   const updatedUsers = users.filter((user) => user.email !== email);

//   // Save the updated array back to localStorage
//   localStorage.setItem("users", JSON.stringify(updatedUsers));

//   console.log(`User with email "${email}" has been deleted.`);
// }

// // Example usage of deleteUserByEmail
// deleteUserByEmail("qwertyuiop");
