/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // 1. Found the target
        if (nums[mid] === target) {
            return mid;
        }

        // 2. Check if the left half is sorted
        if (nums[low] <= nums[mid]) {
            // Check if the target lies within the sorted left half
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1; // Search left
            } else {
                low = mid + 1;  // Search right
            }
        } 
        // 3. Otherwise, the right half must be sorted
        else {
            // Check if the target lies within the sorted right half
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;  // Search right
            } else {
                high = mid - 1; // Search left
            }
        }
    }

    return -1; // Target not found
};

