var minMoves = function(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;

    let start = null;
    let litterPositions = new Map();
    let litterCount = 0;

    const lumetarkon = classroom.map(row => row.slice());

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (classroom[i][j] === 'S') {
                start = [i, j];
            } else if (classroom[i][j] === 'L') {
                litterPositions.set(`${i},${j}`, litterCount++);
            }
        }
    }

    if (litterCount === 0) return 0;

    const fullMask = (1 << litterCount) - 1;
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];
    const visited = new Set();

    let queue = [[start[0], start[1], energy, 0, 0]]; // i, j, energyLeft, collectedMask, steps

    while (queue.length) {
        const [x, y, en, mask, steps] = queue.shift();
        const visitKey = `${x},${y},${mask}`;

        // Only visit state once with any energy level (will be refreshed by 'R')
        if (visited.has(visitKey)) continue;
        visited.add(visitKey);

        if (mask === fullMask) return steps;

        for (const [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            let cell = classroom[nx][ny];
            if (cell === 'X') continue;

            let nextEnergy = en - 1;
            if (nextEnergy < 0) continue;

            if (cell === 'R') nextEnergy = energy;

            let newMask = mask;
            if (cell === 'L') {
                const idx = litterPositions.get(`${nx},${ny}`);
                newMask = mask | (1 << idx);
            }

            queue.push([nx, ny, nextEnergy, newMask, steps + 1]);
        }
    }

    return -1;
};


console.log(minMoves(["LS", "RL"], 4))

console.log(minMoves(["LR..XXRR", "LL.L.RXR", "......LR", "X.LRLR..", "L.XS.RR."], 27))