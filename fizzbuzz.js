
function fizzbuzz(aNum){
 if(aNum % 3 === 0 && aNum % 5 === 0 ) return "FizzBuzz";
 else if(aNum % 5 === 0) return "Buzz";
 else if (aNum % 3 === 0) return "Fizz";
 else return aNum;
 }

 module.exports ={fizzbuzz}