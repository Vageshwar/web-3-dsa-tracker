/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let res = "";
    let prev = ""
    let cc = 0;
    for(let c of s){
        if(prev === c){
            cc++;
        }else cc = 1;
        if(cc < 3){
            res += c;
        }
        prev = c;
    }
    return res;
};