//find first recursive character
var text ="ABABC"
var result={}
for(let ch of text){
    if(ch in result){
console.log(ch +" is the first recursive character");
break;
    }
    else{
        result[ch]=1
    }
}