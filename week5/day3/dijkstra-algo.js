// Problem Statement: 

const { MinPriorityQueue } = require("datastructures-js");

// You are given a weighted undirected graph having n+1 vertices numbered from 0 to n and m edges describing there are edges between a to b with some weight, find the shortest path between the vertex 1 and the vertex n, and if the path does not exist then return a list consisting of only -1.


// Using PQ

function shortestPath(graph, source, weights){
    let n = graph.length;

    let distance = Array(n).fill(Number.MAX_SAFE_INTEGER);

    distance[source] = 0;

    function Node(distance, node){
        this.distance = distance;
        this.node = node;
    }

    let pq = new MinPriorityQueue({
        compare: (a, b) => {
            if(a?.distance === b?.distance){
                return a?.node - b?.node;
            }
            return a?.distance - b?.distance;
        }
    })

    pq.push(new Node(0, source));

    while(!pq.isEmpty()){
        const node = pq.pop();
        const val = node.distance;
        const adjNodesWithWeights = graph[node];
        adjNodesWithWeights.forEach(adjNodeWeight => {
            const [adjNode, weight] = adjNodeWeight;

            if((val + weight) < distance[adjNode]){
                distance[adjNode] = val + weight;
                pq.push(new Node(val+weight, adjNode));
            }
        })
    }
    return distance;
}