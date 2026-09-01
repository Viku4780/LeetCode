function checkInclusion(s1: string, s2: string): boolean {
    if(s1.length>s2.length) return false;

    const s1Map = new Map<string,number>();

    for(const char of s1) s1Map.set(char,(s1Map.get(char) || 0) + 1);

    let left : number = 0;
    const s1Len = s1.length;
    const dummyMap = new Map<string,number>();
    
    for(let right=0;right<s2.length;right++){

       if( (right-left+1)<=s1Len){

        if(s1Map.has(s2[right])){
          dummyMap.set(s2[right],(dummyMap.get(s2[right]) || 0) + 1);

          while(dummyMap.get(s2[right])>s1Map.get(s2[right])){
            dummyMap.set(s2[left],dummyMap.get(s2[left])-1);
            left++;
          }

          if((right-left+1)===s1Len) return true;
        }
        else{
          left=right+1;
          dummyMap.clear();
        }

       }
    }

    return false;
};
