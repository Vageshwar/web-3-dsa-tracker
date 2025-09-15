/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(" ");
    let res = 0;

    for(let word of words){
        let isValid = true;
        for(let c of brokenLetters){
            if(word.includes(c)) {
                isValid = false;
                break;
            };
        }
        if(isValid) res++;
    }
    return res;
};