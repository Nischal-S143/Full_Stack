//  let num = 153;
//  let temp = num;
//  let sum = 0;
//  let digits = num.toString().length;
//  while (temp > 0) {
//      let digit = temp % 10;
//      sum += digit ** digits;
//      temp = Math.floor(temp / 10);
//  }
//  if(sum === num) {
//      console.log(`${num} is an Armstrong number.`);
//  } else {
//      console.log(`${num} is not an Armstrong number.`);
//  }

// for(var a=0;a<5;a++);
// console.log(a)

/**
 * Integer
 * String
 * Boolean
 * Null
 * Undefined
 

let a=5;
console.log(a,typeof a);
a="Abhishek";
console.log(a,typeof a);
a=true;
console.log(a,typeof a);
a=null;
console.log(a,typeof a);
a=undefined;
console.log(a,typeof a);
*/

/*
console.log(1+1+1+"1");
var a="1";
console.log(Number.parseInt(a)+Number.parseInt(a)+Number.parseInt(a));
*/

// function isArmstrong(n){
//  let sum =0;
//  let order = 0;
//  let rem = 0;
//  let temp = n;
//  while(temp > 0){
//     order+=1;
//     temp = Number.parseInt(temp/10);
//  }
//  temp = n;

//  while(temp >0){
//     rem = temp%10;
//     let res = 1;
//     for(let j = 0 ; j < order ; j++){
//         res=res*rem;
//     }
//     sum = sum + res;
//     temp = Number.parseInt(temp/10);
//  }
//  if(sum == n){
//     console.log("Armstrong");    
//  }
//  else{
//     console.log("Not Armstrong");
    
//  }
// }

// function checkAndShow(){
//     let val1= document.getElementById("val1").value;
//     if(isArmstrong(val1)){
//         console.log("Armstrong");     
//     }
//     else{
//         console.log("Not Armstrong");  
//     }
// }

// this is the js logic to convert the temperature from celcius to fahrenheit

// const input = document.getElementById("val1");

// function convertTemperature() {
//     const celsius = Number(input.value);
//     const fahrenheit = (celsius * 9 / 5) + 32;

//     console.log(fahrenheit + " °F");
// }

// simple profile generator : combine firstName , favoriteNumber and isStudent variable in a single sentence using template literals

// let firstName = "Nischal";
// let favoriteNumber = 7;
// let isStudent = true;

// let profile = `My name is ${firstName}, my favorite number is ${favoriteNumber}, and student status is ${isStudent}.`;
// console.log(profile);



// function generateProfile() {
//     let firstName = document.getElementById("firstName").value;
//     let favoriteNumber = document.getElementById("favoriteNumber").value;
//     let isStudent = document.getElementById("isStudent").value;

//     let profile = `My name is ${firstName}, my favorite number is ${favoriteNumber}, and my student status is ${isStudent}.`;

//     console.log(profile);
// }


// function checkLight() {
//     let lightColor = document.getElementById("lightColor").value.toLowerCase();

//     switch (lightColor) {
//         case "red":
//             console.log("Stop");
//             break;

//         case "yellow":
//             console.log("Slow Down");
//             break;

//         case "green":
//             console.log("Go");
//             break;

//         default:
//             console.log("Invalid light color");
//     }
// }


// factors of 5

// function checkMultiple() {
//     let x = Number(document.getElementById("multiply").value);

//     for (let i = 1; i <= 50; i++) {
//         if (i % x === 0) {
//             console.log(i);
//         }
//     }
// }




// function checkFactorial() {
//     let x = Number(document.getElementById("multiply").value);
//     let fact = 1;

//     for (let i = x; i >=1; i--) {
//        fact*=i; 
//     }
//     console.log(fact);
    
// }

// area of rectangle
// function checkArea() {
//     let x = Number(document.getElementById("height").value);
//     let y = Number(document.getElementById("width").value);
//     let area = x*y;
//     console.log(area);
    
