// // updating the values
// let counter = 0;

// counter += 1; // same as counter = counter + 1
// // counter++; => post increment
// counter *= 1; // same as counter = counter * 1
// counter /= 1; // same as counter = counter / 1
// counter -= 1; // same as counter = counter - 1
// // counter--; => post decrement

// //pattern printing
// for(let line = "#"; line.length < 8; line += "#") {
//     console.log(line)
// }

// // Fizz Buzz problem
// // Fizz -> number divisible by 3 not 5
// // Buzz -> number divisible by 5 not 3
// // FizzBuzz -> number divisible by both 3 and 5
// for(let i = 1; i <= 100; i++) {
//     if(i%3 == 0 && i%5 != 0) {
//         console.log("Fizz");
//     }
//     else if(i%3 != 0 && i%5 == 0) {
//         console.log("Buzz");
//     }
//     else if(i%3 == 0 && i%5 == 0) {
//         console.log("FizzBuzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// //smart apporach
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }

// Chess Board Gid of 8 X 8
for(let i = 1; i <= 8; i++) {
    let line = "";
    for(let j = 1; j <= 8; j++) {
        if(i&2 != 0) {
            if(j%2 != 0) {
                line += " ";
            }
            else {
                line += "#";
            }
        }
        else {
            if(j%2 != 0) {
                line += "#";
            }
            else {
                line += " ";
            }
        }
    }
    console.log(line);
    line = "";
}