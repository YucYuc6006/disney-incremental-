let dustCount = 0;
let dustPerSecond = 0;

// Inventory to track the number of upgrades purchased
let inventory = {
  mickeyHat: 0,
  vanellopeKart: 0,
  geniesLamp: 0,
  lightningMcQueen: 0,
  elsasCastle: 0,
  mauisFishHook: 0
};

// Original prices for each upgrade (these values will increase by 1.5x after each purchase)
let mickeyHatPrice = 10;
let vanellopeKartPrice = 50;
let geniesLampPrice = 500;
let lightningMcQueenPrice = 750;
let elsasCastlePrice = 1000;
let mauisFishHookPrice = 2000;

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

// Inventory Toggle Button
const inventoryToggleButton = document.getElementById("inventory-toggle");
const inventorySection = document.getElementById("inventory");

// Collect Pixie Dust
collectButton.addEventListener("click", () => {
  dustCount++;
  updateUI();
});

// Buy Upgrades with increasing prices
buyMickeyHatButton.addEventListener("click", () => {
  if (dustCount >= mickeyHatPrice) {
    dustCount -= mickeyHatPrice;
    inventory.mickeyHat++;
    dustPerSecond++;
    mickeyHatPrice = Math.ceil(mickeyHatPrice * 1.5);  // Increase price by 1.5x
    updateUI();
  }
});

buyVanellopeKartButton.addEventListener("click", () => {
  if (dustCount >= vanellopeKartPrice) {
    dustCount -= vanellopeKartPrice;
    inventory.vanellopeKart++;
    dustPerSecond += 2;
    vanellopeKartPrice = Math.ceil(vanellopeKartPrice * 1.5);  // Increase price by 1.5x
    updateUI();
  }
});

buyGeniesLampButton.addEventListener("click", () => {
  if (dustCount >= geniesLampPrice) {
    dustCount -= geniesLampPrice;
    inventory.geniesLamp++;
    dustPerSecond += 5;
    geniesLampPrice = Math.ceil(geniesLampPrice * 1.5);  // Increase price by 1.5x
    updateUI();
  }
});

buyLightningMcQueenButton.addEventListener("click", () => {
  if (dustCount >= lightningMcQueenPrice) {
    dustCount -= lightningMcQueenPrice;
    inventory.lightningMcQueen++;
    dustPerSecond *= 2;
    lightningMcQueenPrice = Math.ceil(lightningMcQueenPrice * 1.5);  // Increase price by 1.5x
    updateUI();
  }
});

buyElsasCastleButton.addEventListener("click", () => {
  if (dustCount >= elsasCastlePrice) {
    dustCount -= elsasCastlePrice;
    inventory.elsasCastle++;
    dustPerSecond += 10;
    elsasCastlePrice = Math.ceil(elsasCastlePrice * 1.5);  // Increase price by 1.5x
    updateUI();
  }
});

buyMauisFishHookButton.addEventListener("click", () => {
  if (dustCount >= mauisFishHookPrice) {
    dustCount -= mauisFishHookPrice;
    inventory.mauisFishHook++;
    dustPerSecond *= 2;
    mauisFishHookPrice = Math.ceil(mauisFishHookPrice * 1.5);  // Increase price by 1.5x
    updateUI();
  }
});

// Toggle Inventory Visibility
inventoryToggleButton.addEventListener("click", () => {
  const isVisible = inventorySection.style.display === "block";
  inventorySection.style.display = isVisible ? "none" : "block";
  inventoryToggleButton.textContent = isVisible ? "Show Inventory" : "Hide Inventory";
});

// Update UI (display dust count, upgrades, and prices)
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

  // Update button text to show the current price
  buyMickeyHatButton.textContent = `Buy Mickey's Hat ($${mickeyHatPrice})`;
  buyVanellopeKartButton.textContent = `Buy Vanellope's Kart ($${vanellopeKartPrice})`;
  buyGeniesLampButton.textContent = `Buy Genie's Lamp ($${geniesLampPrice})`;
  buyLightningMcQueenButton.textContent = `Buy Lightning McQueen ($${lightningMcQueenPrice})`;
  buyElsasCastleButton.textContent = `Buy Elsa's Castle ($${elsasCastlePrice})`;
  buyMauisFishHookButton.textContent = `Buy Maui's Fish Hook ($${mauisFishHookPrice})`;

  // Enable/disable the buttons based on available Pixie Dust
  buyMickeyHatButton.disabled = dustCount < mickeyHatPrice;
  buyVanellopeKartButton.disabled = dustCount < vanellopeKartPrice;
  buyGeniesLampButton.disabled = dustCount < geniesLampPrice;
  buyLightningMcQueenButton.disabled = dustCount < lightningMcQueenPrice;
  buyElsasCastleButton.disabled = dustCount < elsasCastlePrice;
  buyMauisFishHookButton.disabled = dustCount < mauisFishHookPrice;
}

// Auto-collect Pixie Dust per second
setInterval(() => {
  dustCount += dustPerSecond;
  updateUI();
}, 1000);
