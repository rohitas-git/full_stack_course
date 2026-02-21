const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 10;
let passedArray = characters;
let passwordOneEl = document.getElementById("password-text-1");
let passwordTwoEl = document.getElementById("password-text-2");

function generateRandomPassword() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i <= passwordLength; i++) {
    password1 += getRandomChar(passedArray);
  }
  for (let i = 0; i <= passwordLength; i++) {
    password2 += getRandomChar(passedArray);
  }
  passwordOneEl.textContent = password1;
  passwordTwoEl.textContent = password2;
  console.log(password1);

}

function getRandomChar(array) {
  let index = getRandomNumber(array.length);
  return array[index];
}

function getRandomNumber(length) {
  let randomNumber = Math.floor(Math.random() * length);
  return randomNumber;
}
