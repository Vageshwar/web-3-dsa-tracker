class Cell {
    constructor(height, row, col) {
      this.height = height;
      this.row = row;
      this.col = col;
    }
  };

  function _isValidCell(row, col, numRows, numCols) {
    return row >= 0 && row < numRows && col >= 0 && col < numCols;
  }

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
        if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) {
      return 0;
    }

    const dRow = [0, 0, -1, 1];
    const dCol = [-1, 1, 0, 0];

    const numRows = heightMap.length;
    const numCols = heightMap[0].length;

    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));

    // Priority queue (min-heap) to process boundary cells in increasing height order
    const boundary = new MyHeap((a, b) => a.height - b.height);

    // Add the first and last column cells
    for (let i = 0; i < numRows; i++) {
      boundary.push(new Cell(heightMap[i][0], i, 0));
      boundary.push(new Cell(heightMap[i][numCols - 1], i, numCols - 1));
      visited[i][0] = true;
      visited[i][numCols - 1] = true;
    }

    // Add the first and last row cells
    for (let j = 0; j < numCols; j++) {
      boundary.push(new Cell(heightMap[0][j], 0, j));
      boundary.push(new Cell(heightMap[numRows - 1][j], numRows - 1, j));
      visited[0][j] = true;
      visited[numRows - 1][j] = true;
    }

    let totalWaterVolume = 0;

    // Process cells in the boundary
    while (!boundary.isEmpty()) {
      const currentCell = boundary.pop();
      const currentRow = currentCell.row;
      const currentCol = currentCell.col;
      const minBoundaryHeight = currentCell.height;

      // Explore all 4 neighboring cells
      for (let d = 0; d < 4; d++) {
        const neighborRow = currentRow + dRow[d];
        const neighborCol = currentCol + dCol[d];

        if (_isValidCell(neighborRow, neighborCol, numRows, numCols) &&
            !visited[neighborRow][neighborCol]) {
          const neighborHeight = heightMap[neighborRow][neighborCol];

          if (neighborHeight < minBoundaryHeight) {
            totalWaterVolume += minBoundaryHeight - neighborHeight;
          }

          boundary.push(
            new Cell(
              Math.max(neighborHeight, minBoundaryHeight),
              neighborRow,
              neighborCol
            )
          );
          visited[neighborRow][neighborCol] = true;
        }
      }
    }

    return totalWaterVolume;
};

class MyHeap {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn;
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown(0);
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parent]) >= 0) break;
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
      index = parent;
    }
  }

  _bubbleDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (left <= lastIndex && this.compare(this.heap[left], this.heap[smallest]) < 0) {
        smallest = left;
      }
      if (right <= lastIndex && this.compare(this.heap[right], this.heap[smallest]) < 0) {
        smallest = right;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}