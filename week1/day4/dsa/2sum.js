// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// Examples:

// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

// Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// 	[-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.


function var1(arr, target){
    const seenFoFar = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const toFind = target - element;
        if(seenFoFar[toFind]) return true;
        seenFoFar[element] = i+1;
    }
    return false;
}

function var2(arr, target){
    const seenFoFar = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const toFind = target - element;
        if(seenFoFar[toFind]) return [seenFoFar[toFind]-1, i];
        seenFoFar[element] = i+1;
    }
    return [-1,-1];
}


// If Array is sorted its better to use 2 pointers
// if interviewer asks for space optimization , sort array and use 2 pointers