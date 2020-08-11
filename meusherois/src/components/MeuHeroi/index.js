import React from 'react';
import './meuheroi.css';

function MeuHeroi(props) {
    return (
      <div className="polaroid">
        <h2>{props.heroi.nome}</h2>
        <img src={props.heroi.foto} alt={"Foto do "+props.heroi.nome}/>
        <div className="container" >
          <p>{props.heroi.descricao}</p>
        </div>  
      </div>
    );
  }
  
  export default MeuHeroi;