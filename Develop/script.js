// Assignment Code
var generateBtn = document.querySelector("#generate");
lowerC = 'abcdefghijklmnopqrstuvwqyz';
upperC = lowerC.toUpperCase();
numberC = "0123456789";
specialC = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
array1 = [numberC, specialC, lowerC];
var set = "";
var Genpassword = "";

console.log(set);
// Write password to the #password input
function writePassword() {
  
  length = parseInt(prompt ('How long would you like the password to be?',  'Between 8 & 128'));
  if((length < 8) || (length > 128) || "NaN"){
    alert("Needs to be between 8 & 128 you potato");
    location.reload();
  }
  upper = confirm('Would you like UpperCase Letters?');
  if (upper){
    set += upper;
  }
  lower = confirm('Would you like LowerCase Letters?');
  if (lower){
    set += lowerC;
  }
  special = confirm('Would you like Special Characters?');
  if (special){
    set += specialC;
  }
  numbers = confirm('Would you like numbers?');
  if (numbers){
    set += numberC;
  }
  
  for (var i = 0; i < length; i++) {
    Genpassword += set.charAt(Math.floor(Math.random() * set.length))
  }

  var passwordText = document.querySelector("#password");
  passwordText.textContent = Genpassword;

  console.log(Genpassword);
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
