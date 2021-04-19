var employess=[
    [1000,"ram","developer",2,25000],
    [1001,"ravi","developer",1,2000],
    [1002,"raju","qa",2,300000],
    [1003,"nikhil","mkrt",2,25000]
]
// for(let employee of employess){
    
//         console.log(employee[1]);
   
    
// }

// print employee names  whoes salary is >22000
// for(let employee of employess){
//     if(employee[4]>22000){
//         console.log(employee[1]);
//     }
    
// }
//count of developers
var count=0;
for(let employee of employess){
if(employee[2]=="developer"){
    count++;
}


}
console.log(count);