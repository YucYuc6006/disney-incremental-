let pixieDust = 0;
let dustPerSecond = 0;
let inventory = {
  "Mickey's Sorcerers Hat": 0,
  "Vanellope's Kart": 0,
  "Genie's Lamp": 0,
  "Lightning McQueen": 0,
  "Elsa's Castle": 0,
  "Maui's Fish Hook": 0,
};

let upgradePrices = {
  "Mickey's Sorcerers Hat": 10,
  "Vanellope's Kart": 50,
  "Genie's Lamp": 500,
  "Lightning McQueen": 750,
  "Elsa's Castle": 1000,
  "Maui's Fish Hook": 2000,
};

document.getElementById("collect-button").addEventListener("click", () => {
  pixieDust++;
  updateUI();
});

document.getElementById("inventory-toggle").addEventListener("click", () => {
  const inventoryDiv = document.getElementById("inventory");
  inventoryDiv.style.display =
    inventoryDiv.style.display === "none" ? "block" : "none";
  document.getElementById("inventory-toggle").textContent =
    inventoryDiv.style.display === "none" ? "Show Inventory" : "Hide Inventory";
});

document.querySelectorAll(".upgrade-button").forEach((button) => {
  button.addEventListener("click", () => {
    const upgradeName = button.getAttribute("data-upgrade");
    const price = upgradePrices[upgradeName];

    if (pixieDust >= price) {
      pixieDust -= price;
      dustPerSecond += calculateDustPerSecond(upgradeName);
      inventory[upgradeName]++;
      upgradePrices[upgradeName] = Math.floor(price * 1.5);
      button.textContent = `Buy ${upgradeName} (✨${upgradePrices[upgradeName]})`;

      updateUI();
    }
  });
});

function calculateDustPerSecond(upgradeName) {
  switch (upgradeName) {
    case "Mickey's Sorcerers Hat":
      return 1;
    case "Vanellope's Kart":
      return 2;
    case "Genie's Lamp":
      return 5;
    case "Lightning McQueen":
      return dustPerSecond;
    case "Elsa's Castle":
      return 10;
    case "Maui's Fish Hook":
      return dustPerSecond;
    default:
      return 0;
  }
}

function updateUI() {
  document.getElementById("dust-count").textContent = pixieDust;
  document.getElementById("dust-per-second").textContent = dustPerSecond;
  document.getElementById("mickeys-hat-count").textContent =
    inventory["Mickey's Sorcerers Hat"];
  document.getElementById("vanellopes-kart-count").textContent =
    inventory["Vanellope's Kart"];
  document.getElementById("genies-lamp-count").textContent =
    inventory["Genie's Lamp"];
  document.getElementById("lightning-mcqueen-count").textContent =
    inventory["Lightning McQueen"];
  document.getElementById("elsas-castle-count").textContent =
    inventory["Elsa's Castle"];
  document.getElementById("mauis-fish-hook-count").textContent =
    inventory["Maui's Fish Hook"];
}

setInterval(() => {
  pixieDust += dustPerSecond;
  updateUI();
}, 1000);

function adjustTooltipPosition(buttonElement) {
  const tooltip = buttonElement.querySelector(".tooltip");
  const buttonRect = buttonElement.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (buttonRect.right + tooltip.offsetWidth > viewportWidth) {
    buttonElement.classList.add("left");
    buttonElement.classList.remove("right");
  } else {
    buttonElement.classList.add("right");
    buttonElement.classList.remove("left");
  }

  if (buttonRect.bottom + tooltip.offsetHeight > viewportHeight) {
    buttonElement.classList.add("top");
    buttonElement.classList.remove("bottom");
  } else {
    buttonElement.classList.add("bottom");
    buttonElement.classList.remove("top");
  }
}

window.addEventListener("resize", () => {
  const upgradeButtons = document.querySelectorAll(".upgrade-button");
  upgradeButtons.forEach(adjustTooltipPosition);
});

document.addEventListener("DOMContentLoaded", () => {
  const upgradeButtons = document.querySelectorAll(".upgrade-button");
  upgradeButtons.forEach(adjustTooltipPosition);
});
