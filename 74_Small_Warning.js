// small warning

const person1 = {
    firstName : "Harshit",
    id : 1,
     about : function(hobby, musician){
         console.log(this.firstName , this.id , hobby ,musician);
     }
}

// don't do this mistake 

//person1.about();
//const fun = person1.about();
const fun = person1.about.bind(person1);
fun();