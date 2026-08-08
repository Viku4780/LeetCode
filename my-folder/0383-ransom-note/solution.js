/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const obj1 = {};
  const obj2 = {};

  for(let i=0;i<ransomNote.length;i++){
    obj1[ransomNote[i]] = (obj1[ransomNote[i]] || 0) + 1;
  }

  for(let i=0;i<magazine.length;i++){
    obj2[magazine[i]] = (obj2[magazine[i]] || 0) + 1;
  }
  
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if(!obj2[key]) return false;
      else {
        if(obj2[key]<obj1[key]) return false;
      }
    }
  }

 return true;
};
