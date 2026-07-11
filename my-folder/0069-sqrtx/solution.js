/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return Math.abs(Math.floor(Math.pow(x,0.5)));


     // pure square root logic 'Repeated Subtraction Method of Square Root'
    // let count = 0;

    // let result = x;

    // while(result>0){
    //   result = result - (2*count + 1);
    //   count++;
    // }

    // return result >= 0 ? count : count - 1;


    // binary search method
    if(x < 2) return x;

    let start = 1;
    let end = x;
    let med ;

    while(start<=end){
      med = Math.floor((start + end)/2);
      const sqr = med * med;

      if(sqr === x) return med;
      else if(sqr < x) start = med + 1;
      else                   end = med - 1;
    }

    return  med * med < x ? med : med -1;
};
