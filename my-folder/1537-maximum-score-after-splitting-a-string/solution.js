/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  const map = new Map();

  map.set('0',0);
  map.set('1',0);

  let maxVal=0;
  let zero=0;

  for(let i=0;i<s.length;i++){
    map.set(s[i], map.get(s[i])+1);
  }

  for(let i=0;i<s.length-1;i++){
    if(s[i]==='0'){
      zero++;
    }else{
      map.set(s[i], map.get(s[i])-1);
    }

    maxVal=Math.max(maxVal, zero+map.get('1'));
  }

   return maxVal; 
};
