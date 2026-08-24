/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let lef = 0;
  let ryt = 1;
  let len=nums.length;

  while(ryt < len){
   if(nums[lef] === nums[ryt]){
    ryt++;
   }else{
    if(ryt-lef>2){
      shiftingArr(nums,lef,ryt);
      len+=-(ryt-lef-2);
      lef+=2;
      ryt=lef+1;
    }else{
      lef=ryt;
      ryt++;
    }
   }
  }

  if(nums[lef]===nums[ryt-1] && ryt===len && ryt-lef>2) len+=-(ryt-lef-2);
  
  return len;
};

function shiftingArr(nums,left,right){
  let j=left+2;
  
  for(let i=right;i<nums.length;i++){
    nums[j] = nums[i];
    j++;
  }
}
