/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
    const n = s.length;
    let res = s;
    s = s + s;
    const g = gcd(b, n);

    for (let i = 0; i < n; i += g) {
        const t = [...s.slice(i, i + n)];
        add(t, n, a, 1);
        if (b % 2 !== 0) {
            add(t, n, a, 0);
        }
        const tStr = t.join("");
        if (tStr < res) {
            res = tStr;
        }
    }
    return res;
};

const add = (t, n, a, start) => {
    let minVal = 10,
        times = 0;
    for (let i = 0; i < 10; i++) {
        const added = (t[start].charCodeAt() - "0".charCodeAt() + i * a) % 10;
        if (added < minVal) {
            minVal = added;
            times = i;
        }
    }
    for (let i = start; i < n; i += 2) {
        t[i] = String.fromCharCode(
            "0".charCodeAt() +
                ((t[i].charCodeAt() - "0".charCodeAt() + times * a) % 10),
        );
    }
};

const gcd = (num1, num2) => {
    while (num2 !== 0) {
        const temp = num1;
        num1 = num2;
        num2 = temp % num2;
    }
    return num1;
};