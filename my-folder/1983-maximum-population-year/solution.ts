function maximumPopulation(logs: number[][]): number {
    const populationChanges : number[]  = new Array(101).fill(0);

    for(const [birth,death] of logs){
      populationChanges[birth - 1950]++;
      populationChanges[death - 1950]--;
    }

    let maxPopulation = 0;
    let currentPopulation = 0;
    let earliestYear = 1950;

    for(let i = 0; i < populationChanges.length; i++){
      currentPopulation += populationChanges[i];

      if(currentPopulation > maxPopulation){
        maxPopulation = currentPopulation;
        earliestYear = 1950 + i;
      }
    }

    return earliestYear;
};
