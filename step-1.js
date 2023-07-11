let howManyTimes = 2;

function drawFish() {
  let template = ''
  for (let i = 0; i < howManyTimes; i++) {
    template += "･ﾟﾟ･:. ><((((°>  ";
  }
  document.getElementById("fish-pond").innerHTML = template;
}







