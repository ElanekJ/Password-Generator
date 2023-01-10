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

let lowerCaseValue = 0;
let uperCaseValue = 0;
let numericValue = 0;
let specialCharValue =0;

 
// Function to prompt user for password options
function getPasswordOptions() {

  //Set maximum characters
  let restCharacters = 64;

  //Choose characters and how many
  let characters = confirmCharacter(10, restCharacters);
  let howManyCharacters = parseInt(characters);
  restCharacters = howManyCharacters
  console.log(howManyCharacters);

  //Make sure the password is between 10 - 64 characters
  if(howManyCharacters >=10 && howManyCharacters <= 64){

    if(confirm("Do you want include numeric characters?")){
      numericValue = confirmCharacter(1,restCharacters);
      restCharacters -= numericValue;
    }

    if(confirm("Do you want include lowercase characters?")){
      lowerCaseValue = confirmCharacter(1,restCharacters);
      restCharacters -= lowerCaseValue;
    }

    if(confirm("Do you want include upercase characters?")){
      uperCaseValue = confirmCharacter(1,restCharacters);
      restCharacters -= uperCaseValue;
    }

    if(confirm("Do you want include special characters?")){
      specialCharValue = restCharacters;
    }
    else{
      alert("You have not used all characters, it will be add to numeric characters");
      numericValue +=restCharacters;
    }
    return howManyCharacters;

  }

  else if(howManyCharacters>64){
    alert("TOO MANY CHARACTERS")
    return 0;
  }
  
  else{
    alert(" It has to be minimum 10 characters ")
    return 0;
  }
}

//Choose no of characters
function confirmCharacter(num1,num2){
  let choiceNumber = prompt("How many characters you want to generate? Choose between "+num1+" - "+num2, " ");
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

// For loop through characters
function loopThroughCharacters(charAmount, charValue){
  let element = [];
  for (let i = 0; i < charAmount; i++) {
    element[i] = getRandommElement(charValue);
    
  }
  return element;
}


// Function to generate password with user input
function generatePassword() {
 
  let amountOfCharacters = getPasswordOptions();
  if(amountOfCharacters !== 0 ){
    let characterLoopedNum = loopThroughCharacters(numericValue,numericCharacters);
    let characterLoopedLow = loopThroughCharacters(lowerCaseValue,lowerCasedCharacters);
    let characterLoopedUp = loopThroughCharacters(uperCaseValue,upperCasedCharacters);
    let characterLoopedSpec = loopThroughCharacters(specialCharValue,specialCharacters);
    let characterLooped = characterLoopedNum;
    characterLooped = characterLooped.concat(characterLoopedLow);
    characterLooped = characterLooped.concat(characterLoopedUp);
    characterLooped = characterLooped.concat(characterLoopedSpec);
    
    return characterLooped;
  }
  else{
    return "Have a lovely day";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  //  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
