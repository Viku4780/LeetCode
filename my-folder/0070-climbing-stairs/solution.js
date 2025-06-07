/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let numTwo = Math.floor(n/2);
    let totalWays = 0;

    function factorial(num){
     let one=1;
     
     if(num === 0) return 1;
        for(let i=1;i<=num;i++){
        one *= i;
        }
     return one;
    }
    
    for(let i=0;i<=numTwo;i++){
       totalWays += factorial(n-i)/(factorial(n-i*2) * factorial(i));
    }
    return totalWays;
};
