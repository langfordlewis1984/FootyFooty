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

newEncounterBtn.addEventListener("click", handleEncounterClick);

function passBtnClick() {
  let outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Pass outcome:", outcome);

  if (outcome === "Success") {
    commentary.textContent = "Good Pass!";
    playerData[0].playerTouches++;
    console.log(playerData);
    dribbleBtn.removeEventListener("click", dribbleBtnClick);
    shootBtn.removeEventListener("click", shootBtnClick);
    passBtn.removeEventListener("click", passBtnClick);
    newEncounterBtn.addEventListener("click", handleEncounterClick);
  } else {
    commentary.textContent = "Ooooohhh, stray ball. Out of play";
    console.log(playerData);
    dribbleBtn.removeEventListener("click", dribbleBtnClick);
    shootBtn.removeEventListener("click", shootBtnClick);
    passBtn.removeEventListener("click", passBtnClick);
    newEncounterBtn.addEventListener("click", handleEncounterClick);
  }
}

function shootBtnClick() {
  let outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Shoot outcome:", outcome);

  if (outcome === "Success") {
    commentary.textContent = "GGOOOOAAALLL!!";
    playerData[0].playerScore++;
    console.log(playerData);
    dribbleBtn.removeEventListener("click", dribbleBtnClick);
    shootBtn.removeEventListener("click", shootBtnClick);
    passBtn.removeEventListener("click", passBtnClick);
    newEncounterBtn.addEventListener("click", handleEncounterClick);
  } else {
    commentary.textContent = "Ooooohhh, missed the target!" || "Keeper Saves!";
    console.log(playerData);
    dribbleBtn.removeEventListener("click", dribbleBtnClick);
    shootBtn.removeEventListener("click", shootBtnClick);
    passBtn.removeEventListener("click", passBtnClick);
    newEncounterBtn.addEventListener("click", handleEncounterClick);
  }
}

function dribbleBtnClick() {
  let outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Dribble outcome:", outcome);

  if (outcome === "Success") {
    commentary.textContent = "Bang Tidy Skills!";
    playerData[0].playerTouches++;

    console.log(playerData);
    dribbleBtn.removeEventListener("click", dribbleBtnClick);
    shootBtn.removeEventListener("click", shootBtnClick);
    passBtn.removeEventListener("click", passBtnClick);
    newEncounterBtn.addEventListener("click", handleEncounterClick);
  } else {
    commentary.textContent = "Tackled!";
    console.log(playerData);
    dribbleBtn.removeEventListener("click", dribbleBtnClick);
    shootBtn.removeEventListener("click", shootBtnClick);
    passBtn.removeEventListener("click", passBtnClick);
    newEncounterBtn.addEventListener("click", handleEncounterClick);
  }
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
    loadItems(playerData);
    chooseOption();
    newEncounterBtn.removeEventListener("click", handleEncounterClick);
  } else {
    saveToLocalStorage(playerData);
    newEncounterBtn.removeEventListener("click", handleEncounterClick);
    passBtn.removeEventListener("click", passBtnClick);
    shootBtn.removeEventListener("click", shootBtnClick);
    dribbleBtn.removeEventListener("click", dribbleBtnClick);
    // leagueButton.addEventListener("click", handleLeagueClick);
    encounterElement.textContent = "OUT OF ENCOUNTERS";
    commentary.textContent =
      "You are out of retries!\nCheck out the results in the league!";
    newEncounterBtn.removeEventListener("click", handleEncounterClick);
  }
}

// function handleLeagueClick() {
//   const goToLeaguePage = document.getElementById("league-button").onclick = function(){href=league.html

// }

function chooseOption() {
  passBtn.addEventListener("click", passBtnClick);

  shootBtn.addEventListener("click", shootBtnClick);

  dribbleBtn.addEventListener("click", dribbleBtnClick);
}

//inside a function where playerData exists console.log(playerData[0].playerTouches);

//update playerdata each time
