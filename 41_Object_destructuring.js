// Object destructuring

const car ={
    carName : "BMW",
    famouscar : "TaTa Nano",
    year:2020,
    model:"BMW M4", 
};

// const carName = car.carName;
// const famouscar =car.famouscar;

// console.log(carName , famouscar);

const {carName , famouscar , ...other} = car
//const {carName:var1 , famouscar:var2} = car
console.log(carName);
console.log(other);
