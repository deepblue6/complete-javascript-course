"use strict";

// functions video #33
// stopped on video 39

// function add(a, b) {
//   return a + b;
// }

// const d = function (z) {
//   console.log("yay");
// };

// //d();

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// // const bills = [125, 555, 44];
// // const tips = bills.map(calcTip);
// // const totals = bills.map((bill, i) => bill + tips[i]);
// const [bills, tips, totals] = [[125, 555, 44], [], []];
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(calcTip(bills[i]) + bills[i]);
// }

// //

// console.log(bills, tips, totals);

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["job"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const myFunc = () => {
//   const zz = prompt("What do you want to know about Jonas?");
//   if (!jonas[zz]) {
//     console.log("Bad request, try again...");
//     myFunc();
//   } else {
//     console.log(jonas[zz]);
//     return;
//   }
// };
// // myFunc();
// console.log(
//   jonas.firstName +
//     " has " +
//     jonas.friends.length +
//     " friends, and his best friend is called " +
//     jonas.friends[0]
// );
// console.log(
//   jonas.firstName +
//     " has " +
//     jonas.friends.length +
//     " friends, and his best friend is called " +
//     ["Michael", "Bob", "Vicky"][0]
// );
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sche",
//   birthYear: 1991,
//   currYear: 2025,
//   job: "teacher",
//   friends: ["Michael", "Bob", "Vicky"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     return this.currYear - this.birthYear;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(jonas);
// console.log(jonas.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = Math.round(this.mass / this.height ** 2);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = Math.round(this.mass / this.height ** 2);
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI())
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// else
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sche",
//   birthYear: 1991,
//   currYear: 2025,
//   job: "teacher",
//   friends: ["Michael", "Bob", "Vicky", "z", "x", "gg", "hg"],
//   hasDriversLicense: true,
// };
// for (let i = 0; i < jonas.friends.length; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(jonas.friends[i] + " is friend number " + (i + 1));
// }
// const [bills, tips, totals] = [
//   [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
//   [],
//   [],
// ];
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// console.log(tips, totals);

// const testData = [17, 21, 23];

// const printForecast = function (arr) {
//   let string = "";
//   for (let i = 0; i < testData.length; i++) {
//     string += `... ${testData[i]}C in ${i + 1} days`;
//   }
//   string += " ...";
//   console.log(string);
// };

// printForecast(testData);

const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
let totalHours = 0;
let averageHours = 0;
let mostHoursWorked = 0;
let numDaysWorked = 0;
let weekFullTime = false;

for (let i = 0; i < testData.length; i++) {
  if (testData[i] > 0) {
    numDaysWorked++;
  }
  if (testData[i] > mostHoursWorked) {
    mostHoursWorked = testData[i];
  }
  totalHours += testData[i];
}
if (totalHours >= 35) {
  weekFullTime = true;
}

averageHours = totalHours / testData.length;
console.log(
  totalHours,
  averageHours,
  mostHoursWorked,
  numDaysWorked,
  weekFullTime
);
