var employees=[
    {eid:1000,ename:"ajay",salary:25000,desig:"developer"},
    {eid:1001,ename:"vjay",salary:26000,desig:"qa"},
    {eid:1002,ename:"ram",salary:24000,desig:"developer"},
    {eid:1003,ename:"ravi",salary:25000,desig:"mrk"}

]
//there is a condition
// var arr=[1,2,11,7,8,9]
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);
//find employee whoes salary is >25000
var emps=employees.filter(emp=>emp["salary"]>25000)
console.log(emps);
var devp=employees.filter(emp=>emp["desig"]=="developer")
var devpname=employees.filter(emp=>emp["desig"]=="developer").map(empname=>empname["ename"])
console.log(devp);
console.log(devpname);