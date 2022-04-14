// reduce method

const numbers=[4,6,9,3,4,9];


// sum of all numbers in array
const sum = numbers.reduce((accmulator,currentvalue)=>{
  return accmulator + currentvalue;
});

console.log(sum);
// accmulator    currentvalue  return
// 4                6            10
// 10               9            19
//19                3            22
// 22               4            26
// 26               9            35


// Q.2
const userCart =[
    {productId : 1 , productName : "Mobile" , price : "15000"},
    {productId : 2 , productName : "laptop" , price : "16000"},
    {productId : 3 , productName : "Shirt" , price : "1000"},
    {productId : 4 , productName : "T-Shirt" , price : "1500"},
    
]


const TotalAmount =   userCart.reduce((totalPrice , currentProduce)=>{
   return  totalPrice+currentProduce.price;
},0);

console.log(TotalAmount);

// totalprice    currentProduce   return
// 0               {}              15000
// 15000           16000           31000
//31000            1000            32000
//32000            1500            33500              