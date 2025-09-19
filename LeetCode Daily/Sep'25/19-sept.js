/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
    this.rows = rows;
    this.cells = new Map();
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
    this.cells.set(cell, value);
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
    this.cells.delete(cell);
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
    const [a, b] = formula.slice(1).split('+');
    const val = s => isFinite(s) ? parseInt(s) : (this.cells.get(s) || 0);
    return val(a) + val(b);
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */