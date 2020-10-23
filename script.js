// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Prompt to enter character length

  var passwordLength = prompt("Choose a number between 8 and 128");

  // Conditions to generate password
  function generatePassword () {
    if (passwordLength >= 8 && passwordLength <= 128) {
      var lowercaseLetter = confirm("Would you like to use lowercase letters?");
      var uppercaseLetter = confirm("Would you like to use uppercase letters?");
      var numericCharacters = confirm("Would you like to use numbers?");
      var specialCharacters = confirm("Would you like to use special characters?");
    } else if ((passwordLength < 8 && passwordLength > 128)) {
      alert("Please choose a number between 8 and 128.");
    }
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);