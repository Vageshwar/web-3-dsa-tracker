// Rat in a Maze

// Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and the rat cannot move to it while value 1 at a cell in the matrix represents that rat can travel through it.

// Note: In a path, no cell can be visited more than one time.

// Print the answer in lexicographical(sorted) order

// Examples:

// Example 1:

// Input:
// N = 4
// m[][] = {{1, 0, 0, 0},
//         {1, 1, 0, 1}, 
//         {1, 1, 0, 0},
//         {0, 1, 1, 1}}

// Output: DDRDRR DRDDRR

function solver(i, j, a, n, ans, move, visited, di, dj ){
    if(i === n-1 && j === n-1){
        ans.push(move);
        return;
    }
    let dir = "DLRU";
    for(let idx = 0; idx < 4; idx++){
        let nextI = i+di[idx];
        let nextJ = i+dj[idx];
        if(nextI >= 0 && nextJ >=0 && nextI <n && nextJ < n && !visited[nextI][nextJ] && a[nextI][nextJ] === 1){
            visited[i][j] = 1;
            solver(nextI, nextJ, a, n, ans, `${move}${dir[idx]}`, visited, di, dj);
            visited[i][j] = 0;
        }
    }
}


function ratMazeSolver(m, n){
    let ans = [];
    let visited = Array(n).fill(0).map(_ => Array(n).fill(0));
    let di = [1, 0, 0, -1];
    let dj = [0, -1, 1, 0]; // can take 4 x 2 array to if required
    if(m[0][0] === 1){
        solver(0, 0, m, n, ans, "", visited, di, dj);
    }
    return ans;
}