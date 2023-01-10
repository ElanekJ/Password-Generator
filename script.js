// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

 
// Function to prompt user for password options
function getPasswordOptions() {
  let restCharacters = 64;

  // choice how many characters
  let characters = confirmCharacter(restCharacters);
  let howManyCharacters = parseInt(characters);
  restCharacters = howManyCharacters
  console.log(howManyCharacters);

  //Choose characters
  if(confirm("Do you want include numeric characters?")){
    let numericValue = confirmCharacter(restCharacters);
    restCharacters -= numericValue;
    console.log(restCharacters);
  }


  if(confirm("Do you want include lowercase characters?")){
    let lowerCaseValue = confirmCharacter(restCharacters);
    restCharacters -= lowerCaseValue;
    console.log(restCharacters);
  }

  if(confirm("Do you want include upercase characters?")){
    let uperCaseValue = confirmCharacter(restCharacters);
    restCharacters -= uperCaseValue;
    console.log(restCharacters);
  }
  if(confirm("Do you want include special characters?")){
    let specialCharValue = confirmCharacter(restCharacters);
    restCharacters -= specialCharValue;
    console.log(restCharacters);
  }
}

function confirmCharacter(num){
   let choiceNumber = prompt("How many characters you want to generate? Choose between 1 - "+num, " ");
  
  return parseInt(choiceNumber);
}

// Function for getting a random element from an array
function getRandom(arr) {

  return Math.floor(Math.random()*arr);

}

function getRandommElement(gre){
  const randomIndex = getRandom(gre.length);
  return gre[randomIndex]
}


// Function to generate password with user input
function generatePassword() {
 
  console.log(getPasswordOptions.lowerCaseValue)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
