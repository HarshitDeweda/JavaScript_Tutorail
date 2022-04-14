// new keyword
// function createUser(firstName , age){
//     this.firstName = firstName;
//     this.age =age;
// }

// createUser.prototype.about= function(){
//    console.log(this.firstName , this.age);
// }

// const user = new createUser("Harshit",18);

// // new
// // 1. empty object this =  {}
// // 2   return this

// //console.log(user);
// user.about();

//new keyword 2
//Constructer function
function createUser(firstName, lastName, email, age, address){
    //const user = Object.create(createUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    this.about = createUser.about;
    this.is18 = createUser.is18;
    
}

createUser.prototype.about = function(){
             return `${this.firstName} is ${this.age} years old.`;
        };

createUser.prototype.is18 = function(){
           return this.age >= 18;
       };

// console.log(createUser.prototype);
const user1 = new createUser('harshit', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user2 = new createUser('Rakhi', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user3 = new createUser('Chinu', 'Dewda', 'harshit@gmail.com', 18, "my address");
 console.log(user1);
 //console.log(user1.is18());
 //const is18 = user1.is18();
// const about = user1.about();
// console.log(about);
// console.log(user1);
// console.log(user1.about());
// console.log(user2.about());
