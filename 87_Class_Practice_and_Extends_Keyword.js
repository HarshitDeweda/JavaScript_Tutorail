//class practice and extends keyword
class Animal{
    constructor(name , age){
         this.name = name;
         this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// const animall = new Animal("Cat",2);
// console.log(animall);
// console.log(animall.eat());
// console.log(animall.isSuperCute());


//Dog Class
// class Dog{
//     constructor(name , age){
//          this.name = name;
//          this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// sub class

class Dog extends Animal{

        }
    
 const animall = new Dog("Tommy",3);
 console.log(animall);
              


// const animall = new Dog("Tommy",3);
// console.log(animall);
// console.log(animall.eat());
// console.log(animall.isSuperCute());
