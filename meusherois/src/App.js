import React from 'react';
import logo from './logo.svg';
import './App.css';
import MeuHeroi from './components/MeuHeroi'
import dadosherois from './data/dadosherois.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Meus Heróis</h1>
        <MeuHeroi heroi={dadosherois.herois[0]}/>
        <MeuHeroi heroi={dadosherois.herois[1]}/>
        <MeuHeroi heroi={dadosherois.herois[2]}/>
        <MeuHeroi heroi={dadosherois.herois[3]}/>
        <MeuHeroi heroi={dadosherois.herois[4]}/>
        <MeuHeroi heroi={dadosherois.herois[5]}/>
        <MeuHeroi heroi={dadosherois.herois[6]}/>
        <MeuHeroi heroi={dadosherois.herois[7]}/>
        <MeuHeroi heroi={dadosherois.herois[8]}/>
        <MeuHeroi heroi={dadosherois.herois[9]}/>
      </header>
    </div>
  );
}

export default App;
