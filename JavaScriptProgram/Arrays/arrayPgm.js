//  array is collection of same or different type objects by using common name
//data structure
//Linear 
//non linear
var expen=[22000,23000,24000,25000,true]

expen[0]=26000;

expen.push(2700)
expen.push(28000)
expen.pop()
//console.log(expen);
//length
//for(i=0;i<expen.length;i++)
//{
   // console.log(expen[i]);
//}


// another method
////for(let num of expen) {
//    console.log(num);
//}

//another method

//expen.forEach(num=>console.log(num))
//arrayPgm.js



for(let num of expen){
    if(num>=24000){
        console.log(num);
    }
}