
const plant = document.getElementById("plant");
const plantStatus = document.getElementById("plant-status");
const plantBubble = document.getElementById("plant-bubble");
const waterLevelSpan = document.getElementById("water-level");
const sunlightLevelSpan = document.getElementById("sunlight-level");
const fertilizerLevelSpan = document.getElementById("fertilizer-level");

let waterLevel = 0;
let sunlightLevel = 0;
let fertilizerLevel = 0;

function waterPlant() {
waterLevel++;
updateLevels();
plantStatus.textContent = "You watered the plant! ";
plantBubble.textContent = "Thanks for the water! ";
}

function fertilizePlant() {
fertilizerLevel++;
updateLevels();
plantStatus.textContent = "You gave the plant fertilizer! ";
plantBubble.textContent = "Yummy nutrients! ";
}

function openWindows() {
sunlightLevel++;
updateLevels();
plantStatus.textContent = "You opened the windows for sunlight! ";
plantBubble.textContent = "Ahh, I love the sun! ";
}

function updateLevels() {
waterLevelSpan.textContent = waterLevel;
sunlightLevelSpan.textContent = sunlightLevel;
fertilizerLevelSpan.textContent = fertilizerLevel;

if (waterLevel >= 5 && sunlightLevel >= 5 && fertilizerLevel >= 5) {
plant.src = "(link unavailable)";
plantStatus.textContent = "Your plant is thriving! ";
plantBubble.textContent = "I'm so happy! ";
} else if (waterLevel >= 3 && sunlightLevel >= 3 && fertilizerLevel >= 3) {
plant.src = "(link unavailable)";
plantStatus.textContent = "Your plant looks happy! ";
plantBubble.textContent = "Keep up the good work! ";
} else {
plant.src = "(link unavailable)";
plantStatus.textContent = "Your plant needs care. ";
plantBubble.textContent = "I need more love. ";
}
}

updateLevels();