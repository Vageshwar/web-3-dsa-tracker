// LC: https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/description

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    let ds = {
        "E": 0,
        "N": 1,
        "W": 2,
        "S": 3 
    }

    let count = Array(4).fill(0); 

    let res = 0;

    for(let c of s){
        let idx = ds[c];
        count[idx] += 1;

        let mmx = Math.max(count[0], count[2]);
        let mix = Math.min(count[0], count[2]);

        let ck = k;
        let used = Math.min(ck, mix);
        ck -= used;
        mix -= used;
        mmx += used;

        let mmy = Math.max(count[1], count[3]);
        let miy = Math.min(count[1], count[3]);

        used = Math.min(ck, miy);
        ck -= used;
        miy -= used;
        mmy += used;


        res = Math.max(res, (mmx - mix) + (mmy - miy))


    }

    return res;
};