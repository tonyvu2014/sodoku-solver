function printBoard(board) {
	board.forEach((row) => { console.log(row); });
}

function createCompleteValueSet(size) {
	let completeSet = new Set();
	for (let i = 1; i <= size; i++) {
		completeSet.add(i);
	}
	
	return completeSet;
}

function getSetIntersection(firstSet, secondSet) {
	return new Set( [...firstSet].filter(x => secondSet.has(x)) );
}

function getMissingValueSet(currentSet, size) {
	let completeValueSet = createCompleteValueSet(size);
	return new Set([...completeValueSet].filter(x => !currentSet.has(x)));
}


function getColumns(board) {
	let columns = [];
	for (let row of board) {
		for (let i = 0; i < row.length; i++) {
			if (columns.length < i+1) {
				columns.push([]);
			}
			
			columns[i].push(row[i]);
		}
	}
	
	return columns;
}

function getValueSet(row) {
	return new Set(row.filter(x => x > 0));
}

function getMissingValues(board) {
	let missingValues = [];
	let size = board.length;
	for (let row of board) {
		let missingValueSet = getMissingValueSet(getValueSet(row), size);
		missingValues.push(missingValueSet);
	}
	
	return missingValues;
}

function getMissingCells(board) {
	let missingCells = [];
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] == 0) {
				missingCells.push([i,j]);
			}
		}
	}
	
	return missingCells;
}

function solveForBoard(board) {
	let solvedBoard = board.slice();
	
	let missingValueByRows = getMissingValues(solvedBoard);
	let columns = getColumns(solvedBoard);
	let missingValueByColumns = getMissingValues(columns);
	let missingCells = getMissingCells(solvedBoard);
	
	let progress = true;
	
	while (missingCells.length != 0) {
		if (!progress) {
			return false;
		}
		progress = false;
		let toBeRemoved = [];
		for (let i = 0; i < missingCells.length; i++) {
			let missingCell = missingCells[i];
			let rowIndex = missingCell[0];
			let columnIndex = missingCell[1];

			let rowMissingValues = missingValueByRows[rowIndex];
			let columnMissingValues = missingValueByColumns[columnIndex];
			
			let overlappingValues = getSetIntersection(rowMissingValues, columnMissingValues);
			
			if (overlappingValues.size == 1) {
				let v = [...overlappingValues][0];
				solvedBoard[rowIndex][columnIndex] = v;
				rowMissingValues.delete(v);
				columnMissingValues.delete(v);
				toBeRemoved.push(missingCell);
				progress = true;
			}	
		}
		
		removeValues(missingCells, toBeRemoved);
	}
	
	return solvedBoard;
}

function removeValues(array, values) {
	for (let v of values) {
		let index = array.indexOf(v);
		array.splice(index, 1);
	}
}

let testBoard = [[0,2,4,0], [0,0,0,2],[3,0,0,0], [0,1,3,0]];
let solvedBoard = solveForBoard(testBoard);
if (!solvedBoard) {
	console.log("No Solutions");
} else {
	printBoard(solvedBoard);
}

