// Problem Statement: Given an array of non-negative integers representation elevation of ground. Your task is to find the water that can be trapped after rain.

// Examples:

// Example 1:

// Input: height= [0,1,0,2,1,0,1,3,2,1,2,1]

// Output: 6

// Explanation: As seen from the diagram 1+1+2+1+1=6 unit of water can be trapped

function trappingRainWater(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let res = 0;
  let maxLeft = 0;
  let maxRight = 0;
  while (left <= right) {
    if (arr[left] <= arr[right]) {
      if (arr[left] >= maxLeft) {
        maxLeft = arr[left];
      } else {
        res += maxLeft - arr[left];
      }
      left++;
    }else{
        if(maxRight <= arr[right]){
            maxRight = arr[right];
        }else{
            res += maxRight -  arr[right];
        }
        right--;
    }
  }
  return res;
}

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]))
