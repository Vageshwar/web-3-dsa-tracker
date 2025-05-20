// LC: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = [];
    let preorder = (root) => {
        if(!root){
            result.push('null');
            return;
        }
        result.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return result.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let input = data.split(",");
    let index = 0;
    const create = () => {
        let val = input[index];
        if(val === 'null'){
            index++;
            return null;
        }
        let node = new TreeNode(Number(val));
        index++;
        node.left = create();
        node.right = create();
        return node;
    }
    return create();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */