/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   if(word1.length >= word2.length){
    let merStr = '';
    for(let i=0;i<word1.length;i++){    
        if(i < word2.length) merStr += word1[i] + word2[i];
        else   merStr += word1[i];
    }
       return merStr;
   } else if(word1.length <= word2.length){
     let merStr = '';
    for(let i=0;i<word2.length;i++){    
        if(i < word1.length) merStr += word1[i] + word2[i];
        else   merStr += word2[i];
    }
       return merStr;
   }
};
