
var string = function TCS(Name, Graduation, HSC, SSC){
    var result = Graduation>=70 || HSC>=80 || SSC>90 ? `Hey ${Name} Congratulation you are eligible for TCS interview. ` :
     `Hey ${Name} Unfortunately you are not eligible for Tcs interview.`
    console.log(result);
}
string("Omkar", 80,86,90);
string("Akash", 70,65,55);
string("Ashish", 60,79,88)