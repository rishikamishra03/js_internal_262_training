let a = 5, b = 8;
console.log(a + b);

//2
let name = "Rishika";
console.log("Hello " + name);
//3
let num = 7;
if(num % 2 === 0) 
    console.log("Even");
else 
    console.log("Odd");
//4
let c = 25;
let f = (c * 9/5) + 32;
console.log(f);
//5
let e= 10, h = 25, g = 15;
console.log(Math.max(e,h,g));
//6
let str = "JavaScript";
console.log(str.length);
//7
let flag = true;
flag = !flag;
console.log(flag);
//8
let s1 = "Hello ";
let s2 = "Rishu";
console.log(s1 + s2);
//9
let n = -5;
if(n > 0) console.log("Positive");
else if(n < 0) console.log("Negative");
else console.log("Zero");
//10
var x = 10;
let y = 20;
const z = 30;
console.log(x, y, z);
//11
let num1= 5;
for(let i = 1; i <= 10; i++){
  console.log(num1 + " x " + i + " = " + num1*i);
}
//12
let sum = 0;
for(let i = 1; i <= 10; i++) 
 sum += i;
 console.log(sum);
 //13
 let day=3
 switch(day){
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;  
 }
 //14
 function canVote(age){
    return age >= 18 ? "Eligible" : "Not Eligible";
}
console.log(canVote(17));
//15
function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11));
//16
let num2 = 123;
let sums = 0;
while(num2 > 0){
    sums += num2 % 10;
    num2 = (num2 / 10);
}
console.log(sums);
//17
function reverseStr(str){
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    return rev;
}
console.log(reverseStr("hello"));
//18
let marks = 82;

if(marks >= 90) console.log("A");
else if(marks >= 75) console.log("B");
else if(marks >= 50) console.log("C");
else console.log("Fail");
//19
function calc(a, b, op){
    switch(op){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return "Invalid operator";
    }
}
console.log(calc(10, 5, "+"));
//20
function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let ch of str){
        if(vowels.includes(ch)) count++;
    }
    return count;
}
console.log(countVowels("Rishika"));
//21
let n1= 7;
let a1 = 0, b1 = 1;
console.log(a1, b1);
for(let i = 3; i <= n1; i++){
    let c1= a1 + b1;
    console.log(c1);
    a1 = b1;
    b1 = c1;
}
//22
function minMax(arr){
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}
console.log(minMax([5, 2, 9, 1, 7]));
//23
let choice = 3;
let p= 10, q = 5;

switch(choice){
    case 1: console.log(p + q); break;
    case 2: console.log(p - q); break;
    case 3: console.log(p*q); break;
    case 4: console.log(p/ q); break;
    default: console.log("Invalid choice");
}
//25
function isArmstrong(number){
    let sum = 0;
    let temp = number;
    let digits = number.toString().length;

    while(temp > 0){
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}

console.log(isArmstrong(153));




