// 1. 🧩Set the secret code to a three-letter word. You can use 'cat' or choose your own 3-letter word.
let secretCode = 'cat'

// 2. 🧩 Log the code to the console using the variable secretCode
console.log(
  // 💻 YOUR CODE HERE

)

// 3. 🧩 Let's guess what we think the secret code might be. Put in your guess as a string in place of 'dog'
let guess = 'dog'

// 4. 🧩 Let's write some conditionals (if/else statements) to help us check if we guessed correctly
// Here's an example:
console.log("Is the secret code " + guess + "?")

if (secretCode == guess) {
  console.log(true)
} else {
  console.log(false)
}

// 5. 🧩 Write your own conditional that let's a user know in the console if they guessed the right word. Console.log() a string that tells them if they are right or wrong.
// 💻 Your code here:


// 6. 🧩 Let's check to see if a certain letter is in our secret code. We can do this with secretCode.includes()
// Pick a letter to test and write it in place of the 'l'
let testLetter = 'l'


console.log(
  // 💻 Console log: 'The secret code has a ' + testLetter + ' in it:'
)

if (secretCode.includes(testLetter)) {
  console.log()
} else {
  console.log()
}

// 7. 🧩 Let's write an if statement (a conditional) that looks at the length of the secret code

if (secretCode.length > 3) {
  console.log("The secret code is a three-letter word!")
}

// 8. Use the || or operator to check if the secretCode.length is either greater than OR less than 3

// 💻 YOUR CODE HERE









