import React from 'react';
import SudokuGeneratorButton from './SudokuGeneratorButton';
import SudokuSolverButton from './SudokuSolverButton';
import SudokuPuzzle from './SudokuPuzzle';
import './App.css';

const generatePuzzle = () => {
  console.log('Generate new puzzle');
};

const solvePuzzle = () => {
  console.log('Solve puzzle');
};

const App = () => (
  <div className="main">
    <SudokuGeneratorButton generatePuzzleFunc={generatePuzzle} />
    <SudokuPuzzle />
    <SudokuSolverButton solvePuzzleFunc={solvePuzzle} />
  </div>
);

export default App;
