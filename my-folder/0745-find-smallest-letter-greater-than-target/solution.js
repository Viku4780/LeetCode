/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let low = 0;
    let hi = letters.length - 1;

    if(letters[hi] <= target) return letters[low];

    while(low <= hi){
      const med = Math.floor((low + hi)/2);

      if(letters[med]<=target) low = med + 1;
      else                     hi = med - 1;
    }

    return letters[hi + 1];
};
