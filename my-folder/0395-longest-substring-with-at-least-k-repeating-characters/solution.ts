// function longestSubstring(s: string, k: number): number {
//   if(k===1) return s.length;
//   if(k>s.length) return 0;

//   let maxLen : number = 0;
//   let left : number = 0;

//   const myMap : Map<string,number> = new Map();
//   const mySet : Set<string> = new Set();

//   for(let i : number =0;i<s.length;i++){
//     if(mySet.has(s[i])){
//       myMap.set(s[i],myMap.get(s[i])+1);
//       if(myMap.get(s[i])>=k) mySet.delete(s[i]);

//     }else{
//       if((myMap.get(s[i]) || 0)<k){
//         mySet.add(s[i]);
//         myMap.set(s[i],1);
//       }
//     }
//   }

//   if(mySet.size===0) return s.length;

//   for(let right:number=0;right<s.length;right++){
//      if(mySet.has(s[right])){
//       if(checkSubstring(left,right)){
//         maxLen = Math.max(maxLen,right-left);
//       }else left=right+1;
//      }
//   }

//   function checkSubstring(left : number,right : number) : boolean {
//     const map : Map<string,number> = new Map();
//     const set : Set<string> = new Set();

//     for(let i : number = left;i<right;i++){
//       if(set.has(s[i])){
//         map.set(s[i],map.get(s[i])+1);
//         if(map.get(s[i])>=k) set.delete(s[i]);

//       }else{
//         if((map.get(s[i]) || 0)<k){
//           set.add(s[i]);
//           map.set(s[i],1);
//         }
//       }
//     }

//     if(set.size===0) return true;

//     while(set.size>0){
//       map.set(s[left],map.get(s[left])-1);
//       if(map.get(s[left])===0) set.delete(s[left]);
//       else if(map.get(s[left])<k && !set.has(s[left])) return false;

//       left++;
//     }

//     return set.size===0;
//   };

//   return maxLen;
// };

function longestSubstring(s: string, k: number): number {
  if (s.length < k) return 0;

  const countMap = new Map<string, number>();
  for (const char of s) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (countMap.get(char)! < k) {
      const leftPart = longestSubstring(s.slice(0, i), k);
      const rightPart = longestSubstring(s.slice(i + 1), k);
      
      return Math.max(leftPart, rightPart);
    }
  }

  return s.length;
}

