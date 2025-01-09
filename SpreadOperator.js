const mul = (...args)=>{
    let res = args.reduce((acc,ele) => acc * ele,1);
    console.log('result is:',res);
}
mul(); //args = []
mul(10,20); //args = [10,20]
mul(10,20,30); //args = [10,20,30]

function add (...args) {
    let res = args.reduce((acc,ele)=> acc + ele,0);
    console.log("addition is",res);
}
add();
add(10,20);
add(1,2,3);