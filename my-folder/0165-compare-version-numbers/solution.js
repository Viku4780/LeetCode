/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // const arr1 = version1.split('.');
    // const arr2 = version2.split('.');
    // const len1=arr1.length;
    // const len2=arr2.length;

    // if(len1===len2){
    //   for(let i=0;i<len1;i++){
    //     if(Number(arr1[i])!==Number(arr2[i])){
    //       if(Number(arr1[i])<Number(arr2[i])) return -1;
    //       else                                return 1;
    //     }
    //   }

    //   return 0;
    // }else{
    //   if(len1>len2){
    //     pushZero(len1,len2,arr2);
    //     return compareVersionArr();
    //   }else{
    //     pushZero(len2,len1,arr1);
    //     return compareVersionArr();
    //   }
    // }

    // function pushZero(l1,l2,arr){
    //   for(let idx=1;idx<=l1-l2;idx++){
    //     arr.push('0');
    //   }
    // }

    // function compareVersionArr(){
    //   for(let i=0;i<arr1.length;i++){
    //     if(Number(arr1[i])!==Number(arr2[i])){
    //       if(Number(arr1[i])<Number(arr2[i])) return -1;
    //       else                                return 1;
    //     }
    //   }

    //   return 0;
    // }



    // two pointer
    let p1=0;
    let p2=0;

    let len1 = version1.length;
    let len2 = version2.length;

    while(p1<len1 || p2<len2){
      let num1=0;
      let num2=0;

      while(p1<len1 && version1[p1]!=='.'){
        num1 = num1*10 + parseInt(version1[p1]);
        p1++;
      }

      while(p2<len2 && version2[p2]!=='.'){
        num2 = num2*10 + parseInt(version2[p2]);
        p2++;
      }

      if(num1!==num2){
        return num1>num2 ? 1 : -1;
      }

      p1++;
      p2++;
    }

    return 0;
};
