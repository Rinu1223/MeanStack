let num =123,res;
while(num!=0){
//Extract last digit from number
let digit =num%10;//123%10=3 digit=12%10=2 digit=1%10=1
console.log(digit);//3 2 1
res=res*10+digit;
num=Math.floor(num/10);//num=123/10=12 12/10=1 1/10=0
}
console.log(res);
//armstrong number 
//123
//1*1*1+2*2*2+3*3*3=36
//153
//1*1*1+5*5*5+3*3*3=153

