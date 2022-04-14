// nested if else 

// Winnig number 19
// low number
// high number

let Winnignumber=19;
let user_guess = +prompt("Guess a number : ");
//"12"
//console.log(typeof user_guess,user_guess);

if(Winnignumber === user_guess){
    console.log("your guess is right");
}
else{
    if(user_guess < Winnignumber){
        console.log("your number is low");
    }
    else{
        console.log("To high");
   
    }
}