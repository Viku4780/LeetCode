/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = String(num);
    let sum = 0;

    do {
       for(let i=0;i<str.length;i++){
         sum += Number(str[i]);
       }
       str = String(sum);
       sum=0;
    } while (str.length>1);
    return Number(str);
};
