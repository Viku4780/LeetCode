/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq={};

    for(const num of arr){
      freq[num] = (freq[num] || 0) + 1;
    }

    let largestNum=0;

    for (const key in freq) {
      if (freq.hasOwnProperty(key)) {
        if(freq[key]===Number(key)){
          largestNum = Math.max(largestNum, freq[key]);
        }
      }
    }

    return largestNum>0 ? largestNum : -1;
};
