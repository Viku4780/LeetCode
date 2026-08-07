/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();

    const arr = s.split(" ");

    if(pattern.length!==arr.length) return false;

    const set1 = new Set(pattern);
    const set2 = new Set(arr);

    if(set1.size!==set2.size) return false;

    for(let i=0;i<pattern.length;i++){
      if(map.has(pattern[i])){
        if(map.get(pattern[i])!==arr[i]) return false;
      }else{
        map.set(pattern[i],arr[i]);
      }
    }

    return true;
};
