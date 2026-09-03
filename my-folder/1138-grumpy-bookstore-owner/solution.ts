function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let initialHappyCust : number = 0;

    for(let i=0;i<customers.length;i++){
      if(grumpy[i]===0) initialHappyCust+=customers[i];
    }

    let extraHappy : number = 0;
    let right=0;
    let tempSum = 0;

    while(right<grumpy.length){
      if(grumpy[right]===1){
        tempSum+=customers[right];

        for(let i=right+1;i<right+minutes && i<grumpy.length;i++){
          if(grumpy[i]===1) tempSum+=customers[i];
        }

        extraHappy = Math.max(extraHappy,tempSum);
        tempSum=0;
      }
      right++;
    }

    return initialHappyCust+extraHappy;
};
