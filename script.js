// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());

function generatePassword () {

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
    
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var numCharacters = parseInt("1234567890".split(""));
    var symbolCharacters = "!@#$%^&*()_+-={}[]\|:<>?;',./".split("");
    
    var passwordOutput;
      
    // if all criteria were selected
    if (!lowerInput && !upperInput && !numInput && !symbolInput) {
      alert("Please choose criteria in order to generate this password!");
    }
    else if (lowerInput && upperInput && numInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(lowercaseLetters, uppercaseLetters, numCharacters);
    }
    // if 3 criteria were selected
    else if (!lowerInput && upperInput && numInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(uppercaseLetters, numCharacters);
    }
    else if (lowerInput && !upperInput && numInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(lowercaseLetters, numCharacters);
    }
    else if (lowerInput && upperInput && !numInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(lowercaseLetters, uppercaseLetters);
    }
    else if (lowerInput && upperInput && numInput && !symbolInput) {
      passwordOutput = lowercaseLetters.concat(uppercaseLetters, numCharacters);
    }
    // if 2 criteria were selected
    else if (lowerInput && upperInput && !numInput && !symbolInput) {
      passwordOutput = lowercaseLetters.concat(uppercaseLetters);
    }
    else if (!lowerInput && !upperInput && numInput && symbolInput) {
      passwordOutput = numCharacters.concat(symbolCharacters);
    }
    else if (!lowerInput && upperInput && numInput && !symbolInput) {
      passwordOutput = uppercaseLetters.concat(numCharacters);
    }
    else if (lowerInput && !upperInput && !numInput && symbolInput) {
      passwordOutput = lowercaseLetters.concat(symbolCharacters);
    }
    else if (lowerInput && !upperInput && numInput && !symbolInput) {
      passwordOutput = lowercaseLetters.concat(numCharacters);
    }
    else if (!lowerInput && upperInput && !numInput && symbolInput) {
      passwordOutput = uppercaseLetters.concat(symbolCharacters);
    }
    // if 1 criteria were selected
    else if (lowerInput && !upperInput && !numInput && !symbolInput) {
      passwordOutput = lowercaseLetters;
    }
    else if (!lowerInput && upperInput && !numInput && !symbolInput) {
      passwordOutput = uppercaseLetters;
    }
    else if (!lowerInput && !upperInput && numInput && !symbolInput) {
      passwordOutput = numCharacters;
    }
    else if (!lowerInput && !upperInput && !numInput && symbolInput) {
      passwordOutput = symbolCharacters;
    }
}



