// important array mehtods

// for each method

const numbers = [5,6,2,6,1,6];

// function mulBYTwo(number,index){
//   console.log(`index is ${index} number is ${number}`);
// //   console.log(`${number}*2 =  ${number*2} `);
// }

//mulBYTwo(number[0],0);
//mulBYTwo(number[1],0);

// for(let i=0;i<number.length; i++){
//     // console.log(i);
//     mulBYTwo(number[i],i);
// }

//numbers.forEach(mulBYTwo);
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
//     console.log(`${number}*2 =  ${number*2} `);
// });


// real life example

const users=[
   {Name : "Harshit", Age : "18"},
   {Name : "Priyansh", Age : "18"},
   {Name : "Rakhi" , Age : "16"},

]

// users.forEach(function(user){
//     console.log(user.Name)
// });

users.forEach((user,index)=>{
    console.log(user.Name ,index);
});