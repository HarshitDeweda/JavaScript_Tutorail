function HYBRO(){
    console.log("Hy Bro");

}

HYBRO();

function Add(number1 , number2 ,number3){
    return number1 + number2 + number3;
}

const  returnvalue = Add(12 , 15 ,6);
console.log(returnvalue);

//console.log(Add());


// odd or even 
//input : 1 number 
// Output : true 

// function Even(num){
//     if(num%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(Even(5));

//Q.2 input : String Output : FirstCharacter

// function Character(anystring){
//     return anystring[0];
// }

// console.log(Character("adafg"));

//Q.3 input array ,target (number)
// Output :  index of target if target parsent in array

// function findtarget(array , target){
//     for(let i=0; i<=array.length;i++){
//         if(array[i]==target){
//             return i;
//         }
//     }
//     return -1;
// }

// const Array=[1,2,6,4,2,];
// const ans = findtarget(Array , 6);
// console.log(ans);