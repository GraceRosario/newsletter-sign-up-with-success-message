const email = document.getElementById("email");
const emailErrorMsg = document.getElementById("email-error");
// const submitBtn = document.querySelector(".submit-button");
const form = document.querySelector(".newsletter-card__form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

email.addEventListener("input", function (e) {
  if (validateEmail()) {
    emailErrorMsg.classList.add("hidden");
    email.classList.remove("input-error-message");
  } else {
    emailErrorMsg.classList.remove("hidden");
    email.classList.add("input-error-message");
  }
});

form.addEventListener("submit", function (e) {
  if (!validateEmail()) {
    e.preventDefault();
    console.log("not submitted");
  }
  else {
    e.preventDefault();
  }
});

// submitBtn.addEventListener("submit", function (e) {
//   e.preventDefault();
// })

// email.addEventListener("input", function (e) {

// if (email.value === "") {
//   emailErrorMsg.classList.remove("hidden");
//   emailErrorMsg.innerText = "Please complete the field";
//   email.classList.add("input-error-message");
// } else if (!emailPattern.test(email.value)) {
//   emailErrorMsg.classList.remove("hidden");
//   emailErrorMsg.innerText = "Valid email required";
//   email.classList.add("input-error-message");
// } else {
//   emailErrorMsg.classList.add("hidden");
//   emailErrorMsg.innerText = "";
//   email.classList.remove("input-error-message");
// }
// });
