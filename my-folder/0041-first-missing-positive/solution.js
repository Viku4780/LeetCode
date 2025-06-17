/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const set = new Set(nums);

    // Check from 1 up to nums.length + 1
    for (let i = 1; i <= nums.length + 1; i++) {
        if (!set.has(i)) return i;
    }
};

