// hasOwnProperty
function createUser(firstName, lastName, email, age, address){
    
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


const user1 = new createUser('harshit', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user2 = new createUser('Rakhi', 'Dewda', 'harshit@gmail.com', 18, "my address");
const user3 = new createUser('Chinu', 'Dewda', 'harshit@gmail.com', 18, "my address");
 //console.log(user1);

 for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
       console.log(key);
    }
 }