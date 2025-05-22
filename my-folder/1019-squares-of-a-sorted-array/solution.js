/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const sqrNums = nums.map(n => n*n);
    return sqrNums.sort((a,b) => a-b);
};
