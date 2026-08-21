/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const arr = s.split('');

    let lef=0;
    let ryt=arr.length-1;

    while(lef<ryt){
      if(set.has(arr[lef]) && set.has(arr[ryt])){
        [arr[lef],arr[ryt]] = [arr[ryt],arr[lef]];
        lef++;
        ryt--;
      }
      else if(!set.has(arr[lef])) lef++;
      else if(!set.has(arr[ryt])) ryt--;
      else{
        lef++;
        ryt--;
      }
    }

    return arr.join('');
};
