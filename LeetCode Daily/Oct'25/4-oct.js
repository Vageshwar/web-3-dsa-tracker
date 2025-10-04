/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let i = 0;
    let j = n - 1;
    let ans = 0;
    while(j > i){
        let min_height = Math.min(height[j], height[i]);
        let area = min_height * (j - i);
        ans = Math.max(ans, area);
        if(height[i] > height[j]){
            j--;
        }else{
            i++;
        }
    }
    return ans;
};