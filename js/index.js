/// ALL CHRONO ELEMENTS COMMENTED OUT FOR NOW ///

import { textNodes } from "./dialogue.js";
import { states, baseState } from "./states.js";
import { randomExcusesArr } from "./excuses.js";
// import { chronometer } from "./chrono/chrono-index.js";

const characters = [
  "josiane",
  "william",
  "jeanpierre",
  "karim",
  "bernard",
  "samira",
  "alimatou",
];

// INITIALIZE THE GAME (RESET STATES AND START TIMER) ------------ TO BE FIXED ------------
let initialSates = states;
if (window.location.href.includes("index.html")) {
  let resetBtnElement = document.querySelector("#reset");
  resetBtnElement.addEventListener("click", () => {
    localStorage.setItem("currentStates", JSON.stringify(states));
    localStorage.removeItem("popUp", JSON.stringify(popupBoxElement));
    // localStorage.removeItem("time", JSON.stringify(chronometer));
    // chronometer.currentTime = 900;
    // chronometer.start();
  });
}

// LOCAL STORAGE (KEEP TRACK OF CHANGES IN STATES)

let currentState = {};

function updateStates() {
  localStorage.setItem("currentStates", JSON.stringify(currentState));
}

function retrieveStates() {
  const conversion = localStorage.getItem("currentStates");
  if (!conversion) {
    localStorage.setItem("currentStates", JSON.stringify(states));
    currentState = states;
    return;
  }
  currentState = JSON.parse(conversion);
}

// LOCAL STORAGE - DON'T DISPLAY THE INTRO MESSAGE EVERY TIME WE GO BACK ON THE MAIN PAGE

function setSignup() {
  localStorage.setItem("popUp", JSON.stringify(popupBoxElement));
}

function getSignup() {
  const x = localStorage.getItem("popUp");
  if (!x) {
    localStorage.setItem("popUp", JSON.stringify(popupBoxElement));
  } else popupBoxElement.style.display = "none";
}

if (window.location.href.includes("index.html")) {
  window.addEventListener("load", getSignup, updateStates);
}

// DISPLAY INTRO MESSAGE WITH START BTN

// Start Button
const popupBoxElement = document.querySelector("#pop-up");

if (window.location.href.includes("index.html")) {
  const startChronoElement = document.querySelector("#play");
  startChronoElement.addEventListener("click", () => {
    playBtnHandler();
  });
}

function playBtnHandler() {
  popupBoxElement.style.visibility = "hidden";
  // chronometer.start();
  // printTime();
}

// display timer
// const minDecElement = document.getElementById("minDec");
// const minUniElement = document.getElementById("minUni");
// const secDecElement = document.getElementById("secDec");
// const secUniElement = document.getElementById("secUni");

// function printTime() {
//   chronometer.intervalId = setInterval(() => {
//     printMinutes();
//     printSeconds();
//     if (chronometer.currentTime === 0) chronometer.stop();
//   }, 1000);
// }

// function printMinutes() {
//   const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
//   minDecElement.textContent = minutes[0];
//   minUniElement.textContent = minutes[1];
// }

// function printSeconds() {
//   let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
//   secDecElement.textContent = seconds[0];
//   secUniElement.textContent = seconds[1];
// }

// Start each interaction
if (!window.location.href.includes("index.html")) {
  const container = document.querySelector(".answer-text-container");
  const character = container.getAttribute("id");
  retrieveStates();
  // if (currentState[character].isPissed) showTextNode("isPissed");
  // else if (currentState[character].isContacted) showTextNode("isContacted");
  // else if (currentState[character].isConvinced) showTextNode("isConvinced");
  // else if (currentState[character].isIntroduced) {
  //   showTextNode(`${character}.isIntroduced`);
  // } else
  showTextNode(character);
}

// DISPLAY THE INTERACTION WITH CHARACTERS

function showTextNode(textNodeIndex) {
  // get the correct text node's id
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);

  // display the character's line
  const answerContainerElement = document.querySelector(
    ".answer-text-container"
  );
  const lineElement = document.querySelector("#character-line");
  answerContainerElement.appendChild(lineElement);

  // display the options' buttons
  const optionBtnsContainer = document.querySelector("#show-option-btns");
  optionBtnsContainer.innerHTML = "";
  const options = textNode.options;
  console.log(options);

  // display each option's text on the button and add a click event
  options.forEach((option) => {
    const optionBtnElement = document.createElement("button");
    optionBtnElement.className = "option-btn";
    if (option.nextText) {
      optionBtnElement.innerHTML = `${option.text}`;
      lineElement.innerHTML = textNode.text;
    } else {
      optionBtnElement.innerHTML = `<div id="show-option-btns"><a href ='../index.html'>${option.text}</a></div>`;
    }
    optionBtnsContainer.appendChild(optionBtnElement);
    optionBtnElement.addEventListener("click", () => {
      updateStates();
      optionInput(option);
    });
  });
  console.log(currentState);
}

