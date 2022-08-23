// function for findplayer
function findPlayerName(event) {
  const playerName = event.target.parentNode.parentNode.children[0].innerText;
  return playerName;
}

// get text element value by id 
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId)
  const textElementValue = parseInt(textElement.innerText);

  return textElementValue;
}

// // get input element value by id 
function getInputElementValue(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputElementValue = parseInt(inputElement.value)

  return inputElementValue; 
}

// set text element value by Id
function setTextElementValue(elementId, value) {
  const textElement = document.getElementById(elementId)
  textElement.innerText = value;
}