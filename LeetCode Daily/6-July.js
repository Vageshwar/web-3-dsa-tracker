/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.m2 = {};
    for(let n of nums2){
        this.m2[n] = (this.m2[n] || 0) + 1;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    let oldVal = this.nums2[index];
    this.nums2[index] = oldVal + val;
    this.m2[oldVal] = this.m2[oldVal] - 1;
    this.m2[this.nums2[index]] = (this.m2[this.nums2[index]] || 0 ) + 1;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let c = 0;
    for(let x of this.nums1){
        c += this.m2[tot - x] || 0;
    }
    return c;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */