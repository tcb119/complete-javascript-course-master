// // Functions
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();



// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration 函式宣告
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

console.log(calcAge1);
console.log('calcAge1 沒有宣告一個變數去接，就會顯示整個function。因為未定義前都叫呼叫？');

const calcAge = function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
console.log(calcAge);

// Function expression 函式表達式
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

console.log(multiply(4, 5)); // 這會輸出 20

function multiply(a, b) {
  return a * b;
}