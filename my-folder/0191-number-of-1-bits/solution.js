/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
     let bitStr = '';
    
     function convertToBits(n){
        let rem;
        let quot=n;

        for(let i=0;i<32;i++){
            rem = quot % 2;
            bitStr = rem + bitStr;
            quot = Math.floor(quot/2);
        }

     }
     convertToBits(n);

     let count = 0;

     const arr = bitStr.split('').map(val => val / 1).forEach(item => item === 1 ? count++ : count);

    return count;
};
