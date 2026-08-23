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

  // let left=0;
  // let right=nums.length-1;
  // const seen = new Set();

  // while(left<right){
  //   const target = -(nums[left]+nums[right]);

  //   if(target>=nums[left] && target<=nums[right]){
  //     // in this case we are assuming that from the left and right should exist,if it exists in that case the left and right update seems correct if not then may their exists some triplet with either left and right in it that case is simple ignored here that's why this implemnetation is wrong to begin with;

  //     let low=left+1;
  //     let hi=right-1;

  //     while(low<=hi){
  //       const mid = Math.floor((low+hi)/2);

  //       if(nums[mid]===target){
  //         const targetTriplet = `${nums[left]},${nums[mid]},${nums[right]}`;
  //         if(!seen.has(targetTriplet)){
  //           results.push([nums[left],nums[mid],nums[right]]);
  //           seen.add(targetTriplet);
  //         }
  //         left++;
  //         right--;
  //       }
  //       else if(nums[mid]<target) low=mid+1;
  //       else                      hi=mid-1;
  //     }
  //   }
  //   else if(target<nums[left]) left++;
  //   else                       right--; 
  // }

  // return results;
};


