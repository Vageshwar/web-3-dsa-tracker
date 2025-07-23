/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    const removeString = (point, first, second, s) => {
        let stack = []
        let score = 0;
        for(let c of s){
            let n = stack.length;
            if(n && c === second && stack[n-1] === first){
                score += point;
                stack.pop();
            }else{
                stack.push(c);
            }
        }
        return {
            score, str: stack.join("")
        };
    }
    let ans = 0;
    if(x >= y){
        let {score, str} = removeString(x, 'a', 'b', s);
        ans += score;
        let res = removeString(y, 'b', 'a', str);
        ans += res.score;
    }else{
        let {score, str} = removeString(y, 'b', 'a', s);
        ans += score;
        let res = removeString(x, 'a', 'b', str);
        ans += res.score;
    }
    return ans;
};