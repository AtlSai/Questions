// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

const arr = "w3resource";
const out = "ecruoser3w";

function myfunction(number) {
  const newArr = number.split("");
  const str = [];
  for (let i = newArr.length - 1; i >= 0; i--) {
    str.push(newArr[i]);
  }
  return str.join("");
}
console.log(myfunction(arr));

// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function newFunc(i) {
  if (i >= 50 || i <= 80) {
    console.log("65");
  } else {
    console.log("80");
  }
}
newFunc(90);

// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function newFunc(a, b, c) {
  if (a === b && b === c && c === a) {
    console.log("30");
  } else if (a === b || a === c || b === c) {
    console.log("20")
  } else {
    console.log("50");
  }
}
newFunc(3, 4, 4);

// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// A = √[s(s-a)(s-b)(s-c)],

// let a = 5;
// let b = 6;
// let c = 7;
// let s = (a + b + c)/2;
// console.log(s)
// let area =( s * (s-a) * (s-b) * (s-c) )*( s * (s-a) * (s-b) * (s-c));
// console.log(area);

let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`The area of the triangle is: ${area.toFixed(2)}`);

// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy , dd-mm-yyyy and dd/mm/yyyy

const date = new Date();
date.getFullYear();
console.log(date);
