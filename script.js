const resultsBoxes = document.getElementById("resultsBoxes");
const keyPressedInfo = document.getElementById("keyPressedInfo");
const eventCodeInfo = document.getElementById("eventCodeInfo");
const charCodeValue = document.getElementById("charCodeValue");

document.addEventListener("keypress", (event) => {
  console.log(event);
  //   keyPressedInfo.textContent = `You pressed: ${event.key}`;
  //   eventCodeInfo.textContent = `Event code: ${event.code}`;
  //   charCodeValue.textContent = `Char Code: ${event.charCode}`;
  keyPressedInfo.textContent = event.key;
  eventCodeInfo.textContent = event.code;
  charCodeValue.textContent = event.charCode;
  resultsBoxes.style.display = "block";
  resultsBoxes.style.display = "flex";
  resultsBoxes.style.textAlign = "center";
});
