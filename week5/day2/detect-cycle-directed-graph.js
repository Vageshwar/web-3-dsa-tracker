// DFS

function cycleCheckDFS(i, adj, visited, dfsVisted){
    visited[i] = true;
    dfsVisted[i] = true;
    let adjNode = adj[i];
    for(let i = 0; i < adjNode.length; i++){
        let node = adjNode[i];
        if(!visited[node]){
            if(cycleCheckDFS(node, adj, visited, dfsVisted)) return true;
        }else if(dfsVisted[node]) return true;
    }
    dfsVisted[i] = false;
    return false;
}

function cycleHelperBFS(V, adj){
    let indegree = Array(V).fill(0);
    for(let i = 0; i < V; i++){
        const nodes = adj[i];
        nodes.forEach(node => {
            indegree[node]++;
        })
    }
    let q = [];
    for(let i = 0; i < V; i++){
        if(indegree[0] === 0){
            q.push(i);
        }
    }

    let count = 0;
    let i = 0;
    while(q.length){
        let node = q.shift();
        topo[i++] = node;
        count++;
        for(let i = 0; i<adj[node].length; i++){
            let adjNode = adj[node][i];
            indegree[adjNode]--;
            if(indegree[adj] === 0){
                q.push(adjNode);
            }
        }
    }
    if(count === N) return false;
    return true;
}

function detectCycleDFS(V, adj){
    let visited = Array(V).fill(false);
    let dfsVisted = Array(V).fill(false);
    for(let i = 0; i<V; i++){
        if(!visited[i]){
            if(cycleCheckDFS(i, adj, visited, dfsVisted)){
                return true;
            }
        }
    }
    return false;
}

function detectCycleBFS(V, adj){
    return cycleHelperBFS(V, adj);
}