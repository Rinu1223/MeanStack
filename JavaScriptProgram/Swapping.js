var num1=10;
var num2=20;
// without using third variable
//num1= num1+num2;
//num2=num1-num2;
//num1=num1-num2;
//console.log(`num1 = ${num1}`);
//console.log(`num2 = ${num2}`);
// Using third variable
var temp;
temp=num1;
num1=num2;
num2=temp;
console.log(`num1 = ${num1}`);
console.log(`num2 = ${num2}`);
