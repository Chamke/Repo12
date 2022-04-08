// Only change code below this line

function sumFibonacci(num){
    var fibArr = [0,1];
    var sum = 0;

    for (let i = 2; i <= num; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
      }

      for(let i = 0; i <= fibArr.length; i++){
          if( fibArr[i] % 2 != 0 && fibArr[i]<= num){
            sum += fibArr[i];
          }
      }

      return sum;
}
// Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;