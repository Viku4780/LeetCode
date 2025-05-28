/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const window = new Set(); // acts like the sliding window

    for (let i = 0; i < nums.length; i++) {
        // If value already exists in the window, we found a duplicate
        if (window.has(nums[i])) return true;

        // Add current value to window
        window.add(nums[i]);

        // Ensure window size does not exceed k
        if (window.size > k) {
            window.delete(nums[i - k]);
        }
    }

    return false;
};

