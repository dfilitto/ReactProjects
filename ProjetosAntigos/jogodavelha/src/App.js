import React from 'react';
import './App.css';
import Square from './components/Square';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
