/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xReverse = 0;
    let num = x

    while(num > 0){
        xReverse = xReverse*10 + (num%10);
        num = Math.floor(num/10);
    }
    return x === xReverse;
};
