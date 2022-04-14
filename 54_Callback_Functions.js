// callback functions

// function fun(a)
// {
//     console.log(a);
//     console.log("Harshit");
// }

// fun("adf");


function fun2(name){
    console.log("inside fun2");
    console.log(`your Name is ${name}`);
}

function fun(callback){
    console.log("I am groot");
  callback("Harshit");
}

fun(fun2);