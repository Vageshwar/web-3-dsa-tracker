// Problem Statement: Given an undirected graph, return a vector of all nodes by traversing the graph using breadth-first search (BFS).


function BFS(graph, vertices){
    let visited = new Array(vertices+1).fill(false);
    visited[0] = true;
    let q = [graph[0]];
    let ans = [];
    while(q.length){
        const node = q.shift();
        ans.push(node);
        node.neighbors.forEach(neighbor => {
            if(!visited[neighbor]){
                q.push(neighbor);
            }
        })
    }
    return ans;
}