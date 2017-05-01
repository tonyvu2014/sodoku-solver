import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './SudokuSolverButton.css';

const SudokuSolverButton = ({ solvePuzzleFunc }) => (
  <Button
    bsSize="lg"
    bsStyle="primary"
    className="solver-button" active onClick={solvePuzzleFunc()}
  >
  Solve Puzzle
  </Button>
);

SudokuSolverButton.propTypes = {
  solvePuzzleFunc: PropTypes.func.isRequired,
};

export default SudokuSolverButton;
