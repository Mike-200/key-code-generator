const instructions = document.getElementById("instructions");
const resultsBoxes = document.getElementById("resultsBoxes");
const eventCodeInfo = document.getElementById("eventCodeInfo");
const keyPressedInfo = document.getElementById("keyPressedInfo");
const charCodeValue = document.getElementById("charCodeValue");
const clearScreen = document.getElementById("clearScreen");

document.addEventListener("keypress", (event) => {
  // console.log(event);
  //   keyPressedInfo.textContent = `You pressed: ${event.key}`;
  //   eventCodeInfo.textContent = `Event code: ${event.code}`;
  //   charCodeValue.textContent = `Char Code: ${event.charCode}`;
  instructions.textContent = `You pressed: ${event.key}`;
  //   instructions.style.color="red"
  eventCodeInfo.textContent = event.code;
  eventCodeInfo.style.width = "175px";
  keyPressedInfo.textContent = event.key;
  keyPressedInfo.style.width = "175px";
  charCodeValue.textContent = event.charCode;
  charCodeValue.style.width = "175px";
  resultsBoxes.style.display = "block";
  resultsBoxes.style.display = "flex";
  resultsBoxes.style.justifyContent = "space-evenly";
  resultsBoxes.style.textAlign = "center";
  resultsBoxes.style.padding = "50px";
  eventCodeInfo.style.color = "red";
  keyPressedInfo.style.color = "red";
  charCodeValue.style.color = "red";
  clearScreen.style.display = "block";
  clearScreen.style.margin = "auto";
});

document.addEventListener("click", () => {
  // Is there a way to set the textContent back to the original settng ?
  // ie the default value
  instructions.textContent =
    "Press any key to get the Javascript key code info";
  resultsBoxes.style.display = "none";
  clearScreen.style.display = "none";
});
