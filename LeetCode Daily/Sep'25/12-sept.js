/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const isVowel = (c) => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
    let vowel_count = 0;
    for(let c of s){
        if(isVowel(c)) return true;
    }

    return false;
};