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

  // User Validation
  if ((passwordLength < 8 || passwordLength > 128)) {
    alert("Please enter a valid number.");
  };

  var lowerInput = confirm("Would you like to include lowercase letters?");
  var upperInput = confirm("Would you like to include UPPERcase letters?");
  var numInput = confirm("Would you like to include numeric characters?");
  var specialInput = confirm("Would you like to include special characters?");

  
}
);



