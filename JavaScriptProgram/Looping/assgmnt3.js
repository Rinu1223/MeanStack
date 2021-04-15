var lowLimt=5,upperLimit=25;
for( let i=lowLimt;i<=upperLimit;i++){
let flag=0;

for(j=2;j<i;j++){
if(i%j==0){
    flag=1;
    break;
}
}
if(flag==0 && i>1){
    console.log(i);
}
}