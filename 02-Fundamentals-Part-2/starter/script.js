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

// // Function declaration 函式宣告
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// console.log(calcAge1);
// console.log('calcAge1 沒有宣告一個變數去接，就會顯示整個function。因為未定義前都叫呼叫？');

// const calcAge = function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// console.log(calcAge);

// // Function expression 函式表達式
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// console.log(multiply(4, 5)); // 這會輸出 20

// function multiply(a, b) {
//   return a * b;
// }

// // Arrow function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// console.log(calcAge3);
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUnitlRetirement = (birthYeah, firstName) => {
//   const age4 = 2037 - birthYeah;
//   const retirement = 65 - age4;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUnitlRetirement(1991, 'Jonas'));
// console.log(yearUnitlRetirement(1980, 'Bob'));

// ///////////////////////////////////////
// // Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));