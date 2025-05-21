// Problem Statement: Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not. 

// Examples:

// Example 1:
// Input:
// V = 8, E = 7



// USING BFS

function cycleHelperBFS(adj, i, visited){
    let q = [];
    q.push([new Node(i, -1)]);
    visited[i] = true;
    
    while(!q.length){
        let [node, parent] = q.shift();
        for(let i = 0; i < adj[node].length; i++){
            let childNode = adj[node][i];
            if(visited[childNode]){
                if(parent !== node) return true;
            }else{
                visited[childNode] = true;
                q.push([childNode, node]);
            }
        }
    }
}

function hasCycle(V, adj){
    let visited = new Array(V).fill(false);
    let parent = Array(V).fill(-1);

    for(let i = 0; i<V; i++){
        if(!visited[i]){
            if(cycleHelperBFS(adj, i, visited, parent))
                return true;
        }
    }
    return false;
}

// USING DFS

function dfs(node, parent, visited, adj){
    visited[node]= true;

    for(let i = 0; i<adj[node].length; i++){
        let adjNode = adj[node][i];
        if(!visited[adjNode]){
            if(dfs(adjNode, node, visited, adj)){
                return true;
            }
        }
        else if(adjNode !== parent){
            return true;
        }
    }
    return false;
}