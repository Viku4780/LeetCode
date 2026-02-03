/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const retObj = nums.reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {});

    for (const key in retObj) {
    if (!Object.hasOwn(retObj, key)) continue;

    if(retObj[key] === 1)
      return key / 1;
    }
};
