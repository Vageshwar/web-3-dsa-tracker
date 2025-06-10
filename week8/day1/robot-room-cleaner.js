// https://leetcode.ca/all/489.html
// You are controlling a robot that is located somewhere in a room. The room is modeled as an m x n binary grid where 0 represents a wall and 1 represents an empty slot.

// The robot starts at an unknown location in the room that is guaranteed to be empty, and you do not have access to the grid, but you can move the robot using the given API Robot.

// You are tasked to use the robot to clean the entire room (i.e., clean every empty cell in the room). The robot with the four given APIs can move forward, turn left, or turn right. Each turn is 90 degrees.

// When the robot tries to move into a wall cell, its bumper sensor detects the obstacle, and it stays on the current cell.

// Design an algorithm to clean the entire room using the following APIs:

// interface Robot {
//   // returns true if next cell is open and robot moves into the cell.
//   // returns false if next cell is obstacle and robot stays on the current cell.
//   boolean move();

//   // Robot will stay on the same cell after calling turnLeft/turnRight.
//   // Each turn will be 90 degrees.
//   void turnLeft();
//   void turnRight();

//   // Clean the current cell.
//   void clean();
// }

/**
 * class Robot {
 *      // Returns true if the cell in front is open and robot moves into the cell.
 *      // Returns false if the cell in front is blocked and robot stays in the current cell.
 * 		move(): boolean {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnRight() {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnLeft() {}
 *
 * 		// Clean the current cell.
 * 		clean(): {}
 * }
 */

function cleanRoom(robot) {
    const dirs = [-1, 0, 1, 0, -1];
    const vis = new Set();
    const dfs = (i, j, d) => {
        vis.add(`${i}-${j}`);
        robot.clean();
        for (let k = 0; k < 4; ++k) {
            const nd = (d + k) % 4;
            const [x, y] = [i + dirs[nd], j + dirs[nd + 1]];
            if (!vis.has(`${x}-${y}`) && robot.move()) {
                dfs(x, y, nd);
                robot.turnRight();
                robot.turnRight();
                robot.move();
                robot.turnRight();
                robot.turnRight();
            }
            robot.turnRight();
        }
    };
    dfs(0, 0, 0);
}
