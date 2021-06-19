// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = "abcdefghijklmnopqrstuvwxyz";
var upperL = letters.toLocaleUpperCase();
var numbers = "0123456789";
var special_characters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var UC = confirm("Would you like UpperCase Letters?");
  var LC = confirm("Would you like LowerCase Letters?");
  var N = confirm("Would you like Numbers?");
  var special = confirm("Would you like Special Characters?");

  if(!UC && !LC && !N && !special){
    alert("Need to choose atleast one you bum");
    console.log(UC + LC + N + special);
  }
  else{
    return;
  }

  var length = parseInt(prompt("Enter the Length of Character in the password"));
  if ((length >= 8) && (length <= 128)){
    console.log("lur a spaz");
  }
  else{
    alert("needs to be between 8 and 128")
    var length = 0;
  } 
  
  console.log(length);


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
