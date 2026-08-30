/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const mySet = new Set();
    const result = new Set();

    for(let left=0;left<=s.length-10;left++){
      if(mySet.has(s.slice(left,left+10))){
         result.add(s.slice(left,left+10));
      }else{
         mySet.add(s.slice(left,left+10));
      }
    }

    return Array.from(result);
};
