let dustCount = 0;
let dustPerSecond = 0;

// Item prices (starting prices)
let mickeyHatPrice = 10;
let vanellopePrice = 15;
let wreckItRalphPrice = 20; // Example price for another upgrade
let donaldDuckPrice = 25;  // Example price for another upgrade
let frozenUpgradePrice = 30; // Example price for another upgrade
let toyStoryPrice = 40; // Example price for another upgrade

// Current prices (to be adjusted by 1.5x after each purchase)
let currentMickeyHatPrice = mickeyHatPrice;
let currentVanellopePrice = vanellopePrice;
let currentWreckItRalphPrice = wreckItRalphPrice;
let currentDonaldDuckPrice = donaldDuckPrice;
let currentFrozenUpgradePrice = frozenUpgradePrice;
let currentToyStoryPrice = toyStoryPrice;

// DOM Elements
const dustCountElement = document.getElementById("dust-count");
const dustPerSecondElement = document.getElementById("dust-per-second");
const collectButton = document.getElementById("collect-button");
const buyMickeyHatButton = document.getElementById("buy-mickey-hat");
const buyVanellopeButton = document.getElementById("buy-vanellope");
const buyWreckItRalphButton = document.getElementById("buy-wreck-it-ralph");
const buyDonaldDuckButton = document.getElementById("buy-donald-duck");
const buyFrozenUpgradeButton = document.getElementById("buy-frozen-upgrade");
const buyToyStoryButton = document.getElementById("buy-toy-story");

// Collect Pixie Dust
collectButton.addEventListener("click", () => {
  dustCount++;
  updateUI();
});

// Buy Mickey's Sorcerer Hat
buyMickeyHatButton.addEventListener("click", () => {
  if (dustCount >= currentMickeyHatPrice) {
    dustCount -= currentMickeyHatPrice;
    dustPerSecond += 1;
    currentMickeyHatPrice = Math.ceil(mickeyHatPrice * Math.pow(1.5, 1)); // Increase price by 1.5x
    buyMickeyHatButton.textContent = `Purchased!`; // Change the button text
    buyMickeyHatButton.disabled = true; // Disable the button after purchase
    updateUI();
  }
});

// Buy Vanellope's Upgrade
buyVanellopeButton.addEventListener("click", () => {
  if (dustCount >= currentVanellopePrice) {
    dustCount -= currentVanellopePrice;
    dustPerSecond += 2;
    currentVanellopePrice = Math.ceil(vanellopePrice * Math.pow(1.5, 1)); // Increase price by 1.5x
    buyVanellopeButton.textContent = `Purchased!`; // Change the button text
    buyVanellopeButton.disabled = true; // Disable the button after purchase
    updateUI();
  }
});

// Buy Wreck-It Ralph's Upgrade
buyWreckItRalphButton.addEventListener("click", () => {
  if (dustCount >= currentWreckItRalphPrice) {
    dustCount -= currentWreckItRalphPrice;
    dustPerSecond += 3; // Example of a different effect
    currentWreckItRalphPrice = Math.ceil(wreckItRalphPrice * Math.pow(1.5, 1)); // Increase price by 1.5x
    buyWreckItRalphButton.textContent = `Purchased!`; // Change the button text
    buyWreckItRalphButton.disabled = true; // Disable the button after purchase
    updateUI();
  }
});

// Buy Donald Duck's Upgrade
buyDonaldDuckButton.addEventListener("click", () => {
  if (dustCount >= currentDonaldDuckPrice) {
    dustCount -= currentDonaldDuckPrice;
    dustPerSecond += 4; // Example of a different effect
    currentDonaldDuckPrice = Math.ceil(donaldDuckPrice * Math.pow(1.5, 1)); // Increase price by 1.5x
    buyDonaldDuckButton.textContent = `Purchased!`; // Change the button text
    buyDonaldDuckButton.disabled = true; // Disable the button after purchase
    updateUI();
  }
});

// Buy Frozen Upgrade
buyFrozenUpgradeButton.addEventListener("click", () => {
  if (dustCount >= currentFrozenUpgradePrice) {
    dustCount -= currentFrozenUpgradePrice;
    dustPerSecond += 5; // Example of a different effect
    currentFrozenUpgradePrice = Math.ceil(frozenUpgradePrice * Math.pow(1.5, 1)); // Increase price by 1.5x
    buyFrozenUpgradeButton.textContent = `Purchased!`; // Change the button text
    buyFrozenUpgradeButton.disabled = true; // Disable the button after purchase
    updateUI();
  }
});

// Buy Toy Story Upgrade
buyToyStoryButton.addEventListener("click", () => {
  if (dustCount >= currentToyStoryPrice) {
    dustCount -= currentToyStoryPrice;
    dustPerSecond += 6; // Example of a different effect
    currentToyStoryPrice = Math.ceil(toyStoryPrice * Math.pow(1.5, 1)); // Increase price by 1.5x
    buyToyStoryButton.textContent = `Purchased!`; // Change the button text
    buyToyStoryButton.disabled = true; // Disable the button after purchase
    updateUI();
  }
});

// Update UI
function updateUI() {
  dustCountElement.textContent = dustCount;
  dustPerSecondElement.textContent = dustPerSecond;

  // Update prices on the buttons
  buyMickeyHatButton.textContent = `Buy Mickey's Hat ($${currentMickeyHatPrice})`;
  buyVanellopeButton.textContent = `Buy Vanellope's Upgrade ($${currentVanellopePrice})`;
  buyWreckItRalphButton.textContent = `Buy Wreck-It Ralph's Upgrade ($${currentWreckItRalphPrice})`;
  buyDonaldDuckButton.textContent = `Buy Donald Duck's Upgrade ($${currentDonaldDuckPrice})`;
  buyFrozenUpgradeButton.textContent = `Buy Frozen Upgrade ($${currentFrozenUpgradePrice})`;
  buyToyStoryButton.textContent = `Buy Toy Story Upgrade ($${currentToyStoryPrice})`;

  // Enable/disable the buttons based on available Pixie Dust
  buyMickeyHatButton.disabled = dustCount < currentMickeyHatPrice;
  buyVanellopeButton.disabled = dustCount < currentVanellopePrice;
  buyWreckItRalphButton.disabled = dustCount < currentWreckItRalphPrice;
  buyDonaldDuckButton.disabled = dustCount < currentDonaldDuckPrice;
  buyFrozenUpgradeButton.disabled = dustCount < currentFrozenUpgradePrice;
  buyToyStoryButton.disabled = dustCount < currentToyStoryPrice;
}

// Automate Dust Generation
setInterval(() => {
  dustCount += dustPerSecond;
  updateUI();
}, 1000);
