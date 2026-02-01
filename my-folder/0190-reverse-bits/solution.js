/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
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

     function reverseBitValue(bitStr){
       let total = 0;
       for(let i=0; i<32; i++){
         const val = Math.pow(2,i) * (bitStr[i] / 1);

         total += val;
       }

       return total;
     }

     const final = reverseBitValue(bitStr);

     return final;
};
