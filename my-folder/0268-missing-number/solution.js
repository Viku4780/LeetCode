/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let legt = nums.length;
    for(let i=0;i<legt;i++){
        sum += nums[i];
    }

    return legt*(legt + 1)/2 - sum;
};
