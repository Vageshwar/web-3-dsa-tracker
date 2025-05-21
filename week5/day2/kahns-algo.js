// Kahns Algorithm

// Toplogical Sort
/*
 If there is a edge between u & v, u appears before v in the ordering
 Topogical is only possible in Directed Acyclic Graphs (DAG)
*/


// Steps
/**
 * Insert all nodes with indegree 0 in q
 * take out element from q
 */

function TopogicalSortBFS(V, adj){
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

    let ans = [];
    let i = 0;
    while(q.length){
        let node = q.shift();
        topo[i++] = node;
        for(let i = 0; i<adj[node].length; i++){
            let adjNode = adj[node][i];
            indegree[adjNode]--;
            if(indegree[adj] === 0){
                q.push(adjNode);
            }
        }
    }
    return ans;
}



