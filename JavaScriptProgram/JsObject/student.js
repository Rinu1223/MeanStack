//student.js
//create an object named as student with rol=100,name=vinu,course=bca,total=150
student={
    rol:100,
    name:"vinu",
    course:"bca",
    total:150
}
//print student name only
console.log(student["name"]);
console.log(student.name);
// chk for grade key is exist or not

if("grade" in  student)
{
    console.log("found");
}
else
{
    console.log("not found");
}
//add new key value pair grade
student["grade"]="B +";
console.log(student);
//
//update mark with current mark+50
 student["total"]+=50;
 console.log(student);
 for(let key in student){
     console.log(key);
     console.log(student[key]);
 }