// Problem Statement: Given a value V, if we want to make a change for V Rs,
// and we have an infinite supply of each of the denominations in Indian currency, i.e.,
// we have an infinite supply of { 1, 2, 5, 10, 20, 50, 100, 500, 1000} valued coins/notes,
// what is the minimum number of coins and/or notes needed to make the change


function minCoinChange(v){
    let coins = [1,2,5,10,20,50,100,500,1000];
    let closestIndex = coins.length - 1;
    let count = 0;
    let ans = [];
    while(v){
        for(;closestIndex>0; closestIndex--){
            if(v >= coins[closestIndex]) break;
        }
        let value = coins[closestIndex];
        let nextV = v % value;
        count += Math.floor(v / value);
        ans.push({currency: value, count: Math.floor(v/value)});
        v = nextV;
    }
    console.log(ans);
    return count;
}

console.log(minCoinChange(70));
console.log(minCoinChange(100));
console.log(minCoinChange(121));
console.log(minCoinChange(153));