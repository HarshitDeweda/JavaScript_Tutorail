//call, apply, bind methods

 function about(hobby, musician){
    console.log(this.firstName , this.id , hobby ,musician);
}

const person1 ={
    firstName : "Harshit",
    id : 1,
    // about : function(hobby, musician){
    //     console.log(this.firstName , this.id , hobby ,musician);
    // }
}
const person2 ={
    firstName : "Harsh",
    id : 2,
}

// person1.about.call(person2, "Cricket", "Arijit");
//person1.about();

//apply
about.apply(person1, ["Cricket", "Arijit"]);

// bind
const fun = about.bind(person1, ["Cricket", "Arijit"]);
fun();