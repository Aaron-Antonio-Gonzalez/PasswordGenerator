// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var randomNumber = Math.floor((Math.random() * 10) + 1);
  return randomNumber
} 

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//var numbers = "1234567890"
// var upperLetter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var lowerLetter ="abcdefghijklmnopqrstuvwxyz"
// var specialChar="!@#$%^&*"





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);