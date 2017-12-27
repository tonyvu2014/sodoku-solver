import React, { Component } from 'react';
import sudoku from 'sudoku';
import { Button } from 'react-bootstrap';
import SudokuPuzzle from './SudokuPuzzle';
import './App.css';

class App extends Component {

  static getValues(puzzle) {
    const cells = new Array(9);
    for (let i = 0; i < 9; i++) {
      cells[i] = new Array(9);
      for (let j = 0; j < 9; j++) {
        if (puzzle[9*i+j] !== null) {
          cells[i][j] = puzzle[9*i+j]+1;
        } else {
          cells[i][j] = null;
        }
      }
    }

    return cells;
  }

  static getPuzzle(values) {
    const puzzle = new Array(81);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (values[i][j] !== null) {
          puzzle[9*i+j] = values[i][j]-1;
        } else {
          puzzle[9*i+j] = null;
        }
      }
    }

    return puzzle;
  }

  constructor() {
    super();
    const puzzle = sudoku.makepuzzle();
    this.state = {
      values: App.getValues(puzzle),
    };

    this.generatePuzzle = this.generatePuzzle.bind(this);
    this.solvePuzzle = this.solvePuzzle.bind(this);
  }

  generatePuzzle() {
    console.log('Generating new puzzle');
    const puzzle = sudoku.makepuzzle();
    this.setState({ values: App.getValues(puzzle) });
  }

  solvePuzzle() {
    console.log('Solving puzzle');
    const solution = sudoku.solvepuzzle(App.getPuzzle(this.state.values));
    this.setState({ values: App.getValues(solution) });
  }

  render() {
    return (
      <div className="main">
        <Button
          bsSize="lg"
          bsStyle="default"
          active
          className="generator-button"
          onClick={this.generatePuzzle}
        >
        New Puzzle
        </Button>
        <SudokuPuzzle values={this.state.values} />
        <Button
          bsSize="lg"
          bsStyle="primary"
          className="solver-button"
          active
          onClick={this.solvePuzzle}
        >
        Solve Puzzle
        </Button>
      </div>
    );
  }

}

export default App;
