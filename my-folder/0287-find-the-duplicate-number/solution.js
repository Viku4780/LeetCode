/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // const set = new Set();
    // let start = 0;
    // let end = nums.length-1;

    // while(start<end){
    //     if(set.has(nums[start])) return nums[start];
    //     set.add(nums[start]);

    //     if(set.has(nums[end])) return nums[end];
    //     set.add(nums[end]);
        
    //     start++;
    //     end--;
        
    //     if(set.has(nums[Math.floor(nums.length/2)])) return nums[Math.floor(nums.length/2)];
    // }

    let low = 1;
    let hi = nums.length-1;

    while(low<hi){
      const mid = Math.floor((low+hi)/2);

      let count=0;

      for(const num of nums){
        if(num<=mid) count++;
      }

      if(count>mid) hi=mid;
      else          low=mid+1;
    }

    return low;
};
