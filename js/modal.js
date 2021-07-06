let start = document.querySelector(".start");
let modal = document.querySelector(".modal__window");
let filter = document.querySelector(".filter");
let inputSS = document.querySelectorAll(".InputStyle");
let submitButton = document.querySelector(".submit__button");
let invalidInput = document.querySelector(".incorrect");

start.onclick = function (visible) {
  modal.style.visibility = "visible";
  filter.style.visibility = "visible";
};
filter.onclick = function (hidden) {
  modal.style.visibility = "hidden";
  filter.style.visibility = "hidden";
  invalidInput.style.visibility = "hidden";
};
for (let inputS of inputSS) {
  inputS.oninput = function (checkInput) {
    if (inputS.value.length <= 10) {
      inputS.style.borderColor = "red";
      submitButton.disabled = true;
    } else {
      inputS.style.borderColor = "green";
      submitButton.disabled = false;
    }
  };
}
for (let inputS of inputSS) {
  inputS.onchange = function (checkChange) {
    if (inputS.value.length <= 10) {
      inputS.style.borderColor = "red";
      submitButton.disabled = true;
      invalidInput.style.visibility = "visible";
    } else {
      inputS.style.borderColor = "green";
      submitButton.disabled = false;
      invalidInput.style.visibility = "hidden";
    }
  };
}
