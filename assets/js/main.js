let alphabetArr = [
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
];

const textInput = document.body.querySelector("#textInput");
const numberInput = document.body.querySelector("#numberInput");
const textOutput = document.body.querySelector("#textOutput");
const reset = () => {
  textOutput.textContent = "";
};

const enCoder = () => {
  reset();
  const textInputArr = textInput.value.split("");
  const numberInputValue = Number(numberInput.value);
  for (let singleLetter of textInputArr) {
    for (let i = 0; i < alphabetArr.length; i++) {
      if (
        singleLetter.toLowerCase() === alphabetArr[i] &&
        numberInputValue >= 0
      ) {
        console.log(alphabetArr[i + numberInputValue]);
        textOutput.textContent += alphabetArr[i + numberInputValue];
      } else if (numberInputValue < 0 || numberInput.value === "") {
        textOutput.textContent = "bitte gib ein Zahl ein!";
      }
    }
  }
};

const deCoder = () => {
  reset();
  const textInputArr = textInput.value.split("");
  const numberInputValue = Number(numberInput.value);
  for (let singleLetter of textInputArr) {
    for (let i = 0; i < alphabetArr.length; i++) {
      if (
        singleLetter.toLowerCase() === alphabetArr[i] &&
        numberInputValue >= 0
      ) {
        console.log(alphabetArr[i + numberInputValue]);
        textOutput.textContent += alphabetArr[i - numberInputValue];
      } else if (numberInputValue < 0 || numberInput.value === "") {
        textOutput.textContent = "bitte gib ein Zahl ein!";
      }
    }
  }
};
