/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  let maxVal = 0;
  let currentVal = 0;

  for(let i=0;i<k;i++){
    sum += nums[i];
  }
  currentVal += sum;
  maxVal = currentVal;

  if(nums.length > k){
    for(let i=k;i<nums.length;i++){
     currentVal += nums[i] - nums[i-k];
     maxVal = Math.max(maxVal,currentVal); 
  }
  }
  return Number((maxVal/k).toFixed(5));
};
