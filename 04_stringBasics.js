console.log("-------------Assignment 1---------------");

var company = "Tata Consultancy Services";
console.log("My dream company is : ",company );

console.log("----------------------------------------");

var hobbies = "writing reading travelling";
console.log("My hobbies are : ", hobbies);

var hobbieslength = hobbies.length;
console.log("Total number of characters are : ",hobbieslength);

console.log("-----------------------------------------");
console.log("-------------Assignment 2----------------");

var string = "  Hey you are doing good, keep it up  ";
var stringLength = string.length;
console.log("1. Given string as it is : ",string);

var stringlength = string.length;
var trimmedstring = string.trim();
var stringLength = trimmedstring.length;
var lengthAfterTrim = trimmedstring.length;
console.log("2. Total lenght of given string is : ",stringlength);
console.log("3. After remove leading and trailing extra space length is :",stringLength);
console.log("4. Trimmed total spaces : ", stringlength-lengthAfterTrim);


var trimmedstring = string.charAt(2);
var charAtLastIndex = string.charAt(string.length-3);
console.log("5. First and last charactor : ", trimmedstring ,charAtLastIndex );

var sentence = "Hey you are doing good, keep it up"
var resultSplit = sentence.split(" ");
console.log("6. Total number of words: ",resultSplit.length);

var indexOfM = sentence.indexOf("good")
console.log("7. Index of Good is: ", indexOfM);

var subStringResult = sentence.substring(22);
console.log("8. a) Substring result is: ", subStringResult);

var subStringResult = sentence.substring(22);
console.log("8. b) Substring result is: ", subStringResult);

var result = sentence.endsWith("up");
console.log(`9. String is ends with world "up" : ${result}`);

var result = sentence.startsWith("Hey");
console.log(`10. String is starts with world "Hey" : ${result}`);













