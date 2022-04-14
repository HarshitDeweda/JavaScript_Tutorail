// create functions to create multiple objects
// const user1 ={
//     firstName : "Harshit",
//     lastName : "Devda",
//     Age :  18,
//     Email : "harshitdevda97@gmail.com",
//     address : "House Number , Colony , pincode , State",
//     about: function(){
//         return `${this.firstName} is ${this.Age} year old `
//     },
//     Equalto18: function(){
//         return this.Age >= 18;
//     }
// }

// function 
//1. that function create object
//2. add key value pair
//3. object ko return karega

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('harshit', 'Dewda', 'harshit@gmail.com', 18, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
