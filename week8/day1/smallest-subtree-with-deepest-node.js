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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    
    let lca = null;
    let maxDepth = -1;
    function dfs(n,d){
        const dleft = n.left ? dfs(n.left, d+1) : d;
        const dright = n.right ? dfs(n.right, d+1) : d;
        if(d > maxDepth) maxDepth = d;
        if(dleft === maxDepth && dright === maxDepth) lca = n;
        return Math.max(dleft, dright);
    };

    dfs(root,0);
    return lca;
    
};