/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const stack = [];

    for(let num of nums){
        while(stack.length){
            const top = stack[stack.length - 1];
            const g = gcd(top, num);
            if(g === 1) break;
            stack.pop();
            num = (top / g) * num;
        }
        stack.push(num);
    }

    return stack;
};

const gcd = (a,b) => {
    if(b === 0) return a;
    return gcd(b, a%b);
}