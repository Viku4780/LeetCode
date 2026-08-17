/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(const row of matrix){
      if(row[0] > target || row[row.length-1] < target) continue;
      
      let low = 0;
      let hi =  row.length-1;

      while(low<=hi){
        const med = Math.floor((low+hi)/2);

        if(row[low]>target || row[hi]<target) break;

        if(row[med] === target) return true;
        else if(row[med]<target) low = med+1;
        else if(row[med] > target) hi = med - 1;
      }
    }

    return false
};
