// function minSubArrayLen(target: number, nums: number[]): number {
//     let minLen : number;
//     let left : number = 0;
//     let sum : number = 0;

//     for(let right : number = 0;right<nums.length;right++){
//       sum+=nums[right];

//       while(sum>=target){
//         if(minLen===undefined) minLen=right-left+1;
//         else                   minLen = Math.min(minLen,right-left+1)
//         sum-=nums[left];
//         left++;
//       }  
//     }

//     return minLen===undefined ? 0 : minLen;
// };


function minSubArrayLen(target: number, nums : number[]) : number {
  const prefixArr = new Array(nums.length + 1).fill(0);
  let minLength = nums.length;

  for(let i = 1; i < nums.length + 1; i++){
    prefixArr[i] = prefixArr[i-1] + nums[i-1];
    if(prefixArr[i] >= target) minLength = Math.min(minLength, i);
  }

  if(target > prefixArr[nums.length]) return 0;

  let left = 1;
  
  for(let right = 1; right < prefixArr.length; right++){
    while(prefixArr[right] - prefixArr[left] >= target){
      minLength = Math.min(minLength, right-left);
      left++;
    }
  }

  return minLength;
}
