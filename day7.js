// defining a expression function
const square = function(x) {
    return x * x;
};

console.log(square(10));

// defineing function with no parameters
const makeNoise = function() {
    console.log("ping!");
};

makeNoise();

// making function with the two parameters
const power = function(base, exponent) {
    let result = 1;
    for(let counter = 0; counter < exponent; counter++) {
        result *= base;
    }
    return result;
};

console.log(power(2,3));

// empty return statement leads to return undefined
// and the function which don't have return statement also return undefined

// important note regarding the scope of the bindings in JS
// In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.
let x = 10;
if(true) {
    let y = 20;
    var z = 30;
    console.log("inside");
    console.log("x => " + x);
    console.log("y => " + y);
    console.log("z => " + z);
}
console.log("outside");
console.log("x => " + x);
//console.log("y => " + y); // ERROR will be thrown
console.log("z => " + z);

//Each scope can “look out” into the scope around it, so x is visible inside the block in the example. The exception is when multiple bindings have the same name—in that case, code can see only the innermost one. For example, when the code inside the halve function refers to n, it is seeing its own n, not the global n.
const half = function(n) {
    return n/2;
};

let n = 10;
console.log(half(100));
console.log(n);

// program to display varity of the scope
// this is known as the lexical scope

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        // if(ingredientAmount > 1) {
        //     unit += "s";
        // }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");

    return "That's all folks";
};

console.log(hummus(1));

// function declaration noteation
// only disadvantage, it will work whereever you will keep this in the file
function exampleFunction() {
    return "this is a example function";
}

//arrow functions
