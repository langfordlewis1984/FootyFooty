"use strict";

const buttonContainer = document.querySelector("section .button-container");

const passBtn = document.getElementById("button-one");
const shootBtn = document.getElementById("button-two");
const dribbleBtn = document.getElementById("button-three");
const newEncounterBtn = document.getElementById("new-encounter");
const leagueButton = document.getElementById("league-button");

let commentary = document.getElementById("commentary");

let currentEncounter = 0;
const totalEncounters = 5;

function getRandomDefenders() {
  return Math.floor(Math.random() * 3);
}

function getRandomTeammates() {
  return Math.floor(Math.random() * 2);
}

let currentPlayerIndex = 0;

function passBtnClick() {
  let outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Pass outcome:", outcome);

  if (outcome === "Success") {
    commentary.textContent = "Good Pass!";
    allPlayerData[currentPlayerIndex].playerTouches++;
    console.log(allPlayerData);
    saveToLocalStorage(allPlayerData);
  } else {
    commentary.textContent = "Ooooohhh, stray ball. Out of play";
    console.log(allPlayerData);
  }
  disableButtons();
  newEncounterBtn.addEventListener("click", handleEncounterClick);
}

function shootBtnClick() {
  let outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Shoot outcome:", outcome);

  if (outcome === "Success") {
    commentary.textContent = "GGOOOOAAALLL!!";
    allPlayerData[currentPlayerIndex].playerTouches++;
    allPlayerData[currentPlayerIndex].playerScore++;
    console.log(allPlayerData);
    saveToLocalStorage(allPlayerData);
  } else {
    commentary.textContent = "Ooooohhh, missed the target!" || "Keeper Saves!";
    console.log(allPlayerData);
  }

  disableButtons();
  newEncounterBtn.addEventListener("click", handleEncounterClick);
}

function dribbleBtnClick() {
  let outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Dribble outcome:", outcome);

  if (outcome === "Success") {
    commentary.textContent = "Bang Tidy Skills!";
    allPlayerData[currentPlayerIndex].playerTouches++;
    console.log(allPlayerData);
    saveToLocalStorage(allPlayerData);
  } else {
    commentary.textContent = "Tackled!";
    console.log(allPlayerData);
  }

  disableButtons();
  newEncounterBtn.addEventListener("click", handleEncounterClick);
}

function handleEncounterClick() {
  console.log("newEncounterClicked");
  console.log(currentEncounter);
  const defenders = getRandomDefenders();
  const teammates = getRandomTeammates();
  const encounterElement = document.getElementById("play-window");

  if (currentEncounter < totalEncounters) {
    currentEncounter++;

    encounterElement.textContent = `Defenders: ${defenders}, Teammates: ${teammates}`;
    commentary.textContent = "choose an option below";
    enableButtons();
    newEncounterBtn.removeEventListener("click", handleEncounterClick);
  } else {
    newEncounterBtn.removeEventListener("click", handleEncounterClick);
    disableButtons();
    encounterElement.textContent = "OUT OF ENCOUNTERS";
    commentary.textContent =
      "You are out of retries!\nCheck out the results in the league!";
    newEncounterBtn.removeEventListener("click", handleEncounterClick);
    refresh.addEventListener("click", handleRefresh);
  }
}

function enableButtons() {
  passBtn.addEventListener("click", passBtnClick);
  shootBtn.addEventListener("click", shootBtnClick);
  dribbleBtn.addEventListener("click", dribbleBtnClick);
}

function disableButtons() {
  passBtn.removeEventListener("click", passBtnClick);
  shootBtn.removeEventListener("click", shootBtnClick);
  dribbleBtn.removeEventListener("click", dribbleBtnClick);
}
