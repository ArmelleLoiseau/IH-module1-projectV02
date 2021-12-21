/// ALL CHRONO ELEMENTS COMMENTED OUT FOR NOW ///

import { textNodes } from "./dialogue.js";
import { states, baseState } from "./states.js";
import { randomExcusesArr } from "./excuses.js";
import { chronometer } from "./chrono/chrono-index.js";

const characters = [
  "josiane",
  "william",
  "jeanpierre",
  "karim",
  "bernard",
  "samira",
  "alimatou",
];

// some global variables
const mainContainerElement = document.querySelector("#main-container");
const homeElement = document.querySelector("#home-page");
const charactersElements = document.querySelectorAll(".characters");
const startElement = document.querySelector("#start");
const playerElement = document.querySelector("#player");
const instructionsElement = document.querySelector("#instructions");

// player icon following the mouse
document.addEventListener("mousemove", function (e) {
  let x = e.clientX + 100;
  let y = e.clientY + 100;
  playerElement.style.left = x + "px";
  playerElement.style.top = y + "px";
});

// Start Button
startElement.addEventListener("click", () => {
  chronometer.start();
  printTime();
  instructionsElement.style.visibility = "hidden";
});

// display timer
const minDecElement = document.getElementById("minDec");
const minUniElement = document.getElementById("minUni");
const secDecElement = document.getElementById("secDec");
const secUniElement = document.getElementById("secUni");

function printTime() {
  chronometer.intervalId = setInterval(() => {
    printMinutes();
    printSeconds();
    if (chronometer.currentTime === 0) {
      chronometer.stop();
      console.log("over");
      getResult();
    }
  }, 1000);
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// Start each interaction => on click, check the state
charactersElements.forEach((charElement) => {
  charElement.addEventListener("click", (e) => {
    let currentChar = e.target.getAttribute("id");
    checkstate(currentChar);
  });
});

// choose which interaction to display based on the character's state
function checkstate(character) {
  displayDialogueLayout();
  const characterStates = Object.values(states[character]);

  if (characterStates[3]) showTextNode("isPissed");
  else if (characterStates[2]) showTextNode("isConvinced");
  else if (characterStates[1]) {
    showTextNode(character + `.isIntroduced`);
  } else if (characterStates[0]) showTextNode("isContacted");
  else {
    showTextNode(character);
    let currentChar = document.createElement("div");
    currentChar.id = character;
    currentChar.classList.add("character");
    mainContainerElement.appendChild(currentChar);
  }
}

// DISPLAY THE INTERACTION WITH CHARACTERS
function displayDialogueLayout() {
  mainContainerElement.innerHTML = "";
  let newDialogue = document.createElement("div");
  newDialogue.classList.add("dialogue");
  newDialogue.innerHTML = `<div class="answer-text-container">
  <p id="character-line"></p>
  </div>
  <div class="input-container">
  <div id="show-option-btns"></div>
  <div id="random-excuse-container"></div>
  </div>`;
  mainContainerElement.appendChild(newDialogue);
}

function showTextNode(textNodeIndex) {
  // get the correct text node's id
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);

  // lineElement.innerHTML += textNode.text + "<hr>";
  const answerContainerElement = document.querySelector(
    ".answer-text-container"
  );
  // answerContainerElement.appendChild(lineElement);

  // display the character's line
  const newlineElement = document.createElement("p");
  newlineElement.classList.add("character-line");

  answerContainerElement.appendChild(newlineElement);
  answerContainerElement.scrollTop = answerContainerElement.scrollHeight;
  const typeWriter = new Typewriter(newlineElement, {
    strings: textNode.text + `<hr>`,
    autoStart: true,
    delay: 30,
  });

  answerContainerElement.scrollTop = answerContainerElement.scrollHeight;
  // display the options' buttons
  const optionBtnsContainer = document.querySelector("#show-option-btns");
  optionBtnsContainer.innerHTML = "";
  const options = textNode.options;

  // display each option's text on the button and add a click event
  options.forEach((option) => {
    const optionBtnElement = document.createElement("button");
    optionBtnElement.className = "option-btn";
    if (option.nextText) {
      optionBtnElement.innerHTML = `${option.text}`;
    } else {
      optionBtnElement.innerHTML = `Retour à la case départ`;
      optionBtnElement.addEventListener("click", goBackHome);
    }
    optionBtnsContainer.appendChild(optionBtnElement);
    optionBtnElement.addEventListener("click", () => {
      // const lineElement = document.querySelector("#character-line");
      newlineElement.innerHTML += `<i>${option.text}</i><hr>`;
      optionInput(option);
    });
  });
}

// Click btn that gets you back on home page
function goBackHome() {
  mainContainerElement.innerHTML = "";
  mainContainerElement.appendChild(homeElement);
  colorIcons();
}

function colorIcons() {
  charactersElements.forEach((character) => {
    let id = character.querySelector("p");
    let charName = id.getAttribute("id");

    if (states[charName].isPissed) {
      character.classList.add("isPissed");
    } else if (states[charName].isConvinced) {
      character.classList.add("isConvinced");
    } else if (states[charName].isContacted) {
      character.classList.add("isContacted");
    }
  });
}

