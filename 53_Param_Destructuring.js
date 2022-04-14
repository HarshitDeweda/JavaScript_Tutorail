//Param destructuring

// object 
// react

const person = {
   Name : "Harshit",
   Age : "18",
}

// function printDetails(obj){
//     console.log(obj.Name);
//     console.log(obj.Age);
// }


function printDetails({Name , Age}){
    console.log(Name);
    console.log(Age);
}

printDetails(person);