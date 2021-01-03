// let theNumber =  Number("10"); //Number(prompt("Pick a number"));
// console.log("Your number is a square root of " + theNumber*theNumber);

let theNumber = Number("a");
if(!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber*theNumber);
} else {
    console.log("You Naughty Naughty..... Playing with me!!")
}