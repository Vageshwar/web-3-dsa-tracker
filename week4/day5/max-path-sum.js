// Problem Statement: Given a Binary Tree, determine the maximum sum achievable along any path within the tree. A path in a binary tree is defined as a sequence of nodes where each pair of adjacent nodes is connected by an edge. Nodes can only appear once in the sequence, and the path is not required to start from the root.  Identify and compute the maximum sum possible along any path within the given binary tree.


function maxPath(root){
    let ans = Number.MIN_SAFE_INTEGER
    const helper = (node) => {
        if(!node) return 0;

        let left = Math.max(0, helper(node.left))
        let right = Math.max(0, helper(node.right))

        ans = Math.max(left + right + node.val, ans);
        return Math.max(left, right) + node.val;
    }

    helper(root);
    return ans;
}