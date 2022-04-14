// optional chaining

const user = {
    firstName : "Harshit",
    // address : {houseNumber: '52'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);