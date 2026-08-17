/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    // Digit-by-Digit Construction or Radix-scale Elimination algorithm

    // let digitLength=1;
    // let count=9;
    // let startNumber=1;

    // while(n>digitLength*count){
    //   n-= digitLength*count;

    //   digitLength++;
    //   count*=10;
    //   startNumber*=10;
    // }

    // startNumber += Math.floor((n-1)/digitLength);

    // const targetString = startNumber.toString();
    // const index = (n - 1) % digitLength;

    // return parseInt(targetString[index]);


    // binary search

    const countDigits = (x) => {
      let start = 1;
      let digit = 1;
      let totalCounts = 0;

      while(x>=start){
         const end = Math.min(x,start*10-1);

         totalCounts+=(end-start+1)*digit;

         digit++;
         start*=10;
      }

      return totalCounts;
    }

    let low=1;
    let hi=n;

    while(low<hi){
      const mid = Math.floor((low+hi)/2);

      if(countDigits(mid) === n){
        const numStr = mid.toString();
        return Number(numStr[numStr.length-1]);
      }
      else if(countDigits(mid)<n) low=mid+1;
      else                        hi=mid;
    }

    const digitsBefore = countDigits(low - 1);
    const digitIndexInNum = n - digitsBefore - 1; 
    
    return Number(String(low)[digitIndexInNum]);
};
