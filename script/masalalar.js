// Masala: 1 
// function sumInput() {
//     let numbers = [];
//     let input;

//     do {
//         input = prompt("Qiymat kiriting:", "");
//         let number = Number(input);
//         if (!isNaN(number)) {
//             numbers.push(number); 
//         }
//     } while (input !== null && input !== "");

//     let sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     return sum;
// }
// let totalSum = sumInput();
// alert("Umumiy qiymat: " + totalSum);

// console.log("Umumiy qiymat: " + totalSum);


// Masala: 2 
// let musicGenres = ["Jazz", "Blues"];
// console.log("1", musicGenres.join(", "));
// musicGenres.push("Rock-n-Roll");
// console.log("2", musicGenres.join(", "));

// let middleIndex = Math.floor(musicGenres.length / 2);
// musicGenres[middleIndex] = "Classic";
// console.log("3", musicGenres.join(", "));

// let firstGenre = musicGenres.shift();
// console.log("4", firstGenre);
// console.log("  ", musicGenres.join(", "));
// musicGenres.unshift("Rap", "Reggae");
// console.log("5", musicGenres.join(", "));
 

// Masala: 3
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
// }
// let salaries = {
//     "Akmal": 1200,
//     "Salim": 5200,
//     "Karima": 1800   
// };

// console.log("Natija:", sumSalaries(salaries));

// let sumMath = 0;
// let count = 0;

// for (let salary of Object.values(salaries)) {
//     sumMath += salary;
//     count++;
//     if (count === 3) break;
// }
// console.log("3 ta ishchi uchun oyliklar:", sumMath); 


// Masala: 4
// function calcSum(arr) {
//     if (!arr || arr.length === 0) return [];

//     let evenSum = 0,
//         oddSum = 0;

//     for (let num of arr) {
//         if (num % 2 === 0) evenSum += num; 
//         else oddSum += num; 
//     }

//     return [evenSum, oddSum];
// }

// console.log(calcSum([1, 2, 3, 4, 5]));