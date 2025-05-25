/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let sqr = Math.pow(c,0.5);
    let numOfSqr = 0;
    if(sqr%1 === 0){
        numOfSqr = sqr;
        for(let i=0;i<=numOfSqr;i++){
            const rem = c - i**2;
             const sqRoot = Math.pow(rem,0.5);
             if(sqRoot%1 === 0 ) return true;
        }
    }else{
        numOfSqr = Math.floor(sqr) + 1;
         for(let i=0;i<=numOfSqr;i++){
            const rem = c - i**2;
             const sqRoot = Math.pow(rem,0.5);
             if(sqRoot%1 === 0 ) return true;
        }
    }

    return false;
};
