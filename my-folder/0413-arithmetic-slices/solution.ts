// function numberOfArithmeticSlices(nums: number[]): number {
//   let numOfSlices : number = 0;
//   let left : number = 0;
//   let windowSize : number = 0;
//   let leftDiff : number = nums[left+1]-nums[left];

//   for(let right : number = 1;right<nums.length-1;right++){
//     const rightDiff : number = nums[right+1]-nums[right];

//     if(leftDiff===rightDiff){
//       windowSize=right-left+2;
//     }
//     else {
//       if(windowSize>=3){
//         numOfSlices+=((windowSize-2)*(windowSize-1)/2);
//       }
//       left=right;
//       leftDiff=rightDiff;
//       windowSize = 0;
//     }
//   }

//   if(windowSize>=3){
//     numOfSlices+=((windowSize-2)*(windowSize-1)/2);
//   }

//   return numOfSlices;
// };


function numberOfArithmeticSlices(nums: number[]): number {
  if (nums.length < 3) return 0;

  let totalSlices = 0;
  let currentStreak = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      currentStreak++;
      totalSlices += currentStreak;
    } else {
      currentStreak = 0;
    }
  }

  return totalSlices;
}

