/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // let n = Math.pow(num,0.5);
    // n = Math.ceil(n);
    // return n*n === num;




    // binary search method

    let lower = 1;
    let highest = num;

    while(lower <= highest){
      const med = Math.floor((lower + highest)/2);

      const sqr = med * med;

      if(sqr === num) return true;
      else if(sqr < num) lower = med + 1;
      else               highest = med - 1;
    }

    return false;
};
