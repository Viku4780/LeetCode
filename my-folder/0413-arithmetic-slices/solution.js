/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if(nums.length<3) return 0;

    let d;
    let left = 0;
    let count= 0;
    let lastPos;
    let n;

    for(let ryt=1; ryt<nums.length; ryt++){
      //  if((nums[ryt] - nums[left]) === (nums[ryt+1] - nums[ryt])){
      //   count++;
      //  }

      if(ryt===1){
         d = nums[ryt]-nums[left];
      }else{
        if(d !== nums[ryt]-nums[ryt-1]){
          n = ryt-left-1;
          count+= n*(n-1)/2;
          left=ryt-1;
          d=nums[ryt]-nums[ryt-1];
        }else{
          lastPos=ryt;
        }
      }
    }

    if(lastPos-left>=2){
      n = lastPos-left;
      count+= n*(n-1)/2;
    }

    return count;
};
