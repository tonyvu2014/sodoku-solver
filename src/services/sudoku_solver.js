function printBoard(board) {
  board.forEach((row) => { console.log(row); });
}

function createCompleteValueSet(size) {
  const completeSet = new Set();
  for (let i = 1; i <= size; i += 1) {
    completeSet.add(i);
  }

  return completeSet;
}

function getSetIntersection(firstSet, secondSet) {
  return new Set([...firstSet].filter(x => secondSet.has(x)));
}

function getMissingValueSet(currentSet, size) {
  const completeValueSet = createCompleteValueSet(size);
  return new Set([...completeValueSet].filter(x => !currentSet.has(x)));
}


function getColumns(board) {
  const columns = [];
  board.forEach((row) => {
    for (let i = 0; i < row.length; i += 1) {
      if (columns.length < i + 1) {
        columns.push([]);
      }

      columns[i].push(row[i]);
    }
  });

  return columns;
}

function getValueSet(row) {
  return new Set(row.filter(x => x > 0));
}

function getMissingValues(board) {
  const missingValues = [];
  const size = board.length;
  board.forEach((row) => {
    const missingValueSet = getMissingValueSet(getValueSet(row), size);
    missingValues.push(missingValueSet);
  });

  return missingValues;
}

function getMissingCells(board) {
  const missingCells = [];
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[i][j] === 0) {
        missingCells.push([i, j]);
      }
    }
  }

  return missingCells;
}

function removeValues(array, values) {
  values.forEach((v) => {
    const index = array.indexOf(v);
    array.splice(index, 1);
  });
}

function solveForBoard(board) {
  const solvedBoard = board.slice();

  const missingValueByRows = getMissingValues(solvedBoard);
  const columns = getColumns(solvedBoard);
  const missingValueByColumns = getMissingValues(columns);
  const missingCells = getMissingCells(solvedBoard);

  let progress = true;

  while (missingCells.length !== 0) {
    if (!progress) {
      return false;
    }
    progress = false;
    const toBeRemoved = [];
    for (let i = 0; i < missingCells.length; i += 1) {
      const missingCell = missingCells[i];
      const rowIndex = missingCell[0];
      const columnIndex = missingCell[1];

      const rowMissingValues = missingValueByRows[rowIndex];
      const columnMissingValues = missingValueByColumns[columnIndex];

      const overlappingValues = getSetIntersection(rowMissingValues, columnMissingValues);

      if (overlappingValues.size === 1) {
        const v = [...overlappingValues][0];
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

export { solveForBoard, printBoard };
