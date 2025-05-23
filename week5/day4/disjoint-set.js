/**
 * Disjoin Set - Optimized DS to find disjoint nodes
 */

/**
 * STEPS:
 * 1. Find Ultimate Parent of u and v -> pu and pv
 * 2. Find rank of pu and pv
 * 3. connect smller rank parent to larger rank parent
 * 
 */

class DisjointSet {
    DisjointSet(n){
        this.rank = Array(n+1).fill(0);
        this.parent = Array(n+1).fill(0).map((_, idx) => idx);
        this.size = Array(n+1).fill(1);
    }

    findUltimateParent(node){
        if(node === this.parent[node]){
            return node;
        }
        this.parent[node] = this.findUltimateParent(this.parent[node]);
    }

    unionByRank(u,v){
        let pu = this.findUltimateParent(u);
        let pv = this.findUltimateParent(v);
        
        if(this.size[pu] < this.size[pv]){
            this.parent[pu] = pv;
            this.size[pv] += this.size[pu];
        }else{
            this.parent[pv] = pu;
            this.size[pu] += this.size[pv];
        }
    }

    unionBySize(u,v){
        let pu = this.findUltimateParent(u);
        let pv = this.findUltimateParent(v);
        
        if(this.rank[pu] < this.rank[pv]){
            this.parent[pu] = pv;
        }
        else if(this.rank[pv] < this.rank[pu]){
            this.parent[pv] = pu;
        }
        else{
            this.parent[pv] = pu;
            this.rank[pu]++;
        }
    }
}

const dj = new DisjointSet(7);
dj.unionByRank(1,2);
dj.unionByRank(2,3);
dj.unionByRank(4,5);
dj.unionByRank(6,7);
dj.unionByRank(5,6);
