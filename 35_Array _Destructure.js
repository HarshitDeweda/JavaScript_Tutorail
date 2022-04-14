// array destructure 
const myarr = ["Value1","Value2","Value3","Value4","Value5"];
/*
var1= myarr[0];
var2= myarr[1];
console.log("value of var1",var1);
console.log("value of var2",var2);
*/

//array destructure
let [myvar1, ,myvar2, ...myNewArray]=myarr;
//let myNewArray = myarr.slice(2);
myvar1="value changed";
console.log("value of var1",myvar1);
console.log("value of var2",myvar2);
console.log(myNewArray);

// ,, let means one index is a skip
// ....myNewArray means myarr index other element add to MyNewArray