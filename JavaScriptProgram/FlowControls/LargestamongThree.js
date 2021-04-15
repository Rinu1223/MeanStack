var num1=10;
var num2=10;
var num3=10;
 if((num1>num2) && (num1>num3))
{
    console.log(`largest number is ${num1}`);
}
else if((num2>num1) && (num2>num3)){
    console.log(`largest number is ${num2}`);
}

else if((num3>num1) && (num3>num1))
{
    console.log(`largest number is ${num3}`);
}
else
{
    console.log("All numbers are equal");
}