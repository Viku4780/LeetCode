function characterReplacement(s: string, k: number): number {
    const mySet = new Set<string>(s);
    let maxLen : number = 1;
    
    for(const char of mySet){
      let left : number  = 0;
      let count : number = k;

      for(let right=0;right<s.length;right++){
        if(s[right]!==char && count>0){
          count--;
        }else if(s[right]!==char && count===0){
          maxLen = Math.max(maxLen,right-left);
          while(count<1){
            if(s[left]!==char) count++;
            left++;
          }
          if(s[right]!==char && count>0) count--;
        }
        maxLen = Math.max(maxLen,right-left+1);
      }
    }
    return maxLen;
};
