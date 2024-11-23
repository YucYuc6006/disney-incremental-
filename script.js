let dustCount = 0;
let dustPerSecond = 0;
let inventory = {
  mickeyHat: 0,
  vanellopeKart: 0,
  geniesLamp: 0,
  lightningMcQueen: 0,
  elsasCastle: 0,
  mauisFishHook: 0
};

// DOM Elements
const dustCountElement = document.getElementById("dust-count");
const dustPerSecondElement = document.getElementById("dust-per-second");
const collectButton = document.getElementById("collect-button");

// Upgrade buttons
const buyMickeyHatButton = document.getElementById("buy-mickeys-hat");
const buyVanellopeKartButton = document.getElementById("buy-vanellopes-kart");
const buyGeniesLampButton = document.getElementById("buy-genies-lamp");
const buyLightningMcQueenButton = document.getElementById("buy-lightning-mcqueen");
const buyElsasCastleButton = document.getElementById("buy-elsas-castle");
const buyMauisFishHookButton = document.getElementById("buy-mauis-fish-hook");

// Collect Pixie Dust
collectButton.addEventListener("click", () => {
  dustCount++;
  updateUI();
});

// Buy Upgrades
buyMickeyHatButton.addEventListener("click", () => {
  if (dustCount >= 10) {
    dustCount -= 10;
    inventory.mickeyHat++;
    dustPerSecond++;
    updateUI();
  }
});

buyVanellopeKartButton.addEventListener("click", () => {
  if (dustCount >= 50) {
    dustCount -= 50;
    inventory.vanellopeKart++;
    dustPerSecond += 2;
    updateUI();
  }
});

buyGeniesLampButton.addEventListener("click", () => {
  if (dustCount >= 500) {
    dustCount -= 500;
    inventory.geniesLamp++;
    dustPerSecond += 5;
    updateUI();
  }
});

buyLightningMcQueenButton.addEventListener("click", () => {
  if (dustCount >= 750) {
    dustCount -= 750;
    inventory.lightningMcQueen++;
    dustPerSecond *= 2;
    updateUI();
  }
});

buyElsasCastleButton.addEventListener("click", () => {
  if (dustCount >= 200) {
    dustCount -= 200;
    inventory.elsasCastle++;
    dustPerSecond += 10;
    updateUI();
  }
});

buyMauisFishHookButton.addEventListener("click", () => {
  if (dustCount >= 1000) {
    dustCount -= 1000;
    inventory.mauisFishHook++;
    dustPerSecond *= 2;
    updateUI();
  }
});

// Update UI
function updateUI() {
  dustCountElement.textContent = dustCount;
  dustPerSecondElement.textContent = dustPerSecond;

  // Update Inventory display
  document.getElementById("mickey-hat-count").textContent = inventory.mickeyHat;
  document.getElementById("vanellope-kart-count").textContent = inventory.vanellopeKart;
  document.getElementById("genies-lamp-count").textContent = inventory.geniesLamp;
  document.getElementById("lightning-mcqueen-count").textContent = inventory.lightningMcQueen;
  document.getElementById("elsas-castle-count").textContent = inventory.elsasCastle;
  document.getElementById("mauis-fish-hook-count").textContent = inventory.mauisFishHook;
}

// Auto-collect Pixie Dust per second
setInterval(() => {
  dustCount += dustPerSecond;
  updateUI();
}, 1000);
