// Problem Statement: Given a DAG( Directed Acyclic Graph ), print all the vertex of the graph in a topologically sorted order. If there are multiple solutions, print any.

// Pre-req: DFS traversal, Graphs, Stack data structure.


function ToplogicalSortDFS(V, adj){
    let visited = new Array(V).fill(false);
    let stack = [];
    const dfs = (i) => {
        const nodes = adj[i];
        for(let i = 0; i<nodes.length; i++){
            if(!visited[nodes[i]]){
                dfs(nodes[i]);
            }
        }
        stack.push(i);
    }

    for(let i = 0; i < V; i++){
        dfs(i);
    }

    return stack.reverse();
}