// LC: https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/description/

// Given a string s of lowercase letters, you need to find the maximum number of non-empty substrings of s that meet the following conditions:

// The substrings do not overlap, that is for any two substrings s[i..j] and s[x..y], either j < x or i > y is true.
// A substring that contains a certain character c must also contain all occurrences of c.
// Find the maximum number of substrings that meet the above conditions. If there are multiple solutions with the same number of substrings, return the one with minimum total length. It can be shown that there exists a unique solution of minimum total length.

// Notice that you can return the substrings in any order.

 

// Example 1:

// Input: s = "adefaddaccc"
// Output: ["e","f","ccc"]
// Explanation: The following are all the possible substrings that meet the conditions:
// [
//   "adefaddaccc"
//   "adefadda",
//   "ef",
//   "e",
//   "f",
//   "ccc",
// ]
// If we choose the first string, we cannot choose anything else and we'd get only 1. If we choose "adefadda", we are left with "ccc" which is the only one that doesn't overlap, thus obtaining 2 substrings. Notice also, that it's not optimal to choose "ef" since it can be split into two. Therefore, the optimal way is to choose ["e","f","ccc"] which gives us 3 substrings. No other solution of the same number of substrings exist.
// Example 2:

// Input: s = "abbaccd"
// Output: ["d","bb","cc"]
// Explanation: Notice that while the set of substrings ["d","abba","cc"] also has length 3, it's considered incorrect since it has larger total length.


// ---------------------------------------------------
// Model this question as graph problem

// If there is a character 'b' between the first and last occurrence of character 'a', then it means we must include 'b' in the substring if we want to include 'a', so we can create an edge from 'a' to 'b'.

// So we can convert the input string into a directed graph, which has at most 26 vertex 'a' to 'z'.

// Within this graph, each SCC (Strongly Connected Components) much be included in a substring together. Additionaly, 'downstream' SCCs of a chosen SCC must also be included in the same substring.

// Thus, its easy to see that we just need to find all the SCC with 0 out-degree. Characters in each SCC are characters we must include in each substring. And it is guaranteed to be minimal total length.



// KOSARAJU'S ALGO

//STEPS:
/**
 * 1. Apply Topological Sort
 * 2. Transpose the graph
 * 3. DFS according to finishing time
 * 
 */


function kosaRaju(graph, V){
    let visisted = Array(V).fill(0);

    let stack = [];

    function dfs(i){
        if(i >= V) return; 
        visisted[i] = 1;
        const adjNodes = graph[i];
        adjNodes.forEach(node => {
            if(visisted[node] === 0){
                dfs(node)
            }
        })
        stack.push(i);
    }

    function reverseDFS(node, transpose, scc){
        visisted[node] = 1;
        scc.push(node);
        const adjNodes = transpose[node];
        adjNodes.forEach(adjNode => {
            if(visisted[adjNode] === 0){
                reverseDFS(adjNode, transpose);
            }
        })
        return scc;
    }

    for(let i = 0; i<V; i++){
        if(visisted[i] === 0){
            dfs(i)
        }
    }

    let transpose = Array(V).fill([]);

    for(let i = 0; i<V; i++){
        visisted[i] = 0;
        const adjNodes = graph[i];
        adjNodes.forEach(node => {
            transpose[node].push(i);
        })
    }

    let ans = [];

    while(stack.length){
        let node = stack.pop();
        if(visisted[node] === 0){
            let scc = reverseDFS(node, transpose, []);
            ans.push(scc);
        }
    }

    return ans;
}