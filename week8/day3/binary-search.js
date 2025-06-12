class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;

        while(high >= low){
            let mid = low + Math.floor((high- low) / 2)
            if(nums[mid] === target) return mid;

            if(nums[mid] > target){
                high = mid-1;
            }else{
                low = mid + 1;
            }
        }

        return -1;

    }
}


// lower bound

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length;

        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (nums[m] >= target) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return (l < nums.length && nums[l] === target) ? l : -1;
    }
}


// upper bound

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length;

        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (nums[m] > target) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return (l > 0 && nums[l - 1] === target) ? l - 1 : -1;
    }
}


// lower_bound:
// Returns an iterator pointing to the first element in the range [first,last) which does not compare less than val.

// upper_bound:
// Returns an iterator pointing to the first element in the range [first,last) which compares greater than val.