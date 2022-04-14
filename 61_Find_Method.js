// find method

// const myArr =["Harshit","Rakhi","Priyansh","Chinu"];

// // function Arrlenght7(string){
// //     return string.lenght === 8;
// // }

// const ans = myArr.find((string)=>string.length===5);
// console.log(ans);


// real life example

const users =[
   {userId: "1",username: "Harshit"},
   {userId: "2",username: "sorbh"},
   {userId: "3",username: "Rakhi"},
   {userId: "4",username: "Chinu"},
];

const myuser = users.find((user)=>{
  return  user.userId===5;
});
console.log(myuser);
