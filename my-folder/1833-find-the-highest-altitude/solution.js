/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let gainArr = new Array(gain.length+1).fill(0);
    let maxVal = -Infinity;

    for(let i=1;i<gainArr.length;i++){
      gainArr[i] = gainArr[i-1]+gain[i-1];

      maxVal=Math.max(maxVal,gainArr[i]);
    }

    return Math.max(maxVal, gainArr[0]);

};
