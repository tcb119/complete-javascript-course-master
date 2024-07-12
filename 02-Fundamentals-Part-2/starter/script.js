/**
 * use strict 嚴格模式在運行時除錯
 * Eslint在靜態模式(即編寫過程中) 可依風格制定coding規範，或是當前編寫code除錯
 */

'use strict';


// // Functions
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();


/**
 * return 語句的作用是終止函數的執行，並返回一個值。
 * 沒有 return 語句的函數將默認返回 undefined。
 */

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;   // 返回計算結果
// }

/**
 * 經常宣告一個const來儲存值 
 */

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// console.log(fruitProcessor(2, 4)); // 只負責輸出，不負責紀錄值。對比上面用了const的重要性

// ///////////////////////////////////////
// // Function Declarations vs. Expressions

// // Function declaration 函式宣告

/**
 * 	1.	使用 function 關鍵字來定義函式。
 *  2.	函式名稱是必需的。
 *  3.	在程式碼執行之前會被提升（Hoisted），因此可以在宣告之前呼叫。
 * 
 *  但Function declaration 可以提前拉到開頭。
 *  我們稱之為Hoisting
 */
const age1 = calcAge1(1991);

function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}


// Function expression 函式表達式
const calcAge2 = function calcAge1(birthYeah) {
  return 2037 - birthYeah;             //會直接把值存到 calcAge
}
const age2 = calcAge2(1991);

console.log(age1, age2);

/**
 * Function 不是type 也是一種value
 * 所以可以用一個「變數」儲存起來
 * 
 * 在 JavaScript（JS）中，類型（type）和值（value）比變數（variable）本身更為重要，
 * 這背後有幾個原因，與 JavaScript 的設計哲學和運作方式密切相關。
 * 
 * 1. 是動態類型語言，這意味著變數在宣告時不需要指定其類型，類型是在程式執行期間根據賦予的值來確定的。
 * 
 * 2. 類型和值決定操作行為（操作符行為依賴於類型）
 console.log(1 + "1");    // "11" (字串連接)
 console.log(1 + 1);      // 2 (數字相加)
 * 
 * 3. 類型轉換和隱式轉換 自動類型轉換（Type Coercion）
* console.log("5" - 1); // 4 (字串 "5" 被轉換為數字 5)
 console.log("5" + 1); // "51" (數字 1 被轉換為字串 "1")
 * 
 * 4. 值的參考和複製
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (原始值是值的拷貝)

let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name); // "Jane" (引用值是參考)
 */


