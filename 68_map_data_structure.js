// map data structure
// map is an iterable

// store data in ordered in fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects 

// different between map and object 
//object can only   have string or  symbol

//as key 

// in map you can use anything as key 
//  like array , number , string

// object iterables
// key -----> string
// key ------> symbol
// const person ={
//     firstName : "Harshit",
//     Age : 7,
//     1 : "one",
// }
// // console.log(person.firstName);
// console.log(person['1']);
// for(let key in person){
//   console.log(typeof key);
// }


// // key value pair
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('Age' , 18);
// person.set(1,'one');
// // console.log(person);
// // console.log(person.get(1));
// // for(let key of person.keys()){
// //     console.log(key, typeof key);
// // }

// // for of loop
// for(let [key,value] of person){
//     //    console.log(Array.isArray(key));
//         console.log(key,value);
//      }

const person1 ={
    firstName : "Harshit",
    id : 1,
}
const person2 ={
    firstName : "Harsh",
    id : 2,
}



const extraInfo = new Map();
extraInfo.set(person1 ,{age : 18 , Gender : "Male"} );
extraInfo.set(person2 ,{age : 18 , Gender : "FeMale"} );
console.log(person1.id);
console.log(extraInfo.get(person1).Gender);
console.log(extraInfo.get(person2).Gender);

// const person = new Map([['firstName','Harshit'],['Age','18']]);
// console.log(person);