import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SudokuGenerator = ({ generatePuzzleFunc }) => (
  <Button bsSize="lg" bsStyle="primary" active onClick={generatePuzzleFunc()}>New Puzzle</Button>
);

SudokuGenerator.propTypes = {
  generatePuzzleFunc: PropTypes.func.isRequired,
};

export default SudokuGenerator;
