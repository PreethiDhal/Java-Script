//if-else
var age = 19;
if (age > 18) {
    console.log("Age is greater than 18");
} 
else {
    console.log("Age is not greater than 18");
}
//Switch()
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Start of work week!");
        break;
        case "Tuesday":
            console.log("Its tuesday");
            break;
            case "Friday":
                console.log("Almost Weekend!");
                break;
                default:
                    console.log("Just another day");
}
// While loop
let count = 1;
while (count <= 5) {
    console.log("Count is:",count);
    count++;
}
// do while loop
let number = 1;
do {
    console.log("Number:",number);
    number++;
} while (number <= 3);
// for of loop: returns the value of each item
var arr = [100,200,300,400]
for (var i of arr) {
    console.log(i);
}
// for in loop - retunrs index of each item
var arr1 = ['preethi','priti','dhal']
for (var i in arr1) {
    console.log(i);
}
// for each ()loop
var arr3 = [10,20,30,40]
arr3.forEach((ele,index,complete_arr)=>{
    console.log(ele,index,complete_arr);
})
// break
for (let i = 1; i<=5; i++){
if (i === 3) {
    break;
}
console.log(i);
}
// continue
for (let i = 1; i<=5; i++){
    if (i === 3) {
        continue;
    }
    console.log(i);
    }

