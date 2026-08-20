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

// var judgeSquareSum = function(c) {
//     // Helper function to check if a perfect square exists using Binary Search
//     const binarySearch = (low, hi, target) => {
//         while (low <= hi) {
//             const mid = Math.floor((low + hi) / 2);
//             const square = mid * mid;
            
//             if (square === target) {
//                 return true;
//             } else if (square < target) {
//                 low = mid + 1;
//             } else {
//                 hi = mid - 1;
//             }
//         }
//         return false;
//     };

//     // Iterate through all possible values of 'a'
//     for (let a = 0; a * a <= c; a++) {
//         let target = c - (a * a);
        
//         // Binary search for 'b' in the range [0, target]
//         // Setting hi boundary to target directly or Math.sqrt(target) optimization
//         if (binarySearch(0, target, target)) {
//             return true;
//         }
//     }
    
//     return false;
// };



