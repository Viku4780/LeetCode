function findAnagrams(s: string, p: string): number[] {
    const anagramMap = new Map<string,number>();
    const anagramLen : number = p.length;

    for(const char of p){
      anagramMap.set(char,(anagramMap.get(char) || 0) + 1);
    }

    let left : number = 0;
    const dummyMap = new Map<string,number>();
    const result : number[] = [];

    for(let right=0;right<s.length;right++){
     if(right-left+1<=anagramLen){
       if(!anagramMap.has(s[right])){
          left=right+1;
          dummyMap.clear();
          continue;
        }
        else{
          dummyMap.set(s[right],(dummyMap.get(s[right]) || 0) + 1);

          while(anagramMap.get(s[right])<dummyMap.get(s[right])){
            dummyMap.set(s[left],dummyMap.get(s[left]) - 1);
            left++;
          }

          if((right-left+1)===anagramLen) result.push(left);
        }
      }else{
        if(!anagramMap.has(s[right])){
          left=right+1;
          dummyMap.clear();
          continue;
        }else{
          if(s[right]===s[left]){
            left++;
            result.push(left);
          }else{

            while((right-left+1)>anagramLen){
              dummyMap.set(s[left],dummyMap.get(s[left]) - 1);
              left++;
            }

            dummyMap.set(s[right],dummyMap.get(s[right]) + 1);

            while(anagramMap.get(s[right])<dummyMap.get(s[right])){
              dummyMap.set(s[left],dummyMap.get(s[left]) - 1);
              left++;
            }

            if((right-left+1)===anagramLen) result.push(left);
          }
        }
      }
    }

    return result;
};
