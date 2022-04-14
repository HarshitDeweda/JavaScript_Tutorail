// defult parameter

// function add(a,b){
//     if(typeof b ==="undefined"){
//        b=0;
//     }
//     return a+b;
// }

// const ans = add(6,9)
// console.log(ans);

function add(a,b =0){
 return a+b;
}

const ans = add(6,9)
 console.log(ans);
