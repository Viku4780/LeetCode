/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lower = 1;
    let highest = n;

    while(lower <= highest){
      const med = Math.floor((lower + highest)/2);

      if(guess(med) === 0) return med;
      else if(guess(med) === 1) lower = med + 1;
      else                              highest = med - 1;
    }
};
