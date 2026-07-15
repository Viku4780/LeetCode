/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
  //  let l;
  //  const arr = [];

  //  for(let i=0;i<nums.length;i++){
  //   if(nums[i]%2 === 0){
  //       l=i;
  //       break;
  //   }
  //  }
  //  if(!l) return 0;
  //  let r;
  //   for(let i=l;i<nums.length;i++){
  //       if(nums[i] > threshold){
  //          r = i-1;
  //          break;
  //       } 
  //       arr.push(nums[i]);
  //   }
  //   if(!r) r = nums.length - 1;

  //   if(r>l){
  //       for(let i=l;i<r;i++){
  //       if(nums[i] % 2 === nums[i + 1] % 2) return 0;
  //       }
  //   }else if(l === r){
  //       if(arr.length === 1){
  //           if(arr[0] === 2) return 1;
  //           else     return 0;
  //    }
  //   }
  //   return arr.length;



  // sliding window
  let left;
  let len = 0;
  for(let i=0; i<nums.length;i++){
    if(nums[i]%2 === 0 && nums[i] <= threshold){
      left = i;
      break;
    }
  }

  if(left === undefined) return 0;

  len++;

  for(let right=left+1;right<nums.length;right++){
    if(nums[left]%2 !== 0){
      left++;
      continue;
     }
     if(nums[right]<=threshold && nums[right]%2 !== nums[right-1]%2){
      len=Math.max(len,right-left+1);
     }else{
      if(nums[right]%2===0 && nums[right]<=threshold) left=right;
      else if(right+1<nums.length) left=right+1;
     }
  }

  return len;

};
