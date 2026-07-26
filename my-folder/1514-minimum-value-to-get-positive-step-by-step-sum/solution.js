/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let startVal = nums[0] >= 0 ? 1 : Math.abs(nums[0]) + 1;
  let sum=0;

  for(let i=0;i<nums.length;i++){
    if(i===0) sum+=startVal+nums[i];
    else {
      sum+=nums[i];
    }

    while(sum<1){
      startVal++;
      sum++;
    }
  }

  return startVal;
    
};
