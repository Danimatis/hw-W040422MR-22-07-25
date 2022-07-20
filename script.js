const userNameInput = document.getElementById("name");
const userAgeInput = document.getElementById("age");
const userCountryInput = document.getElementById("country");
const userColorInput = document.getElementById("color");
const genderMaleInput = document.getElementById("male");
const genderFemaleInput = document.getElementById("female");
const userDetailsOutput = document.getElementById("bootstrapCard");
function displayUserInformationInCard() {
  if (userNameInput.value.length < 2) {
    alert("No Such Thing As A Letter being A Name! Try Again");
    return;
  } else if (userAgeInput.value <= 0) {
    alert("With Such An Age You Don't Exist Yet");
    return;
  } else if (assessUserGender() === undefined) {
    alert("Please choose your gender- we are not politically correct here 😝");
    return;
  } else if (userCountryInput.value === "none") {
    alert("Please tell us where you live");
    return;
  }

  writeInnerHTML(
    userNameInput.value,
    userAgeInput.value,
    userCountryInput.value,
    userColorInput.value,
    assessUserGender()
  );
  clearInputs(assessUserGender);
}
function assessUserGender() {
  if (genderFemaleInput.checked === true) {
    return "female";
  } else if (genderMaleInput.checked === true) {
    return "male";
  } else {
    return;
  }
}
function writeInnerHTML(name, age, country, color, gender) {
  userDetailsOutput.innerHTML +=
    `<div class="card me-3" style="width: 18rem; background-color:` +
    color +
    `"><div class="card-header" id="users-name style">Name: ` +
    name +
    `</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="users-age">Age: ` +
    age +
    `</li>
    <li class="list-group-item" id="users-country">Country: ` +
    country +
    `</li>
    <li class="list-group-item" id="users-backgroundColor">You chose this color in hexadecimal: ` +
    color +
    `</li>
    <li class="list-group-item" id="users-gender"> You are a ` +
    gender +
    `</li>
  </ul></div>`;
}
function clearInputs() {
  userNameInput.value = "";
  userAgeInput.value = "";
  userCountryInput.value = "none";
  userColorInput.value = "#000000";
  genderFemaleInput.checked = false;
  genderMaleInput.checked = false;
}
