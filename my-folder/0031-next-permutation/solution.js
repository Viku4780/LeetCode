/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    let i = nums.length - 2;

    // Step 1: Find the pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find the rightmost element greater than pivot
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Swap pivot and successor
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: Reverse the suffix starting at i+1
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;

};


