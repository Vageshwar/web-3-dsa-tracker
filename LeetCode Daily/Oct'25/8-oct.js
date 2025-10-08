/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const n = potions.length;
    const ans = [];

    for (let spell of spells) {
        let low = 0, high = n - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (BigInt(spell) * BigInt(potions[mid]) >= BigInt(success))
                high = mid - 1;
            else
                low = mid + 1;
        }
        ans.push(n - low);
    }
    return ans;
};