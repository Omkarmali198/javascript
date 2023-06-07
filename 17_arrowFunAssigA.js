

console.log(`1) Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`Good Morning, Today is Monday`);
}
display();

console.log(`2) Arrow function with 3 arguments and no return value`);
let multiply = (num1, num2, num3=1) => {
    let result = num1 * num2 * num3;
    return result;
}
let result = multiply(5, 5, 2);
console.log(`Multiplication is : ${result}`);

let resultM = multiply(10, 4);
console.log(`Multiplication is : ${resultM}`);

console.log(`3) Arrow function with 5 arguments and no return value`);
let add = (num1, num2, num3, num4, num5) => {
    let resultAdd = num1 + num2 + num3 + num4 + num5;
    return resultAdd;
}
let resultAdd = add(100, 100, 200, 349, 756);
console.log(`Addition is : ${resultAdd}`);

let resultAddition = add( "I am " , "learning ", "ES6 ", `features ` , "in depth");
console.log(`Addition is : ${resultAddition}`);
