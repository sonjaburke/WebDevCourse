function clearErrors() {
  for (var loopCounter = 0;
    loopCounter < document.forms["luckysevens"].elements.length;
    loopCounter++) {
    if (document.forms["luckysevens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {

      document.forms["luckysevens"].elements[loopCounter].parentElement.className = "form-group";
    }
  }
}

function validateItems() {
  clearErrors();
  var startingBet = document.forms["luckysevens"]["startingBet"].value;
  if (startingBet == "" || isNaN(startingBet)) {
    alert("Starting Bet must be filled in with a number.");
    document.forms["luckysevens"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["luckysevens"]["startingBet"].focus();
    return false;
  } else if (startingBet <= 0) {
    alert("Starting Bet must be greater than 0.");
    document.forms["luckysevens"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["luckysevens"]["startingBet"].focus();
    return false;
  }
}
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function returnItems() {
  validateItems();
  var startingBet = Number(document.forms["luckysevens"]["startingBet"].value);
  var gameMoney = startingBet;
  var rollArray = new Array();
  var gameMoneyArray = new Array();
  var maxMoney = startingBet;
  var maxRoll = 0;
  for (var roll = 1; gameMoney > 0; roll++) {
    if (rollDice() + rollDice() == 7) {
      gameMoney = gameMoney + 4
    } else {
      gameMoney = gameMoney - 1
    }
    rollArray[rollArray.length] = roll;
    gameMoneyArray[gameMoneyArray.length] = gameMoney;
    if (maxMoney < gameMoneyArray[roll - 1]) {
      maxMoney = gameMoneyArray[roll - 1];
      maxRoll = roll;
      }
    }

  document.getElementById("results").style.display = "block";
  display_startingBet.innerHTML= startingBet;
  document.getElementById("totalrolls").innerText = roll - 1;
  document.getElementById("highestamount").innerText = maxMoney;
  document.getElementById("highrollcount").innerText = maxRoll;
  document.getElementById("submitButton").innerText = "Play Again";
  return false;
}
