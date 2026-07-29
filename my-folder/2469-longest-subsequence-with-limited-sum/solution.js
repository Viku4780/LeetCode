/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a-b);
    const ans = new Array(queries.length).fill(0);

    for(let i=1;i<nums.length;i++){
      nums[i] = nums[i] + nums[i-1];
    }

    let i=0;

    while(i<queries.length){
      const target = queries[i];
binarySearch(nums, target);
      i++;
    }


    function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;

    while(left<right){
      const med = Math.floor((left+right)/2);

      if(arr[med]===target){
        ans[i]=med+1;
        break;
      }
      else if(arr[med]>target) right=med;
      else                         left=med+1;
    }

    if(left===right){
      if(arr[left]<target) ans[i]=left+1;
      else if(arr[left]===target)  ans[i]=left+1;
      else                             ans[i]=left;
    }
}

    return ans;

};


