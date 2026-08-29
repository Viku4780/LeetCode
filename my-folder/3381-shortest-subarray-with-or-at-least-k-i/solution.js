/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var minimumSubarrayLength = function (nums, k) {
//   let left = 0;
//   let len = Infinity;
//   let sum = 0;

//   if(k===0) return 1;

//   function recursion(){
//     for (let right = left; right < nums.length; right++) {
//       sum |= nums[right];

//       while (left <= right && sum >= k) {
//         len = Math.min(len, right-left+1);
//         sum = 0;
//         left++;
//       }
//     }
//   }
//   return len===Infinity ? -1 : len;
// };

var minimumSubarrayLength = function (nums, k) {
  // Edge Case: Any single element will have a bitwise OR >= 0
  if (k === 0) return 1;

  let left = 0;
  let len = Infinity;
  let currentOr = 0;
  
  // Track how many times a '1' bit appears at each of the 32 positions
  const bitCounts = new Array(32).fill(0);

  for (let right = 0; right < nums.length; right++) {
    // 1. Add right element to the bit counts and window OR
    currentOr |= nums[right];
    for (let i = 0; i < 32; i++) {
      if ((nums[right] >> i) & 1) {
        bitCounts[i]++;
      }
    }

    // 2. Shrink window from the left as long as it remains "special"
    while (left <= right && currentOr >= k) {
      len = Math.min(len, right - left + 1);

      // Remove the left element's bits from tracking
      for (let i = 0; i < 32; i++) {
        if ((nums[left] >> i) & 1) {
          bitCounts[i]--;
        }
      }

      // Re-calculate the current OR value from the remaining bits
      currentOr = 0;
      for (let i = 0; i < 32; i++) {
        if (bitCounts[i] > 0) {
          currentOr |= (1 << i);
        }
      }

      left++;
    }
  }

  return len === Infinity ? -1 : len;
};

