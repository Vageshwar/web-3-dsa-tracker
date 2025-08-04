/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    // const n = fruits.length;
    // function helper(i){
    //     if(i >= n) return 0;
    //     let f1 = fruits[i];
    //     let f2;
    //     let t = 1;
    //     for(let j = i+1; j < n; j++){
    //         if(fruits[j] !== f1 && !f2){
    //             f2 = fruits[j];
    //             t++;
    //             continue;
    //         }
    //         if(fruits[j] !== f1 && fruits[j] !== f2) break;
    //         t++;
    //     }
    //     return t;
    // }
    // let res = 0;
    // for(let i = 0; i < n-1; i++){
    //     let tempR = helper(i);
    //     res = Math.max(tempR, res);
    // }
    // return res;

     let map = new Map();
    let left = 0, maxLen = 0;
    
    for (let right = 0; right < fruits.length; right++) {
        let fruit = fruits[right];
        map.set(fruit, (map.get(fruit) || 0) + 1);

        while (map.size > 2) {
            let leftFruit = fruits[left];
            map.set(leftFruit, map.get(leftFruit) - 1);
            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;

};