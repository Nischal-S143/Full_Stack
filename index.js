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

function isArmstrong(n){
 let sum =0;
 let order = 0;
 let rem = 0;
 let temp = n;
 while(temp > 0){
    order+=1;
    temp = Number.parseInt(temp/10);
 }
 temp = n;

 while(temp >0){
    rem = temp%10;
    let res = 1;
    for(let j = 0 ; j < order ; j++){
        res=res*rem;
    }
    sum = sum + res;
    temp = Number.parseInt(temp/10);
 }
 if(sum == n){
    console.log("Armstrong");    
 }
 else{
    console.log("Not Armstrong");
    
 }
}

function checkAndShow(){
    let val1= document.getElementById("val1").value;
    if(isArmstrong(val1)){
        console.log("Armstrong");     
    }
    else{
        console.log("Not Armstrong");  
    }
}