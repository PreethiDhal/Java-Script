class Student {
    constructor(s_name,s_age,s_email) {
        this.name = s_name;
        this.age = s_age;
        this.email = s_email;
    }
    eat() {
        console.log(this.name,'is eating');
    }
    learn() {
        console.log(this.name,'is learning');
    }
}

s1 = new Student('Akash',22,'akash@kod.com');// creating object of student class
console.log(s1.name,s1.age,s1.email);//accesssing instance variables
s1.eat();//Invoking instance method
s2 = new Student('priti',23,'priti@gmail.com');
console.log(s2.name,s2.age,s2.email);
s2.learn();