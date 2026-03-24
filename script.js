const email = document.getElementById("email");
const emailErrorMsg = document.getElementById("email-error");
const form = document.querySelector(".newsletter-card__form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const displayEmail = document.querySelector(".user-email");
const successCard = document.querySelector(".success-card");
const newsletterCard = document.querySelector(".newsletter-card");
const dismissButton = document.querySelector(".success-card__button");

function validateEmail() {
  if (email.value === "") {
    emailErrorMsg.innerText = "Please complete the field";
    return false;
  } else if (!emailPattern.test(email.value)) {
    emailErrorMsg.innerText = "Valid email required";
    return false;
  } else {
    emailErrorMsg.innerText = "";
    return true;
  }
}

email.addEventListener("input", function () {
  if (validateEmail()) {
    emailErrorMsg.classList.add("hidden");
    email.classList.remove("input-error-message");
  } else {
    emailErrorMsg.classList.remove("hidden");
    email.classList.add("input-error-message");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validateEmail()) return;

  // below statements only runs when the above if statement is false.
  // runs only when validateEmail() returns true

  newsletterCard.classList.add("hidden");
  successCard.classList.remove("hidden");
  displayEmail.innerText = email.value;
});

dismissButton.addEventListener("click", function () {
  successCard.classList.add("hidden");
  newsletterCard.classList.remove("hidden");
  email.value = "";
  emailErrorMsg.innerText= "";
  emailErrorMsg.classList.add("hidden");
  email.classList.remove("input-error-message");
});
