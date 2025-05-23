/*
* Minimum Spanning Tree - MST
* Spanning Tree: A tree in which we have N nodes and N-1 edges and all nodes are reachable from each other

* MST: Spanning Tree with least sum of weights is called MST
*/

const { MinPriorityQueue } = require("datastructures-js");

function primsAlgo(V, adj){
    let visited = Array(V).fill(0);

    let pQ = new MinPriorityQueue();

    pQ.push([0,0]);
    let ans = 0;
    while(!pQ.isEmpty()){
        const [node, wt] = pQ.pop();

        if(visited[node]) continue;
        visited[node] = 1;
        ans+=wt; 
        adj[node].forEach(adjNode => {
            const [an, nw] = adjNode;
            if(!visited[an]){
                pQ.push([an, nw]);
            }
        })  
    }
    return ans;
}