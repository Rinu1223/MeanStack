// print even numbers from the array
//arrayEvenNum.js
var arr=[10,11,12,13,14,15]
var evenarray=[],oddarray=[];
for(let num of arr){
    if(num%2==0){
        
           
          evenarray.push(num)
         
    }
    else{
        oddarray.push(num)
        
    }
    
}
console.log(`even numbers ${evenarray}`);
   console.log(`odd numbers ${oddarray}`);