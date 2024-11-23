let dustCount = 0;
let dustPerSecond = 0;

// DOM Elements
const dustCountElement = document.getElementById("dust-count");
const dustPerSecondElement = document.getElementById("dust-per-second");
const collectButton = document.getElementById("collect-button");
const buyMickeyHatButton = document.getElementById("buy-mickey-hat");

// Collect Pixie Dust
collectButton.addEventListener("click", () => {
  dustCount++;
  updateUI();
});

// Buy Mickey's Sorcerer Hat
buyMickeyHatButton.addEventListener("click", () => {
  if (dustCount >= 10) {
    dustCount -= 10;
    dustPerSecond += 1;
    buyMickeyHatButton.disabled = true; // Limit to one purchase for now
    updateUI();
  }
});

// Update UI
function updateUI() {
  dustCountElement.textContent = dustCount;
  dustPerSecondElement.textContent = dustPerSecond;
}

// Automate Dust Generation
setInterval(() => {
  dustCount += dustPerSecond;
  updateUI();
}, 1000);
