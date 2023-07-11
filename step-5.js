let problems = [
  '9 - 7 = 2',
  '26 - 13 = 13',
  '47 - 37 = 10',
  '100 - 100 = 0',
  '20 + 30 = 50',
  '5 + 4 = 9',
  '29 + 16 = 45',
  '10 + 11 = 21',
  '5 * 3 = 15',
  '6 * 11 = 66',
  '50 * 2 = 100',
  '9 * 8 = 72',
  '14 / 2 = 7',
  '64 / 4 = 16',
  '6 / 3 = 2',
  '39 / 13 = 3',
  '6 % 2 = 0',
  '17 % 3 = 2',
  '15 % 10 = 5',
  '7 % 2 = 1'
];

problems.sort(() => Math.random() - 0.5)
problems.sort(() => Math.random() - 0.5)
problems.sort(() => Math.random() - 0.5)
draw()

function draw() {
  for (let i = 0; i < problems.length - 4; i++) {
    document.getElementById(`box${i + 1}`).innerHTML = `<p>${problems[i]}</p>`
  }
}

const clickedBoxes = []

function selectBox(boxId) {
  if (!clickedBoxes.includes(boxId)) {
    clickedBoxes.push(boxId)
  } else {
    clickedBoxes.filter(bId => bId != boxId)
  }
  let boxElem = document.getElementById(boxId)
  let prop = boxElem.classList[0]
  if (prop == 'box') {
    boxElem.classList.remove('box')
    boxElem.classList.add('selected-box')
  } else {
    boxElem.classList.remove('selected-box')
    boxElem.classList.add('box')
  }
  checkForBingo()
}



function getMathProblem() {
  let randomNumber = Math.floor(Math.random() * problems.length)
  let chosenProblem = problems[randomNumber]
  problems.splice(randomNumber, 1)
  let alteredProblem = ''
  if (chosenProblem.includes('+')) {
    alteredProblem = chosenProblem.replace('+', 'ADD')
  } else if (chosenProblem.includes('-')) {
    alteredProblem = chosenProblem.replace('-', 'SUBTRACT')
  } else if (chosenProblem.includes('*')) {
    alteredProblem = chosenProblem.replace('*', 'MULTIPLY')
  } else if (chosenProblem.includes('/')) {
    alteredProblem = chosenProblem.replace('/', 'DIVIDE')
  } else {
    alteredProblem = chosenProblem.replace('%', 'MODULUS')
  }
  document.getElementById('math-problem').innerText = alteredProblem
}

function checkForBingo() {
  if (clickedBoxes.includes('box1') && clickedBoxes.includes('box2') && clickedBoxes.includes('box3') && clickedBoxes.includes('box4')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box5') && clickedBoxes.includes('box6') && clickedBoxes.includes('box7') && clickedBoxes.includes('box8')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box9') && clickedBoxes.includes('box10') && clickedBoxes.includes('box11') && clickedBoxes.includes('box12')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box13') && clickedBoxes.includes('box14') && clickedBoxes.includes('box15') && clickedBoxes.includes('box16')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box1') && clickedBoxes.includes('box5') && clickedBoxes.includes('box9') && clickedBoxes.includes('box13')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box2') && clickedBoxes.includes('box6') && clickedBoxes.includes('box10') && clickedBoxes.includes('box14')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box3') && clickedBoxes.includes('box7') && clickedBoxes.includes('box11') && clickedBoxes.includes('box15')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box4') && clickedBoxes.includes('box8') && clickedBoxes.includes('box12') && clickedBoxes.includes('box16')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box1') && clickedBoxes.includes('box6') && clickedBoxes.includes('box11') && clickedBoxes.includes('box16')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
  if (clickedBoxes.includes('box4') && clickedBoxes.includes('box7') && clickedBoxes.includes('box10') && clickedBoxes.includes('box13')) {
    document.getElementById('bingo-board').innerHTML = '<h1>YOU WON!</h1>'
  }
}
