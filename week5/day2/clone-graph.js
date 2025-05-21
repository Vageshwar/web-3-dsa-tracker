// LC: https://leetcode.com/problems/clone-graph/description/

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.


/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var cloneGraph = function(root) {
    if(!root) return null;
    let nodesCompleted = new Map();
    return cloneHelper(root, nodesCompleted);
};

function cloneHelper(node, nodesCompleted){
    if(nodesCompleted.has(node)){
        return nodesCompleted.get(node);
    }

    let cloneNode = new _Node(node.val);
    nodesCompleted.set(node, cloneNode);

    for(let neighbor of node.neighbors){
        cloneNode.neighbors.push(cloneHelper(neighbor, nodesCompleted));
    }
    return cloneNode;
}