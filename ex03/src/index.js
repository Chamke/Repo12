// Only change code below this line
function rangeOfNumbers(startN, endN) {
  var myArray = [];
   if(startN == endN){
        return [startN];
   }
     else if( startN > endN){
        return console.log("The starting number will always be less than or equal to the ending number");
     }
     myArray = rangeOfNumbers(startN, endN - 1);
    myArray.push(endN);

      return myArray;
    
    
  
  }
// Only change code above this line
console.log(rangeOfNumbers(1,7));
console.log(rangeOfNumbers(3,10));
console.log(rangeOfNumbers(5,5));
console.log(rangeOfNumbers(7,5)); // Change this line
module.exports = rangeOfNumbers;