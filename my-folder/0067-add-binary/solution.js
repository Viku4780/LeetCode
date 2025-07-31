/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry=0 ;
    let result = '';

    for(let i=0;i<Math.max(a.length,b.length);i++){
        const fir = Number(a[a.length-1-i]) || 0;
        const sec = Number(b[b.length-1-i]) || 0;

       const sum = fir + sec + carry;

       if(sum<2){
        carry = 0;
        result = sum + result;
       }else if(sum >= 2){
        carry = 1;
        result = (sum-2) + result;
       }
    }

    if (carry) result = carry + result;
    
    return result;
};
