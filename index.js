// // question 1
// const multiplesOfSixAndNine = (pos) => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 6 === 0 && i % 9 === 0) {
//       console.log(i);
//     }
//   }
// };

// multiplesOfSixAndNine();

// //question 2
// const greaterNum = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else if (num2 > num1) {
//     return num2;
//   } else if (num1 === num2) {
//     return "Both integers are equal";
//   } else {
//     return "null";
//   }
// };
// console.log(greaterNum("21", 21));

// //question 3
// const sumOfFourAndSix = () => {
//   all = 0;
//   for (let j = 0; j <= 1000; j++) {
//     if (j % 4 === 0 && j % 6 === 0) {
//       console.log((all += j));
//       // += means we are reassigning the variable
//     }
//   }
// };

// sumOfFourAndSix();

// //question 4
// const oddAndEvenToN = (arg) => {
//   if (arg % 2 === 0) {
//     return `${arg} is even`;
//   } else {
//     return `${arg} is odd`;
//   }
// };

// console.log(oddAndEvenToN(57));

// // question 5
// const sumOfNotDivisibleByTen = () => {
//   for (let k = 1; k <= 1000; k++) {
//     if (k % 10 !== 0) {
//       console.log(k);
//     }
//   }
// };

// sumOfNotDivisibleByTen();

// question 6
const greaterNumber = (int1, int2, int3, int4) => {
  if (int1 > int2 && int1 > int3 && int1 > int4) {
    return int1;
  } else if (int2 > int3 && int2 > int4) {
    return int2;
  } else if (int3 > int4) {
    return int3;
  } else if (int4) {
    return int4;
  } else if (int1 === int2 && int1 === int3 && int1 === int4) {
    return "These are all equal!";
  } else {
    return "null";
  }
};

console.log(greaterNumber("21", 21, 60, 3));
