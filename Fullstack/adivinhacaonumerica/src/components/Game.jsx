import { useState } from "react";
import './Game.css'

function Game(){
    //numero secreto do pc
    const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
    //chute do usuário
    const [guess, setGuess] = useState('');
    //mensagem, dica para o usuário
    const [message, setMessage] = useState('Tente adivinhar o número entre 1 e 10');
    //controla o número de tentativas do usuário
    const [attempts, setAttempts] = useState(0);

    //gera um número aleatório
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    //chute do usuário
    function handleGuess() {
        const numericGuess = parseInt(guess);
        //valida se é um número
        if (isNaN(numericGuess)) {
            //seta a mensagem para o usuário  
            setMessage('Digite um número válido!');
            return;
        }
        
        //conta o numero de tentativas
        setAttempts(attempts + 1);
        
        //verifica se acertou, parabeniza o usuário ou da uma dica.
        if (numericGuess === secretNumber) {
          setMessage(`Parabéns! Você acertou em ${attempts + 1} tentativas!`);
        } else if (numericGuess < secretNumber) {
          setMessage('Muito baixo! Estou pensando em um número maior.');
        } else {
          setMessage('Muito alto! Estou pensando em um número menor.');
        }
      }

      //reinicia os estados do componente
      function restartGame() {
        setSecretNumber(generateRandomNumber());
        setGuess('');
        setMessage('Tente adivinhar o número entre 1 e 10');
        setAttempts(0);
      }

    return (
        <div className="box-game">
        <h1>Jogo da Adivinhação</h1>
        <p>{message}</p>
        <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Digite seu palpite"
        />
        <br />
        <button onClick={handleGuess}>Chutar</button>
        <button onClick={restartGame}>Reiniciar</button>
        </div>
    );
}

export default Game;