// Special char array:
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')','(','}','{',']', '[', '~', '-', '_', '.',];


// uppercase letter array
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z',];

// lowercase array
var lowerChar = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];


// numbers array
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword() {

  // How am i going to get the users password length?
  var length = parseInt(prompt("How long do you want your password?"));
  var finalChar = [];
  var possibleChar = [];
  var options = [];

  if(Number.isNaN(length)){
    alert("Password length must be a number");
    generatePassword();
  }

 // is the user length bigger than 8 but less than 129
  if(length < 8 || length > 128)
  {
    alert("Password length must be between 8-128 characters");
    generatePassword();
  }

// Add confirms to get user choices

var upperCheck = confirm("Do you want uppper case letters in your password?");
var lowerCheck = confirm("Do you want lower case letters in your password?");
var specialcheck = confirm("Do you want special characters in your password?");
var numberCheck = confirm("Do you want numbers in your password?");

if(upperCheck === false && lowerCheck === false && specialcheck === false && numberCheck === false)
{
  alert("Selcect at least one option");
  generatePassword();
}

if(upperCheck)
{
  options = options.concat(upperChar);
  finalChar.push(upperChar[Math.floor(Math.random() * upperChar.length)]);
  console.log(options);
  console.log(finalChar);
}

if(lowerCheck)
{
  options = options.concat(lowerChar);
  finalChar.push(lowerChar[Math.floor(Math.random() * lowerChar.length)]);
  console.log(options);
  console.log(finalChar);
}

if(numberCheck)
{
  options = options.concat(numericChar);
  finalChar.push(numericChar[Math.floor(Math.random() * numericChar.length)]);
  console.log(options);
  console.log(finalChar);
}

if(specialcheck)
{
  options = options.concat(specialCharacters);
  finalChar.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  console.log(options);
  console.log(finalChar);
}

// 
for(var i=0; i<length; i++){
  possibleChar.push(options[Math.floor(Math.random() * options.length)]);
  console.log(possibleChar);
}

// replacing the first few characters by the choices they have
for(var i=0; i<finalChar.length;i++)
{
  possibleChar[i] = finalChar[i];
}

// final password
  return possibleChar.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
