/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // if(x<=arr[0]) return arr.slice(0,k);

    // sliding window
    let left=0;
    let right=arr.length-1;

    while(right-left>=k){
      if(Math.abs(arr[right]-x)>=Math.abs(x-arr[left])){
         right--;
      }else   left++;
    }

    return arr.slice(left,right+1);



    // binary search


};
