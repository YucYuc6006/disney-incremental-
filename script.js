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

  // Enable/disable Mickey's Hat button based on Pixie Dust count
  if (dustCount >= 10 && buyMickeyHatButton.disabled === false) {
    buyMickeyHatButton.disabled = false;
  } else if (dustCount < 10 && buyMickeyHatButton.disabled === false) {
    buyMickeyHatButton.disabled = true;
  }
}

// Automate Dust Generation
setInterval(() => {
  dustCount += dustPerSecond;
  updateUI();
}, 1000);
