let howManyTimes = 1000004;

function drawFish() {
  let template = ''
  for (let i = 0; i < howManyTimes; i++) {
    template += ".";
  }
  document.getElementById("fish-pond").innerHTML = template;
}







