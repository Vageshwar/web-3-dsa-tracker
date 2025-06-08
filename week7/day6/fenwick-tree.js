class FenwickTree {
    constructor(n){
        this.bit = Array.from({length: n}, () => 0);
        this.n = n;
    }
    
    create(arr){
        for(let i=0; i < arr.length; i++){
            this.add(i, arr[i]);
        }
    }

    sum(r){
        let res = 0;
        for(; r >= 0; r = (r & (r+1)) - 1) res += this.bit[r];
        return res;
    }

    sumRange(l, r){
        return this.sum(r) - this.sum(l-1);
    }

    add(idx, delta){
        for(; idx<this.n; idx = idx | (idx+1))
            this.bit[idx] += delta;
    }
}