const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const passConfirm = document.getElementById("Confirmation");
// const formControl = password.parentElement;

function checkRequired(input) {
  input.forEach(function(item) {
    if (item.value.trim() === "") {
      showError(item, `${getCapitalId(item.id)} is required`);
    } else {
      showSuccess(item);
    }
  });
}

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function getCapitalId(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
function showError(input, message) {
  input.parentElement.classList = "form-control fail";
  const small = input.parentElement.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  input.parentElement.classList = "form-control success";
}

function checkInput(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getCapitalId(input.id)} should be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getCapitalId(input.id)} should be at most ${max} characters `
    );
  } else {
    showSuccess(input);
  }
}

function checkRequired(input) {
  input.forEach(function(item) {
    if (item.value.trim() === "") {
      showError(item, `${getCapitalId(item.id)} is required`);
    } else {
      showSuccess(item);
    }
  });
}

function checkPasswordMatch(input1, input2) {
  if (input1.value === input2.value && input1.value !== "") {
    // showSuccess(input1);
  } else {
    showError(input2, `Passwords should be same`);
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkRequired([username, password, email, passConfirm]);
  checkInput(username, 3, 15);
  checkInput(password, 6, 25);
  checkPasswordMatch(password, passConfirm);
});
