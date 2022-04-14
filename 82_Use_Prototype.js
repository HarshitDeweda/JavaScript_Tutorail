// const userMethod={
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 :  function(){
//         return this.age >= 18;
//     }
// }

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = createUser.about;
    user.is18 = createUser.is18;
    return user;
}

createUser.prototype.about = function(){
             return `${this.firstName} is ${this.age} years old.`;
        };

createUser.prototype.is18 = function(){
           return this.age >= 18;
       };

// console.log(createUser.prototype);
const user1 = createUser('harshit', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user2 = createUser('Rakhi', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user3 = createUser('Chinu', 'Dewda', 'harshit@gmail.com', 18, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);
// console.log(user1);
// console.log(user1.about());
// console.log(user2.about());
