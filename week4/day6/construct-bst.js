// LC: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


function sortedArrayToBST(arr){
    if(!arr.length) return null;
    let mid = Math.floor(arr.length / 2);
    let node = new TreeNode(arr[mid]);
    node.left = sortedArrayToBST(arr.slice(0, mid-1));
    node.right = sortedArrayToBST(arr.slice(mid+1));
    return node;
}