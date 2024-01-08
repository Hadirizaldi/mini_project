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
