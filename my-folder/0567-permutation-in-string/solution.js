/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const map = new Map();
    for (let char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // for(let right=0;right<=s2.length-len; right++){
    //   const retMap= findWordFreq(right,right+len-1,s2);
    //   trueMap=0;

    //   for (const [key, value] of map) {
    //     if(!retMap.has(key) || retMap.get(key)!== value){
    //       break;
    //     }else if(retMap.has(key) || retMap.get(key) === value){
    //       trueMap++;
    //     }
    //   }
    // }
    // function findWordFreq(start, end, str){
    //     const freqMap = new Map();

    //     for(let i=start;i<=end;i++){
    //       freqMap.has(str[i]) ? freqMap.set(str[i], freqMap.get(str[i])+1) : freqMap.set(str[i], 1);
    //     }
    //     return freqMap;
    // }
    // return trueMap===mapSize;

    for (let i = 0; i <= s2.length - s1.length; i++) {
        const windowStr = s2.substring(i, i + s1.length);
        const retMap = new Map();
        
        // Build map for current window
        for (let char of windowStr) {
            retMap.set(char, (retMap.get(char) || 0) + 1);
        }

        // Compare maps
        let isMatch = true;
        if (map.size !== retMap.size) {
            isMatch = false;
        } else {
            for (const [key, value] of map) {
                if (retMap.get(key) !== value) {
                    isMatch = false;
                    break;
                }
            }
        }

        if (isMatch) return true; // Return immediately
    }

    return false;
};
  


