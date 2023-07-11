// Answer all the questions. Make sure to use the correct data type. Check your answers after each question by clicking "Check Answers"

// Ans1: I have read all the Harry Potter books: 
let ans1 = ""
// Ans2: My favorite video game is: 
let ans2 = ""
// Ans3: I am ____ years old: 
let ans3 = ""
// Ans4: When I grow up, I want to be a 
let ans4 = ""
// Ans5: I have a sister: 
let ans5 = ""
// Ans6: I am in grade 
let ans6 = ""
// Ans7: My favorite color is:  
let ans7 = ""
// Ans8: The kind of pet I have/want is: 
let ans8 = ""
// Ans9: My favorite numbers is: 
let ans9 = ""
// Ans10: I was born in Idaho: 
let ans10 = ""
// Ans11: My favorite sport is: 
let ans11 = ""

function draw() {
  if (typeof ans1 == 'boolean' || ans1 == "") {
    document.getElementById('ans1').innerText = ans1;
  } else {
    document.getElementById('ans1').innerText = 'The answer to this question should be BOOLEAN type';
  }
  if (typeof ans2 == 'string' || ans2 == "") {
    document.getElementById('ans2').innerText = ans2;
  } else {
    document.getElementById('ans2').innerText = 'The answer to this question should be STRING type';
  }
  if (typeof ans3 == 'number' || ans3 == "") {
    document.getElementById('ans3').innerText = ans3;
  } else {
    document.getElementById('ans3').innerText = 'The answer to this question should be NUMBER type';
  }
  if (typeof ans4 == 'string' || ans4 == "") {
    document.getElementById('ans4').innerText = ans4;
  } else {
    document.getElementById('ans4').innerText = 'The answer to this question should be STRING type';
  }
  if (typeof ans5 == 'boolean' || ans5 == "") {
    document.getElementById('ans5').innerText = ans5;
  } else {
    document.getElementById('ans5').innerText = 'The answer to this question should be BOOLEAN type';
  }
  if (typeof ans6 == 'number' || ans6 == "") {
    document.getElementById('ans6').innerText = ans6;
  } else {
    document.getElementById('ans6').innerText = 'The answer to this question should be NUMBER type';
  }
  if (typeof ans7 == 'string' || ans7 == "") {
    document.getElementById('ans7').innerText = ans7;
  } else {
    document.getElementById('ans7').innerText = 'The answer to this question should be STRING type';
  }
  if (typeof ans8 == 'string' || ans8 == "") {
    document.getElementById('ans8').innerText = ans8;
  } else {
    document.getElementById('ans8').innerText = 'The answer to this question should be STRING type';
  }
  if (typeof ans9 == 'number' || ans9 == "") {
    document.getElementById('ans9').innerText = ans9;
  } else {
    document.getElementById('ans9').innerText = 'The answer to this question should be NUMBER type';
  }
  if (typeof ans10 == 'boolean' || ans10 == "") {
    document.getElementById('ans10').innerText = ans10;
  } else {
    document.getElementById('ans10').innerText = 'The answer to this question should be BOOLEAN type';
  }
  if (typeof ans11 == 'string' || ans11 == "") {
    document.getElementById('ans11').innerText = ans11;
  } else {
    document.getElementById('ans11').innerText = 'The answer to this question should be STRING type';
  }
}

draw()