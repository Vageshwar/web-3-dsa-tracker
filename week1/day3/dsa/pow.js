// Problem Statement: Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).

// Examples:

// Example 1:

// Input: x = 2.00000, n = 10

// Output: 1024.00000

// Explanation: You need to calculate 2.00000 raised to 10 which gives ans 1024.00000

// Example 2:

// Input: x = 2.10000, n = 3

// Output: 9.26100

// Explanation: You need to calculate 2.10000 raised to 3 which gives ans 9.26100

function pow1(x,n){
    let ans = 1.0;
    while(n){
        ans = ans * x;
        n--;
    }
    return ans;
}


function pow2(x,n){
    let ans = 1.0;
    let nn = n;
    if(n < 0) nn = -1 * n;
    while(nn){
        if(nn%2){
            ans = ans * x;
            nn--;
        }else{
            x *= x;
            nn = nn/2;
        }
    }
    if(n < 0) return 1/ans;
    return ans;
}


console.log(pow1(2.00000, 10))
console.log(pow2(2.00000, 10))