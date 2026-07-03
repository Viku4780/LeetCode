/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let lef = 0;
  let ryt = 1;

  while(ryt < nums.length){
   if(nums[lef] === nums[ryt]){
    if(nums[ryt] === nums[ryt+1] ) nums.splice(ryt,1);
    else{
      lef++;
      ryt++;
    }
   }else{
    lef++;
    ryt++;
   }
  }
  
  return nums.length;
};
