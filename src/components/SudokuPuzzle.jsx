import React from 'react';
import PropTypes from 'prop-types';
import ld from 'lodash';
import './SudokuPuzzle.css';

const SudokuPuzzle = ({ values }) => (
  <table className="puzzle-table" style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid' }}>
    <tbody>
      {
        ld.range(9).map(i => (
          <tr key={i} style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid' }}>
            {ld.range(9).map(j => (<td key={`${i}-${j}`} style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid' }}>{values[i][j]}</td>))}
          </tr>
        ))
      }
    </tbody>
  </table>
);

SudokuPuzzle.defaultProps = {
  values: ld.fill(Array(9), ld.fill(Array(9), 0)),
};

SudokuPuzzle.propTypes = {
  values: PropTypes.arrayOf(PropTypes.array),
};

export default SudokuPuzzle;
