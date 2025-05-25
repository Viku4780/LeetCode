/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let n = Math.pow(num,0.5);
    n = Math.ceil(n);

    return n*n === num;
};
