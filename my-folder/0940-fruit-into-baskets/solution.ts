function totalFruit(fruits: number[]): number {
    const myMap = new Map<number,number>();
    let left : number = 0;
    let maxLen : number = 0;

    for(let right=0;right<fruits.length;right++){
       myMap.set(fruits[right],(myMap.get(fruits[right]) || 0) + 1);

       while(myMap.size>2){
        myMap.set(fruits[left],myMap.get(fruits[left])-1);
        if(myMap.get(fruits[left])===0) myMap.delete(fruits[left]);
        left++;
       }

       maxLen = Math.max(maxLen,right-left+1);
    }

    return maxLen;
};
