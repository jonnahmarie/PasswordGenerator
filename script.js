// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Prompt to enter character length

  var passwordLength = prompt("Choose a number between 8 and 128");
  
  // Criteria

  var lowercaseLetters = confirm("Would you like to add lowercase letters?");
  var uppercaseLetters = confirm("Would you like to add  uppercase letters?");
  var numericCharacters = confirm("Would you like to add numeric characters?");
  var specialCharacters = confirm("Would you like to add special characters?");

  function generatePassword () {
    if (passwordLength >= 8 && passwordLength <= 128) {
      var lowercaseArr = ["abcdefghijklmnopqrstuvwxyz"].split("");
      var uppercaseArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].split("");
      var numericArr = ["1234567890"].split("");
      var specialCharacterArray = ["!@#$%^&*()-+=_/.,:;?"].split("");
  } else if ((passwordLength < 8 && passwordLength > 128)) {
    alert("Please enter a valid number for your password length.");
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);