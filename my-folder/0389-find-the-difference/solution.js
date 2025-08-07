/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const a = s.split('').sort();
    const b = t.split('').sort();

    for(let i=0;i<a.length;i++){
        if(a[i] !== b[i]) return b[i];
    }

    return b[b.length-1];
};
