// key value pairs
//[]=>array
//{}=>objects
var employee={
    id:1000,
    name:"ajay",
    exp:2,
    salary:25000,
    location:"kakkanad"

}
//key=>id,name,salary,location
//fetching values by using corresponding key
console.log(employee["name"]);
console.log(employee["salary"]);
//console.log(employee.location);
console.log("gender" in employee);
employee["gender"]="male"
console.log(employee);
employee["salary"]+=5000;
console.log(employee);