// LISTEN TO THE INPUT FROM PLAYER TO DISPLAY NEXT INTERACTION
function optionInput(option) {
  const textNodeIndex = option.nextText;

  if (!option.nextText) {
    return;
  }
  showTextNode(textNodeIndex);

  // Modify the states based on the option chosen and impact the icons on the home page
  if (option.changeState) {
    const changeArr = option.changeState;
    changeArr.forEach((change) => {
      Object.assign(states[change.target], change.value);
    });
  }

  randomExcuseBtn();
}

// RANDOM EXCUSE BUTTON
function randomExcuseBtn() {
  const btnsContainerElement = document.querySelector("#show-option-btns");
  const randomExcuseBtn = document.createElement("button");
  randomExcuseBtn.className = "random-excuse";
  randomExcuseBtn.innerHTML = "Générer une excuse bidon et fuir";
  btnsContainerElement.appendChild(randomExcuseBtn);
  randomExcuseBtn.addEventListener("click", () => {
    displayExcuse();
    makeEnnemy();
  });
}

// RANDOM EXCUSE DISPLAY
function displayExcuse() {
  // clear optionsBtns
  const optionBtns = document.querySelector("#show-option-btns");
  optionBtns.innerHTML = "";

  // display excuse
  let randomIndex = Math.floor(Math.random() * randomExcusesArr.length);
  let randomExcuse = randomExcusesArr[randomIndex];
  // const lineElement = document.querySelector("#character-line");
  // lineElement.innerHTML += `<i>${randomExcuse}</i><hr>`;
  const newlineElement = document.createElement("p");
  newlineElement.classList.add("character-line");
  newlineElement.innerHTML += `<i>${randomExcuse}</i><hr>`;
  const answerContainerElement = document.querySelector(
    ".answer-text-container"
  );
  answerContainerElement.appendChild(newlineElement);
  answerContainerElement.scrollTop = answerContainerElement.scrollHeight;

  // btn to go back home
  const goHomeBtn = document.createElement("button");
  goHomeBtn.className = "go-home";
  optionBtns.appendChild(goHomeBtn);
  goHomeBtn.innerHTML = `Partez, partez sans vous retourner`;
  goHomeBtn.addEventListener("click", goBackHome);
}

// CHANGE CHARACTER'S STATE TO ISPISSED WHEN RANDOM EXCUSE IS USED
function makeEnnemy() {
  // get who we launch the excuse on
  const ennemy = document.querySelector(".character");
  let character = ennemy.getAttribute("id");
  // change this person's state
  states[character].isPissed = true;
}

// Music on/off -- A FINIR --- CHANGER LE SON EN FONCTION DES PERSONNAGES ---- LOOP
const musicBtnElement = document.querySelector("#sound-btn");
musicBtnElement.addEventListener("click", playPause);
const audio = document.querySelector(".audio");
// audio.loop = true;

function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
  audio.currentTime = 0;
}

// END OF GAME LOGIC

// COUNT THE POINTS BASED ON THE CURRENT STATES
const playerPoints = () => {
  const convinced = characters.filter(
    (character) => states[character].isConvinced
  );
  const bringsFriends = characters.filter(
    (character) => states[character].bringsFriends
  );
  const pissed = characters.filter((character) => states[character].isPissed);
  let total = convinced.length * 5 + bringsFriends.length - pissed.length;
  return total;
};

// GENERATE A RANDOM RESULT FOR THE OPPONENT
const opponentPoints = () => {
  let result = Math.floor(Math.random() * 20);
  return result;
};

// COMPARE OPPONENT AND PLAYER AND DISPLAY RESULT

function getResult() {
  const resultContainer = document.createElement("div");
  resultContainer.className = "display-popup";
  mainContainerElement.appendChild(resultContainer);
  const titleElement = document.createElement("h1");
  titleElement.classList.add("title-timesup");
  titleElement.textContent =
    "Le temps presse ! Il est l'heure de faire le bilan...";
  resultContainer.appendChild(titleElement);
  const resultsTextElement = document.createElement("p");
  resultsTextElement.className = "results-text";
  resultContainer.appendChild(resultsTextElement);

  if (playerPoints >= opponentPoints) {
    resultsTextElement.textContent = `Bravo, votre coalition est formée ! Vous êtes désoramis la bête noire des autorités`;
  } else {
    resultsTextElement.textContent = `On dirait que vous vous êtes attaqués à un trop gros poisson... Perdu ! Commencez peut-être par mettre de l'ordre dans votre vie ?`;
  }

  const restartBtn = document.createElement("button");
  restartBtn.classList.add("restart-btn");
  restartBtn.textContent = "Retentez votre chance";

  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });
  resultContainer.appendChild(restartBtn);
}

// TO DO
// afficher les boites de dialogue en typewriter
// compter points et afficher résultat quand compteur à zero

// rendre btns inclickable tant qu'on a pas cliqué sur play
// faire partir le timer à 15:00
// racourcir les echanges et rajouter un personnage
// faire en sorte que les options btns ne repousse pas la boite de dialogue vers le haut
// Btn restart
// responsive
