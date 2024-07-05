// 'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT!'
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);


/*
因為TDZ的關系，都會提升。但var會是undefined
const/let 也會被提升，但會被丟入TDZ初始化，直至被賦予數值
*/

console.log(me);
// console.log(job);
// console.log(year);

//變數相關
var me ='Jonas';
let job = 'teacher';
const year = 1991; 

//Functions相關
/*
只有function addDecl(a,b) 會被提升至top
其他 addExpr 和 addArrow 都是宣告後才會被賦值，原因也是跟上述TDZ一樣
*/

console.log(addDecl(2, 3));


function addDecl(a,b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;


console.log(addExpr(2, 3));
console.log(addArrow(2, 3));


//Example：為何可以的話，不要使用var來宣告變數
/**
 * 因爲var的關係，number被提升至top
 * 原本if裡面的numProducts 要是不為10，才會access deletShoppingCart();
 * 但因為var的提升，現在numProducts 為undefined數值，if條件式就成立了
 */
if(!numProducts) deletShoppingCart();

var numProducts = 10;

function deletShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

/**
 * 螢幕上輸入window 可以看到object x
 * 但不會看到 y 與 z
 * 
 * 這也是為何不要用var宣告變數
 * 因為這樣做，也是在window上創立物件
 */
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);