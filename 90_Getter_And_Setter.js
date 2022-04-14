// getter and setters
class person{
   constructor(firstname, lastname ,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
   }
   get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
   // setName(firstName, lastName){
   //  this.firstname = firstName;
   //  this.lastname =lastName;
   // }
   set fullname(fullName){
      const [firstname , lastName] = fullName.split(" ");
      this.firstname = firstname;
      this.lastname = lastName;
  }
}

const person1 = new person("harshit","Dewda",18);
// person1.firstname = "Rakhi";
// person1.lastname="Dewda";
//console.log(person1.fullname());
//console.log(person1.fullname);
//person1.setName("Sorbh",18);
// person1.firstname="rakhi";
// person1.lastname= "Dewda"
// console.log(person1.firstname);
// console.log(person1.lastname);
person1.fullName = "Rakhi Dewda";
console.log(person1);