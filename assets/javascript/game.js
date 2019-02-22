var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; // array to push user choices to
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]; //list of letters to choose from
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];
function countGuessesLeft() {
  document.querySelector("#Guesses-left").innerHTML =
    "Guesses Left: " + guessesLeft;
}
function GuessesSoFar() {
  document.querySelector("#your-guesses").innerHTML =
    "Your Guesses so far: " + guessesSoFar.join(" ");
}
var waitingForRestart = false;
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");

countGuessesLeft();

var restart = function() {
  computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesLeft = 9;
  guessesSoFar = [];
};

document.onkeyup = function(event) {
  if (waitingForRestart == true) {
    waitingForRestart = false;
    restart();
    userChoiceText.textContent =
      "You chose to play again! Guess what letter I have chosen";
    document.querySelector("#Total-Wins").innerHTML = "Wins: " + wins;
    document.querySelector("#Total-losses").innerHTML = "Loses: " + losses;
    countGuessesLeft();
    GuessesSoFar();
    document.getElementById("restart-text").innerText = "";
    return;
  }

  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessesSoFar.push(userGuess);
  GuessesSoFar();
  countGuessesLeft();
  if (userGuess == computerGuess) {
    wins++;
    document.querySelector("#Total-Wins").innerHTML = "Wins: " + wins;
    waitingForRestart = true;
    // restart();
    document.getElementById("restart-text").innerText =
      "You Won ! Press any key to play again";
  } else if (guessesLeft === 0) {
    losses++;
    document.querySelector("#Total-losses").innerHTML = "Loses: " + losses;
    waitingForRestart = true;
    // restart();
    document.getElementById("restart-text").innerText =
      "You Lost ! Press any key to play again";
  }

  userChoiceText.textContent = "You chose: " + userGuess;
  // computerChoiceText.textContent = "The computer chose: " + computerGuess;
};
