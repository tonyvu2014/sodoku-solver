import React from 'react';
import SudokuGenerator from './SudokuGenerator';
import SudokuSquare from './SudokuSquare';

const generatePuzzle = () => {
  console.log('Generate new puzzle');
};

const App = () => (
  <div className="main">
    <SudokuGenerator generatePuzzleFunc={generatePuzzle} />
    <SudokuSquare />
  </div>
);

export default App;
