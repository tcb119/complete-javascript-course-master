'use strict';

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


// this 關鍵字的用法
// 在非嚴格模式下，this 默認指向全局對象（在瀏覽器中是 window）
// 在嚴格模式下，this 是 undefined。

console.log(this);

const calcAge = function(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge(1991);


// 因為Arrow function 沒有this關鍵字
// 所以他就是指向父元素 也就是全域的window 在這個例子裡
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeArrow(1980);


// 這樣會指向 jonas object
const jonas = {
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);
  }
}
jonas.calcAge();


// 因為this 放在 jonas物件裡的 calcAge function
// 這樣 matilda物件 就會指向 jonas物件裡的 calcAge function
// 所以才會說 this這個關鍵字是動態(Dymaic) 非靜態(static)
// 取決於你怎麼使用this

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// 要注意：這樣只是賦值，而不是呼叫
// 直接在後台 在後台輸入f
// 會顯示
// f() {
//   console.log(this);
//   console.log(2037 - this.year);
// }

const f = calcAge;
f(1911);