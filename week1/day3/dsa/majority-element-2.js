// Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.

// Pre-requisite: Majority Element

// Examples

// Example 1:
// Input Format: N = 5, array[] = {1,2,2,3,2}
// Result: 2
// Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, the count of 2 is greater than N/3 times. Hence, 2 is the answer.

// Example 2:
// Input Format:  N = 6, array[] = {11,33,33,11,33,11}
// Result: 11 33
// Explanation: Here we can see that the Count(11) = 3 and Count(33) = 3. Therefore, the count of both 11 and 33 is greater than N/3 times. Hence, 11 and 33 is the answer.

// Q: do we need to return sorted arrays as output ? 

// Not able to think any good appraoch apart from using HashMaps

function majorityElement2(arr){
    let n = arr.length;
    let threshold = Math.round(n/3);

    let map = {};
    let ans = []

    arr.forEach(item =>{
        let c = map[item] || 0;
        c++;
        if(c - threshold === 1){
            ans.push(item);
        }
        map[item] = c;
    })
    return ans;
}

console.log(majorityElement2([1,2,2,3,2]))
console.log(majorityElement2([1,2,1,3,2]))
console.log(majorityElement2([11,33,33,11,33,11]))

// Did not like the optimal solution mentioned in TUF, can be considered if asked for optimizing space