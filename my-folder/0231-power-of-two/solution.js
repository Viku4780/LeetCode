/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   let num = Math.log2(n);

   if(num%1 === 0) return true;
   else            return false;
                   
};
