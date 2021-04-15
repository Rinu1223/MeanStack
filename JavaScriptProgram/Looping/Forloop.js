//while
//Initialization
//condition
//incrmnt or decrmnt
//for
//for(initialization;CSSConditionRule;incrmnt or decrmnt)
//{
//stamnt
//}
//for(let i=10;i>=0;i--){
 //   console.log(i);
//}
//prgm to chk given number is prime or not
//13(13,1)
//7(1,7)
//11(1,11)
var num=2;flag=0;
for(let i=2;i<num;i++){
if(num%i==0){
    flag = 1;
    break;
}

}
if(flag!=0){
    console.log("Not Prime ");
}
else{
    console.log("Prime number");
}