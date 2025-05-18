/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let nums = BigInt(digits.join(''));
    nums ++;
    const string = nums.toString();

    return Array.from(string,ch => Number(ch));
}
