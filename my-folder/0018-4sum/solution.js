/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let finalResult = [];

    for(let i=0;i<nums.length-3;i++){
      if(i>0 && nums[i]===nums[i-1]) continue;

      threeSum(nums,i,target,finalResult);
    }

    return finalResult;
};

var threeSum = function(nums,firstIdx,target,finalResult) {
  const results = [];

  for (let i = firstIdx+1; i < nums.length - 2; i++) {
    // skip duplicate values for i
    if (i > firstIdx+1 && nums[i] === nums[i - 1]){
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    const remainingTarget = target-nums[firstIdx]-nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === remainingTarget) {   
        finalResult.push([nums[firstIdx],nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < remainingTarget) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
};
