var a=[10,20,30,40]
var b=[9,10,20,21,22]

a.sort((i,j)=>i-j)

b.sort((i,j)=>i-j)

i = 0,                                
j = 0;                                 

while (i < a.length && j < b.length) {     
while (a[i] < b[j]) {                  
    ++i;                               
}
while (b[j] < a[i]) {                 
    ++j;                               
}
if (a[i] === b[j]) {                   
    console.log(a[i], b[j]);           
    ++i;                               
    ++j;
}
}


//CommonElement.js