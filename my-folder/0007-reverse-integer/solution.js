/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   

   if(x > 0){
   const digits = Array.from(String(x), Number).reverse();
   
  const i = digits.findIndex(el => el !== 0);

  if (i > 0) digits.splice(0, i);

  if(Number(digits.join('')) <= (-1 * 2**31) || Number(digits.join('')) >= (2**31 - 1)) return 0;

  return Number(digits.join(''));
   }
   else if(x === 0) return 0;
   else if(x < 0){
     const positiveNum = -x;
     const digits = Array.from(String(positiveNum), Number).reverse();
   
        const i = digits.findIndex(el => el !== 0);
        
        if (i > 0) digits.splice(0, i);

        if(Number(digits.join('')) <= (-1 * 2**31) || Number(digits.join('')) >= (2**31 - 1)) return 0;

        return -Number(digits.join(''));
   }

};
