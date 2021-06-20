// Assignment Code
var generateBtn = document.querySelector("#generate");
lowerC = 'abcdefghijklmnopqrstuvwqyz';
upperC = lowerC.toUpperCase();
numberC = "0123456789";
specialC = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var set = "";
var Genpassword = "";

// Write password to the #password input
function writePassword() {

  //Getting user prompt for the length of password
  length = parseInt(prompt ('How long would you like the password to be?',  'Between 8 & 128'));

  //If the password length isn't long enough it erros out. and if it is then it tell the user the length their password will be
  if((length < 8 || length > 128) || isNaN(length)){
    alert("Needs to be between 8 & 128 you potato");
    location.reload();
  }
  else{
    alert("You have chosen to have a password length of: " + length);
  }

  //Grabbing the other data, Uppercase, lowercase etc then confirming. Aswell as appending the relevant characters to a string
  upper = confirm('Would you like UpperCase Letters?');
  if (upper){
    set += upperC;
    alert("You have chosen to have UpperCase Letters");
  }

  lower = confirm('Would you like LowerCase Letters?');
  if (lower){
    set += lowerC;
    alert("You have chosen to have LowerCase Letters");
  }

  special = confirm('Would you like Special Characters?');
  if (special){
    set += specialC;
    alert("You have chosen to have Special Characters");
  }

  numbers = confirm('Would you like numbers?');
  if (numbers){
    set += numberC;
    alert("You have chosen to have Numbers");
  }
  
  // Error Catching if the user chooses for all to be null on the password Generator
  if( !upper && !lower && !special && !numbers ){
    alert("You need to choose at least one type you potato");
    location.reload();
  }

  //generating the password fromt he string that has all the characters to be included at the length that the user inputs
  for (var i = 0; i < length; i++) {
    Genpassword += set.charAt(Math.floor(Math.random() * set.length))
  }

  //Appending that to the password field in the webpage
  var passwordText = document.querySelector("#password");
  passwordText.textContent = Genpassword;

  console.log(Genpassword);
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
