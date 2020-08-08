/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategira() {
// abrindo o que esta vindo do useState

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais); // representa os dados do form
  const [categorias, setCategorias] = useState([]); // representa todas as categorias

  // define o valor capturado no form para uma das propriedades  do objeto que representa os dados do form
  function setValue(chave, valor) {
    // chave: nome, descricao,..
    setValues({
      ...values,
      [chave]: valor, // a chave faz com que o conteúdo de nome seja a chave nome:'valor'
    });
  }

  function handleChange(infoDoEvento) {
    // esta abrindo o que esta recebendo e criando uma variável com o nome getattribute
    /* const {getAttribute,value} = infoDoEvento.target;
        setValue(
            getAttribute('name'),
            infoDoEvento.target.value
        ); */
    setValue(infoDoEvento.target.getAttribute('name'), infoDoEvento.target.value);
  }

  // ============

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      //ver video 4
      const URL = 'http://localhost:8080/categorias'; //colocar a url da heroku
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);


  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar o form');
        // ...mantem os dados presentes na categorias e adicio na o que tem no nomeDaCategoria
        setCategorias([
          ...categorias, values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <FormField label="Categoria: " name="nome" type="text" value={values.nome} onChange={handleChange} />
        <FormField label="Descrição: " name="descricao" type="textarea" value={values.descricao} onChange={handleChange} />
        <FormField label="Cor: " name="cor" type="color" value={values.cor} onChange={handleChange} />

        <button>
          Cadastrar
        </button>
      </form>
      <div>
        {/*/carregando*/}
        Loading...
      </div>
      <ul>
        {categorias.map((categoria, indice) => (
          // cria um indice com o nome da categoria e um numero
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
        
      </ul>
      <Link to="/">
        Ir para o Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategira;
