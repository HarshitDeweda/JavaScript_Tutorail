// function returning function

function fun(){
    function hello(){
        return "Hello Word"
      //  console.log("Hello");
    }
    //return {Name : "Harshit", Age : "18",};
    return hello;
}

const ans = fun();
console.log(ans());