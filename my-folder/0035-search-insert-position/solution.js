/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // if(nums.includes(target)){
  //   for(let i = 0;i < nums.length;i++){
  //   const el = nums[i];
  //   if(el === target) return i;
  // }
  // }else{
  //    nums.push(target);
  //   nums.sort((a,b) => a-b);
  //   for(let i = 0;i < nums.length ; i++){
  //   const el = nums[i];
  //   if(el === target) return i;
  //   }
  // }

  let left = 0;
  let right = nums.length - 1;

  while(left<right){
    const med = Math.floor((left + right)/2);

    if(nums[med] === target) return med;
    else if(nums[med] > target) right = med;
    else                        left = med + 1;
  }

  const med = Math.floor((left + right)/2);

  if(nums[med] < target) return med + 1;
  else if(nums[med] === target) return med;
  else {
    return med === 0 ? 0 : med
  }
};
