// arrow function
const HYBRO = ()=>{
    console.log("Hy Bro");

}

HYBRO();

const Add =  (number1 , number2 ,number3) =>{
    return number1 + number2 + number3;
}

const Sum = Add(8,5,6);
console.log(Sum);




const Even = num => num%2==0;
console.log(Even(4));


const firstchar = (anystring) => anystring[0];
console.log(firstchar("Harshit"));



const findtarget = (array , target) => {
    for(let i=0; i<=array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}
