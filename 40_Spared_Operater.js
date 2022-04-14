// spread operater 

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// //const ArrNext = [...array1 , ...array2 , 45,5];
// const ArrNext = [..."abc"];
// console.log(ArrNext);

 
// spread operater in Objects

const obj1={
    key1 : "value1",
    key2 : "value2",
}

const obj2={
    key1 : "value12",
    key3 : "value3",
    key4 : "value4",
}

// const newObj ={...obj1, ...obj2};
//const newObj ={...obj2, ...obj1, key5 : "value5"};
// const newObj ={...["iteam1" , "iteam2"]};
const newObj = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObj);


