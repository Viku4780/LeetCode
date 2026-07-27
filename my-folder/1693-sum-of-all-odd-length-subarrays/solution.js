/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const sums = new Array(arr.length+1).fill(0);

    for(let i=1;i<sums.length;i++){
      sums[i]=sums[i-1]+arr[i-1];
    }

    let totalSum=0;

    for(let win=1;win<sums.length;win+=2){
      for(let i=win;i<sums.length;i++){
        totalSum+=sums[i]-sums[i-win];
      }
    }

    return totalSum;
};
