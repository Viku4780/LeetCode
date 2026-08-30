/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    // sliding window
    let maxLen = 0;
    
    // Find total unique characters in the string to optimize the loops
    const totalUnique = new Set(s).size;
    
    // Loop through the allowed number of unique characters from 1 to totalUnique
    for (let targetUnique = 1; targetUnique <= totalUnique; targetUnique++) {
        const freq = {};
        let left = 0;
        let uniqueCount = 0;
        let atLeastKCount = 0;
        
        for (let right = 0; right < s.length; right++) {
            // Expand window
            const charR = s[right];
            freq[charR] = (freq[charR] || 0) + 1;
            
            if (freq[charR] === 1) {
                uniqueCount++;
            }
            if (freq[charR] === k) {
                atLeastKCount++;
            }
            
            // Shrink window if unique characters exceed the allowed target
            while (uniqueCount > targetUnique) {
                const charL = s[left];
                if (freq[charL] === k) {
                    atLeastKCount--;
                }
                freq[charL]--;
                if (freq[charL] === 0) {
                    uniqueCount--;
                }
                left++;
            }
            
            // If every unique character in the current window appears >= k times
            if (uniqueCount === atLeastKCount) {
                maxLen = Math.max(maxLen, right - left + 1);
            }
        }
    }
    
    return maxLen;
};
