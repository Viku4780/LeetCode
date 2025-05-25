/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const sArr = s.split("");

    for(let i=0;i<sArr.length;i++){
        if(s === goal) return true;

        const word = sArr.splice(0,1);
        sArr.push(word);

        if(sArr.join("") === goal) return true;
    }

    return false;
};
