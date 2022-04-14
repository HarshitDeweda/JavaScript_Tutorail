// store methods in different object

const userMethod={
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 :  function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}

const user1 = createUser('harshit', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user2 = createUser('Rakhi', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user3 = createUser('Chinu', 'Dewda', 'harshit@gmail.com', 18, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);

console.log(user1.about());
console.log(user2.about());
