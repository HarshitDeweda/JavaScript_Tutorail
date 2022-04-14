const obj1 = {
  key1: "value1",
  key2: "value2",
}


//_ _ _proto_ _ _
//officle ecamascript documentation
// [[prototype]]
// _ _proto_ _ , [[prototype]]

// prototype

// there is one more  way to create empty object
const obj2 = Object.create(obj1); // {}
obj2.key3 = "value3";
//obj3.key2="unique";
 console.log(obj2.key3);

 
 // this is happnig
 console.log(obj2.__proto__);