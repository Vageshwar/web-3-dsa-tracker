// LCA in BST
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestorBST = function(root, p, q) {
   if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestorBST(root.right, p, q)
    } else if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestorBST(root.left, p, q)
    } else {
        return root
    }
};


// LCA in Binary Tree

var lowestCommonAncestorBT = function(root, p, q) {
    if(!root || root === p || root === q) return root;

    let left = lowestCommonAncestorBT(root.left, p,q);
    let right = lowestCommonAncestorBT(root.right, p, q);

    if(!left) return right;
    else if(!right) return left;
    return root;
};