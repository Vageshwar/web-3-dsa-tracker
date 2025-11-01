/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {

    const unique_nums = new Set(nums);
    const root = new ListNode();
    root.next = head;
    let curr = root;
    while(curr.next){
        if(unique_nums.has(curr.next.val)){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return root.next;
};