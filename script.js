// Assignment Code
var generateBtn = document.querySelector("#generate");
// Global variables

var result = "";
var arrNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCase = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// boolean variables for confirmation
var isLower;
var isUpper;
var isNum;
var isSpecial;
var len;
var len2;


function generatePassword() {
  // getting all the user desired inputs
  // checking all the edge case

  len = prompt("What is the minimum length of your password");
  if (len < 8 || len > 128) {
    len2 = prompt("Kindly enter any number within range 8 to 128");
  }
  else {
    len2 = len
  }
  if (len2 >= 8 && len2 <= 128) {
    isLower = confirm("Do you want to include lower case character?");
    isUpper = confirm("Do you want to include upper case characters?");
    isNum = confirm("Do you want to include numeric character?");
    isSpecial = confirm("do you want to include special characters?");
    // to check atleast one option is selected
    if (isLower == false && isUpper == false && isNum == false && isSpecial == false) {
      alert('You must select atleast on specification');
      isLower = confirm("Do you want to include lower case character?");
      isUpper = confirm("Do you want to include upper case characters?");
      isNum = confirm("Do you want to include numeric character?");
      isSpecial = confirm("do you want to include special characters?");
    }

    // Random password generation logic
    var characterSet = [];

    if (isLower) {
      characterSet = characterSet.concat(lowerCase)
      console.log("Is LowerCase:" + isLower);
      console.log(characterSet);

    }

    if (isUpper) {
      characterSet = characterSet.concat(upperCase)
      console.log("Is upperCase:" + isUpper);
      console.log(characterSet);
    }

    if (isNum) {
      characterSet = characterSet.concat(arrNum)
      console.log("Is Integer:" + isNum);
      console.log(characterSet);
    }

    if (isSpecial) {
      characterSet = characterSet.concat(specialCase)
      console.log("Is SpecialCase:" + isSpecial);
      console.log(characterSet);
    }

    console.log("Final character set " + characterSet)


    for (var i = 0; i < len2; i++) {
      result = result + characterSet[Math.floor(Math.random() * characterSet.length)];
      console.log(result)
    }
    return result;

  }


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
