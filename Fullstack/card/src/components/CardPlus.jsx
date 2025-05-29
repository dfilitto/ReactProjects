import React from 'react';
import './Card.css';

function CardPlus({card}) {
  return (
    <div className='card'>
      <img src={card.foto} className="foto"/> 
      <h2>{card.nome}</h2>
      <hr className='linha'/>
      <p>{card.texto}</p>
    </div>
  )
}

export default CardPlus;