// data types in the javascript
    // Numbers
    // anything that is related to the digits falles in this category
    // examples of numbers datatype
    console.log(10);
    console.log(9.99);
    console.log(2.688e10);

    // Arthimetic : operations associated with the Numbers
    // + : Addition
    // - : subtraction
    // * : multiplication
    // / : division
    // % : Modulo
    // there is something called as operator precedence
    // examples
    console.log(2 * 4 + 8);
    console.log(9 % 2 * 5);

    // Special Numbers
    // Infinity, -Infinity, NaN
    console.log(Infinity);
    console.log(-Infinity);
    console.log(NaN);

    // Strings in javasctipt
    console.log(`This is a String`);
    console.log("This is also a String");
    console.log('This is also a string');
    // special character in the string
    console.log(`This is a string\nThis is new line string`);
    // using + operator to concatenate
    console.log('This ' + 'is ' + 'also ' + 'a ' + 'string');
    // template literal used inside the strings created with ``
    console.log(`This is a template literal example : Answer =  ${100/2}`);

    // Unary operators in javascript
    console.log(typeof 4.5);
    console.log(typeof "x");

    // Boolean values
    console.log(true);
    console.log(false);

    // Comparision operator
    console.log(10 > 13);
    console.log(10 < 13);
    console.log("Pizza" > "Pasta");
    console.log("Apple" != "Orange");
    console.log("Apple" == "Orange");
    // special case : NaN is not equal to another NaN
    console.log(NaN == NaN);

    // Logical Operators
    console.log(true && false);
    console.log(true || false);
    // Terniary logical operator
    console.log(true ? 1 : 2);
    console.log(false ? 1 : 2);

    // Empty values
    console.log(null);
    console.log(undefined);

    // Automatic Type conversion OR Type coercion
    console.log(2 * null);
    console.log("5" - 1);
    console.log("5" + 1);
    console.log("five" * 2);
    console.log(false == 0);
    console.log(null == undefined);
    console.log(null == 0);
    console.log(null || "String");
    console.log("Billi" || "Monty");
    // Strict comparision
    console.log(null === undefined);