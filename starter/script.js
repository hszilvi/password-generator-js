
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

// Function to prompt user for password options
// first the user gives the length of the required password if the given number is correct go ahead if not, try again
// bunch of confirm message to ask for characters the user needs.
  // if character is needed push one into the variables linked to the charset
// check if the chosenCharset is empty or we can go further
function getPasswordOptions() {
  lengthOfPassword = parseInt(prompt(`How long shoud your password be? Choose a number between 8-128!`));
  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    let wantSepcial = confirm(`Do you want special characters in your password?`);
    if (wantSepcial === true) {
      chosenCharSet.push(specialCharacters);
      chosenSpecial = getRandomSpecial();
      basicPassword.push(chosenSpecial);
    }
    let wantNum = confirm(`Do you want NUMBERS in your password?`);
    if (wantNum === true) {
      chosenCharSet.push(numericCharacters);
      chosenNumeric = getRandomNumeric();
      basicPassword.push(chosenNumeric);
    }
    let wantLower = confirm(`Do you want LOWER CASED characters in you password?`);
    if (wantLower === true) {
      chosenCharSet.push(lowerCasedCharacters);
      chosenLower = getRandomLower();
      basicPassword.push(chosenLower);
    }
    let wantUpper = confirm(`Do you want UPPER CASED characters in your password?`);
    if (wantUpper === true) {
      chosenCharSet.push(upperCasedCharacters);
      chosenUpper = getRandomUpper();
      basicPassword.push(chosenUpper);
    } if (chosenCharSet.length == 0) {
      alert(`you have to choose at least one option, try again`)
      // console.log(chosenCharSet);
      return;
    }
  } else {
    alert('try again');
  }
}
// -------------------------------------------------------------------------------------
// Function for getting a random element from an array
// flat the chosenCharSet into a new array
// for loop to generate as many random number as index as the value of the passwordLength
// fill up generatedPassword array with the random generated indexed characters

let flatChosenCharSet = [];

let generatedPassword = [];
let finalPassword = [];

function getRandom() {
  generatedPassword.concat(basicPassword);
  
  flatChosenCharSet = chosenCharSet.flat();
  // console.log(`new array: ${flatChosenCharSet}`);
  // console.log(`basic password ${generatedPassword}`);

  for (let i = 1; i <= (lengthOfPassword - basicPassword.length); i++) {
    let randomNumber = Math.floor(Math.random() * flatChosenCharSet.length);
    // console.log(`random number ${randomNumber}`);
    generatedPassword += flatChosenCharSet[randomNumber];
  }
  finalPassword = [...basicPassword, ...generatedPassword];
  console.log(`finalpassword: ${finalPassword}`);
  
  return finalPassword;
}
// --------------------------------------------------------------------------------------
// function to get must have elements from wanted charsets
function getRandomSpecial() {
  let generatedRandomSpecial = [];
  let rI = Math.floor(Math.random() * specialCharacters.length);
  generatedRandomSpecial += specialCharacters[rI];
  // console.log('hello generated random: ' + generatedRandomSpecial);
  return generatedRandomSpecial;
}
function getRandomNumeric() {
  let generatedRandomNumeric = [];
  let rI = Math.floor(Math.random() * numericCharacters.length);
  generatedRandomNumeric += numericCharacters[rI];
  // console.log('hello generated numeric: ' + generatedRandomNumeric);
  return generatedRandomNumeric;
}
function getRandomLower() {
  let generatedRandomLower = [];
  let rI = Math.floor(Math.random() * lowerCasedCharacters.length);
  generatedRandomLower += lowerCasedCharacters[rI];
  // console.log('hello generated lower: ' +generatedRandomLower);
  return generatedRandomLower;
}
function getRandomUpper() {
  let generatedRandomUpper = [];
  let rI = Math.floor(Math.random() * upperCasedCharacters.length);
  generatedRandomUpper += upperCasedCharacters[rI];
  // console.log('hello generated upper: ' + generatedRandomUpper);
  return generatedRandomUpper;
}
// -------------------------------------------------------------------------------------

// Function to generate password with user input / only add called functions
function generatePassword(password) {
  let sg = getPasswordOptions();
  console.log('sg ' + sg);
  let rand = getRandom();
  console.log('random ' + rand);
  return rand.join('');
}
console.log(generatePassword.toString());
// -------------------------------------------------------------------------------------
// Get references to the #generate element / no need to change this code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input / no need to change this code
function writePassword() {
  var password = generatePassword();
  console.log('solution: ' + password);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button / no need to change this code
generateBtn.addEventListener('click', writePassword);