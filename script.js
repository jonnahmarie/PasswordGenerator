// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  writePassword();
});


function generatePassword () {
  // Define user input variables
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? (Min. 8, Max. 128)"));
  var lowerInput;
  var upperInput;
  var numInput;
  var symbolInput;
    
  // User Validation

  // while (passwordLength < 8 || passwordLength > 128) {
  //   prompt("Please enter a valid character number. How many characters would you like your password to be? (Min. 8, Max. 128");
  //   if (passwordLength >= 8 || passwordLength <= 128) {
  //     break;
  //   }
  // }
  if (passwordLength < 8) {
    alert("Your password must be at least 8 characters long. Try again.");
    return;
  }
  if (passwordLength > 128) {
    alert("Are you okay? Your password must be less than 128 characters. Try again!!!");
    return;

  if (passwordLength >= 8 || passwordLength <= 128) {
    // Continues with user input of password criteria
    lowerInput = confirm("Would you like to include lowercase letters?");
    upperInput = confirm("Would you like to include uppercase letters?");
    numInput = confirm("Would you like to include numbers?");
    symbolInput = confirm("Would you like to include any special characters?");
    }
  
    // character types
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var numCharacters = [1,2,3,4,5,6,7,8,9,0];
    var symbolCharacters = "!@#$%^&*()_+-={}[]\|:<>?;',./".split("");
    var passwordOutput;
      
    // if all criteria were selected
    if ((passwordLength == null) && !lowerInput && !upperInput && !numInput && !symbolInput) {
      alert("Please choose criteria in order to generate this password!");
      return;
    }
    else if (lowerInput && upperInput && numInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(lowercaseLetters, uppercaseLetters, numCharacters);
    }
    // if 3 criteria were selected
    else if (upperInput && numInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(uppercaseLetters, numCharacters);
    }
    else if (lowerInput && numInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(lowercaseLetters, numCharacters);
    }
    else if (lowerInput && upperInput && symbolInput) {
      passwordOutput = symbolCharacters.concat(lowercaseLetters, uppercaseLetters);
    }
    else if (lowerInput && upperInput && numInput) {
      passwordOutput = lowercaseLetters.concat(uppercaseLetters, numCharacters);
    }
    // if 2 criteria were selected
    else if (lowerInput && upperInput) {
      passwordOutput = lowercaseLetters.concat(uppercaseLetters);
    }
    else if (numInput && symbolInput) {
      passwordOutput = numCharacters.concat(symbolCharacters);
    }
    else if (upperInput && numInput) {
      passwordOutput = uppercaseLetters.concat(numCharacters);
    }
    else if (lowerInput && symbolInput) {
      passwordOutput = lowercaseLetters.concat(symbolCharacters);
    }
    else if (lowerInput && numInput) {
      passwordOutput = lowercaseLetters.concat(numCharacters);
    }
    else if (upperInput && symbolInput) {
      passwordOutput = uppercaseLetters.concat(symbolCharacters);
    }
    // if 1 criteria were selected
    else if (lowerInput) {
      passwordOutput = lowercaseLetters;
    }
    else if (upperInput) {
      passwordOutput = uppercaseLetters;
    }
    else if (numInput) {
      passwordOutput = numCharacters;
    }
    else if (symbolInput) {
      passwordOutput = symbolCharacters;
    }

    var randomPasswordArray = []; //placeholder

    for (var i = 0; i < passwordLength; i++) {
      var randomized = passwordOutput[Math.floor(Math.random() * passwordOutput.length)];
      randomPasswordArray.push(randomized);
    }

    var finalRandomPassword = randomPasswordArray.join();
    console.log(randomPasswordArray)

    passwordString = randomPasswordArray.join("");

    userPassword(passwordString);
  return;
}

function userPassword(passwordString) {
  document.getElementById("password").textContent = passwordString;
}

