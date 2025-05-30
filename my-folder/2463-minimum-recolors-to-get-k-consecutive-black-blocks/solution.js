/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    /*
    const arr = [];

    for(let i=0;i<=blocks.length-k;i++){
        let str = blocks.slice(i,i+k).split('');

       let value = str.reduce((acc,val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        },{})['W'];
        value = value || 0;
        arr.push(value);
    }
    return Math.min(...arr);
    */

    let minChanges = Infinity;
    let countW = 0;

    // count 'W' in the first window
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') countW++;
    }
    minChanges = countW;

    // slide the window
    for (let i = k; i < blocks.length; i++) {
        if (blocks[i - k] === 'W') countW--; // remove leftmost
        if (blocks[i] === 'W') countW++;     // add rightmost
        minChanges = Math.min(minChanges, countW);
    }

    return minChanges;
};
