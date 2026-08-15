/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   let low=0;
   let hi=nums.length-1;

   let mid;

   while(low<=hi){
    const med = Math.floor((low+hi)/2);

    if(nums[med]===target){
      mid=med;
      break;
    }
    else if(nums[med]>target) hi=med-1;
    else                      low=med+1;
   }

  if(mid!==undefined){
   let lowMid=mid;

   while(low<lowMid){
    const med = Math.floor((low+lowMid)/2);

    if(nums[med]===target){
       lowMid=med;
    }
    else                      low=med+1;
   }
   low=lowMid;

   let hiMid=mid;

   while(hiMid<hi){
    // const med = Math.floor((hi+hiMid)/2); this is the cause for the infinite loop think more

    const med = Math.ceil((hiMid+hi)/2);

    if(nums[med]===target){
       hiMid=med;
    }
    else                      hi=med-1;
   }

   hi=hiMid;
  }

   return mid>=0 ? [low,hi] : [-1,-1];
};
