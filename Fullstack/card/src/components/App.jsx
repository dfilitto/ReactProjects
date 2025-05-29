import { useState } from 'react';
import CardPlus from './CardPlus';  // Importação correta
import Form from "./Form";

import './App.css';

function App() {
  // Armazena os dados do card enviados pelo formulário
  const [cardData, setCardData] = useState(null);

   // Função que será chamada quando o formulário for enviado
  function handleFormSubmit(card) {
    setCardData(card); // salva os dados para mostrar o Card
  }

  return (
    <div>
      <h1>Criar um Card</h1>

      {/* Formulário que envia os dados para o App */}
      <Form onSubmit={handleFormSubmit} />
    
      {/* Exibe o Card apenas se cardData não for nulo */}
      {cardData && <CardPlus card={cardData} />}
    </div>
  );
}

export default App