// LISTEN TO THE INPUT FROM PLAYER TO DISPLAY NEXT INTERACTION
function optionInput(option) {
  const textNodeIndex = option.nextText;

  showTextNode(textNodeIndex);
  updateStates();
  // Modify the states based on the option chosen
  if (option.changeState) {
    const changeArr = option.changeState;
    changeArr.forEach((change) => {
      Object.assign(currentState[change.target], change.value);
    });
  }
  randomExcuseBtn();
}

// RANDOM EXCUSE BUTTON
function randomExcuseBtn() {
  const btnsContainerElement = document.querySelector("#show-option-btns");
  const randomExcuseBtn = document.createElement("button");
  randomExcuseBtn.className = "random-excuse";
  randomExcuseBtn.innerHTML = "Générer une excuse bidon et fuire";
  btnsContainerElement.appendChild(randomExcuseBtn);
  randomExcuseBtn.addEventListener("click", () => {
    displayExcuse();
    makeEnnemy();
  });
}

// RANDOM EXCUSE DISPLAY
function displayExcuse() {
  // clear conversation
  const currentConvo = document.querySelector(".answer-text-container");
  const optionBtns = document.querySelector("#show-option-btns");
  currentConvo.innerHTML = "";
  optionBtns.innerHTML = "";

  // display excuse
  const excusesContainerElement = document.querySelector(
    "#random-excuse-container"
  );
  let randomIndex = Math.floor(Math.random() * randomExcusesArr.length);
  let randomExcuse = randomExcusesArr[randomIndex];
  const excuseLine = document.createElement("p");
  excuseLine.className = "excuse-line";
  excuseLine.innerHTML = randomExcuse;
  excusesContainerElement.appendChild(excuseLine);

  // btn to go back home
  const goHomeBtn = document.createElement("button");
  goHomeBtn.className = "go-home";
  excusesContainerElement.appendChild(goHomeBtn);
  goHomeBtn.innerHTML = `<div id="show-option-btns"><a href ='../index.html'>Partez, partez sans vous retourner</a></div>`;
}

// CHANGE CHARACTER'S STATE TO ISPISSED WHEN RANDOM EXCUSE IS USED
function makeEnnemy() {
  // get who we launch the excuse on
  const container = document.querySelector(".answer-text-container");
  const character = container.getAttribute("id");
  // change this person's state
  currentState[character].isPissed = true;
  updateStates();
}

// Music on/off -- A FINIR --- CHANGER LE SON EN FONCTION DES PERSONNAGES ---- LOOP
const musicBtnElement = document.querySelector("#sound-btn");
musicBtnElement.addEventListener("click", playPause);
const audio = document.querySelector(".audio");

function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
  audio.currentTime = 0;
}

// END OF GAME LOGIC

// check if the player has talked to everyone
if (window.location.href.includes("index.html")) {
  const displayResult = document.querySelector("#check-result");
  displayResult.addEventListener("click", countContacts);
}

function countContacts() {
  retrieveStates();
  const contacted = characters.filter(
    (character) => currentState[character].isContacted
  );
  if (contacted.length === characters.length) {
    getResult();
  } else {
    alert("Bien tenté, mais tu as encore du boulot");
  }
}

// COUNT THE POINTS BASED ON THE CURRENT STATES
const playerPoints = () => {
  const convinced = characters.filter(
    (character) => currentState[character].isConvinced
  );
  const bringsFriends = characters.filter(
    (character) => currentState[character].bringsFriends
  );
  const pissed = characters.filter(
    (character) => currentState[character].isPissed
  );
  let total = convinced.length * 5 + bringsFriends.length - pissed.length;
  console.log(convinced, bringsFriends, pissed);
  return total;
};

// GENERATE A RANDOM RESULT FOR THE OPPONENT
const opponentPoints = () => {
  let result = Math.floor(Math.random() * 32);
  return result;
};

// COMPARE OPPONENT AND PLAYER AND DISPLAY RESULT

function getResult() {
  const resultsContainerElement = document.querySelector("#display-result");
  const resultsTextElement = document.createElement("p");
  resultsTextElement.className = "results-text";
  resultsContainerElement.appendChild(resultsTextElement);

  if (playerPoints >= opponentPoints) {
    resultsTextElement.textContent =
      "Bravo, votre coalition est formée ! Vous êtes désoramis la bête noire des autorités";
  } else {
    resultsTextElement.textContent =
      "On dirait que vous vous êtes attaqués à un trop gros poisson... Commencez peut-être par mettre de l'ordre dans votre vie ?";
  }
  console.log(resultsContainerElement);
}

// TO DO
// check bugs in interactions
// make sure the end game logic works
// display sentences one after the other + settimeout for button
// Sounds: loop, one for each page
// REFACTOR... Initalize const in the global scope, refactor the showtextnode function
// style, sound, responsive, fonts, img...

// typemachine effect *************** BROKEN
// let i = 0;
// var speed = 30; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < textNode.text.length) {
//     lineElement.innerHTML += textNode.text.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter();
// export { displayResult };
