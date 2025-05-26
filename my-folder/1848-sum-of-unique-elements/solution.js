/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;

    
 const obj = nums.reduce((acc,num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    },{});

   for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if(obj[key] === 1){
                sum += parseInt(key);
            }
            
        }
    }
    return sum;
};
