let raritySelectionField = document.getElementById("rarity-select-field");
let rarityInput = document.getElementById("rarity-input");
rarityInput.value = "Rarity";
let rarityOptions = document.getElementsByClassName("rarity-option");
let list = document.getElementById("rarity-options");
let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");
let attunementDescInput = document.getElementById("attunement-desc-input");
let rarityAttunementOutput = document.getElementById(
  "rarity-attunement-output"
);
let attunementCheckbox = document.getElementById("attunement-input");
let descInput = document.getElementById("description-input");
let descOutput = document.getElementById("description-output");

for (option of rarityOptions) {
  option.onclick = function () {
    rarityInput.innerHTML = this.textContent;
    document.getElementById("rarity-attunement-output").innerHTML =
      rarityInput.textContent;
    list.classList.toggle("hide");
    rarityInput.value = document.getElementById("rarity-input").textContent;
  };
}

rarityInput.onclick = function () {
  list.classList.toggle("hide");
};

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value;
});

attunementCheckbox.addEventListener("change", () => {
  if (attunementCheckbox.checked == true) {
    rarityAttunementOutput.textContent = `${rarityInput.value} (requires attunement)`;
  } else {
    rarityAttunementOutput.textContent = rarityInput.value;
  }
});

attunementDescInput.addEventListener("input", () => {
  if (attunementDescInput.value != "Rarity" || "") {
    rarityAttunementOutput.textContent =
      rarityInput.value + " " + attunementDescInput.value;
  } else if (attuneCheck.checked == "true") {
    rarityAttunementOutput.textContent =
      rarityInput.value + " (requires attunement)";
  } else {
    rarityAttunementOutput.textContent = rarityInput.value;
  }
});

descInput.addEventListener("input", () => {
  descOutput.textContent = descInput.value;
});
