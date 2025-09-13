/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let v = {}
    let cons = {}
    let res_v = 0
    let res_c = 0

    const isVowle = (c) => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';

    for(let c of s){
        if(isVowle(c)){
            v[c] = (v[c] || 0) + 1;
            res_v = Math.max(res_v, v[c]);
        }else{
            cons[c] = (cons[c] || 0) + 1;
            res_c = Math.max(res_c, cons[c]);
        }
    }
    return res_c + res_v;
};