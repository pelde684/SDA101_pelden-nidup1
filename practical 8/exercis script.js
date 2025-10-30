// Get all form elements
const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitButton = form.querySelector("button");

// Validation functions
function validateUsername() {
  if (username.value.trim().length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long.";
    username.classList.add("invalid");
    username.classList.remove("valid");
    return false;
  }
  usernameError.textContent = "";
  username.classList.add("valid");
  username.classList.remove("invalid");
  return true;
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    email.classList.add("invalid");
    email.classList.remove("valid");
    return false;
  }
  emailError.textContent = "";
  email.classList.add("valid");
  email.classList.remove("invalid");
  return true;
}

function validatePassword() {
  const passwordValue = password.value;
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (!pattern.test(passwordValue)) {
    passwordError.textContent = "Password must have at least 8 characters, one uppercase, one lowercase, and one special symbol.";
    password.classList.add("invalid");
    password.classList.remove("valid");
    return false;
  }
  passwordError.textContent = "";
  password.classList.add("valid");
  password.classList.remove("invalid");
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPassword.classList.add("invalid");
    confirmPassword.classList.remove("valid");
    return false;
  }
  confirmPasswordError.textContent = "";
  confirmPassword.classList.add("valid");
  confirmPassword.classList.remove("invalid");
  return true;
}

// Check all validations together
function checkFormValidity() {
  const isValid =
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword();

  submitButton.disabled = !isValid;
}

// Add event listeners for real-time validation
username.addEventListener("input", () => {
  validateUsername();
  checkFormValidity();
});

email.addEventListener("input", () => {
  validateEmail();
  checkFormValidity();
});

password.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword(); // keep confirm password updated
  checkFormValidity();
});

confirmPassword.addEventListener("input", () => {
  validateConfirmPassword();
  checkFormValidity();
});

// Prevent actual submission for demo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration successful!");
});