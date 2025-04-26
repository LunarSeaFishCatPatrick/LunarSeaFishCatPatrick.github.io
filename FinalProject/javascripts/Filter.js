const allElementsButton = document.getElementById("allElementsButton");
const pyroButton = document.getElementById("pyroButton");
const cryoButton = document.getElementById("cryoButton");
const hydroButton = document.getElementById("hydroButton");
const electroButton = document.getElementById("electroButton");
const anemoButton = document.getElementById("anemoButton");
const geoButton = document.getElementById("geoButton");
const dendroButton = document.getElementById("dendroButton");

const allWeaponsButton = document.getElementById("allWeaponsButton");
const swordButton = document.getElementById("swordButton");
const claymoreButton = document.getElementById("claymoreButton");
const bowButton = document.getElementById("bowButton");
const polearmButton = document.getElementById("polearmButton");
const catalystButton = document.getElementById("catalystButton");

const characters = document.querySelectorAll(".character");

let activeElementFilter = "all";
let activeWeaponFilter = "all";

function filterCharacters() {
  characters.forEach((character) => {
    const element = character.getAttribute("data-element");
    const weapon = character.getAttribute("data-weapon");

    if (
      (activeElementFilter === "all" || element === activeElementFilter) &&
      (activeWeaponFilter === "all" || weapon === activeWeaponFilter)
    ) {
      character.style.display = "block";
    } else {
      character.style.display = "none";
    }
  });
}

function setActiveButtonWithColor(buttons, selectedButton, elementType) {
  buttons.forEach((button) =>
    button.classList.remove(
      "active",
      "pyro",
      "cryo",
      "hydro",
      "electro",
      "anemo",
      "geo",
      "dendro"
    )
  );
  selectedButton.classList.add("active", elementType);
}

function updateWeaponButtonColors(elementType) {
  weaponButtons.forEach((button) => {
    button.classList.remove(
      "pyro",
      "cryo",
      "hydro",
      "electro",
      "anemo",
      "geo",
      "dendro",
      "all"
    );

    if (elementType) {
      button.classList.add(elementType);
    }
  });
}

const elementButtons = [
  allElementsButton,
  pyroButton,
  cryoButton,
  hydroButton,
  electroButton,
  anemoButton,
  geoButton,
  dendroButton,
];

allElementsButton.onclick = function () {
  activeElementFilter = "all";
  setActiveButtonWithColor(elementButtons, allElementsButton, "all");

  updateWeaponButtonColors("all");

  filterCharacters();
};

pyroButton.onclick = function () {
  activeElementFilter = "pyro";
  setActiveButtonWithColor(elementButtons, pyroButton, "pyro");
  updateWeaponButtonColors("pyro");
  filterCharacters();
};

cryoButton.onclick = function () {
  activeElementFilter = "cryo";
  setActiveButtonWithColor(elementButtons, cryoButton, "cryo");
  updateWeaponButtonColors("cryo");
  filterCharacters();
};

hydroButton.onclick = function () {
  activeElementFilter = "hydro";
  setActiveButtonWithColor(elementButtons, hydroButton, "hydro");
  updateWeaponButtonColors("hydro");
  filterCharacters();
};

electroButton.onclick = function () {
  activeElementFilter = "electro";
  setActiveButtonWithColor(elementButtons, electroButton, "electro");
  updateWeaponButtonColors("electro");
  filterCharacters();
};

anemoButton.onclick = function () {
  activeElementFilter = "anemo";
  setActiveButtonWithColor(elementButtons, anemoButton, "anemo");
  updateWeaponButtonColors("anemo");
  filterCharacters();
};

geoButton.onclick = function () {
  activeElementFilter = "geo";
  setActiveButtonWithColor(elementButtons, geoButton, "geo");
  updateWeaponButtonColors("geo");
  filterCharacters();
};

dendroButton.onclick = function () {
  activeElementFilter = "dendro";
  setActiveButtonWithColor(elementButtons, dendroButton, "dendro");
  updateWeaponButtonColors("dendro");
  filterCharacters();
};

function setActiveWeaponButton(buttons, selectedButton) {
  buttons.forEach((button) => button.classList.remove("active"));
  selectedButton.classList.add("active");
}

const weaponButtons = [
  allWeaponsButton,
  swordButton,
  claymoreButton,
  bowButton,
  polearmButton,
  catalystButton,
];

allWeaponsButton.onclick = function () {
  activeWeaponFilter = "all";
  setActiveWeaponButton(weaponButtons, allWeaponsButton);

  filterCharacters();
};

swordButton.onclick = function () {
  activeWeaponFilter = "sword";
  setActiveWeaponButton(weaponButtons, swordButton);
  filterCharacters();
};

claymoreButton.onclick = function () {
  activeWeaponFilter = "claymore";
  setActiveWeaponButton(weaponButtons, claymoreButton);
  filterCharacters();
};

bowButton.onclick = function () {
  activeWeaponFilter = "bow";
  setActiveWeaponButton(weaponButtons, bowButton);
  filterCharacters();
};

polearmButton.onclick = function () {
  activeWeaponFilter = "polearm";
  setActiveWeaponButton(weaponButtons, polearmButton);
  filterCharacters();
};

catalystButton.onclick = function () {
  activeWeaponFilter = "catalyst";
  setActiveWeaponButton(weaponButtons, catalystButton);
  filterCharacters();
};

setActiveButtonWithColor(elementButtons, allElementsButton, "all");
setActiveWeaponButton(weaponButtons, allWeaponsButton);
updateWeaponButtonColors("all");

filterCharacters();

const searchInput = document.getElementById("characterSearch");
const characterCards = document.querySelectorAll(".character");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  characterCards.forEach((card) => {
    const name = card
      .querySelector(".character-name")
      .textContent.toLowerCase();
    card.style.display = name.includes(searchTerm) ? "block" : "none";
  });
});
