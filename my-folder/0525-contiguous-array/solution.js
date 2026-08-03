/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
   const sumMap = new Map();

   sumMap.set(0, -1);

   let runningSum=0;
   let maxLen=0;

   for(let i=0;i<nums.length;i++){
    runningSum += (nums[i]===0) ? -1: 1;

    if(sumMap.has(runningSum)){
       maxLen = Math.max(maxLen, i - sumMap.get(runningSum))
    }else{
      sumMap.set(runningSum,i);
    }
   }

   return maxLen;
};
