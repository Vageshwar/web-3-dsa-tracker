/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    const n = skill.length, m = mana.length;
    const res = new Array(n + 1).fill(0);

    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            res[i + 1] = Math.max(res[i + 1], res[i]) + mana[j] * skill[i];
        }
        for (let i = n - 1; i > 0; i--) {
            res[i] = res[i + 1] - mana[j] * skill[i];
        }
    }

    return res[n];
};