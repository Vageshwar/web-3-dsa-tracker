/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let res = -1;
    let n = arr.length;
    let map = {};

    for(let a of arr){
        map[a] = (map[a] || 0 ) + 1;
    }
    Object.keys(map).forEach(key => {
        if(map[key] == (key)){
            res = Math.max(res, map[key]);
        }
    })

    return res;
};