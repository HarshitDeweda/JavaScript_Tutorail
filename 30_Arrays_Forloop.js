// For loop in arrays

let fruit= ["apple","Mango","grapsh","banana"];

//for(let i=0;i<=4;i++){
 // console.log(fruit);
//}

//console.log(fruit.length);
//console.log(fruit[fruit.length-2]);
let fruit2=[];
for(i=0;i<fruit.length;i++){
    //console.log(fruit[i]);
    fruit2.push(fruit[i].toUpperCase());
}
console.log(fruit2);