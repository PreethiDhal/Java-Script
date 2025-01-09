var global = 200;
console.log("Value of global is:",global);//200
//console.log("Value of outer is:",outer);//error
//console.log("Value of inner is:",inner);//error
function Outer(){
    var outer = 300;
    console.log("Value of outer is:",outer);
console.log("Value of global is:",global);
//console.log("Value of inner is:",inner_variable);//error
function inner(){
    var inner_variable = 400;
    console.log("Value of inner is:",inner_variable);
    console.log("Value of outer is:",outer);
    console.log("Value of global is:",global);

}
inner();
}
Outer();