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
    break}
    }

 // User prompts
 var choseNumbers = window.confirm("Would you like to include numbers?")
 var choseSymbols = window.confirm("Would you like to include symbols?")
 var choseUppercase = window.confirm("Would you like to include uppercase letters?")
 var choseLowercase = window.confirm("Would you like to include lowercase letters?")

 var optionsCart = []

 // Password characters
 var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var symbols = ["@", "#", "$", "%", " ", "(", ")", "*", "^", "?", "!", "&"]
 var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    // Apply user choice and pull from character lists
    if (choseNumbers === true) { 
    optionsCart.push(numbers)
    }
    if (choseSymbols === true) {
    optionsCart.push(symbols)
    }
    if (choseUppercase === true) {
    optionsCart.push(uppercase)
    }
    if (choseLowercase === true) {
    optionsCart.push(lowercase)
    }
    if (optionsCart.length === 0) {
      optionsCart.push(lowercase)
    }

    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
    }
    return generatedPassword
  }
    
  //Write password to the #password input
  function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  if (password) {
    passwordText.value = password
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Call function 
  generatePassword();
  writePassword();
  randomInt();
  getRandomItem()
