// Shortest path Algorithm

// Limitation of Dijkstras
// Fails with Negative Weights and Negative Cycles


// Bellman Ford
/**
 * Works only with Directed Graphs
 */


/** STEPS
 * Relax all the edges N-1 times sequentially
 * Relax = Min distance to reach that node
 * 
 */

// WHY N-1 Iterations ?
// In a graph with N nodes, the longest possible simple path (a path that doesn’t repeat any node) can have at most N−1 edges.

// So, to find the shortest paths from the source to every other node, we must allow up to N−1 relaxations, because a node might be reached through a path with up to N−1 edges.

// Each relaxation allows us to consider one edge and potentially update the shortest path. Doing this N−1 times ensures that all paths up to length N−1 are considered.

// return min distance and check if graph has negative cycle
function ballmanFord(edges, V, source){
    let distance = Array(V).fill(Number.MAX_SAFE_INTEGER);
    distance[s] = 0;
    for(let i = 0; i < V; i++){
        edges.forEach(edge => {
            const [u,v,wt] = edge;
            if(distance[u] !== Number.MAX_SAFE_INTEGER && distance[u] + wt < distance[v]){
                distance[v] = distance[u]+wt;
            }
        })
    }

    // check negative cycle
    edges.forEach(edge => {
        const [u,v,wt] = edge;
        if(distance[u] !== Number.MAX_SAFE_INTEGER && distance[u] + wt < distance[v]){
            return [-1];
        }
    })

    return distance;
}