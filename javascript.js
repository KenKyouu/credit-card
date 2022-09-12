const nameInput = document.getElementById("yourName");
const numberInput = document.getElementById("cardNumber");
const dateInput = document.getElementById("dueDate");
const cvcInput = document.getElementById("cardCvc");
var logoInput = document.getElementById("logo").src;

nameInput.addEventListener("input", function () {
  const name = nameInput.value;
  if (name) {
    nameShow.innerText = name;
  } else {
    nameShow.innerText = "Placeholder";
  }
});

numberInput.addEventListener("input", function () {
  const cardNumberInput = numberInput.value;
  var numberLen = cardNumberInput.length;
  var numberArr = numberInput.value.split("");
  var newArr = "";

  for (let i = 0; i < numberLen; i++) {
    if (i % 4 == 0 && i > 0) {
      newArr += " " + numberArr[i];
    } else {
      newArr += numberArr[i];
    }
  }
  if (newArr) {
    numberShow.innerText = newArr;
  } else {
    numberShow.innerText = "0000 0000 0000 0000";
  }
});

numberInput.addEventListener("input", function () {
  const cardNumberInput = numberInput.value;
  var numberLen = cardNumberInput.length;
  var numberArr = numberInput.value.split("");
  var newArr = "";

  for (let i = 0; i < numberLen; i++) {
    if (i % 4 == 0 && i > 0) {
      newArr += " " + numberArr[i];
    } else {
      newArr += numberArr[i];
    }
  }
  if (
    numberArr[0] == 5 &&
    numberArr[1] == 5 &&
    numberArr[2] >= 1 &&
    numberArr[2] <= 5
  ) {
    document.getElementById("logo").src = "./image/mastercard.png";
  } else if (numberArr[0] == 4) {
    document.getElementById("logo").src =
      "https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png";
  } else if (
    numberArr[0] == 3 &&
    numberArr[1] == 5 &&
    Number(numberArr[2].toString() + numberArr[3].toString()) >= 28 &&
    Number(numberArr[2].toString() + numberArr[3].toString()) <= 89
  ) {
    document.getElementById("logo").src = "./image/JCB_logo.svg";
  } else {
    document.getElementById("logo").src = "";
  }
});

dateInput.addEventListener("input", function () {
  const cardDueDate = dateInput.value;
  if (cardDueDate) {
    dateShow.innerText = cardDueDate;
  } else {
    dateShow.innerText = "MM/YY";
  }
});

cvcInput.addEventListener("input", function () {
  const cardCvcInput = cvcInput.value;
  if (cardCvcInput) {
    cvcShow.innerText = cardCvcInput;
  } else {
    cvcShow.innerText = "CVC";
  }
});
