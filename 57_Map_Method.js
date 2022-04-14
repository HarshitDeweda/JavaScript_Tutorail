// map method

const numbers=[5,9,6,3,5,8];

// const square = function(number){
//    // console.log(number*number);
//   return number*number;
// }

// const newsquare = numbers.map(square);
// console.log(newsquare);

 
//  const newsquare = numbers.map(function(number){
//      return number*number;
//  });
//  console.log(newsquare);

// const newsquare = numbers.map((number , index)=>{
//     return  ` index : ${index} , ${number*number}`;
// });
// console.log(newsquare);


// real example
const users=[
    {Name : "Harshit", Age : "18"},
    {Name : "Priyansh", Age : "18"},
    {Name : "Rakhi" , Age : "16"},
 
 ]

 const usersname =  users.map((user)=>{
        return user.Name;
    });

    console.log(usersname);