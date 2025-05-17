// Problem Statement: Given the Preorder and Inorder traversal of a Binary Tree, construct the Unique Binary Tree represented by them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = new Map();
    inorder.forEach((item, idx) => map.set(item, idx));

    function helper(preStart, preEnd, inStart, inEnd){
        if(preStart > preEnd || inStart > inEnd) return null;

        let rootNode = new TreeNode(preorder[preStart]);
        let newIdx = map.get(preorder[preStart]);
        let len = newIdx - inStart;
        rootNode.left = helper(preStart+1, preStart+len, inStart, newIdx - 1);
        rootNode.right = helper(preStart+len+1, preEnd, newIdx+1, inEnd);
        return rootNode;
    }
    return helper(0, preorder.length-1, 0, inorder.length-1);
};