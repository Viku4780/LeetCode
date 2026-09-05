function isCovered(ranges: number[][], left: number, right: number): boolean {
    const diff = new Array(52).fill(0);
    
    for (const [start, end] of ranges) {
        diff[start]++;    
        diff[end + 1]--;   
    }
    
    let currentCoverage = 0;
    
    for (let i = 1; i <= 50; i++) {
        currentCoverage += diff[i];
        
        if (i >= left && i <= right && currentCoverage === 0) {
            return false; 
        }
    }
    
    return true; 
}

