import React from 'react';
import logo from './logo.svg';
import './App.css';
import MeuHeroi from './components/MeuHeroi'
import dadosherois from './data/dadosherois.json'

function App() {
  const mystyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "80px",
    textShadow: "rgb(34, 33, 33) 2px 3px 2px"
  };

  //style={{color:"white" }}

  //style={mystyle}
  return (
    <div className="App">
      <header className="App-header">
        <div>  <img src={logo} className="App-logo" alt="logo" />  </div>
        <h1 style={mystyle}>Meus Heróis</h1> 
      </header>
      <main className="App-main">
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
      </main>
    </div>
  );
}

export default App;
