import React from 'react';
import logo from '../../assets/img/nasa-logo.svg';
import './home.css';
import apodimg from '../../assets/img/apod.jpg';

function Home() {
  return (
    <div style={{backgroundColor:"#FFFFFF"}}>
      <header>
        <img className="Logo" src={logo} alt="logo" />
        <h1>
          APOD -  Astronomy Picture of the Day
        </h1>
      </header>
      <main style={{backgroundColor:"#000000"}}>
        <img className="apodimg" src={apodimg} alt="APOD" />
      </main>
      <footer style={{backgroundColor:"#000000"}}>
          <h1 style={{color:"#ffffff"}}> 
            Desenvolvido por dfilitto
          </h1>
      </footer>
    </div>
  );
}

export default Home;