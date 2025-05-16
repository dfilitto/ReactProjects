import React from 'react';
import Card from './components/Card';  // Importação correta
import CardPlus from './components/CardPlus';  // Importação correta
import './App.css';

function App() {
  //para a versão CardPlus
  const batman = {
    nome: 'Batman',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Batman_Vol_2_38.jpg/250px-Batman_Vol_2_38.jpg',
    texto: 'O Cavaleiro das Trevas, protetor de Gotham City. Bruce Wayne, um bilionário que jurou combater o crime após testemunhar o assassinato de seus pais quando criança.'
  };

  return (
      <>
        <h1>Meu Primeiro Componente</h1>
        <div className='cards'>
          <CardPlus card={batman}/>
          <Card />
        </div>
        
      </>
  )
}

export default App
