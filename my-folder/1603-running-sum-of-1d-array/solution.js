/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const sumArr = new Array(nums.length).fill(0);

  for(let i=0; i<nums.length;i++){
    if(i>0) sumArr[i]=nums[i]+sumArr[i-1];
    else    sumArr[i] = nums[i];
  }
    
  return sumArr;
};
