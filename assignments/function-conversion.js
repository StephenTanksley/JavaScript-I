// Take the commented ES5 syntax and convert it to ES6 arrow Syntax


// let myFunction = () => {
// console.log("Function was invoked!");
// };
// myFunction();


let anotherFunction = param => param;
anotherFunction("Example");
console.log(anotherFunction("Example"));


let add = (param1, param2) => (param1 + param2);
add(1,2);
console.log(add(1,2));


let subtract = (param1, param2) => (param1 - param2);
subtract(1,2);
console.log(subtract(1,2));

// Stretch


exampleArray = [1,2,3,4];

const triple = exampleArray.map(num => num * 3);

console.log(triple);


/*For now, I've done the MVP. I'll return to try the stretch after I finish the other assignments. */