// }

// function isPalindrome() {
//     let x = Number(document.getElementById("pal").value);
//     let original = x;
//     let reverse = 0;
//     while (x > 0) {
//         let digit = x % 10;
//         reverse = reverse * 10 + digit;
//         x = Math.floor(x / 10);
//     }
//     if (original === reverse) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not Palindrome");
//     }
// }


// let numbers = [1, 2, 3, 4, 5, 6];
// let result = numbers.filter(num => num % 2 === 0);
// console.log(result);

// Output: [2, 4, 6]



// let numbers = [5, 12, 8, 130, 44];
// let result = numbers.find(num => num > 10);
// console.log(result);

// Output: 12



// let numbers = [5, 12, 8, 130, 44];
// let result = numbers.find(num => num > 10);
// console.log(result);

// Output: 12




// let numbers = [10, 20, 30, 40];
// let result = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0);
// console.log(result);

// Output: 100
// const mul = ((a,b)=>a*b);
// console.log(mul(2,3));


// const greet = () => {
//     console.log("hello world");
    
// }

// string split armstrong
// function isArmstrong(num) {
//   let digits = String(num).split('');
//   let sum = 0;
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i] ** digits.length;
//   }
//   return sum === num;
// }
// console.log(isArmstrong(153)); 
// console.log(isArmstrong(123));  

// setTimeout Implementation

// setTimeout(()=>{
//     console.log("hello world")
// },2000);

// setInterval Implementation

// setInterval(()=>{
//     console.log("hello world")
// },1000);

// let inputMinutes = prompt("Enter minutes for the timer:");
// let time = inputMinutes * 60;
// let display = document.getElementById("timer");
// let timerId = setInterval(() => {
//   time--;
//   let mins = Math.floor(time / 60);
//   let secs = time % 60;
//   display.innerText = mins + ":" + (secs < 10 ? "0" + secs : secs);
// }, 1000);
// setTimeout(() => {
//   clearInterval(timerId);
//   display.innerText = "Time is up!";
// }, inputMinutes * 60000);

// let myVariable = 1;
// if (myVariable) {
//   console.log("This will NOT run.");
// }
// if (!myVariable) {
//   console.log("This WILL run because !falsy becomes true.");
// }
// let arr = [1,2,3,4,5];
// console.log(arr);
// let nArr = arr.map((n)=>{return n*n;});
// console.log(nArr);


// let numbers = [1, 2, 3, 4, 5, 6];
// let result = numbers.filter(num => num % 2 === 0);
// console.log(result);

// Function to convert decimal to binary
// function convertToBinary(num) {
//   if (num === 0) return "0";
  
//   let binaryString = "";
//   let currentNum = num;
  
//   while (currentNum > 0) {
//     let remainder = currentNum % 2;
//     binaryString = remainder + binaryString; // Prepend the remainder
//     currentNum = Math.floor(currentNum / 2); // Divide by 2 and round down
//   }
  
//   return binaryString;
// }

// Function to convert decimal to hexadecimal
// function convertToHexadecimal(num) {
//   if (num === 0) return "0";
  
//   const hexCharacters = "0123456789ABCDEF"; // Map for remainders 0-15
//   let hexString = "";
//   let currentNum = num;
  
//   while (currentNum > 0) {
//     let remainder = currentNum % 16;
//     hexString = hexCharacters[remainder] + hexString; // Get corresponding hex character and prepend
//     currentNum = Math.floor(currentNum / 16); // Divide by 16 and round down
//   }
  
//   return hexString;
// }

// const number = 254;

// console.log(`Decimal: ${number}`);
// console.log(`Binary: ${convertToBinary(number)}`);      // Outputs: 11111110
// console.log(`Hexadecimal: ${convertToHexadecimal(number)}`); // Outputs: FE

let arr = [1,2,3,4,5];
console.log(arr);
arr.push(6);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.foo = "Nischal"
console.log(arr);



