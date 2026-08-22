/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr){
    for(let i=0;i<arr.length;i++){
      if(arr[i]===0){
        let ryt=i+1;
        let save = arr[ryt-1];

        while(ryt<arr.length){
          const left=arr[ryt];
          arr[ryt]=save;
          save=left;

          ryt++;
        }
        i++;
      }
    }

    return arr;
};
