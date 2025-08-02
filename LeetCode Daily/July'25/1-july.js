/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    
    let cc = {};
    let repeat = 0;
    let n = word.length;
    for(let i = 1; i < n; i++){
        if(word[i] === word[i-1]){
            cc[i] = (cc[i] || 1) + 1;
            repeat++;
        }
    }
    if(!repeat) return 1;
    return repeat+1;
};

/**
aabbcc
-> abbcc, aabcc, aabbc, aabbcc
 */