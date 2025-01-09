function mul(){
  if(arguments.length === 2){
      console.log(`Multiplication of ${arguments[0]} 
      and ${arguments[1]} is:`,arguments[0]*arguments[1]);
  }
  else if(arguments.length === 3){
      console.log(`Multiplication of ${arguments[0]}, ${arguments[1]} and 
      ${arguments[2]} is:`,arguments[0]*arguments[1]*arguments[2]);
  }
  else if (arguments.length === 4){
      console.log(
      `Multiplication of ${arguments[0]}, ${arguments[1]}, ${arguments[2]} and 
      ${arguments[3]} is:`,arguments[0]*arguments[1]*arguments[2]*arguments[3]);
  }
  else {
      console.log('Invalid number of Arguments...!!')
  }
}

mul();            //---> arguments= []
mul(10,20);       //---> arguments= [10,20]
mul(10,20,30);    //--->arguments= [10,20,30]
mul(10,20,30,40); //--->arguments= [10,20,30,40]


function mul1(){
    let res = 1;
    for(let i = 0;i < arguments.length;i++){
        res = res*arguments[i];
    }
    console.log('Multiplication result is:',res);
}
mul1(10,20);
