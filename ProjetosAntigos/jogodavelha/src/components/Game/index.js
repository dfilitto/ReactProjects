import React from 'react';
import Board from '../Board';
import './game.css';
import logo from '../../img/logo.png';
import jogo from '../../img/jogo.png';
import historico from '../../img/historico.png';

//determina o ganhador do jogo
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

class Game extends React.Component {
    constructor(props){
        super(props);
        //propriedades do objeto
        this.state = {
            history:[{ //histórico de jogadas vários array contento a o valor que foi adicionado no square X ou O
                squares: Array(9).fill(null),
            }],
            stepNumber:0, //determina em qual jogada o jogo esta
            xIsNext: true, //determina quem é o próximo a jogar X ou O
        };
    }
    
    //evento click do mouse do Square
   handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1); //retorna uma cópia do array 
        const current = history[history.length - 1]; //pega o array corrente do history
        const squares = current.squares.slice(); //faz uma cópia do objeto que esta no array current

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step,move)=> {
            const desc = move ?
            'Vá para a jogada #' + move :
            'Vá para o início do jogo';
            return (
                <li key={move}>
                    <button className="historyButton" onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        
        let status;
        if (winner) {
            status = 'GANHADOR: ' + winner;
        } else {
            status = 'PRÓXIMO JOGADOR: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
            <div className="game">
                <div>
                    <img id="imgjogo" src={jogo} alt="Jogo da velha" />
                    <img src={logo} alt="Jogo da velha" />
                </div> 
                <div>
                   <Board squares={current.squares} onClick={(i)=>this.handleClick(i)}/> 
                </div>
                <div><h1>{status}</h1></div>
                <div>
                    <img src={historico} alt="histórico de jogadas" />
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
export default Game;