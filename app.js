"use strict";

const nameInput = document.getElementById("playerName");

const letsPlay = document.getElementById("letsPlay");
const displayPlayerName = document.getElementById("game-header-name");
const displayPlayerTeam = document.getElementById("team-badge");

const playerData = [];

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
    alert("Please pick a team");
  }
}

function Player(playerName, playerTeam) {
  this.playerName = playerName;
  this.playerTeam = playerTeam;
  this.playerTouches = 0;
  this.playerScore = 0;
  playerData.push(this);
}

const handleLetsPlay = function (event) {
  event.preventDefault();
  const playerName = nameInput.value;
  const playerTeam = isSelected();

  //   console.log(playerName, playerTeam);

  displayPlayerName.textContent = playerName;
  displayPlayerTeam.textContent = playerTeam;

  let newPlayer = new Player(playerName, playerTeam);
  //   console.log(newPlayer);
  isSelected();
};

letsPlay.addEventListener("click", handleLetsPlay);
