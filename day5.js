// introduction to loops, finally
// let number = 0;
// while (number <= 12) {
//     console.log(number)
//     number  = number + 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);

for(let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

let result = 1;
for(let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

for(let current = 20; ; current = current + 1) {
    if(current % 7 == 0) {
        console.log(current);
        break;
    }
}