//https://takeuforward.org/data-structure/depth-first-search-dfs/

// Depth First Search (DFS)
// Problem Statement: Given an undirected graph, return a vector of all nodes by traversing the graph using depth-first search (DFS).

// Pre-req: Recursion, Graph Representation

function dfs(graph){
    let v = graph.length;
    let visited = Array(v+1).fill(false);
    visited[0] = true;
    let ls = [];
    const helper = (node) => {
        visited[node] = true;
        ls.push(node);
        graph[node].forEach(adjNode => {
            if(!visited[adjNode]){
                dfs(adjNode);
            }
        })
    }
    helper(0);
    return ls;
}