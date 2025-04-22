// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. 
// Write a program to in-place sort the array without using inbuilt sort functions.
// ( Expected: Single pass-O(N) and constant space)

// Approach: I belive bucket sort is a constant space sort and can also be considered in place
// Time Complexity: O(n+n) => O(n)  
// Space Complexity: O(3)

function sort012(arr){
    let ones = 0;
    let twos = 0;
    let zeros = 0;

    arr.forEach(ele =>{
        if(ele === 0) zeros++;
        else if(ele === 1) ones++;
        else twos++;
    })

    arr.forEach((_, index) => {
        if(zeros){
            arr[index] = 0;
            zeros--;
        }
        else if(ones){
            arr[index] = 1;
            ones--;
        }
        else{
            twos--;
            arr[index] = 2;
        }
    })

    return arr;
}

// console.log(sort012([2,0,2,1,1,0]))


// Optimal appraoch -> Dutch National Flag Algo -> Intresting algo but does not feel that its better than the first appraoch
// This algo might be useful later on

function sortUsingDutchNationalFlagAlog(arr){
    let n = arr.length;
    let low = 0;
    let mid = 0;
    let high = n-1;

    while(mid <= high){
        if(arr[mid] === 0){
            let t = arr[mid];
            arr[mid] = arr[low];
            arr[low] = t;
            low++; // one 0 sorted move to next
            mid++; // move to next elemet to sort
        }
        else if(arr[mid] === 1){
            mid++; // already sorted move to next
        }else{ // mid is 2
            let t = arr[mid];
            arr[mid] = arr[high];
            arr[high] = t;
            high--; // moved 2 on the last place so reduce high by one
        }
    }
    return arr;
}

console.log(sortUsingDutchNationalFlagAlog([2,0,2,1,1,0]))