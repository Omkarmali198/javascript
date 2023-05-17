console.log("------------------------------------");
console.log("1) Find the Greast Number");

var num1 = 10;
var num2 = -10;
var result = num1>=10 && num2 >=-10 ? " 10" : "-10";
console.log(`Greater number between (10,-10) is: ${result}`);

var num1 = 899;
var num2 = 800;
var result = num1>=899 && num2>=800 ? "899" : "800";
console.log(`Greater number between (800,899) is : ${result}`);

console.log("-------------------------------------");
console.log("2) Check Even or ODD number ");

var num1 = 29;
var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
console.log(`29 is ${result}`);

var num1 = 44;
var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
console.log(`44 is ${result}`);

var num1 = 0;
var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
console.log(`0 is ${result}`);

var num1 = 101;
var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
console.log(`101 is ${result}`);

console.log("------------------------------------");
console.log("3) Check word lengthis EVEN or ODD");

var sentence  = "JavaScript";
var sentenceLength = sentence.length;
var result = sentence.length%2 == 0 ? " EVEN word length" : "ODD word length";
console.log(`"Javascript" has ${result}`);

var sentence  = "Developer";
var sentenceLength = sentence.length;
var result = sentence.length%2 == 0 ? " EVEN word length" : "ODD word length";
console.log(`"Developer" has ${result}`);

var sentence  = "Google";
var sentenceLength = sentence.length;
var result = sentence.length%2 == 0 ? " EVEN word length" : "ODD word length";
console.log(`"Google" has ${result}`);




