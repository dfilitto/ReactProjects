import React from 'react';

function MeuHeroi(props) {
    return (
      <div>
        <h2>{props.heroi.nome}</h2>
        <img src={props.heroi.foto} alt={"Foto do "+props.heroi.nome}/>
        <h3>Dados do herói</h3>
        <p>{props.heroi.descricao}</p>
      </div>
    );
  }
  
  export default MeuHeroi;