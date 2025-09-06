var minOperations = function (queries) {
    let res = 0n;
    for (const q of queries) {
        const count1 = get(q[1]);
        const count2 = get(q[0] - 1);
        res += (count1 - count2 + 1n) / 2n;
    }
    return Number(res);
};

const get = (num) => {
    let cnt = 0n;
    let i = 1;
    let base = 1;

    while (base <= num) {
        const end = Math.min(base * 2 - 1, num);
        cnt += BigInt(Math.floor((i + 1) / 2)) * BigInt(end - base + 1);
        i++;
        base *= 2;
    }
    return cnt;
};
