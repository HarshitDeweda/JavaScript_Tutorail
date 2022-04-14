// every method
// const numbers =[44,86,2,4,780,3000,1200]

// // function isEven(number){
// //     return number%2==0
// // }

// const ans = numbers.every((number)=>number%2==0);
// console.log(ans);


// callback function true , false (boolean)
// every method true , false (boolean)


// real life example
// check less than 30000
const userCart =[
    {productId : 1 , productName : "Mobile" , price : "15000"},
    {productId : 2 , productName : "laptop" , price : "16000"},
    {productId : 3 , productName : "Shirt" , price : "1000"},
    {productId : 4 , productName : "T-Shirt" , price : "1500"},
    
]

const ans =userCart.every((cartItem)=>cartItem.price<30000);
console.log(ans);