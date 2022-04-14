// arrow functions

const person1 = {
    firstName : "Harshit",
    id : 1,
     about :() =>{
         console.log(this.firstName , this.id );
     }
}

person1.about(person1);