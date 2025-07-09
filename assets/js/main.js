const subscribeForm = document.querySelector(".subscribe-form");
const emailInput = document.querySelector(
  '.subscribe-form input[type="email"]'
);

const messageDiv = document.querySelector(".message");
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add an event listener to the form to handle submission
subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  if (emailInput.validity.valueMissing) {
    messageDiv.classList.remove("success-message");
    messageDiv.textContent = "Oops! Please add your email";
    messageDiv.classList.add("error-message");
    subscribeForm.classList.add("error");
    messageDiv.classList.remove("hidden");
  } else if (!validEmailRegex.test(emailInput.value)) {
    messageDiv.classList.remove("success-message");
    messageDiv.textContent = "Oops! Please check your email";
    messageDiv.classList.add("error-message");
    subscribeForm.classList.add("error");
    messageDiv.classList.remove("hidden");
  } else {
    messageDiv.textContent = "Thank you for subscribing! " + emailInput.value;
    messageDiv.classList.remove("error-message");
    messageDiv.classList.add("success-message");
    subscribeForm.classList.remove("error");
    messageDiv.classList.remove("hidden");
  }
});
// Add an event listener to the email input to trim whitespace on input
emailInput.addEventListener("input", function () {
  emailInput.value = emailInput.value.trim(); // Trim whitespace from the input value
  if (validEmailRegex.test(emailInput.value)) {
    subscribeForm.classList.remove("error");
    messageDiv.classList.add("hidden");
  }
  if (emailInput.validity.valueMissing) {
    messageDiv.classList.remove("success-message");
    messageDiv.classList.add("hidden");
  }
});
