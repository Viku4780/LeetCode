/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let nums_k = -Infinity;
    const stack = [];

    // Traverse from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
        // If we find an element smaller than our best nums_k, pattern is found
        if (nums[i] < nums_k) {
            return true;
        }

        // Maintain monotonic decreasing stack
        // If current element is larger than top of stack, it can be a peak (nums_j)
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            nums_k = stack.pop(); // The popped element becomes our valid nums_k
        }

        // Push current element as a potential future nums_k or nums_j
        stack.push(nums[i]);
    }

    return false;
};

