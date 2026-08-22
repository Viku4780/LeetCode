/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // const sqrNums = nums.map(n => n*n);
    // return sqrNums.sort((a,b) => a-b);

    let ryt=nums.length-1;
    let left=0;
    const n = nums.length;

    const result = new Array(n);
    let p=n-1;

    while(left<=ryt){
      if(nums[left]*nums[left]<=nums[ryt]*nums[ryt]){
        result[p]=nums[ryt]*nums[ryt];
        ryt--;
      }else{
        result[p]=nums[left]*nums[left];
        left++;
      }
      p--;
    }

    return result;
};