// ///////////////////////////////////////
// // Arrow function （亦是一種 Function expression 函式表達式）
/**
 * 但要注意：Arrow function 拿不到this 這個關鍵字
 * 或者該說無法使用
 */
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUnitlRetirement = (birthYeah, firstName) => {
//   const age4 = 2037 - birthYeah;
//   const retirement = 65 - age4;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUnitlRetirement(1991, 'Jonas'));
// console.log(yearUnitlRetirement(1980, 'Bob'));

///////////////////////////////////////
// Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor1(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor1(2, 3));

// /////////////////////////////////////
// // Reviewing Functions
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`); // 如果把這行，放在return後。程式立刻終止，不顯示以下。
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const calcAverage0 = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage0(3, 4, 5));

// let scoreDolphins = calcAverage0(44, 23, 71);
// let scoreKoalas = calcAverage0(65, 54, 49);
// console.log(`scoreDolphins :${scoreDolphins} , scoreKoalas :${scoreKoalas}`);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////
// Introduction to Arrays

// Add elements
// const friends = ['Michael','Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // 這是添加在開頭
// console.log(friends);

// // Remove elements
// friends.pop(); // Remove last
// const popped = friends.pop();
// console.log(popped);   //peter
// console.log(friends);

// friends.shift(); // Remove first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Peter')) {
//   console.log('You have a friend called Steven');
// }


// Introduction to Objects

/**
 * 創造object屬性有很多方法
 * 但使用{} 是最簡單的，一般稱作為：literal Syntax (物件文字語法)
 */


/**
 * Array 有順序，所以要根據索引值取出
 * Object 是根據名字，應對更多 非結構化數據(unstructured data)
 */

const jonasArray = [
  'Jonas',
  'Schmedtamnn',
  2037 - 1991,
  'teacher',
  ['Michael','Steven', 'Steven']
];

  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtamnn',
    age: 2037 - 1991,
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael','Steven', 'Steven'],
    hasDriversLicnese: true,

     /**
      * function attacked to an object called mathod
      * 在這邊就是function value
      */ 

     /**
       * 無法這樣寫入object裡 : 
         function calcAge (birthYeah) {
        return 2037 - birthYeah;
        }
       */

      /**
       * 但如果要避免輸入錯誤的址，
       * 可以把這個
         calcAge: function(birthYeah) {
            return 2037 - birthYeah;
         } 
       * 改寫成以下：
       */

         calcAge: function() {
          console.log(this);   // jonas calling this object. so it's pointed to jonas's property
          return 2037 - this.birthYeah; // 有個好處是不會因object被更名，其他東西也要跟著異動
       },

       calcAge2: function() {
        this.age = 2037 - this.birthYeah;   
        return this.age;    // reuse 且不用怕寫錯代碼的好方式
      },

      getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
      }
  };

  console.log(jonas.calcAge());
  console.log(jonas['calcAge']);
  console.log(jonas.age);

/**
 * //Challenge
 * "Jonas is a 46-year old teacher, and he has a driver's license"
 */

console.log(jonas.getSummary());

/**
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);



/**
 * bracket用法 可以替換成任意我們喜歡的詞語
 */
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)  //無法這樣寫

/**
 * 利用bracket 配合 輸入事件
 * 呼叫事件觸發
 */

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

/**
 * 如何使用dot 與 bracket 爲object添加新屬性
 */
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

/**
 * 值得注意的是：
 * dot(呼叫)的優先順序 > [ ]
 */
console.log(`${jonas.firstName} 
  has ${jonas.friends.length} friends, 
  and his best friend is called ${jonas.friends[0]}`);

///////////////////////////////////////
// Iteration: The for Loop


// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
}

const jonas2 = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

for (let i = 0; i < jonas2.length; i++) {
  console.log(jonas2[i] , typeof jonas2[i]);

  types.push(typeof jonas2[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0 ; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and berak
console.log('--- ONLY STRING ---')
for (let i = 0; i < jonas2.length; i++) {
  if(typeof jonas2[i] !== 'string') continue;

  console.log(jonas2[i] , typeof jonas2[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas2.length; i++) {
  if(typeof jonas2[i] !== 'number') break;

  console.log(jonas2[i] , typeof jonas2[i]);
}

for (let i = jonas2.length -1; i >=0; i--) {
  console.log(i, jonas2[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

for (let rep = 1; rep <6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// while loop

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
  rep++;
}

/*
Math.trunc 是去掉小數值
Math.random() 會出現0-1之間得數字
*/

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

/**
 * 結論：
 * while 迴圈用在 不需要計次，且不知道次數的時候
 * for 迴圈則是明確知道會跑幾次，有個明確次數
 */

/* for迴圈 與槽狀使用 */

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏻‍♂️`);
//   }
// }

/* CONTINUE AND BREAK */

// const types = [];
// console.log(types);

// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== 'string') continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
//   types.push(typeof jonasArray[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === 'number') break;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }



// console.log(types);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   location: ['Taiwan']
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas[interestedIn])

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';

// if (jonas.interestedIn) {
//   console.log((jonas.interestedIn));
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }


// console.log(jonas);


// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//////////////////////  //////////////////////

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tips);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum +arr[i];
    sum += arr[i];
  }
  return sum / arr.length
}
console.log(calcAverage([2, 3, 7]));