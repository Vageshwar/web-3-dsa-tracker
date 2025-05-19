// LC: https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/


// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallestBrute = function(root, k) {
    let ans = [];
    function inorder(node){
        if(!node) return;

        inorder(node.left);
        ans.push(node.val);
        inorder(node.right);
    }

    inorder(root);

    if(ans.length >= k){
        return ans[k-1];
    }
    return -1;
};

var kthSmallest = function(root, k) {
    let ans = [];
    let c = 0;
    function inorder(node){
        if(!node || c === k) return;

        inorder(node.left);
        c++;
        if(c===k){
            ans = node.val;
            return;
        }
        inorder(node.right);
    }

    inorder(root);
    return ans;
};