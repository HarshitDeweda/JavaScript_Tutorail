// What is prototype
function hello(){
    console.log("hello");
}
// hello();

// javascript function ----> function , Object

// console.log(hello.name);

// you can add your properties
// hello.muproperty = "Harshit";
// console.log(hello.muproperty);

// function provides more usefull properties
// function proviedes freespace = prototype
// only function proviades prototype
// console.log(hello.prototype);

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.song = function(){
    console.log("Maste the Blaster");
};
console.log(hello.prototype.song());