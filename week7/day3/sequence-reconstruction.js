// LC: https://leetcode.ca/2017-02-16-444-Sequence-Reconstruction/

// You are given an integer array nums of length n where nums is a permutation of the integers in the range [1, n]. You are also given a 2D integer array sequences where sequences[i] is a subsequence of nums.

// Check if nums is the shortest possible and the only supersequence. The shortest supersequence is a sequence with the shortest length and has all sequences[i] as subsequences. There could be multiple valid supersequences for the given array sequences.

// For example, for sequences = [[1,2],[1,3]], there are two shortest supersequences, [1,2,3] and [1,3,2].
// While for sequences = [[1,2],[1,3],[1,2,3]], the only shortest supersequence possible is [1,2,3]. [1,2,3,4] is a possible supersequence but not the shortest.
// Return true if nums is the only shortest supersequence for sequences, or false otherwise.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [1,2,3], sequences = [[1,2],[1,3]]
// Output: false
// Explanation: There are two possible supersequences: [1,2,3] and [1,3,2].
// The sequence [1,2] is a subsequence of both: [1,2,3] and [1,3,2].
// The sequence [1,3] is a subsequence of both: [1,2,3] and [1,3,2].
// Since nums is not the only shortest supersequence, we return false.
// Example 2:

// Input: nums = [1,2,3], sequences = [[1,2]]
// Output: false
// Explanation: The shortest possible supersequence is [1,2].
// The sequence [1,2] is a subsequence of it: [1,2].
// Since nums is not the shortest supersequence, we return false.
// Example 3:

// Input: nums = [1,2,3], sequences = [[1,2],[1,3],[2,3]]
// Output: true
// Explanation: The shortest possible supersequence is [1,2,3].
// The sequence [1,2] is a subsequence of it: [1,2,3].
// The sequence [1,3] is a subsequence of it: [1,2,3].
// The sequence [2,3] is a subsequence of it: [1,2,3].
// Since nums is the only shortest supersequence, we return true.

function sequenceReconstruction(nums, sequences) {
    const graph = new Map();
    const indegree = new Map();

    for (const seq of sequences) {
        for (const num of seq) {
            if (!graph.has(num)) graph.set(num, new Set());
            if (!indegree.has(num)) indegree.set(num, 0);
        }

        for (let i = 1; i < seq.length; i++) {
            const u = seq[i - 1], v = seq[i];
            if (!graph.get(u).has(v)) {
                graph.get(u).add(v);
                indegree.set(v, indegree.get(v) + 1);
            }
        }
    }

    const queue = [];
    for (const [node, deg] of indegree.entries()) {
        if (deg === 0) queue.push(node);
    }

    let i = 0;
    while (queue.length) {
        if (queue.length > 1) return false; // More than one way
        const curr = queue.shift();
        if (nums[i++] !== curr) return false; // Order doesn't match

        for (const neighbor of graph.get(curr) || []) {
            indegree.set(neighbor, indegree.get(neighbor) - 1);
            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    return i === nums.length;
}
