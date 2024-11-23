// Game state variables
let pixieDust = 0;
let dustPerSecond = 0;
let inventory = {
  "Mickey's Hat": 0,
  "Vanellope's Kart": 0,
  "Genie's Lamp": 0,
  "Lightning McQueen": 0,
  "Elsa's Castle": 0,
  "Maui's Fish Hook": 0
};

// Upgrade prices
let upgradePrices = {
  "Mickey's Hat": 10,
  "Vanellope's Kart": 50,
  "Genie's Lamp": 500,
  "Lightning McQueen": 750,
  "Elsa's Castle": 1000,
  "Maui's Fish Hook": 2000
};

// DOM Elements
const pixieDustElement = document.getElementById('dust-count');
const dustPerSecondElement = document.getElementById('dust-per-second');
const collectButton = document.getElementById('collect-button');
const inventoryToggleButton = document.getElementById('inventory-toggle');
const inventorySection = document.getElementById('inventory');

// Collect Pixie Dust button functionality
collectButton.addEventListener('click', () => {
  pixieDust++;
  updateUI();
});

// Handle inventory toggle
inventoryToggleButton.addEventListener('click', () => {
  const isVisible = inventorySection.style.display === 'block';
  inventorySection.style.display = isVisible ? 'none' : 'block';
  inventoryToggleButton.textContent = isVisible ? 'Show Inventory' : 'Hide Inventory';
});

// Upgrade buttons functionality
document.querySelectorAll('.upgrade-button').forEach(button => {
  button.addEventListener('click', () => {
    const upgradeName = button.getAttribute('data-upgrade');
    const price = upgradePrices[upgradeName];

    if (pixieDust >= price) {
      pixieDust -= price;
      const dustIncrease = calculateDustPerSecond(upgradeName);

      // Handle upgrades that double the current dust per second
      if (upgradeName === "Lightning McQueen" || upgradeName === "Maui's Fish Hook") {
        dustPerSecond *= 2;
      } else {
        dustPerSecond += dustIncrease;
      }

      inventory[upgradeName]++;
      upgradePrices[upgradeName] = Math.floor(price * 1.5); // Increment price by 1.5x

      // Update UI
      updateUI();
      button.textContent = `${upgradeName} (✨${upgradePrices[upgradeName]})`;
    }
  });
});

// Calculate dust per second for an upgrade
function calculateDustPerSecond(upgradeName) {
  switch (upgradeName) {
    case "Mickey's Hat": return 1;
    case "Vanellope's Kart": return 2;
    case "Genie's Lamp": return 5;
    case "Elsa's Castle": return 10;
    default: return 0;
  }
}

// Update UI
function updateUI() {
  pixieDustElement.textContent = pixieDust;
  dustPerSecondElement.textContent = dustPerSecond;

  // Update inventory counts
  for (let item in inventory) {
    const itemElement = document.getElementById(`${item.toLowerCase().replace(/ /g, '-')}-count`);
    if (itemElement) {
      itemElement.textContent = inventory[item];
    }
  }
}

// Auto-collect Pixie Dust per second
setInterval(() => {
  pixieDust += dustPerSecond;
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
