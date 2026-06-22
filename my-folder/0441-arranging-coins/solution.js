/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let min = 1;
  let max = n;

  while(min<=max){
    const med = Math.floor((min+max)/2);
    const result = sumOfNaturalNum(med) - n;

    if(result<0) min = med + 1;
    else if(result > 0) max = med - 1;
    else                return med;
  }

  return min - 1;
    
};

function sumOfNaturalNum(n){
  return n*(n+1)/2;
}
