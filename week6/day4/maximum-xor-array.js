// LC: https://leetcode.com/problems/maximum-xor-with-an-element-from-array/description/

// You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [xi, mi].

// The answer to the ith query is the maximum bitwise XOR value of xi and any element of nums that does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1.

// Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the ith query.

var maximizeXor = function (nums, queries) {
  const result = new Array(queries.length);
  
  // we must use an array to save on space
  // objects and maps take up too much memory
  // we create a trie so that we can easily find
  // the best result
  const trie = [null, null];
  for (let num of nums) {
    let node = trie;
	// we start at 30 because 10 ** 9 is our max value and 2 ** 30 > 10 ** 9
    for (let i = 30; i >= 0; i--) {
      const b = 1 << i;
      if (b & num) {
        if (!node[1]) {
          node[1] = [null, null];
        }
        node = node[1];
      } else {
        if (!node[0]) {
          node[0] = [null, null];
        }
        node = node[0];
      }
    }
  }

  // do a quick check to find the minimum value
  // to speed up our run time
  const min = Math.min(...nums);

  // this is our main function that will traverse the trie
  const dfs = (node, num, i, xorVal, max) => {

    // if we don't have a node then there was no number
	// with this bit set/unset so we return -1
	// also if our value that we are trying to XOR is
	// greater than the max, we return -1
    if (!node || xorVal > max) {
      return -1;
    }

	// this is our base case and we found a matching value
	// so we can return the value
    if (i === -1) return xorVal;
	
	// create a bit mask of our current bit we are examining
    const bit = 1 << i;
	
	// decrement i for our next call
	// we won't need i anymore for the remainder of this call
    i--;
	
	// if the bit is greater than the max then we only have 1 option
	// we must take the unset bit which is 0
	// so we traverse node[0] and pass along all other values
    if (bit > max) {
      return dfs(node[0], num, i, xorVal, max);
    }
	
	// if the bit is set in num
    if (num & bit) {
	  // then we want to preference the unset bit
	  // in the xorVal
	  // if it's possible then we return it
	  // otherwise we try to set the bit
      let x = dfs(node[0], num, i, xorVal, max);
      if (x > -1) {
        return x;
      }
      return dfs(node[1], num, i, xorVal | bit, max);
	  
	// this is just the opposite of above
	// where we preference the set bit
	// because the bit is not set in num
    } else {
      let y = dfs(node[1], num, i, xorVal | bit, max);
      if (y > -1) {
        return y;
      }
      return dfs(node[0], num, i, xorVal, max);
    }
  };

  // Iterate through the numbers
  for (let i = 0; i < queries.length; i++) {
    const [num, max] = queries[i];
	// do a fast check to minimize the work done
    if (max < min) {
      result[i] = -1;
      continue;
    }
	// store the result for the num XOR the result
    result[i] = dfs(trie, num, 30, 0, max) ^ num
  }
  return result;
};