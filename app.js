"use strict";

const nameInput = document.getElementById("playerName");

const letsPlay = document.getElementById("letsPlay");
const refresh = document.getElementById("refresh");
const displayPlayerName = document.getElementById("game-header-name");
const displayPlayerTeam = document.getElementById("team-badge");

let allPlayerData = [];

function Player(playerName, playerTeam) {
  this.playerName = playerName;
  this.playerTeam = playerTeam;
  this.playerTouches = 0;
  this.playerScore = 0;
  this.playerEncounters = 0;
  this.playerData = [];
  allPlayerData.push(this);
  this.setPlayerTeam = function (team) {
    this.playerTeam = team;
    saveToLocalStorage();
  };
}

function assignPlayerIndex() {
  const playerName = nameInput.value;
  for (let i = 0; i < allPlayerData.length; i++) {
    if (allPlayerData[i].playerName === playerName) {
      currentPlayerIndex = i;
      break;
    }
  }
}

function saveToLocalStorage() {
  localStorage.setItem("allPlayerData", JSON.stringify(allPlayerData));
}

function loadItems() {
  let storedData = JSON.parse(localStorage.getItem("allPlayerData"));
  if (storedData) {
    allPlayerData = storedData;
  }
}

let teamSelectionMade = false;

function isSelected() {
  let newcastle = document.getElementById("newcastle");
  let arsenal = document.getElementById("arsenal");
  let westHam = document.getElementById("west-ham");
  if (newcastle.checked) {
    return "Newcastle";
  } else if (arsenal.checked) {
    return "Arsenal";
  } else if (westHam.checked) {
    return "West Ham";
  } else {
    alert("Please make sure you've entered your name and picked a team!");
  }
}

const handleLetsPlay = function (event) {
  event.preventDefault();
  const playerName = nameInput.value;
  const playerTeam = isSelected();

  letsPlay.removeEventListener("click", handleLetsPlay);

  loadItems(allPlayerData);

  letsPlay.className = "no-entry";
  letsPlay.textContent = "Scroll Down";
  commentary.textContent = "Here We Go! - Click NEW ENCOUNTER!";

  displayPlayerName.textContent = playerName;
  displayPlayerTeam.textContent = playerTeam;

  document.getElementById("newcastle").disabled = true;
  document.getElementById("arsenal").disabled = true;
  document.getElementById("west-ham").disabled = true;

  teamSelectionMade = true;

  let currentPlayer;
  for (let i = 0; i < allPlayerData.length; i++) {
    if (allPlayerData[i].playerName === playerName) {
      currentPlayer = allPlayerData[i];
      break;
    }
  }

  if (!currentPlayer) {
    currentPlayer = new Player(playerName, playerTeam);
  }

  currentPlayer.playerData.push({
    name: playerName,
    team: playerTeam,
    touches: 0,
    score: 0,
    encounters: 0,
  });
  assignPlayerIndex();
  newEncounterBtn.addEventListener("click", handleEncounterClick);

  console.log(allPlayerData);
};

function handleRefresh() {
  window.location.reload();
}

letsPlay.addEventListener("click", handleLetsPlay);
