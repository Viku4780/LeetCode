/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n%2===1 && n !== 1) return false;

    const num = Math.log(n) / Math.log(4);

    return Number.isInteger(num);
};
