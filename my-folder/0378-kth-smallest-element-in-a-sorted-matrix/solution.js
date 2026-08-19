/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  // let arr = [];

  // for(let i=0; i<matrix.length; i++){
  //    arr = [...arr, ...matrix[i]];
  // }

  // arr.sort((a,b) => a-b);
  // return arr[k-1];



  // binary search
  let low = matrix[0][0];
  const n = matrix.length;
  let hi = matrix[n-1][n-1];

  const countLessEqual = (target) => {
    let count = 0;
    let row = n-1;
    let col = 0;

    while(row>=0 && col<n){
      if(matrix[row][col]<=target){
        count+=(row+1);
        col++;
      }else   row--;
    }

    return count;
  } 

  while(low<hi){
    const mid = Math.floor((low+hi)/2);
    const count = countLessEqual(mid);

    if(count<k) low=mid+1;
    else        hi=mid;
  }

  return low;
};
