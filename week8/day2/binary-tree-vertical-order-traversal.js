// LC: https://leetcode.ca/all/314.html

// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Examples 1:

// Input: [3,9,20,null,null,15,7]

//    3
//   /\
//  /  \
//  9  20
//     /\
//    /  \
//   15   7

// Output:

// [
//   [9],
//   [3,15],
//   [20],
//   [7]
// ]
// Examples 2:

// Input: [3,9,8,4,0,1,7]

//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7

// Output:

// [
//   [4],
//   [9],
//   [3,0,1],
//   [8],
//   [7]
// ]
// Examples 3:

// Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
//     /\
//    /  \
//    5   2

// Output:

// [
//   [4],
//   [9,5],
//   [3,0,1],
//   [8,2],
//   [7]
// ]

function verticalOrder(root){
    if(!root) return [];

    let map = new Map()
    let q = [{
        node: root,
        level: 0
    }]
    let min = 0;
    let max = 0;

    while(q.length){
        const {node, level} = q.shift();
        if(!map.has(level)) map.set(level, []);
        map.get(level).push(node.val);
        min = Math.min(min, level);
        max = Math.max(max, level);

        if(node.left) q.push({
            node: node.left,
            level: level-1
        })
        if(node.right) q.push({
            node: node.right,
            level: level+1,
        })
    }

    let ans = []
    for(let i = min; i <= max; i++){
        ans.push(map.get(i));
    }

    return ans;
}