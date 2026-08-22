/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ');

    // const reverseArr = arr.map(el => {
    //   return reverseStr(el);
    // });

    for(let i=0;i<arr.length;i++){
      arr[i] = reverseStr(arr[i]);
    }

    function reverseStr(str){
      const strArr = str.split('');

      let lef=0;
      let ryt=strArr.length-1;

      while(lef<ryt){
        [strArr[lef],strArr[ryt]] = [strArr[ryt],strArr[lef]];
        lef++;
        ryt--;
      }

      return strArr.join('');
    }

    // return reverseArr.join(' ');
    return arr.join(' ');
};
