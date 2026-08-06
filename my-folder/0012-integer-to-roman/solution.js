/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
   const map = new Map()
          .set(1, 'I')
          .set(5, 'V')
          .set(10, 'X')
          .set(50, 'L')
          .set(100, 'C')
          .set(500, 'D')
          .set(1000, 'M');

    const str = String(num);

    let finalStr = '';
    let iter=0;

   
   for(let i=str.length-1; i>=0;i--){
    const number = Number(str[i]);
    const rem = number%5;
    const quo = Math.floor(number/5);

    if(rem===0){
        if(quo!==0){
           finalStr = map.get(number*Math.pow(10, iter)) + finalStr;
        }
        iter++;
        continue;
    }

    if(rem>3){
      finalStr = roman(number ,iter) + finalStr;
    }
    else{
      finalStr = anotherRoman(quo,rem, iter) + finalStr
    }

    iter++;
   }

   function roman(number, iter){
    const arr = [(number+1)*Math.pow(10,iter),1*Math.pow(10, iter)];

    let romStr = '';

    arr.forEach(str => {
      romStr = map.get(str) + romStr;
    })

    return romStr;
   }

   function anotherRoman(quo,rem, iter){
    if(quo===0){
      const arr = new Array(rem).fill(Math.pow(10,iter));
      let romStr = '';

      arr.forEach(str => {
        romStr = map.get(str) + romStr;
      })

      return romStr;
    }else{
      const arr = new Array(rem+1).fill(Math.pow(10,iter));
      let romStr = '';

      arr[rem] = 5*quo*Math.pow(10,iter);

      arr.forEach(str => {
        romStr = map.get(str) + romStr;
      })

      return romStr;
    }
   }

   return finalStr;

};
