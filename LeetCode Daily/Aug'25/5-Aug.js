/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let unplaced = 0;
    let placed = {}
    const n = baskets.length;
    let res = 0;

    for(let i = 0; i < fruits.length; i++){
        let fruitPlaced = false;
        for(let j = 0;  j < n; j++){
            if(!placed[j] && baskets[j] >= fruits[i]){
                placed[j] = fruits[i];
                fruitPlaced = true;
                break;
            }
        }
        if(!fruitPlaced) res++;
    }
    return res;
};