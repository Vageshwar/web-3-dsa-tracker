/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    let k = 1;
    while(true){
        let x = BigInt(num1) - BigInt(num2) * BigInt(k);
        if(x < BigInt(k)){
            return -1;
        }
        if(k >= countBit(x)){
            return k;
        }
        k++;
    }
};

function countBit(n){
    let c = 0;
    while(n != 0n){
        c++;
        n &= n - 1n;
    }
    return c;
}