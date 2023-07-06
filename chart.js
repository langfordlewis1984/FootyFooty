"use strict";

let allPlayerData = [];

function loadItems() {
  let storedData = JSON.parse(localStorage.getItem("allPlayerData"));
  if (storedData) {
    allPlayerData = storedData;
  }
}

loadItems();

console.log(allPlayerData);

const article = document.createElement("article");
container.appendChild(article);

const table = document.createElement("table");
article.appendChild(table);

const headerRow = document.createElement("tr");
table.appendChild(headerRow);

const zeroPoint = document.createElement("th");
headerRow.appendChild(zeroPoint);

const teamText = document.createElement("th");
teamText.textContent = "Team";
headerRow.appendChild(teamText);

const touchesText = document.createElement("th");
touchesText.textContent = "Touches";
headerRow.appendChild(touchesText);

const goalsText = document.createElement("th");
goalsText.textContent = "Goals";
headerRow.appendChild(goalsText);

function renderTable() {
  for (let i = 0; i < allPlayerData.length; i++) {
    const player = allPlayerData[i];

    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    const playerText = document.createElement("th");
    playerText.textContent = player.playerName;
    tableRow.appendChild(playerText);

    const teamName = document.createElement("td");
    teamName.textContent = player.playerTeam;
    tableRow.appendChild(teamName);

    const touchTotal = document.createElement("td");
    touchTotal.textContent = player.playerTouches;
    tableRow.appendChild(touchTotal);

    const goalTotal = document.createElement("td");
    goalTotal.textContent = player.playerScore;
    tableRow.appendChild(goalTotal);
  }
}

renderTable();

let canvasElem = document.getElementById("chart");

Chart.defaults.font.size = "8px";
Chart.defaults.color = "#0c5b2d";

function renderChart() {
  loadChartItems();

  let names = [];
  let touches = [];
  let goals = [];

  // fill labels and data arrays

  for (let i = 0; i < allPlayerData.length; i++) {
    names.push(allPlayerData[i].playerName);
    touches.push(allPlayerData[i].playerTouches);
    goals.push(allPlayerData[i].playerScore);
  }

  //   // set data values

  const data = {
    labels: names,
    datasets: [
      {
        label: "Touches",
        data: touches,
        backgroundColor: ["#015c63"],
        borderColor: ["#ef6c01"],
        borderWidth: 1,
      },
      {
        label: "Goals",
        data: goals,
        backgroundColor: ["#ef6c01"],
        borderColor: ["#015c63"],
        borderWidth: 1,
      },
    ],
  };

  //   // set chart configuration

  const config = {
    type: "bar",
    data: data,
  };

  //   // call chart

  const newChart = new Chart(canvasElem, config);
}

function loadChartItems() {
  let playerNames = [];
  let playerTeams = [];
  let playerTouches = [];
  let playerGoals = [];

  for (let i = 0; i < allPlayerData.length; i++) {
    playerNames.push(allPlayerData[i].playerName);
    playerTeams.push(allPlayerData[i].playerTeam);
    playerTouches.push(allPlayerData[i].playerTouches);
    playerGoals.push(allPlayerData[i].playerScore);
  }
}

renderChart();
