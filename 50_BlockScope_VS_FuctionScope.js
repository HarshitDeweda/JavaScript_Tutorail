// block scope function scope 


// let const are blocke scope



//let and const are access only one our block not access block outside
{   const Name ="Harshit";
    // let Name="Harshit";
    console.log(Name);
}


{
    const Name = "Sorbh"; 
    // let Name="Sorbh";
    console.log(Name);
}

//var is function scope

{
    var Name ="Harshit";
    
}
console.log(Name);

{
    var Name ="Sorbh";
    console.log(Name);
}


// if
// if(true){
//     var Name ="Sorbh";
//     console.log(Name);
// }
//  console.log(Name);


// function 
function myapp(){
    if(true){
        var Name ="Harshit";
        console.log(Name);
    }
    console.log(Name);
}

myapp();
