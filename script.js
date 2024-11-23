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

// Inventory Toggle Button
const inventoryToggleButton = document.getElementById("inventory-toggle");
const inventorySection = document.getElementById("inventory");

// Prices
const prices = {
  mickeyHat: 10,
  vanellopeKart: 50,
  geniesLamp: 500,
  lightningMcQueen: 750,
  elsasCastle: 1000,
  mauisFishHook: 2000
};

// Collect Pixie Dust
collectButton.addEventListener("click", () => {
  dustCount++;
  updateUI();
});

// Buy Upgrades
buyMickeyHatButton.addEventListener("click", () => {
  if (dustCount >= prices.mickeyHat) {
    dustCount -= prices.mickeyHat;
    inventory.mickeyHat++;
    dustPerSecond++;
    prices.mickeyHat = Math.round(prices.mickeyHat * 1.5); // Increase price by 1.5x
    updateUI();
  }
});

buyVanellopeKartButton.addEventListener("click", () => {
  if (dustCount >= prices.vanellopeKart) {
    dustCount -= prices.vanellopeKart;
    inventory.vanellopeKart++;
    dustPerSecond += 2;
    prices.vanellopeKart = Math.round(prices.vanellopeKart * 1.5); // Increase price by 1.5x
    updateUI();
  }
});

buyGeniesLampButton.addEventListener("click", () => {
  if (dustCount >= prices.geniesLamp) {
    dustCount -= prices.geniesLamp;
    inventory.geniesLamp++;
    dustPerSecond += 5;
    prices.geniesLamp = Math.round(prices.geniesLamp * 1.5); // Increase price by 1.5x
    updateUI();
  }
});

buyLightningMcQueenButton.addEventListener("click", () => {
  if (dustCount >= prices.lightningMcQueen) {
    dustCount -= prices.lightningMcQueen;
    inventory.lightningMcQueen++;
    dustPerSecond *= 2;
    prices.lightningMcQueen = Math.round(prices.lightningMcQueen * 1.5); // Increase price by 1.5x
    updateUI();
  }
});

buyElsasCastleButton.addEventListener("click", () => {
  if (dustCount >= prices.elsasCastle) {
    dustCount -= prices.elsasCastle;
    inventory.elsasCastle++;
    dustPerSecond += 10;
    prices.elsasCastle = Math.round(prices.elsasCastle * 1.5); // Increase price by 1.5x
    updateUI();
  }
});

buyMauisFishHookButton.addEventListener("click", () => {
  if (dustCount >= prices.mauisFishHook) {
    dustCount -= prices.mauisFishHook;
    inventory.mauisFishHook++;
    dustPerSecond *= 2;
    prices.mauisFishHook = Math.round(prices.mauisFishHook * 1.5); // Increase price by 1.5x
    updateUI();
  }
});

// Toggle Inventory Visibility
inventoryToggleButton.addEventListener("click", () => {
  const isVisible = inventorySection.style.display === "block";
  inventorySection.style.display = isVisible ? "none" : "block";
  inventoryToggleButton.textContent = isVisible ? "Show Inventory" : "Hide Inventory";
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

// Adjust tooltips' positions dynamically
function adjustTooltipPosition(buttonElement) {
  const tooltip = buttonElement.querySelector('.tooltip');
  const buttonRect = buttonElement.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (buttonRect.right + tooltip.offsetWidth > viewportWidth) {
    buttonElement.classList.add('left');
    buttonElement.classList.remove('right');
  } else {
    buttonElement.classList.add('right');
    buttonElement.classList.remove('left');
  }

  if (buttonRect.bottom + tooltip.offsetHeight > viewportHeight) {
    buttonElement.classList.add('top');
    buttonElement.classList.remove('bottom');
  } else {
    buttonElement.classList.add('bottom');
    buttonElement.classList.remove('top');
  }
}

// Adjust tooltips on resize
window.addEventListener('resize', () => {
  const upgradeButtons = document.querySelectorAll('.upgrade-button');
  upgradeButtons.forEach(adjustTooltipPosition);
});

// Adjust tooltips on page load
document.addEventListener('DOMContentLoaded', () => {
  const upgradeButtons = document.querySelectorAll('.upgrade-button');
  upgradeButtons.forEach(adjustTooltipPosition);
});
