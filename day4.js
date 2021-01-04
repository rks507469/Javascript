// let theNumber =  Number("10"); //Number(prompt("Pick a number"));
// console.log("Your number is a square root of " + theNumber*theNumber);

let theNumber = Number("a");
if(!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber*theNumber);
} else {
    console.log("You Naughty Naughty..... Playing with me!!")
}

// one liner if statements
if(1+1 == 2) console.log("It's True");

// if else ladder
let num = Number("1000");
if(num < 10) {
    console.log("Small");
} else if( num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}