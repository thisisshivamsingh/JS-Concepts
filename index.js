// const express = require("express");
// // const
// const app = express();

// // app.use("/profile",
// // });

// console.log(1);

// setTimeout(() => {
//   console.log(3);
//   call();
// }, 100);

// function call() {
//   console.log(2);
// }

// console.log("1");

// const promise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("2"));
//     }, 100);
//   });

// const first = async () => {
//   await promise();
//   console.log("3");
// };
// first();

// console.log("1");

// const promise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("2"));
//     }, 100);
//   });

// const first = async () => {
//   await promise();
//   console.log("3");
// };
// first();

// const pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Hi Promise 1");
//   }, 4000);
// });

// const pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Hi Promise 2");
//   }, 6000);
// });

// async function check() {
//   const p1 = await pr1;
// //   console.log(p1);
// //   console.log("<><><><><><>");
// //   const p2 = await pr2;
// //   console.log(p2);
// // }

// // check();

// // const mailSenderOne = (emailAddress) => {
// //   return new Promise((res, rej) => {
// //     setTimeout(() => {
// //       res(emailAddress + "One");
// //     }, 4000);
// //   });
// // };

// // const mailSenderTwo = (emailAddress) => {
// //   return new Promise((res, rej) => {
// //     setTimeout(() => {
// //       res(emailAddress + "Two");
// //     }, 6000);
// //   });
// // };

// // async function check() {
// //   const p2 = await mailSenderOne("1@gamil.com");
// //   console.log(p2);
// //   console.log("<><><><><><><>");
// //   const p1 = await mailSenderTwo("2@gmail.com");
// //   console.log(p1);
// // }
// // check();

// function getArrayLengthWithoutLoopOrLength(arr) {
//   // Get an array of keys (indices) in the array
//   const keys = Object.keys(arr);

//   console.log("<<>>", keys);

//   // Find the maximum index (which is equivalent to the array length)
//   console.log("<<Keys.map>>", keys.map(Number));
//   const maxIndex = Math.max(...keys.map(Number));

//   // Add 1 because indices are 0-based
//   return maxIndex + 1;
// }

// const myArray = [1, 2, 3, 4, 5];
// const length = getArrayLengthWithoutLoopOrLength(myArray);
// console.log(length); // Output: 5

// const arr = [1, 5, 7, 1];
//  sum = 6

function getRandomNumber(min, max) {
  // Use Math.random() to generate a random decimal between 0 (inclusive) and 1 (exclusive)
  // Multiply it by the range (max - min) and add the minimum value to get a number in the desired range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
let randomNum = getRandomNumber(22, 2);
console.log(randomNum);
