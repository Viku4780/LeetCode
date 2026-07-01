/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i=0; i<=grid.length-1;i++){
      if(grid[i][grid[i].length-1] >= 0) continue;

      let low = 0;
      let hi = grid[i].length-1;

      while(low<hi){
        const mid = Math.floor((low+hi)/2);

        if(grid[i][mid] >= 0) low = mid + 1;
        else {
           count+= hi-mid+1;
           hi = mid-1;
        }
      }
      if(grid[i][low] < 0  && hi===low) count++;
    }

    return count;
};
