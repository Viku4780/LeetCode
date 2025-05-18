/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /*
var threeSum = function(nums) {
  const arr = [];
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // sort the triplet so duplicates like [ -1, 0, 1 ] and [ 0, -1, 1 ] match
          const trip = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          const key = trip.join(',');
          if (!seen.has(key)) {
            seen.add(key);
            arr.push(trip);
          }
        }
      }
    }
  }
  return arr;
};
*/

var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        results.push([nums[i], nums[left], nums[right]]);

        // move past duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
};


