// variables
const randomNumber_1 = Math.floor(Math.random() * 6 + 1);
const randomNumber_2 = Math.floor(Math.random() * 6 + 1);

// for firstDice
const firstDice = document.getElementsByClassName("img1")[0];
const firstDiceSrc = firstDice.getAttribute("src");
const randomFirstDice = `dice${randomNumber_1}`;
const firstDiceNewSrc = firstDiceSrc.replace(
  /([^/]+)(?=\.[^.]+$)/,
  randomFirstDice
);
const firstDiceImage = firstDice.setAttribute("src", firstDiceNewSrc);

// for secondDice
const secondDice = document.getElementsByClassName("img2")[0];
const secondDiceSrc = secondDice.getAttribute("src");
const randomSecondDice = `dice${randomNumber_2}`;
const secondDiceNewSrc = firstDiceSrc.replace(
  /([^/]+)(?=\.[^.]+$)/,
  randomSecondDice
);
const secondDiceImage = secondDice.setAttribute("src", secondDiceNewSrc);

// to determine the winner
let textTitle = document.getElementsByTagName("h1")[0];

let textPlayer1 = document
  .getElementsByClassName("dice")[0]
  .getElementsByTagName("p")[0].textContent;
let textPlayer2 = document
  .getElementsByClassName("dice")[1]
  .getElementsByTagName("p")[0].textContent;

// condition for winner player
if (randomNumber_1 === randomNumber_2) {
  textTitle.textContent = "Draw";
} else if (randomNumber_1 > randomNumber_2) {
  textTitle.textContent = `${textPlayer1} Wins !`;
} else if (randomNumber_1 < randomNumber_2) {
  textTitle.textContent = `${textPlayer2} Wins !`;
} else {
  console.log("not found . . .");
}
