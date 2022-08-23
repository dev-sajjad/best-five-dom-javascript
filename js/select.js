// list of buttons
const buttons = document.getElementsByClassName("btn");

// empty array for count player number
const playerArray = [];

// set evetnt listener on every button
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    const playerName = findPlayerName(event);

    playerArray.push(playerName);

    const orderList = document.getElementById("player-list");

    // create li by js
    const li = document.createElement("li");
    li.innerText = playerName;
    li.setAttribute("class", "mt-3");
    li.setAttribute("class", "p-3");

    // condition 
    if (playerArray.length > 5) {
      alert('Oops! You can not select more than 5 players!')
      playerArray.pop();
    } else {
      orderList.appendChild(li);
      // button disable 
      event.target.setAttribute("disabled", "true");
    }
  });
}
