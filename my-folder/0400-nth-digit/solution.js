/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digitLength=1;
    let count=9;
    let startNumber=1;

    while(n>digitLength*count){
      n-= digitLength*count;

      digitLength++;
      count*=10;
      startNumber*=10;
    }

    startNumber += Math.floor((n-1)/digitLength);

    const targetString = startNumber.toString();
    const index = (n - 1) % digitLength;

    return parseInt(targetString[index]);
};
