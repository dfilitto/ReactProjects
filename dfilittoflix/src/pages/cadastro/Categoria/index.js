import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategira(){
    return(
        <PageDefault>
            <h1>Cadastro de categoria</h1>
            <form>
                <label>
                Nome da Categoria:
                <input
                    type="text"
                />
                </label>

                <button>
                Cadastrar
                </button>
            </form>
            <Link to="/">
                Ir para o Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategira;