/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const length1 = word1.length;
    const length2 = word2.length;
    if(length1 === length2){
        let finalWord = '';
        for(let i=0;i<length1;i++){
            finalWord = finalWord + word1[i] + word2[i];
        } 
        return finalWord;

    }else if(length1 > length2){
       let finalWord = '';
        for(let i=0;i<length1;i++){
             if(i < length2){
                finalWord = finalWord + word1[i] + word2[i];
            }else finalWord += word1[i];
        }
        return finalWord;

    }else if(length1 < length2){
         let finalWord = '';
        for(let i=0;i<length2;i++){
         if(i < length1){
                finalWord = finalWord + word1[i] + word2[i];
            }else finalWord += word2[i];
        }
        return finalWord;
    } 
};
