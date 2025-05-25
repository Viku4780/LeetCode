/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const setOfVowel = ['a','e','i','o','u','A','E','I','O','U'];
    const arr = s.split('')
    const vowelCont = [];

    for(let i=0;i<s.length;i++){
        const apl = s[i];
        if(setOfVowel.includes(apl)){
            vowelCont.push(apl);
        }
    }

    vowelCont.reverse();
    let index = 0;
    
    for(let i=0;i<s.length;i++){
        const apl = s[i];
        if(setOfVowel.includes(apl)){
            arr[i] = vowelCont[index];
            index++;
        }
    }
    s = arr.join("");

    return s;
};
