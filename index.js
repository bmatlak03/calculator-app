const calcBtns = document.querySelectorAll(".calc-btn");
const result = document.querySelector("div.screen p.result");
const dot = document.querySelector(".dot");
const root = document.documentElement;
let operation;
let number1;
let number2;
let selectNum2 = false;
let isOperationSelected = false;
let outcome;
let currentTheme = 0;

const calcBtnClick = (command) => {
  if (command === "reset") {
    operation = "";
    number1 = null;
    number2 = null;
    selectNum2 = false;
    result.textContent = "";
  } else if (command === "del") {
    if (number1 || number2) {
      if (!selectNum2) number1 = number1.toString().slice(0, -1);
      result.textContent = result.textContent.slice(0, -1);
    }
  } else if (command === "+") {
    if (!isOperationSelected) operation = "+";
    result.textContent = "";
    selectNum2 = true;
  } else if (command === "-") {
    if (!isOperationSelected) operation = "-";
    result.textContent = "";
    selectNum2 = true;
  } else if (command === "*") {
    if (!isOperationSelected) operation = "*";
    result.textContent = "";
    selectNum2 = true;
  } else if (command === "/") {
    if (!isOperationSelected) operation = "/";
    result.textContent = "";
    selectNum2 = true;
  } else if (command === "=") {
    calculate();
    selectNum2 = false;
  } else {
    result.textContent += command;
    if (!selectNum2) number1 = result.textContent;
  }
};
const calculate = () => {
  number2 = result.textContent;
  switch (operation) {
    case "+":
      outcome = parseFloat(number1) + parseFloat(number2);
      result.textContent = outcome;
      number1 = outcome;
      break;
    case "-":
      outcome = parseFloat(number1) - parseFloat(number2);
      result.textContent = outcome;
      number1 = outcome;
      break;
    case "*":
      outcome = parseFloat(number1) * parseFloat(number2);
      result.textContent = outcome;
      number1 = outcome;
      break;
    case "/":
      outcome = parseFloat(number1) / parseFloat(number2);
      result.textContent = outcome;
      number1 = outcome;
      break;
  }
};
const changeTheme = () => {
  currentTheme++;
  if (currentTheme > 3) {
    currentTheme = 1;
  }
  if (currentTheme === 1) {
    dot.style.transform = "translatex(0)";
    root.style.setProperty("--bgc", "hsl(222, 26%, 31%)");
    root.style.setProperty("--keypad-bgc", "hsl(223, 31%, 20%)");
    root.style.setProperty("--screen-bgc", "hsl(224, 36%, 15%)");
    root.style.setProperty("--key-bgc", "hsl(30, 25%, 89%)");
    root.style.setProperty("--font-color-2", "hsl(221, 14%, 31%)");
    root.style.setProperty("--text-bgc", "hsl(30, 25%, 89%)");
    root.style.setProperty("--dot-color", "hsl(6, 63%, 50%)");
    root.style.setProperty("--box-bgc", "hsl(223, 31%, 20%)");
    root.style.setProperty("--key-shadow-1", "hsl(28, 16%, 65%)");
    root.style.setProperty("--key-shadow-2", "hsl(224, 28%, 35%)");
    root.style.setProperty("--key-shadow-3", "hsl(6, 70%, 34%)");
    root.style.setProperty("--del-res-bgc", "hsl(225, 21%, 49%)");
    root.style.setProperty("--del-res-color", "hsl(0, 0%, 100%)");
    root.style.setProperty("--equals-bgc", "hsl(6, 63%, 50%)");
  } else if (currentTheme === 2) {
    dot.style.transform = "translatex(23px)";
    root.style.setProperty("--bgc", "hsl(0, 0%, 90%)");
    root.style.setProperty("--keypad-bgc", "hsl(0, 5%, 81%)");
    root.style.setProperty("--screen-bgc", "hsl(0, 0%, 93%)");
    root.style.setProperty("--key-bgc", "hsl(45, 7%, 89%)");
    root.style.setProperty("--font-color-2", "hsl(185, 42%, 37%)");
    root.style.setProperty("--text-bgc", "hsl(60, 10%, 19%)");
    root.style.setProperty("--dot-color", "hsl(25, 98%, 40%)");
    root.style.setProperty("--box-bgc", "hsl(0, 5%, 81%)");
    root.style.setProperty("--key-shadow-1", "hsl(35, 11%, 61%)");
    root.style.setProperty("--key-shadow-2", "hsl(185, 58%, 25%)");
    root.style.setProperty("--key-shadow-3", "hsl(25, 99%, 27%)");
    root.style.setProperty("--del-res-bgc", "hsl(185, 42%, 37%)");
    root.style.setProperty("--equals-bgc", "hsl(25, 98%, 40%)");
  } else {
    dot.style.transform = "translatex(46px)";
    root.style.setProperty("--bgc", "hsl(268, 75%, 9%)");
    root.style.setProperty("--keypad-bgc", "hsl(268, 71%, 12%)");
    root.style.setProperty("--screen-bgc", "hsl(268, 71%, 12%)");
    root.style.setProperty("--key-bgc", "hsl(268, 47%, 21%)");
    root.style.setProperty("--font-color-2", "hsl(52, 100%, 62%)");
    root.style.setProperty("--text-bgc", "hsl(52, 100%, 62%)");
    root.style.setProperty("--dot-color", "hsl(177, 92%, 70%)");
    root.style.setProperty("--box-bgc", "hsl(268, 71%, 12%)");
    root.style.setProperty("--key-shadow-1", "hsl(290, 70%, 36%)");
    root.style.setProperty("--key-shadow-2", "hsl(285, 91%, 52%)");
    root.style.setProperty("--key-shadow-3", "hsl(177, 92%, 70%)");
    root.style.setProperty("--del-res-bgc", "hsl(281, 89%, 26%)");
    root.style.setProperty("--del-res-color", "hsl(0, 0%, 100%)");
    root.style.setProperty("--equals-bgc", "hsl(176, 100%, 44%)");
  }
};
changeTheme();
for (let btn of calcBtns) {
  const command = btn.dataset.command;
  btn.addEventListener("click", () => calcBtnClick(command));
}
dot.addEventListener("click", changeTheme);
