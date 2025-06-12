class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let low = 0;
        let high = nums.length;

        while(high > low){
            let mid = low + Math.floor((high - low) / 2);

            if(nums[mid] >= target){
                high = mid;
            }else{
                low = mid+1;
            }
        }
        return low;
    }
}
