

const array = [20,11,40,25,23,11,9,31,60,2,19];

const arrayTransformed= [];
array.forEach( (element)=> {
    arrayTransformed.push(element+10);
});
console.log(array);
console.log("======== using map()  ========");
const arrayTrans = array.map( (element) => {
    return element+10;
} );
console.log(arrayTrans);

console.log("===================");
console.log(array);

