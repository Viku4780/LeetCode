/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const sortedCopyInterval = intervals.slice().sort((a,b)=>a[0]-b[0]);

    const myMap = new Map();

    for(let i=0;i<intervals.length;i++){
     myMap.set(intervals[i][0],i);
    }

    const intervalArr = new Array(intervals.length).fill(-1);

    for(let i=0;i<intervals.length;i++){
      const nums = intervals[i];

      let low=0;
      let hi=intervals.length-1;
      let targetIndex = -1;

      while(low<=hi){
        const mid = Math.floor((low+hi)/2);

        if(sortedCopyInterval[mid][0]>=nums[1]){
          targetIndex = mid;
          hi=mid-1;
        }
        else    low=mid+1;
      }
  
      if(targetIndex !== -1){
        intervalArr[i] = myMap.get(sortedCopyInterval[targetIndex][0]);
      }
    }

    return intervalArr;
};
