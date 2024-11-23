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

// Collect Pixie Dust
document.getElementById('collect-button').addEventListener('click', () => {
  pixieDust++;
  updateUI();
});

// Handle inventory toggle
document.getElementById('inventory-toggle').addEventListener('click', () => {
  const inventoryDiv = document.getElementById('inventory');
  inventoryDiv.style.display = inventoryDiv.style.display === 'none' ? 'block' : 'none';
  document.getElementById('inventory-toggle').textContent = 
    inventoryDiv.style.display === 'none' ? 'Show Inventory' : 'Hide Inventory';
});

// Handle upgrade purchases
document.querySelectorAll('.upgrade-button').forEach(button => {
  button.addEventListener('click', () => {
    const upgradeName = button.getAttribute('data-upgrade');
    const price = upgradePrices[upgradeName];

    if (pixieDust >= price) {
      pixieDust -= price;
      dustPerSecond += calculateDustPerSecond(upgradeName);
      inventory[upgradeName]++;
      upgradePrices[upgradeName] = Math.floor(price * 1.5); // Increase price by 1.5x

      // Update button text with new price
      button.textContent = `Buy ${upgradeName} (✨${upgradePrices[upgradeName]})`;

      updateUI();
    }
  });
});

// Calculate additional Dust Per Second (DPS) for each upgrade
function calculateDustPerSecond(upgradeName) {
  switch (upgradeName) {
    case "Mickey's Hat":
      return 1;
    case "Vanellope's Kart":
      return 2;
    case "Genie's Lamp":
      return 5;
    case "Lightning McQueen":
      return dustPerSecond; // Doubles the current dust per second
    case "Elsa's Castle":
      return 10;
    case "Maui's Fish Hook":
      return dustPerSecond; // Doubles the current dust per second
    default:
      return 0;
  }
}

// Update the UI (Pixie Dust, DPS, Inventory)
function updateUI() {
  // Update Pixie Dust and Dust Per Second display
  document.getElementById('dust-count').textContent = pixieDust;
  document.getElementById('dust-per-second').textContent = dustPerSecond;

  // Update inventory counts
  document.getElementById('mickeys-hat-count').textContent = inventory["Mickey's Hat"];
  document.getElementById('vanellopes-kart-count').textContent = inventory["Vanellope's Kart"];
  document.getElementById('genies-lamp-count').textContent = inventory["Genie's Lamp"];
  document.getElementById('lightning-mcqueen-count').textContent = inventory["Lightning McQueen"];
  document.getElementById('elsas-castle-count').textContent = inventory["Elsa's Castle"];
  document.getElementById('mauis-fish-hook-count').textContent = inventory["Maui's Fish Hook"];
}

// Automatically collect Pixie Dust per second
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
