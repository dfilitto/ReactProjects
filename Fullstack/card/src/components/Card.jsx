import React from 'react';
import danilofoto from '../assets/fotodanilo.jpg';
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <img src={danilofoto} className="foto"/> 
      <h2>Danilo Filitto</h2>
      <hr className='linha'/>
      <p>Espero que goste das nossas aulas de React dasd ad ad asd asd asd asd asd asd sd</p>
    </div>
  )
}

export default Card;