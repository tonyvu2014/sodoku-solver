import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './SudokuGeneratorButton.css';

const SudokuGeneratorButton = ({ generatePuzzleFunc }) => (
  <Button
    bsSize="lg"
    bsStyle="default"
    active
    className="generator-button"
    onClick={generatePuzzleFunc()}
  >
  New Puzzle
  </Button>
);

SudokuGeneratorButton.propTypes = {
  generatePuzzleFunc: PropTypes.func.isRequired,
};

export default SudokuGeneratorButton;
