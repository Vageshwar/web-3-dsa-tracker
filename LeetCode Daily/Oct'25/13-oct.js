/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const res = [words[0]];
    const n = words.length;
    const compare = (word1, word2) => {
        let freq = new Array(26).fill(0);
        for(let ch of word1){
            freq[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        for(let ch of word2){
            freq[ch.charCodeAt(0) - "a".charCodeAt(0)]--;
        }
        return freq.every(x => x===0);
    }
    for(let i = 1; i <n; i++){
        if(!compare(words[i], words[i-1])){
            res.push(words[i]);
        }
    }
    return res;
};
