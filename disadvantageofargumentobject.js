//1. arguments object cannot be used with arrow functions:
//2.arguments object cannot be used with fliter, hap, reduce, forEach

//const add = ()=> {
//
//let res = 0;
//for(var i=0; i<arguments.length; i++) {
//res = res + arguments [i];
//}
//console.log('Addition Result is: ', res);
//}
//add();
//add(10,20);
//add(10,20,30);

function add(){
    let res = arguments.reduce((acc, ele)=>acc * ele,1);//arguments.reduce is not a function
    console.log(res);
}
add();
add(10,20);
add(10,20,30);