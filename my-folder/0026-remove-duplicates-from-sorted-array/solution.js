/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
// const removeDuplicates = [];
//  nums.forEach(n => {
//     if(removeDuplicates.includes(n)) return;
//     else  removeDuplicates.push(n);
//  });
//  nums.splice(removeDuplicates.length);

//  for(let i=0;i<removeDuplicates.length;i++){
//     nums[i] = removeDuplicates[i];
//  }

//  return nums.length;

//  if(nums.length===1) return 1;

 let left=0;
 let count=1;

 for(let ryt=1;ryt<nums.length;ryt++){
   if(nums[left]===nums[ryt]){
     continue;
   }else{
    if(ryt-left>1){
      left++;
      nums[left]=nums[ryt];
    }else  left++;
    count++;
   }
 }

 return count;
 
};
