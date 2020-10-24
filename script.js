// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  

    // Define user input variables
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? (Min. 8, Max. 128)"));
  var lowerInput;
  var upperInput;
  var numInput;
  var symbolInput;

  // User Validation
  while ((passwordLength < 8 || passwordLength > 128)) {
    prompt("Please enter a valid character number. How many characters would you like your password to be? (Min. 8, Max. 128");

    if (passwordLength >= 8 || passwordLength <= 128) {
      // Continues with user input of password criteria

      lowerInput = confirm("Would you like to include lowercase letters?");
      upperInput = confirm("Would you like to include uppercase letters?");
      numInput = confirm("Would you like to include numbers?");
      symbolInput = confirm("Would you like to include any special characters?");
    }
 } 

  // character types

  var lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"].split("");
  var uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].split("");
  var numCharacters = parseInt(["1234567890"].split(""));
  var symbolCharacters = ["!@#$%^&*()_+-={}[]\|:<>?;',./"].split("");

  
  
  if (!lowerInput && !upperInput && !numInput && !specialInput) {
    alert("Please choose criteria in order to generate this password!");
  } else if (lowercaseLetters && uppercaseLetters && numCharacters && symbolCharacters) {

  }

  

  
}
);



