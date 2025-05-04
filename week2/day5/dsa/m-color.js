// Problem Statement: Given an undirected graph and a number m, determine if the graph can be colored with at most m colors such that no two adjacent vertices of the graph are colored with the same color.

// Examples:
// Example 1:
// Input: 
// n = 4
// M = 3
// E = 5
// Edges[] = {
//   (0, 1),
//   (1, 2),
//   (2, 3),
//   (3, 0),
//   (0, 2)
// }

// Output: 1

// Explanation: It is possible to colour the given graph using 3 colours.

// Example 2:

// Input: 
// n = 3
// M = 2
// E = 3
// Edges[] = {
//   (0, 1),
//   (1, 2),
//   (0, 2)
// }

// Output: 0


// Explanation: It is not possible to color.

function isSafe(node, color, graph, n, col){
    for(let k = 0; k<n; k++){
        if(k !== node && graph[k][node] === 1 && color[k] === col){
            return false;
        }
        return true;
    }
}

function helper(node, color, m, n, graph){
    if(node === n) return true;
    for(let i = 1; i<m+1; i++){
        if(isSafe(node, color, graph, n, i)){
            color[node] = i;
        }
        if(helper(node+1, color, m, n, graph)) return true;
        color[node] = 0;
    }
    return false;
}

function mColor(n,m, graph){
    let color = Array(n).fill(0);
    if(helper(0, color, m, n, graph)){
        return true;
    }
    return false;
}

let graph = Array(3).fill(0).map((_) => Array(3).fill(0));

graph[0][1] = 1
graph[1][0] = 1
graph[1][2] = 1
graph[2][1] = 1
graph[2][3] = 1
graph[3][2] = 1
graph[3][0] = 1
graph[0][3] = 1
graph[0][2] = 1
graph[2][0] = 1