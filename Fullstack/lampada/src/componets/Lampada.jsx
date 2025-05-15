import { useState } from 'react';
import lampadaApagada from '../assets/lampada-apagada.jpg';
import lampadaAcesa from '../assets/lampada-acesa.jpg';
import lampadaQuebrada from '../assets/lampada-quebrada.jpg';
import './Lampada.css'; // Importando o CSS para estilização

function Lampada() {
    // Estado para controlar se a lâmpada está acesa ou apagada
    // e se está quebrada
    // e o contador de cliques
  const [estaAcesa, setEstaAcesa] = useState(false);
  const [contadorCliques, setContadorCliques] = useState(0);
  const [estaQuebrada, setEstaQuebrada] = useState(false);

  // Função para alternar o estado da lâmpada
  // e incrementar o contador de cliques
  // e verificar se a lâmpada quebrou
  const alternarLampada = () => {
    if (estaQuebrada) return; // Se já está quebrada, não faz nada
    
    setContadorCliques(contadorCliques + 1);
    
    if (contadorCliques >= 19) {
      setEstaQuebrada(true);
    } else {
      setEstaAcesa(!estaAcesa);
    }
  };

  const resetarLampada = () => {
    setEstaAcesa(false);
    setContadorCliques(0);
    setEstaQuebrada(false);
  };

  // Determinar qual imagem mostrar
  let imagemLampada;
  if (estaQuebrada) {
    imagemLampada = lampadaQuebrada;
  } else {
    imagemLampada = estaAcesa ? lampadaAcesa : lampadaApagada;
  }

  return (
    <div className="lampada-container">
      <h2>Lâmpada Interativa</h2>
      <p>Cliques: {contadorCliques}</p>
      
      <img 
        src={imagemLampada} 
        alt="Lâmpada" 
        onClick={alternarLampada}
        className={`lampada-img ${estaQuebrada ? 'quebrada' : ''}`}
      />
      
      {estaQuebrada && (
        <div >
          <p>A lâmpada quebrou!</p>
          <button  onClick={resetarLampada}>
            Trocar lâmpada
          </button>
        </div>
      )}
    </div>
  );
}

export default Lampada;