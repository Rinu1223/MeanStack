var arr=[1,2,3,4]
var result=6;
for(let i of arr){
    for (let j of arr){
        if(i+j==result && i!=j){
            console.log(i+","+j);
            break;
        }
    }
}
