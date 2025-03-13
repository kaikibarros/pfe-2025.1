// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

const Dado = ({ valor }) => {
  // Mapeia as imagens dos dados
  const imagensDado = [
    '/dados1.png',
    '/dados2.png',
    '/dados3.png',
    '/dados4.png',
    '/dados5.png',
    '/dados6.png',
  ];

  return (
    <div>
      <img src={imagensDado[valor - 1]} alt={`Dado ${valor}`} />
    </div>
  );
};

const App = () => {
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    // Gera um número aleatório entre 1 e 6
    setValorDado(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="App">
      <h1>Jogo do Dado</h1>
      <Dado valor={valorDado} />
      <button onClick={rolarDado}>Rolar Dado</button>
    </div>
  );
};

export default App;