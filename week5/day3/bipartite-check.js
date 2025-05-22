// LC: https://leetcode.com/problems/is-graph-bipartite/description/

// There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

// There are no self-edges (graph[u] does not contain u).
// There are no parallel edges (graph[u] does not contain duplicate values).
// If v is in graph[u], then u is in graph[v] (the graph is undirected).
// The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
// A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

// Return true if and only if it is bipartite.

 /**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let colors = Array(graph.length).fill(-1);

    let q = [0];
    colors[0] = 0;
    while(q.length){
        const node = q.shift();
        const currentColor = colors[node];
        const adjNodes = graph[node];
        for(let i = 0; i < adjNodes.length; i++){
            let adjNode = adjNodes[i];
            if(colors[adjNode] === -1){
                colors[adjNode] = currentColor ? 0 : 1;
                q.push(adjNode);
            }
            else if(colors[adjNode] === currentColor) return false;
        }
    }
    return true;
};

// DFS

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartiteDFS = function(graph) {
    let n = graph.length;
    let colors = Array(graph.length).fill(-1);

    function dfs(node, color){
        colors[node] = color;

        for(let neighbor of graph[node]){
            if(colors[neighbor] === -1){
                if(!dfs(neighbor, 1 - color)) return false;
            }else if(colors[neighbor] === color) return false;
        }
        return true;
    }

    for(let i = 0; i < n; i++){
        if(colors[i] == -1){
            if(!dfs(i, 0)) return false;
        }
    }
    return true;
};