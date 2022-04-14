// function inside function

function app(){
const fun = () =>{
    console.log("My Function");
}

const Add =(num1,num2) => num1+num2;

const Mul =(num1,num2) => num1*num2;

console.log("inside app");
fun();
console.log(Add(4,6));

console.log(Mul(4,6));

}
app();