// Problem Statement: Given the root of the Binary Tree, return the length of its diameter. The Diameter of a Binary Tree is the longest distance between any two nodes of that tree. This path may or may not pass through the root.

function diameter(){
    let maxDiameter = 0;
    const depth = (node) => {
        if(!node) return 0;
        const left = depth(node.left);
        const right = depth(node.right);
        maxDiameter = Math.max(left+right, maxDiameter);
        return (Math.max(left, right) + 1)
    }
    depth(root);
    return maxDiameter
}