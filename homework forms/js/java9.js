const form = document.querySelector("#myForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const phone = document.querySelector("#phone");
  const age = document.querySelector("#age");

  const errorMessages = document.querySelector("#errorMessages");
  errorMessages.innerHTML = "";

  if (!name.value) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Name is required";
    errorMessages.appendChild(errorMessage);
  }

  if (!email.value) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Email is required";
    errorMessages.appendChild(errorMessage);
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Email is not valid";
    errorMessages.appendChild(errorMessage);
  }

  if (!password.value) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Password is required";
    errorMessages.appendChild(errorMessage);
  } else if (password.value.length < 5) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Password must be at least 5 characters";
    errorMessages.appendChild(errorMessage);
  }

  if (!phone.value) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Phone is required";
    errorMessages.appendChild(errorMessage);
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Phone number is not valid";
    errorMessages.appendChild(errorMessage);
  }

  if (!age.value) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Age is required";
    errorMessages.appendChild(errorMessage);
  } else if (age.value < 18 || age.value > 100) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "Age must be between 18 and 100";
    errorMessages.appendChild(errorMessage);
  }

  if (errorMessages.innerHTML === "") {
    form.submit();
  }
}
