// method
//Create your own methods
// function inside object

function Info(){
    console.log(`person Name is ${this.firstName} And person Age ${this.Age}`);
}

const person = {
    firstName : "Harshit",
    Age : 18,
    about : Info
}

const person2 = {
    firstName : "Priyansh",
    Age : 18,
    about : Info
}

const person3 = {
    firstName : "Rakhi",
    Age : 15,
    about : Info
}

person2.about();
person.about();
person3.about();