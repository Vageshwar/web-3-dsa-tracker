/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let m = s.length;
    let n = t.length;
    if(n > m) return "";
    let countS = Array(256).fill(0);
    let countT = Array(256).fill(0);

    for(let c of t){
        countT[c.charCodeAt(0)]++;
    }

    let start = 0;
    let minLength = Number.MAX_SAFE_INTEGER;
    let minStart = 0;
    let count = 0;
    for(let j = 0; j < m; j++){
        let code = s.charCodeAt(j);
        countS[code]++;

        if(countT[code] && countT[code] >= countS[code]){
            count++;
        }
        if(count === n){
            // minimize window
            while(countS[s.charCodeAt(start)] > countT[s.charCodeAt(start)] || countT[s.charCodeAt(start)] === 0){
                if(countS[s.charCodeAt(start)] > countT[s.charCodeAt(start)]){
                    countS[s.charCodeAt(start)]--;
                }
                start++;
            }

            if (j - start + 1 < minLength) {
                minLength = j - start + 1;
                minStart = start;
            }
        }
    }

    if(count === n) return s.substr(minStart, minLength);
    return "";
    
};