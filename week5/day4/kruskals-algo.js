/**
 * STEPS:
 * 1. Sort all weight Edges in asc. order (wt, u, v)
 * 2. Take each sorted edges one by one and if u and v don't belong to same graph add it to the ans
 */


function kruskalMST(V, edges){
 edges.sort((a,b) => a[2] - b[2]);
 
 const dsu = new DisjointSet(); // assuming
 let ans = 0;
 let count = 0;
 for(const [u,v,w] of edges){
    if(dsu.findUltimateParent(u) !== dsu.findUltimateParent(v)){
        dsu.unionBySize(u,v);
        ans += w;
        if(++count === V-1) break;
    }
 }
 return ans;
}