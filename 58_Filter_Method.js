// filter method

const numbers=[5,9,6,3,5,8]; 


// const isEven = function(number){
//   return number%2==0;
// }

const isOdd = function(number){
    return number%2==!0;
  }
  

// const evenNumber = numbers.filter(isEven);
// console.log(evenNumber);


const OddNumber = numbers.filter(isOdd);
console.log(OddNumber);

const evenNumber = numbers.filter((number)=>{
    return number%2==0;

});
 console.log(evenNumber);
