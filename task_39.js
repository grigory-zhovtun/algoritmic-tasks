'use strict';

// Sudoku Solution Validator
// Write a function that accepts a Sudoku board, and returns true if it is a valid Sudoku 
// solution, or false otherwise. The cells of the input Sudoku board may also contain 0's, 
// which will represent empty cells. Boards containing one or more zeroes are considered 
// to be invalid solutions.
// Details
// All inputs are guaranteed to be 2D boards of size 9x9 with possible values in range 0-9.
// Rows, columns and blocks (3x3 small squares) must contain each number from range 1-9 exactly once.
// User solution must not modify input boards.

function validateSudoku(board) {
    let rowSets = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()];
    let colSets = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()];
    let boxSets = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let val = board[i][j];
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (val === 0) {
                return false;
            }
            if (rowSets[i].has(val) || colSets[j].has(val) || boxSets[boxIndex].has(val)) {
                return false;
            }
            rowSets[i].add(val);
            colSets[j].add(val);
            boxSets[boxIndex].add(val);
        }
    }
    return true;
}