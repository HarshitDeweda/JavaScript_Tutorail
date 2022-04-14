//  function expressions 

// function HYBRO(){
//     console.log("Hy Bro");

// }
const HYBRO = function(){
    console.log("Hy Bro");

}

HYBRO();

const Add =  function(number1 , number2 ,number3){
    return number1 + number2 + number3;
}

const Sum = Add(2,5,6);
console.log(Sum);


const Even = function(num){
           return num%2==0;
     }

     console.log(Even(11));



     
const firstchar = function(anystring){
     return anystring[0];
}

const findtarget = function(array , target){
        for(let i=0; i<=array.length;i++){
            if(array[i]==target){
                return i;
            }
        }
        return -1;
    }
    