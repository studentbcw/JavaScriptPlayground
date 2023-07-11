let numberOfChipsIHave = 0;
let numberOfGranolaBarsIHave = 0;
let numberOfCandiesIHave = 0;
let numberOfWaterBottlesIHave = 0;

let total = 0;

function addChips() {
  numberOfChipsIHave++
  calculateTotal()
  drawSnackCounts()
}

function addGranolaBars() {
  numberOfGranolaBarsIHave++
  calculateTotal()
  drawSnackCounts()
}

function addCandies() {
  numberOfCandiesIHave++
  calculateTotal()
  drawSnackCounts()
}

function addWaterBottles() {
  numberOfWaterBottlesIHave++
  calculateTotal()
  drawSnackCounts()
}

// Change the costs of the snacks to do new math!
function calculateTotal() {
  total = 1.50 * numberOfChipsIHave + 3.00 * numberOfGranolaBarsIHave + 0.75 * numberOfCandiesIHave + 3.50 * numberOfWaterBottlesIHave
}

function drawSnackCounts() {
  document.getElementById("chip-count").innerText = numberOfChipsIHave;
  document.getElementById("granola-bar-count").innerText = numberOfGranolaBarsIHave;
  document.getElementById("candy-count").innerText = numberOfCandiesIHave;
  document.getElementById("water-count").innerText = numberOfWaterBottlesIHave;
  document.getElementById("total").innerText = total.toFixed(2);
}

function buySnacks() {
  numberOfChipsIHave = 0;
  numberOfGranolaBarsIHave = 0;
  numberOfCandiesIHave = 0;
  numberOfWaterBottlesIHave = 0;

  total = 0;
  drawSnackCounts()
}
