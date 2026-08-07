/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   const map = new Map();

   const arr1 = s.split("");
   const arr2 = t.split("");

   const size1 = new Set(arr1);
   const size2 = new Set(arr2);

   if(size1.size!==size2.size) return false;

   for(let i=0;i<arr1.length;i++){
    if(map.has(arr1[i])){
      arr1[i]=map.get(arr1[i]);
    }else{
      map.set(arr1[i],arr2[i]);
      arr1[i]=map.get(arr1[i]);
    }
   }

   return arr1.join()===arr2.join();
};
