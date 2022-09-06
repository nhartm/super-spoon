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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Call function 
  generatePassword();
  writePassword();
  randomInt();
  getRandomItem()
