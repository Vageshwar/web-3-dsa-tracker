// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.

// Example 1:
// Input Format: N = 3, M = 27
// Result: 3
// Explanation: The cube root of 27 is equal to 3.

// Example 2:
// Input Format: N = 4, M = 69
// Result: -1
// Explanation: The 4th root of 69 does not exist. So, the answer is -1.


function nthRootOfInteger(n, m){
    let isDivisible = m % n === 0;
    if(!isDivisible) return -1;
    let ans = m;
    for(let i = 1; i < n; i++){
        ans /= n;
    }
    if(ans === 1 && m !== 1) return -1;
    return ans;
}



// correct approach do binary search from 1 - m


function nthRootBinarySearch(n, m){
    let low = 1;
    let high = m;
    function midCheckHelper(currentMid){
        let val = 1;
        for(let i = 1; i <= n; i++){
            val *=currentMid;
            if(val > m){
                break;
            }
        }
        if(val === m) return 1;
        if(val > m){
           return 2;
        }
        return 0;
    }
    while(high >= low){
        let mid = Math.round((high + low)/ 2);
        let val = midCheckHelper(mid);
        if(val === 1) return mid;
        if(val === 2){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return -1;
    
}


console.log(nthRootBinarySearch(3,27))
console.log(nthRootBinarySearch(3,28))