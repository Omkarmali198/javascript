console.log("First function with no argument and no return type");
console.log("Second function with no argument and no return type");

console.log("---------------Personal Details--------------"); 

console.log("First name : Omkar");
console.log("Last Name : Mali");
console.log("College Name : JJMCOE");

console.log("---------------swapVariblesDude--------------");

var a = "Virat";
var b = "Anushka";

var numOne = 1000;
var numTwo = 2000;


function swapVariables(valueOne, valueTwo){ // Arguments: valueOne =100  valueTwo = 200 var valueThree;
    console.log("Before Swap: ", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log("After Swap: ", valueOne, valueTwo);
}
swapVariables(a, b);
swapVariables(numOne, numTwo);


console.log("---------------addThreeValues--------------");

function addition(num1, num2,) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);