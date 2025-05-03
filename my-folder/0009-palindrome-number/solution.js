/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  const s = String(x);
  const rS = s.split('').reverse().join('');
  if(s === rS){
    return true;
  }else{
    return false;
  }
};

