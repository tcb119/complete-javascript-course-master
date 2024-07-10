'use strict';

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
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage);

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
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
///////////////////////////////////////
// Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDrivesLicensense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDrivesLicensense ? 'a' : 'no'} driver's license.`
//   }
// };

// console.log(jonas);

// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi)

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }


// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// Introduction to Objects

/* i-- */


/* While迴圈 */

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
//   rep++;
// }

/*
Math.trunc 是去掉小數值
Math.random() 會出現0-1之間得數字
*/

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

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