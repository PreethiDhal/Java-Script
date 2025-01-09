class Employee{
    constructor(name,salary){
 this.emp_name = name;
 this.emp_salary = salary;
    }
    work(){
        console.log(this.emp_name,"is working");
    }
}
e1 = new Employee('Akash',35000);
e1 = new Employee('Ankit',45000);
console.log(e1.name,e1.salary);
console.log(e2.name,e2.salary);
e1.work();
e2.work();