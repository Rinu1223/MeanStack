var arr=[1,2,11,7,8,9]
var squ=arr.map(num=>num**2)
console.log(squ);
var cube=arr.map(num=>num**3)
console.log(cube);
var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1001,ename:"vjay",salary:26000},
    {eid:1002,ename:"ram",salary:24000},
    {eid:1003,ename:"ravi",salary:25000}

]
var enames=employees.map(emp=>emp["ename"].toUpperCase())
console.log(enames);
var esal=employees.map(sal=>sal["salary"])
console.log(esal);
var emid=employees.map(empid=>empid["eid"])
console.log(emid);

