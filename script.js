function generatePassword(){
  //define variables
  var lowerArr = "abcdefghijklmnopqrstuvwxyz";
  var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbArr = '0123456789';
  var specialArr = "!@#$%^&*()";
  var i = 0;
  var passwordLength = 0
  var greaterLessthan = false
  var totalPassword = ""
  var selectionMade = false
  
  
  //verify password length
  while(greaterLessthan === false){
    
    var passwordLength = prompt("Please enter length of password between 8 and 128");

    if (passwordLength < 8)
    {
        alert('Password length must be 8 or greater');
        greaterLessthan = false;
    }
    else if (passwordLength > 128)
    {
        alert('Password length must be 128 or less');
        greaterLessthan = false;
    }
    else
    greaterLessthan = true;

  }
  
  
 

  //validate at least 1 selction was made
  while(selectionMade === false ){
    var passwordLowercase = confirm("Would you like the password to include lowercase letters?");
    if (passwordLowercase === true){
      selectionMade = true
    }
    var passwordUppercase = confirm("Would you like the password to include uppercase letters?");
    if (passwordUppercase === true){
      selectionMade = true
    }
    var passwordNumbers = confirm("Would you like the password to include numbers?");
    if (passwordNumbers === true){
      selectionMade = true
    }
    var passwordSpecial = confirm("Would you like the password to include special characters?"); 
    if (passwordSpecial === true){
      selectionMade = true
    }
  }

  //build the initial password string  
  while(i < passwordLength){
  

    if (passwordLowercase === true && totalPassword.length < passwordLength){
      
      var random = lowerArr[Math.floor((Math.random() * lowerArr.length))];
      i++;
      var totalPassword = totalPassword + random;
    }

    if (passwordUppercase === true && totalPassword.length < passwordLength){
      
      var random = upperArr[Math.floor((Math.random() * upperArr.length))];
      i++;
      var totalPassword = totalPassword + random;
    }

    if (passwordNumbers === true && totalPassword.length < passwordLength){
      
      var random = numbArr[Math.floor((Math.random() * numbArr.length))];
      i++;
      var totalPassword = totalPassword + random;
    }

    if (passwordSpecial === true && totalPassword.length < passwordLength){
      
      var random = specialArr[Math.floor((Math.random() * specialArr.length))];
      i++;
      var totalPassword = totalPassword + random;
    }
    
    
    
    

  }

  
  //randomize the password string
  function shuffelWord (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    
    return shuffledWord;
    
  }
  
  totalPassword = shuffelWord(totalPassword)
  
  //return the randomized password to the script
  return totalPassword;
  

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
