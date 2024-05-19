//task1

// const randomHexColorCode = () => {
//   let n = (Math.random() * 0xfffff * 1000000).toString(16);
//   return "#" + n.slice(0, 6);
// };

// const color = document.querySelector(".color");
// const btn = document.querySelector(".change-color");

// btn.addEventListener("click", (event) => {
//   document.body.style.backgroundColor = randomHexColorCode();
//   color.innerHTML = randomHexColorCode().toString();
// });

//task2
// const text = document.querySelector(".text");
// const textInput = document.querySelector(".inputText");
// const one = document.querySelector(".item.one");
// const two = document.querySelector(".item.two");
// const three = document.querySelector(".item.three");
// const four = document.querySelector(".item.four");
// const five = document.querySelector(".item.five");
// const six = document.querySelector(".item.six");
// const seven = document.querySelector(".item.seven");
// const eight = document.querySelector(".item.eight");
// const nine = document.querySelector(".item.nine");
// const zero = document.querySelector(".item.zero");
// const plus = document.querySelector(".item.plus");
// const equal = document.querySelector(".item.equal");
// const percentage = document.querySelector(".item.perc");
// const multiplication = document.querySelector(".item.multip");
// const subtraction = document.querySelector(".item.subt");
// const division = document.querySelector(".item.divide");
// const clear = document.querySelector(".item.clear");
// const pow = document.querySelector(".item.pow");

// const arr = [];
// let num = "";
// one.addEventListener("click", () => {
//   textInput.innerHTML += "1";
//   num += "1";
// });

// two.addEventListener("click", () => {
//   textInput.textContent += "2";
//   num += "2";
// });

// three.addEventListener("click", () => {
//   textInput.textContent += "3";
//   num += "3";
// });

// four.addEventListener("click", () => {
//   textInput.textContent += "4";
//   num += "4";
// });

// five.addEventListener("click", () => {
//   textInput.textContent += "5";
//   num += "5";
// });

// six.addEventListener("click", () => {
//   textInput.textContent += "6";
//   num += "6";
// });

// seven.addEventListener("click", () => {
//   textInput.textContent += "7";
//   num += "7";
// });

// eight.addEventListener("click", () => {
//   textInput.textContent += "8";
//   num += "8";
// });

// nine.addEventListener("click", () => {
//   textInput.textContent += "9";
//   num += "9";
// });

// zero.addEventListener("click", () => {
//   textInput.textContent += "0";
//   num += "0";
// });

// plus.addEventListener("click", () => {
//   textInput.textContent += "+";
//   arr.push(num);
//   arr.push("+");
//   num = "";
// });

// division.addEventListener("click", () => {
//   textInput.textContent += "/";
//   arr.push(num);
//   arr.push("/");
//   num = "";
// });

// multiplication.addEventListener("click", () => {
//   textInput.textContent += "*";
//   arr.push(num);
//   arr.push("*");
//   num = "";
// });

// percentage.addEventListener("click", () => {
//   textInput.textContent += "%";
//   arr.push(num);
//   let result = Number(arr[0]);
//   for (let i = 1; i < arr.length - 1; i += 2) {
//     const operator = arr[i];
//     const nextNum = Number(arr[i + 1]);
//     if (operator === "+") {
//       result += nextNum;
//     } else if (operator === "-") {
//       result -= nextNum;
//     } else if (operator === "*") {
//       result *= nextNum;
//     } else if (operator === "/") {
//       result /= nextNum;
//     } else if (operator === "^") {
//       result = Math.pow(result, nextNum);
//     }
//   }
//   arr.length = 0;
//   textInput.textContent = "";
//   num = "";
//   text.textContent = (result / 100).toString();
// });
// pow.addEventListener("click", () => {
//   textInput.textContent += "^";
//   arr.push(num);
//   arr.push("^");
//   num = "";
// });

// equal.addEventListener("click", () => {
//   arr.push(num);
//   let result = Number(arr[0]);
//   textInput.textContent += "=";
//   for (let i = 1; i < arr.length; i += 2) {
//     const operator = arr[i];
//     const nextNum = Number(arr[i + 1]);
//     if (operator === "+") {
//       result += nextNum;
//     } else if (operator === "-") {
//       result -= nextNum;
//     } else if (operator === "*") {
//       result *= nextNum;
//     } else if (operator === "/") {
//       result /= nextNum;
//     } else if (operator === "^") {
//       result = Math.pow(result, nextNum);
//     }
//   }
//   arr.length = 0;
//   textInput.textContent = "";
//   num = "";
//   text.textContent = result.toString();
//   console.log(result);
// });
// subtraction.addEventListener("click", () => {
//   textInput.textContent += "-";
//   arr.push(num);
//   arr.push("-");
//   num = "";
// });
// clear.addEventListener("click", () => {
//   textInput.textContent = null;
//   text.textContent = "0";
// });

// console.log(arr);

//task3

const football = document.querySelector(".football");
const ball = document.querySelector(".ball");

football.addEventListener("click", (el) => {
  const ballDiameter = ball.clientWidth;
  const offsetX = el.offsetX;
  const offsetY = el.offsetY;
  console.log(el);
  let ballLeft = offsetX - ballDiameter / 2;
  let ballTop = offsetY - ballDiameter / 2;

  if (ballLeft < 0) ballLeft = 0;
  if (ballTop < 0) ballTop = 0;
  if (ballLeft > football.clientWidth - ballDiameter)
    ballLeft = football.clientWidth - ballDiameter;
  if (ballTop > football.clientHeight - ballDiameter)
    ballTop = football.clientHeight - ballDiameter;

  ball.style.left = `${ballLeft}px`;
  ball.style.top = `${ballTop}px`;
});
