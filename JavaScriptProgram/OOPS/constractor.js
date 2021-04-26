class Employee {
    constructor(eid,ename,designation,salary){
        this.eid=eid;
        this.ename=ename;
        this.designation=designation;
        this.salary=salary;
    }
    printEmployee(){
        console.log(`id: ${this.eid}`);
        console.log(`name: ${this.ename}`);
        console.log(`designation: ${this.designation}`);
        console.log(`salary: ${this.salary}`);

    }
}
var obj=new Employee(100,"rinu","developer",20000)
obj.printEmployee()
