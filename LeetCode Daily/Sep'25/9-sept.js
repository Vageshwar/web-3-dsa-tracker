/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1000000007;
    const know = new Deque();
    const share = new Deque();
    know.pushBack({ day: 1, count: 1 });
    let knowCnt = 1,
        shareCnt = 0;

    for (let i = 2; i <= n; i++) {
        if (!know.isEmpty() && know.front().day === i - delay) {
            const first = know.popFront();
            knowCnt = (knowCnt - first.count + MOD) % MOD;
            shareCnt = (shareCnt + first.count) % MOD;
            share.pushBack(first);
        }
        if (!share.isEmpty() && share.front().day === i - forget) {
            const first = share.popFront();
            shareCnt = (shareCnt - first.count + MOD) % MOD;
        }
        if (!share.isEmpty()) {
            knowCnt = (knowCnt + shareCnt) % MOD;
            know.pushBack({ day: i, count: shareCnt });
        }
    }
    return (knowCnt + shareCnt) % MOD;
};
