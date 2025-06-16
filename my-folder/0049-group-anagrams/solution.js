/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) { 
    const newStrs = strs.map((v) => v.split('').sort().join(''));
    const arr = [];

    const result = newStrs.reduce((acc, value, index) => {
        if (!acc[value]) {
            acc[value] = [];
        }
        acc[value].push(index);
        return acc;
        }, {});

    for (const key in result) {
        if (Object.prototype.hasOwnProperty.call(result, key)) {
            const storingIndexs = [];
            result[key].forEach(v => {
                storingIndexs.push(strs[v]);
            });
            arr.push(storingIndexs);
        }
    }
    return arr;
};
