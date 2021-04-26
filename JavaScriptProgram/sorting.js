var employees=[
    {eid:1000,ename:"ajay",salary:25000,desig:"developer"},
    {eid:1001,ename:"vjay",salary:26000,desig:"qa"},
    {eid:1002,ename:"ram",salary:24000,desig:"developer"},
    {eid:1003,ename:"ravi",salary:25000,desig:"mrk"}

]
var sortemp=employees.sort((em1,emp2)=>em1.salary-emp2.salary)
console.log(sortemp);