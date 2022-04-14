// How to iterate Object
const person = {
    "name":"Harshit", 
    "age":22 ,
    "Person hobbies":["Cricket","Listing Music","Love Coding"]

};

// for in loop
//for(let key in person){
   // console.log(person[key]);
   //console.log(`${key} : ${person[key]}`);
   //console.log(key , " : " ,person[key]);
//}

// object keys
// console.log(typeof (Object.keys(person)));
// const val  = Array.isArray(Object.keys(person));
// console.log(val);

// for of loop
for(let  key of Object.keys(person)){
    console.log(person[key]);
}