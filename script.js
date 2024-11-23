// Game Variables
let dustCount = 0;
let dustPerSecond = 0;

// Upgrade Costs and Status
const upgrades = {
  mickeyHat: { cost: 10, purchased: false, name: "Mickey's Sorcerer Hat" },
  vanellopeKart: { cost: 50, purchased: false, name: "Vanellope's Candy Kart" },
  elsaCastle: { cost: 200, purchased: false, name: "Elsa's Ice Castle" },
  genieLamp: { cost: 500, purchased: false, name: "Genie's Lamp" },
  lightningBoost: { cost: 750, purchased: false, name: "Lightning McQueen's Nitro Boost" },
  mauiHook: { cost: 1000, purchased: false, name: "Maui's Fish Hook" }
};

// DOM Elements
const dustCountElement = document.getElementById("dust-count");
const dustPerSecondElement = document.getElementById("dust-per-second");
const collectButton = document.getElementById("collect-button");
const buyMickeyHatButton = document.getElementById("buy-mickey-hat");
const buyVanellopeKartButton = document.getElementById("buy-vanellope-kart");
const buyElsaCastleButton = document.getElementById("buy-elsa-castle");
const buyGenieLampButton = document.getElementById("buy-genie-lamp");
const buyLightningBoostButton = document.getElementById("buy-lightning-boost");
const buyMauiHookButton = document.getElementById("buy-maui-hook");
const inventoryList = document.getElementById("inventory-list");

// Collect Pixie Dust
collectButton.addEventListener("click", () => {
  dustCount++;
  updateUI();
});

// Purchase Function
function purchaseUpgrade(upgradeKey, buttonElement, effect) {
  const upgrade = upgrades[upgradeKey];
  if (dustCount >= upgrade.cost && !upgrade.purchased) {
    dustCount -= upgrade.cost;
    upgrade.purchased = true;
    buttonElement.textContent = "Purchased"; // Updates button text
    buttonElement.disabled = true; // Disables the button after purchase

    // Apply the upgrade effect
    effect();

    // Add to inventory
    addToInventory(upgrade.name);

    updateUI();
  }
}

// Add Upgrade to Inventory
function addToInventory(upgradeName) {
  const listItem = document.createElement("li");
  listItem.textContent = upgradeName; // Adds the name of the purchased upgrade
  inventoryList.appendChild(listItem); // Appends it to the inventory list
}

// Upgrades
buyMickeyHatButton.addEventListener("click", () =>
  purchaseUpgrade("mickeyHat", buyMickeyHatButton, () => (dustPerSecond += 1))
);

buyVanellopeKartButton.addEventListener("click", () =>
  purchaseUpgrade("vanellopeKart", buyVanellopeKartButton, () =>
    collectButton.addEventListener("click", () => (dustCount += 1))
  )
);

buyElsaCastleButton.addEventListener("click", () =>
  purchaseUpgrade("elsaCastle", buyElsaCastleButton, () => (dustPerSecond *= 1.5))
);

buyGenieLampButton.addEventListener("click", () =>
  purchaseUpgrade("genieLamp", buyGenieLampButton, () => {
    setInterval(() => {
      const randomBonus = Math.floor(Math.random() * 100) + 50; // Random bonus between 50-150
      dustCount += randomBonus;
      alert(`Genie granted you ${randomBonus} Pixie Dust!`);
      updateUI();
    }, 30000); // Grants bonus every 30 seconds
  })
);

buyLightningBoostButton.addEventListener("click", () =>
  purchaseUpgrade("lightningBoost", buyLightningBoostButton, () => {
    setInterval(() => {
      let boostActive = true;
      collectButton.addEventListener("click", () => {
        if (boostActive) dustCount += 4; // Adds +5 total per click
      });
      setTimeout(() => (boostActive = false), 10000); // Lasts 10 seconds
    }, 60000); // Activates every 60 seconds
  })
);

buyMauiHookButton.addEventListener("click", () =>
  purchaseUpgrade("mauiHook", buyMauiHookButton, () => (dustPerSecond += 5))
);

// Update UI
function updateUI() {
  dustCountElement.textContent = dustCount;
  dustPerSecondElement.textContent = dustPerSecond;

  // Enable/Disable Buttons
  buyMickeyHatButton.disabled = dustCount < upgrades.mickeyHat.cost || upgrades.mickeyHat.purchased;
  buyVanellopeKartButton.disabled = dustCount < upgrades.vanellopeKart.cost || upgrades.vanellopeKart.purchased;
  buyElsaCastleButton.disabled = dustCount < upgrades.elsaCastle.cost || upgrades.elsaCastle.purchased;
  buyGenieLampButton.disabled = dustCount < upgrades.genieLamp.cost || upgrades.genieLamp.purchased;
  buyLightningBoostButton.disabled = dustCount < upgrades.lightningBoost.cost || upgrades.lightningBoost.purchased;
  buyMauiHookButton.disabled = dustCount < upgrades.mauiHook.cost || upgrades.mauiHook.purchased;
}

// Automate Dust Generation
setInterval(() => {
  dustCount += dustPerSecond;
  updateUI();
}, 1000);
