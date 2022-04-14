// sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Oreder is not guaranted
// unique items only (no duplicates allowed)


// const number = new Set([1,2,3,4,5,6,7,8,9]);
// console.log(number);
//console.log(number[2]); // undefind

//empty sets

// const item = ['item1','item2','item3'];
// const number = new Set();
// number.add(1);
// number.add(2);
// number.add(3);
// number.add(4);
// number.add(5);
// number.add(6);
// number.add(item);
//console.log(number);

// check element in set
// if(number.has(1)){
//   console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }

// for(let numbers of number){
//     console.log(numbers);
// }

const myArray =[1,2,4,5,5,4,6,6,];
const uniqueElement = new Set(myArray);
// console.log(uniqueElement);

// Find length
let length = 0 ;
for(let element of uniqueElement){
    length++;
}

console.log(length);