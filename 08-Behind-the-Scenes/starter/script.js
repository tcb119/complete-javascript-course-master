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

// console.log(me);
// // console.log(job);
// // console.log(year);

// //變數相關
// var me ='Jonas';
// let job = 'teacher';
// const year = 1991; 

// //Functions相關
// /*
// 只有function addDecl(a,b) 會被提升至top
// 其他 addExpr 和 addArrow 都是宣告後才會被賦值，原因也是跟上述TDZ一樣
// */

// console.log(addDecl(2, 3));


// function addDecl(a,b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// }

// const addArrow = (a, b) => a + b;


// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));


///////////////////////////////////////
// //Example：為何可以的話，不要使用var來宣告變數
// /**
//  * 因爲var的關係，number被提升至top
//  * 原本if裡面的numProducts 要是不為10，才會access deletShoppingCart();
//  * 但因為var的提升，現在numProducts 為undefined數值，if條件式就成立了
//  */
// if(!numProducts) deletShoppingCart();

// var numProducts = 10;

// function deletShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// /**
//  * 螢幕上輸入window 可以看到object x
//  * 但不會看到 y 與 z
//  * 
//  * 這也是為何不要用var宣告變數
//  * 因為這樣做，也是在window上創立物件
//  */
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


// // this 關鍵字的用法
// // 在非嚴格模式下，this 默認指向全局對象（在瀏覽器中是 window）
// // 在嚴格模式下，this 是 undefined。

// console.log(this);

// const calcAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAge(1991);


// // 因為Arrow function 沒有this關鍵字
// // 所以他就是指向父元素 也就是全域的window 在這個例子裡
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAgeArrow(1980);


// // 這樣會指向 jonas object
// const jonas = {
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);
//   }
// }
// jonas.calcAge();


// // 因為this 放在 jonas物件裡的 calcAge function
// // 這樣 matilda物件 就會指向 jonas物件裡的 calcAge function
// // 所以才會說 this這個關鍵字是動態(Dymaic) 非靜態(static)
// // 取決於你怎麼使用this

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// // 要注意：這樣只是賦值，而不是呼叫
// // 直接在後台 在後台輸入f
// // 會顯示
// // f() {
// //   console.log(this);
// //   console.log(2037 - this.year);
// // }

// const f = calcAge;
// f(1911);


///////////////////////////////////////
// Regular Functions vs. Arrow Functions

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);

//   //   在 ES6 前的做法
//   //   因為引入了箭頭函數，可以更簡單地解決這個問題，
//   //   因為箭頭函數不會綁定自己的 this，而是從外部上下文繼承 this。
//   //   const self = this; /// 用self or that 來 保存 `this` 的引用
//   //   const isMillenial = function() {
//   //     console.log(self); // 使用 `self` 來引用原始的 `this`
//   //     console.log(self.year >= 1981 && self.year <= 1996);
//   //   };
//   //   isMillenial();
//   // },

//   // 使用箭頭函式的寫法
//   // 會自動指向 jonas
//   const isMillenial = () => {
//     console.log(this); 
//     console.log(this.year >= 1981 && this.year <= 1996);
//   };
//   isMillenial();
// },


//   // greet: () => {
//   //   console.log(this);
//   //   console.log(`Hey ${this.firstName}`);
//   // },

//   /**
//  * jonas.greet(); 出現undefined原因，是因為他沒有this關鍵字
//  * 所以會往 父領域 global 拿取資料，就成了undefined
//  */

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// /**
//  * 不建議使用箭頭函式，在object物件裡。
//  * 而是使用函式宣告(一般來說，也不會對箭頭函式，使用this關鍵字)
//  */

// ///////////////////////////////////////
// // arguments keyword
// // 在 JavaScript 中，arguments 是一個類數組對象（array-like object），
// // 包含了函數調用時所有傳入的參數。即使函數定義中沒有參數，arguments 也會捕捉所有傳入的值。
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// // 跟表達 arguments 跟this一樣，只存在於 正則函數裡
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives

/**
 * 從參考圖可以了解，用let宣告 
 * 會讓 age 與 oldAge分別指向不同的adress 存放不同的value
 * 
 * 而用const宣告，會定義初始物件內的內容
 * 但可以改變裡面的reference 
 * 這也是為什麼，改變‘friend’裡的age value
 * 但‘me’裡的age value也一起改變了
 * 因為他們是共用同一個adress
 *  */

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

/**
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 * Symbol
 * BigInt
 * 
 * 資料存在於 CALL STACK
 * 也就是在聲明他們的執行上下文中。
 * 
 * Object literal
 * Arrays
 * Functions
 * Many more...
 * 
 * 是儲存於HEAP空間
 */


/**
 * 會延伸到之後三個重要的觀念：
 * 
 * 1. Prototypal Inheritance (原型繼承)
 *    原型繼承是 JavaScript 獨特的繼承方式，與其他面向對象語言的類繼承有所不同。
 *    每個對象都可以有一個原型對象，並從原型對象繼承屬性和方法。
 * 
 * 2. Event Loop (事件循環)
 *    事件循環是 JavaScript 非阻塞模型的核心。它允許 JavaScript 同時處理多個任務，
 *    而不會阻塞主線程。事件循環主要負責處理同步和異步代碼之間的交互。
 * 
 * 3. How the DOM Really Works (DOM 的運作原理)
 *    DOM（文件物件模型）是 HTML 文件的編程接口。它表示文檔的結構，
 *    允許程式動態存取和更新文檔的內容和結構。
 */


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

/**
 * 如果是對同一個物件進行操作。(也就是傳同一份 adress 到 stack）
 * 
 * 即這邊的重點是：
 * 改變object裡面的數值，無關let 或 const
 * 因為對value做改變，ex: marriedJessica.lastName = 'Davis';
 * 所產生的記憶體是放在call stack，而非heap空間。
 */

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);


/**
 * 所以像這樣就會不能執行
 * 因為這是在指向另一個記憶體空間(different adress)
 */
// marriedJessica = {
//   firstName: 'David',
// };

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: [`'Alice', 'Bob'`]
};


/**
 * 使用 Object.assign()
 * 就會可以完全複製一份新的object，而不影響到原來obejct裡面的value
 * 
 * 但僅限於淺拷貝(shallow copy)
 * 如果object裏面還包上一層 object 依然拷貝不到 (deep clone)
 * shallow copy 是拷貝first level(第一層)
 * 而 deep clone 才是完全拷貝
 */

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

/**
 * 顯示結果會發現 family陣列並沒有被完全拷貝到
 * 也說明了為何 Object.assign() 是淺拷貝(shallow copy)
 * 如果要做到深拷貝，需要用到external library, like Lo-Dash
 * 裡面就有深拷貝這樣工具
 */

