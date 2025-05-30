/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let str = String(num);
    let kBeauty = 0;

    for(let i=0;i<=str.length-k;i++){
        let newDiv = parseInt(str.slice(i,i+k));
        if((num/newDiv)%1 === 0 && newDiv !== 0) kBeauty++;
    }
    return kBeauty;
};
