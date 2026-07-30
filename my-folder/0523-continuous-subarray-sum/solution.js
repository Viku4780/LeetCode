/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    // Key: remainder, Value: index where it first appeared
    const remainderMap = new Map();
    
    // Base case: a remainder of 0 at index -1 handles 
    // subarrays that start from the very beginning (index 0)
    remainderMap.set(0, -1);
    
    let runningSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        
        let remainder = runningSum % k;
        
        // Handle negative remainders just in case nums has negative numbers
        if (remainder < 0) {
            remainder += k;
        }
        
        // If we have seen this remainder before
        if (remainderMap.has(remainder)) {
            // Check if the subarray length is at least 2
            if (i - remainderMap.get(remainder) >= 2) {
                return true;
            }
        } else {
            // Only store the first occurrence to maximize subarray length
            remainderMap.set(remainder, i);
        }
    }
    
    return false;
};

