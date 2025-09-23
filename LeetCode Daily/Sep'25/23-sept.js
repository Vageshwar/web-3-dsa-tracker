/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    let n = Math.max(v1.length, v2.length);

    for(let i = 0; i<n; i++){
        let r1 = parseInt(v1[i] || 0);
        let r2 = parseInt(v2[i] || 0);
        if(r1 === r2) continue;
        if(r1 > r2) return 1;
        return -1;
    }
    return 0;
};