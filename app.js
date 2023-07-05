"use strict";

const nameInput = document.getElementById("playerName");

const letsPlay = document.getElementById("letsPlay");
const displayPlayerName = document.getElementById("game-header-name");
const displayPlayerTeam = document.getElementById("team-badge");

let playerData = [];

function Player(playerName, playerTeam) {
  this.playerName = playerName;
  this.playerTeam = playerTeam;
  this.playerTouches = 0;
  this.playerScore = 0;
  this.playerEncounters = 0;
  playerData.push(this);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("playerData", JSON.stringify(playerData));
}

function loadItems() {
  let storedData = JSON.parse(localStorage.getItem("playerData"));
  if (storedData) {
    playerData = storedData;
  }
}

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

  letsPlay.className = "no-entry";
  letsPlay.textContent = "Scroll Down";
  commentary.textContent = "Here We Go! - Click NEW ENCOUNTER!";

  displayPlayerName.textContent = playerName;
  displayPlayerTeam.textContent = playerTeam;

  document.getElementById("newcastle").disabled = true;
  document.getElementById("arsenal").disabled = true;
  document.getElementById("west-ham").disabled = true;

  let newPlayer = new Player(playerName, playerTeam);
  isSelected();

  console.log(playerData);
};

letsPlay.addEventListener("click", handleLetsPlay);

// const myObj = {
//   name: rich,
//   age: 33
// }

// function Person(name, age) {
//   this.name = name,
//   this.age = age
//   sayHi = function() {
//   console.log(`Hi my name is ${this.name}`)
// }
// }

// const rich = new Person(formName.value, formAge.value);

//REINSTANTIATE TYPE OF OBJECT WHEN RETRIEVING DATA FROM STORAGE = PUT IT THROUGH THE CONSTRUCTOR FUNCTION AGAIN
