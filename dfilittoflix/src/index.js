import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import {BrowserRouter, Switch, Route} from 'react-router-dom'; //efetuar o router das páginas evitando recarregar as mesmas
import CadastroCategira from './pages/cadastro/Categoria';


const Pagina404 = ()=> (<div>Erro 404 - Página não encontrada</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategira} exact/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


