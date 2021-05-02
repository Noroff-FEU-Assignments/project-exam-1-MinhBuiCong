const form = document.querySelector("form");
const formFeedback = document.querySelector("#form-feedback");
const fullNameError = document.querySelector("#name-error");
const fullName = document.querySelector("#name");
const emailError = document.querySelector("#email-error");
const email = document.querySelector("#email");
const subjectError = document.querySelector("#subject-error");
const subject = document.querySelector("#subject");
const messageError = document.querySelector("#message-error");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");

function validateForm() {
  event.preventDefault();

  let form = true;

  if (checkLength(fullName.value, 4) === true) {
    fullNameError.style.display = "none";
    fullName.style.border = "2px solid green";
  } else {
    fullNameError.style.display = "flex";
    fullName.style.border = "2px solid red";
    form = false;
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.border = "2px solid green";
  } else {
    emailError.style.display = "flex";
    email.style.border = "2px solid red";
    form = false;
  }
  if (checkLength(subject.value, 14) === true) {
    subjectError.style.display = "none";
    subject.style.border = "2px solid green";
  } else {
    subjectError.style.display = "flex";
    subject.style.border = "2px solid red";
    form = false;
  }
  if (checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
    message.style.border = "2px solid green";
  } else {
    messageError.style.display = "flex";
    message.style.border = "2px solid red";
    form = false;
  }
  if (form === true) {
    formFeedback.innerHTML = `<h1>your message has been sent!</h1>`;
    console.log(" hallo:>> ");
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
