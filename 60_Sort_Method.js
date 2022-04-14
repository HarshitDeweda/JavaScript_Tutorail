// sort method

// sort

//45,86,1,5,789,3000,1200
//1,5,45,86,789,1200,3000(expeted)


const number =[45,86,1,5,789,3000,1200]
//[1, 1200, 3000, 45, 5, 789, 86]
//[49. 49,   51,  52, 53, 55, 56]
// 0 : 48
// 1 : 49
// 2 : 50
// 3 : 51
// 4 : 52
// 5 : 53
// 6 : 54
// 7 : 55
// 8 : 56
// 9 : 57  

// number.sort();
// console.log(number);

number.sort((a,b)=>{
  return a-b;
  //return b-a;
});
// number.sort((a,b)=>a-b);
console.log(number);

// a-b positive b,a
// a-b negitive a,b


// Q.2
// const usersname =["harshit","Priyansh","abc","Chinu","Harshit"];
// usersname.sort();
// console.log(usersname);


// real life example
//price LowTohigh  HighToLow

const Productes =[
    {productId : 1 , productName : "Mobile" , price : "15000"},
    {productId : 2 , productName : "laptop" , price : "16000"},
    {productId : 3 , productName : "Shirt" , price : "1000"},
    {productId : 4 , productName : "T-Shirt" , price : "1500"},
    
]

//LowToHigh
const lowToHigh = Productes.slice(0).sort((a,b)=>{
    return a.price-b.price;
});

const HighTolow = Productes.slice(0).sort((a,b)=>{
    return b.price-a.price;
});

console.log(HighTolow);
console.log(lowToHigh);