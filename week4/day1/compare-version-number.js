// LC: https://leetcode.com/problems/compare-version-numbers/

// Given two version strings, version1 and version2, compare them. A version string consists of revisions separated by dots '.'. The value of the revision is its integer conversion ignoring leading zeros.

// To compare version strings, compare their revision values in left-to-right order. If one of the version strings has fewer revisions, treat the missing revision values as 0.

// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.
 

// Example 1:

// Input: version1 = "1.2", version2 = "1.10"

// Output: -1

// Explanation:

// version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.

// Example 2:

// Input: version1 = "1.01", version2 = "1.001"

// Output: 0

// Explanation:

// Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

// Example 3:

// Input: version1 = "1.0", version2 = "1.0.0.0"

// Output: 0

// Explanation:

// version1 has less revisions, which means every missing revision are treated as "0".

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    let n = Math.max(v1.length, v2.length);

    for(let i = 0; i<n; i++){
        let r1 = parseInt(v1[i] || 0);
        let r2 = parseInt(v2[i] || 0);
        if(r1 === r2) continue;
        if(r1 > r2) return 1;
        return -1;
    }
    return 0;
};

console.log(compareVersion("1.2", "1.10"));
console.log(compareVersion("1.01", "1.001.0.0"));