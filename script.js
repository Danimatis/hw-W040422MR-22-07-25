const userNameInput = document.getElementById("name");
const userAgeInput = document.getElementById("age");
const userCountryInput = document.getElementById("country");
const userColorInput = document.getElementById("color");
("users-backgroundColor");
const userDetailsOutput = document.getElementById("bootstrapCard");
const userDetailsOutputNew = userDetailsOutput.lastChild;
// another way to do this function is have return at the end of each function
function clearInputs() {
  userNameInput.value = "";
  userAgeInput.value = "";
  userCountryInput.value = "Israel";
  userColorInput.value = "#000000";
}
function changeCardBackgroundColor() {
  userDetailsOutput.lastChild.style.backgroundColor = userColorInput.value;
}
function displayUserInformationInCard() {
  if (userNameInput.value.length < 2) {
    alert("No Such Thing As A Letter being A Name! Try Again");
    return;
  }
  if (userAgeInput.value <= 0) {
    alert("With Such An Age You Don't Exist Yet");
    return;
  }

  userDetailsOutput.innerHTML +=
    `<div class="card me-3" style="width: 18rem; background-color: color"><div class="card-header" id="users-name style">Name: ` +
    userNameInput.value +
    `</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="users-age">Age: ` +
    userAgeInput.value +
    `</li>
    <li class="list-group-item" id="users-country">Country: ` +
    userCountryInput.value +
    `</li>
    <li class="list-group-item" id="users-backgroundColor">You chose this color in hexadecimal: ` +
    userColorInput.value +
    `</li>
    <li class="list-group-item" id="users-gender"></li>
  </ul></div>`;
  changeCardBackgroundColor();
  clearInputs();
}

// console.dir(document.getElementById("color"));
// console.dir(userDetailsOutput.lastChild);
