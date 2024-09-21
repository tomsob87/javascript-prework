var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

let playerScoreCount = 0;
let = playerScore = document.getElementById('player-score');
let computerScoreCount = 0;
let computerScore = document.getElementById('computer-score');

let trophyLeftValue = 50;
const trophyLeftChange = 8;
const trophy = document.getElementById('trophy');

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

  /**
   * Przypisanie ID move do jego nazwy
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  /**
   * Wyświetlenie wyniku
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerScoreCount++;
      playerScore.innerHTML = playerScoreCount;
      console.log('Aktualny wynik gracza to ' + playerScoreCount);
      trophyLeftValue = trophyLeftValue - trophyLeftChange;
      trophy.style.left = trophyLeftValue + "%";
      console.log("Aktualny stan left dla trophy to " + trophyLeftValue);
     } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      playerScoreCount++;
      playerScore.innerHTML = playerScoreCount;
      console.log('Aktualny wynik gracza to ' + playerScoreCount);
      trophyLeftValue = trophyLeftValue - trophyLeftChange;
      trophy.style.left = trophyLeftValue + "%";
      console.log("Aktualny stan left dla trophy to " + trophyLeftValue);
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      playerScoreCount++;
      playerScore.innerHTML = playerScoreCount;
      console.log('Aktualny wynik gracza to ' + playerScoreCount);
      trophyLeftValue = trophyLeftValue - trophyLeftChange;
      trophy.style.left = trophyLeftValue + "%";
      console.log("Aktualny stan left dla trophy to " + trophyLeftValue);
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerScoreCount++;
      computerScore.innerHTML = computerScoreCount;
      console.log('Aktualny wynik komputera to ' + computerScoreCount);
      trophyLeftValue = trophyLeftValue + trophyLeftChange;
      trophy.style.left = trophyLeftValue + "%";
      console.log("Aktualny stan left dla trophy to " + trophyLeftValue);
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

//Click Counter script start here
let count = 0;
let disp = document.getElementById('display');

buttonRock.addEventListener('click', function () {
    count++;
    disp.innerHTML = count;
});

buttonPaper.addEventListener('click', function () {
  count++;
  disp.innerHTML = count;
});

buttonScissors.addEventListener('click', function () {
  count++;
  disp.innerHTML = count;
});


