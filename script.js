console.log("Program Start");
var lowerArr = "abcdefghijklmnopqrstuvwxyz"
var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbArr = '0123456789'
var specialArr = "!@#$%^&*()"
var passwordLength = 0

function generatePassword(){
  var passwordLength = 0
  var greaterLessthan = false
  console.log("GeneratePassword Started");
  ////ADD LOOP and Length Checking!!//////

  
  while(greaterLessthan === false){
    console.log("while loop started")
    var passwordLength = prompt("Please enter how length of password between 8 and 128");

    if (passwordLength <= 3)
    {
        alert('Passowrd length must be greater than 3');
        greaterLessthan = false;
    }
    else if (passwordLength >= 8)
    {
        alert('Password length must be less than 8');
        greaterLessthan = false;
    }
    else
    greaterLessthan = true;

  }
  
  console.log(greaterLessthan)
 

  console.log ("past while loop")
  /* var passwordLowercase = confirm("Would you like the password to include lowercase letters?");
  var passwordUppercase = confirm("Would you like the password to include uppercase letters?");
  var passwordNumbers = confirm("Would you like the password to include numbers?");
  var passwordSpecial = confirm("Would you like the password to include special characters?"); */
  
  for(var i = 0; i < passwordLength; i++){
  console.log(passwordLength)
  var random = lowerArr[Math.floor((Math.random() * lowerArr.length))];
  var lower = lower + random
  }

   


  return lower.substring(9);

}

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
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
