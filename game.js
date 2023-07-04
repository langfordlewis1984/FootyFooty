"use strict";

const buttonContainer = document.querySelector("section .button-container");

const passBtn = document.getElementById("button-one");
const shootBtn = document.getElementById("button-two");
const dribbleBtn = document.getElementById("button-three");

let commentary = document.getElementById("commentary");

// Initialize counts from local storage

let touchCount = parseInt(localStorage.getItem("touchCount")) || 0;
let scoreCount = parseInt(localStorage.getItem("scoreCount")) || 0;

let encounter = 0;

function getRandomDefenders() {
  return Math.floor(Math.random() * 3);
}

function getRandomTeammates() {
  return Math.floor(Math.random() * 2);
}

function displayEncounter(defenders, teammates) {
  encounter++;
  if (encounter < 5) {
    const encounterElement = document.getElementById("play-window");
    defenders = getRandomDefenders();
    teammates = getRandomTeammates();
    encounterElement.textContent = `Defenders: ${defenders}, Teammates: ${teammates}`;
  } else {
    commentary.textContent = "out of retries, check out the league table!";
  }
}

function firstEncounter() {
  if (encounter === 1) {
    const defenders = getRandomDefenders();
    const teammates = getRandomTeammates();

    displayEncounter(defenders, teammates);
    commentary.textContent = "HERE WE GO!";
  } else {
    displayEncounter();
  }
}

firstEncounter();

passBtn.addEventListener("click", function () {
  if (defenders === 0 && teammates === 0) {
    commentary.textContent = "INTERCEPTED!";
    console.log("Fail: 0 defenders, 0 teammates");
  } else if (defenders === 1 && teammates === 0) {
    commentary.textContent = "INTERCEPTED!";
    console.log("Fail: 1 defender, 0 teammates");
  } else if (defenders === 2 && teammates === 0) {
    commentary.textContent = "INTERCEPTED!";
    console.log("Fail: 2 defenders, 0 teammates");
  } else if (defenders === 0 && teammates === 1) {
    commentary.textContent = "NICE PASS";
    console.log("Success: 0 defenders, 1 teammate");
  } else if (defenders === 1 && teammates === 1) {
    commentary.textContent = "NICE PASS";
    console.log("Success: 1 defender, 1 teammate");
  } else if (defenders === 2 && teammates === 1) {
    commentary.textContent = "INTERCEPTED!";
    console.log("Fail: 2 defenders, 1 teammate");
  }

  touchCount++;

  localStorage.setItem("touchCount", touchCount);

  displayEncounter();
});

shootBtn.addEventListener("click", function () {
  let outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Shoot outcome:", outcome);

  if ((outcome = true)) {
    commentary.textContent = "GOOOOAAALLLL!!!!";
    scoreCount++;
    localStorage.setItem("scoreCount", scoreCount);
  } else {
    commentary.textContent = "Ooooohhh, ya missed";
  }

  touchCount++;

  localStorage.setItem("touchCount", touchCount);

  displayEncounter();
});

dribbleBtn.addEventListener("click", function () {
  if (defenders === 0 && teammates === 0) {
    commentary.textContent = "Oh TIDY!";
    console.log("Success: 0 defenders, 0 teammates");
  } else if (defenders === 1 && teammates === 0) {
    commentary.textContent = "NUTMEG!";
    console.log("Success: 1 defender, 0 teammates");
  } else if (defenders === 2 && teammates === 0) {
    commentary.textContent = "Ouch! Crunched him";
    console.log("Fail: 2 defenders, 0 teammates");
  } else if (defenders === 0 && teammates === 1) {
    commentary.textContent = "Slide tackle sends 'em flying!";
    console.log("Fail: 0 defenders, 1 teammate");
  } else if (defenders === 1 && teammates === 1) {
    commentary.textContent = "Ronaldo up in here!";
    console.log("Success: 1 defender, 1 teammate");
  } else if (defenders === 2 && teammates === 1) {
    commentary.textContent = "Dispossessed!";
    console.log("Fail: 2 defenders, 1 teammate");
  }

  touchCount++;

  localStorage.setItem("touchCount", touchCount);

  displayEncounter();
});
