import { displayResult } from "../index.js";

const chronometer = {
  currentTime: 5,
  intervalId: null,

  start: (callback) => {
    chronometer.intervalId = setInterval(() => {
      if (typeof callback === "function") callback();
      chronometer.currentTime--;
    }, 1000);
  },

  getMinutes: () => {
    return Math.floor(chronometer.currentTime / 60);
  },
  getSeconds: () => {
    return chronometer.currentTime % 60;
  },
  computeTwoDigitNumber: (value) => {
    let result = value.toString();
    if (result.length === 1) result = "0" + result;
    return result;
  },

  stop: () => {
    clearInterval(chronometer.intervalId);
    // add a function here to display result
    displayResult();
  },
};

export { chronometer };
