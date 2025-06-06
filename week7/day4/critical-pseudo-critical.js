// LC: https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/description/?envType=problem-list-v2&envId=strongly-connected-component

// Given a weighted undirected connected graph with n vertices numbered from 0 to n - 1, and an array edges where edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge between nodes ai and bi. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles and with the minimum possible total edge weight.

// Find all the critical and pseudo-critical edges in the given graph's minimum spanning tree (MST). An MST edge whose deletion from the graph would cause the MST weight to increase is called a critical edge. On the other hand, a pseudo-critical edge is that which can appear in some MSTs but not all.

// Note that you can return the indices of the edges in any order.


class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(1);
  }

  find(x) {
    if (x === this.parent[x]) {
      return this.parent[x];
    }
    return (this.parent[x] = this.find(this.parent[x]));
  }

  union(u, v) {
    const parentU = this.find(u);
    const parentV = this.find(v);

    if (parentU === parentV) return false;

    if (this.rank[parentU] > this.rank[parentV]) {
      this.parent[parentV] = parentU;
      this.rank[parentU] += this.rank[parentV];
    } else {
      this.parent[parentU] = parentV;
      this.rank[parentV] += this.rank[parentU];
    }

    return true;
  }

  isValidST(n) {
    const maxRank = Math.max(...this.rank);
    if (maxRank === n) return true;
    return false;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */

var findCriticalAndPseudoCriticalEdges = function (n, edges) {
  let n = edges.length;
  edges.forEach((edge, i) => edge.push(i)); // add original index to the edge

  let ds = new DisjointSet(n);
  edges = edges.sort((a, b) => a?.[2] - b?.[2]);

  let mst_weight = 0;
  for (let [u, v, w] of edges) {
    if (ds.union(u, v)) {
      mst_weight += w;
    }
    let critical = [];
    let pseudo_critical = [];

    for (const [u, v, w, idx] of edges) {
      // Try critical node
      let temp_weight = 0;
      ds = new DisjointSet(n);
      for (const [u1, v1, w1, idx1] of edges) {
        if (idx !== idx1 && ds.union(u1, v1)) {
          temp_weight += w1;
        }
      }
      if (!ds.isValidST(n) || temp_weight > mst_weight) {
        critical.push(idx);
        continue;
      }
      // Try for pseudo crtical
      temp_weight = w;
      ds = new DisjointSet(n);
      ds.union(u, v);
      for (const [u1, v1, w1] of edges) {
        if (ds.union(u1, v1)) temp_weight += w1;
      }

      if (temp_weight === mst_weight) pseudo_critical.push(idx);
    }
  }

  return [critical, pseudo_critical];
};