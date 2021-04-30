const form = document.querySelector("form");
const message = document.querySelector(".message");
const fullNameValid = document.querySelector("#nameValid");
const fullNameError = document.querySelector("#nameError");
const fullName = document.querySelector("#name");
const subjectValid = document.querySelector("#subjectValid");
const subjectError = document.querySelector("#subjectError");
const subject = document.querySelector("#subject");
const emailValid = document.querySelector("#emailValid");
const emailError = document.querySelector("#emailError");
const email = document.querySelector("#email");
const phoneValid = document.querySelector("#phoneValid");
const phoneError = document.querySelector("#phoneError");
const phone = document.querySelector("#phone");
const submit = document.querySelector("#submit");

function validateForm() {
  event.preventDefault();

  let form = true;

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
    fullNameValid.style.display = "block";
  } else {
    fullNameError.style.display = "block";
    fullNameValid.style.display = "none";
    form = false;
  }
  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
    subjectValid.style.display = "block";
  } else {
    subjectError.style.display = "block";
    subjectValid.style.display = "none";
    form = false;
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    emailValid.style.display = "block";
  } else {
    emailError.style.display = "block";
    emailValid.style.display = "none";
    form = false;
  }
  if (checkLength(phone.value, 7) === true) {
    phoneError.style.display = "none";
    phoneValid.style.display = "block";
  } else {
    phoneError.style.display = "block";
    phoneValid.style.display = "none";
    form = false;
  }
  if (form === true) {
    document.location.href = "./contact-success.html";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
