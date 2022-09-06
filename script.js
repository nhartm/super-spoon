// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password){
  passwordText.value = password
  }
}
// Prompt user to determine which type of password they would like
function generatePassword() {
  
  while (true) {
    var userInput = window.prompt ("How long do you want your password to be?")
    var passwordLength = parseInt(userInput)
    //user cancelled prompt
    console.log(userInput)
    if (userInput === null) {
    return
    }
    // User entered anything other than a number
    if (isNaN(passwordLength)) {
    window.alert("That is not a number!")
   } else if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password must be between 8 and 128 characters long!")
    } else {
    break
  }}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Call function 
  generatePassword();
  writePassword();
  randomInt();
  getRandomItem()
