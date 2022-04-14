// lexical Scope

const myvar = "value1";

function myapp(){
   // const myvar = "value1";

   function fun(){
      // const myvar = "12";

      const fun2= () =>{
        console.log("inside fun" , myvar);
      }
      // console.log("inside fun" , myvar);
      fun2();
   }
  //  const fun2 = function(){}
   //const fun3=() =>{}
  
   console.log(myvar);
   fun();
}

myapp();