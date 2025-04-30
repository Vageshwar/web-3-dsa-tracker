// Resolving 3 sum again

function threeSum(arr){
    // sort arr
    arr = arr.sort((a,b) => a-b);
    let n = arr.length;

    let ans = [];

    for(let i = 0; i < n; i++){
        if(i!==0 && arr[i] === arr[i-1]) continue;

        let j = i+1;
        let k = n-1;
        while(k > j){
            const sum = arr[i]+arr[j]+arr[k];
            if(sum > 0) k--;
            else if(sum < 0) j++;
            else {
                j++;
                k--;
                ans.push([arr[i], arr[j], arr[k]]);
                while(j < k && arr[j] === arr[j-1]) j++;
                while(j < k && arr[k] === arr[k+1]) k--;
            }
        }
    }

    return ans;
}

console.log(threeSum( [-1,0,1,2,-1,-4]))