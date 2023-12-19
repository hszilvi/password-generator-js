
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
// -----------------------------------------------------------------------------------

// Function to prompt user for password options
  // #0 define the variables needed for this function
  // #1 ask user for length of pw / if the given number is correct go ahead if not, try again
  // #2 bunch of confirm message to ask for characters the user needs.
    // #2a if character is needed push one into the variables linked to the charset
  // #3 check if the chosenCharset is empty or we can go further


// this variable will store my generated password and will be appear for the user
let lengthOfPassword = 0;

let chosenCharSet = [];
// this variable stores the must have characters if the user has chosen one of the charsets / it indicates that at least one character will be from the required charsets.
let basicPassword = [];
// convert basicPassword array into one array using flat() Method
let flatBasicPassword = basicPassword.flat();

// variables to store random must have charsets if the user has chosen one
let chosenSpecial = [];
let chosenNumeric = [];
let chosenLower = [];
let chosenUpper = [];

function getPasswordOptions() {
  lengthOfPassword = parseInt(prompt(`How long shoud your password be? Choose a number between 8-128!`));
  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    let wantSepcial = confirm(`Do you want special characters in your password?`);
    if (wantSepcial === true) {
      chosenCharSet.push(specialCharacters);
      chosenSpecial = getRandomGeneral(specialCharacters);
      basicPassword.push(chosenSpecial);
    }
    let wantNum = confirm(`Do you want NUMBERS in your password?`);
    if (wantNum === true) {
      chosenCharSet.push(numericCharacters);
      chosenNumeric = getRandomGeneral(numericCharacters);
      basicPassword.push(chosenNumeric);
    }
    let wantLower = confirm(`Do you want LOWER CASED characters in you password?`);
    if (wantLower === true) {
      chosenCharSet.push(lowerCasedCharacters);
      chosenLower = getRandomGeneral(lowerCasedCharacters);
      basicPassword.push(chosenLower);
    }
    let wantUpper = confirm(`Do you want UPPER CASED characters in your password?`);
    if (wantUpper === true) {
      chosenCharSet.push(upperCasedCharacters);
      chosenUpper = getRandomGeneral(upperCasedCharacters);
      basicPassword.push(chosenUpper);
    } if (chosenCharSet.length == 0) {
      alert(`You have to choose at least 1 option, try again`)
      return;
    }
  } else {
    alert('Try again!');
  }
}
// -------------------------------------------------------------------------------------
// Function for getting a random element from chosenCharSet array
  // #1 flat the chosenCharSet into a new array
  // #2 for loop to generate as many random number as index as the value of the passwordLength
  // #3 fill up generatedPassword array with the random generated indexed characters

let flatChosenCharSet = [];

let generatedPassword = [];
let finalPassword = [];

function getRandom() {
  generatedPassword.concat(basicPassword);  
  flatChosenCharSet = chosenCharSet.flat();

  for (let i = 1; i <= (lengthOfPassword - basicPassword.length); i++) {
    let randomNumber = Math.floor(Math.random() * flatChosenCharSet.length);
    generatedPassword += flatChosenCharSet[randomNumber];
  }

  finalPassword = [...basicPassword, ...generatedPassword];
  
  return finalPassword;
}
// --------------------------------------------------------------------------------------
// function for getting random element from an array
function getRandomGeneral (arr) {
  let index = Math.floor(Math.random() * arr.length);
  let char = arr[index];
  return char;
}
// -------------------------------------------------------------------------------------

// Function for generate password with user input 
function generatePassword() {
  const textarea = document.getElementById('password');
  textarea.value = '';
  let options = getPasswordOptions();
  let randomPassword = getRandom();
  // return randomPassword an string: convert the password array into string
  return randomPassword.join('');
}

// Function to reset ALL the variables if Generate Password button is clicked 
function reset() {
  lengthOfPassword = 0; 
  chosenSpecial = [];
  chosenNumeric = [];
  chosenLower = [];
  chosenUpper = [];
  chosenCharSet = [];
  generatedPassword = [];
  finalPassword = [];
  flatChosenCharSet = [];
  basicPassword = [];
}
// -------------------------------------------------------------------------------------
// Get references to the #generate element / no need to change this code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input / reset function added 
function writePassword() {
  reset();
  var password = generatePassword();
  console.log('solution: ' + password);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button / no need to change this code
generateBtn.addEventListener('click', writePassword);
