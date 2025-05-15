// Problem Statement: Given a Binary Tree, return its maximum width. The maximum width of a Binary Tree is the maximum diameter among all its levels. The width or diameter of a level is the number of nodes between the leftmost and rightmost nodes.

import { root } from "../../utils/binary-tree.js";

function maxWidthOfBinaryTree(root){
    if (!root) return 0;

    let maxWidth = 0;
    let queue = [[root, 0]];

    while (queue.length > 0) {
        let levelLength = queue.length;
        let levelStartIndex = queue[0][1];
        let levelEndIndex = queue[queue.length - 1][1];
        maxWidth = Math.max(maxWidth, levelEndIndex - levelStartIndex + 1);

        let nextLevel = [];
        for (let i = 0; i < levelLength; i++) {
            const [node, index] = queue[i];
            // Normalize indices to prevent integer overflow
            let normalizedIndex = index - levelStartIndex;
            if (node.left) nextLevel.push([node.left, 2 * normalizedIndex]);
            if (node.right) nextLevel.push([node.right, 2 * normalizedIndex + 1]);
        }

        queue = nextLevel;
    }

    return maxWidth;
}

console.log(maxWidthOfBinaryTree(root));