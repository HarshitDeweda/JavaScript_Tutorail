// rest parameter

// function fun(a,b,c,d){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`d is ${d}`);
   
// }

// fun(5,9,6,3,2,1,0);

// function fun(a,b,...c){
//          console.log(`a is ${a}`);
//          console.log(`b is ${b}`);
//          console.log(`c is `,c);
        
       
//      }
    
//     fun(5,9,6,3,2,1,0);


function AddAll(...numbers){
    let total =0;
  for(let number of numbers)
    total = total + number;
    return total;
}

const ans = AddAll(5,9,6,3,2,4);
    console.log(ans);

