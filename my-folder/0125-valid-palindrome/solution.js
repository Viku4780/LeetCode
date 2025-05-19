/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = Array.from(s);
    const word = arr.filter(ch =>/^[A-Za-z0-9]+$/.test(ch));

    const newWord = word.join('').toLowerCase();
    let reverseWord = '';

    for(let i= newWord.length - 1;i >= 0;i--){
        const element = newWord[i];
        reverseWord += element;
    }

    if(newWord === reverseWord) return true;
    else                       return false;

};
