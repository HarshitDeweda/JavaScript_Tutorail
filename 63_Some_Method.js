// some method

const numbers = [5,9,1,7,8];

// check arrays one elemntes even numbers
//true

// const ans=numbers.some((number)=>number%2==0);
// console.log(ans);

// real life example
// Check product price grather tahns 30000
const userCart =[
    {productId : 1 , productName : "Mobile" , price : "15000"},
    {productId : 2 , productName : "laptop" , price : "16000"},
    {productId : 3 , productName : "Shirt" , price : "1000"},
    {productId : 4 , productName : "T-Shirt" , price : "3500"},
    
]

const ans =userCart.some((cartItem)=>cartItem.price>30000);
console.log(ans);