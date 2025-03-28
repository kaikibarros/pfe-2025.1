"use client";

import React, { useState } from "react";

const Dado = () => {
  const imagensDado = [
    "/dados1.png",
    "/dados2.png",
    "/dados3.png",
    "/dados4.png",
    "/dados5.png",
    "/dados6.png",
  ];

  return imagensDado;
};

const Page = () => {
  //  armazenar informações
  const imagensDado = Dado(); 
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);
  const [rodadasRestantes, setRodadasRestantes] = useState(5);
  const [dado1, setDado1] = useState(0); 
  const [dado2, setDado2] = useState(0);
  const [vencedor, setVencedor] = useState("");
  const [jogoAtivo, setJogoAtivo] = useState(true); 
  const [dado1Rolado, setDado1Rolado] = useState(false);
  const [dado2Rolado, setDado2Rolado] = useState(false); 

  // Função para rolar o Dado 1
  const rolarDado1 = () => {
    if (rodadasRestantes > 0 && !dado1Rolado) {
      const resultadoDado1 = Math.floor(Math.random() * 6); 
      setDado1(resultadoDado1);
      setDado1Rolado(true); 
    }
  };

  // Função para rolar o Dado 2
  const rolarDado2 = () => {
    if (rodadasRestantes > 0 && dado1Rolado && !dado2Rolado) {
      const resultadoDado2 = Math.floor(Math.random() * 6); // Valor do dado 2
      setDado2(resultadoDado2);
      setDado2Rolado(true); 

      // Verifica quem venceu a rodada e soma 1 ponto
      if (dado1 > resultadoDado2) {
        setPontosJogador1((prev) => prev + 1);
      } else if (dado1 < resultadoDado2) {
        setPontosJogador2((prev) => prev + 1);
      }

      setRodadasRestantes((prev) => prev - 1); // Decrementa as rodadas restantes
      setTimeout(() => {
        // Adiciona um delay para resetar os estados
        setDado1Rolado(false);
        setDado2Rolado(false);
      }, 500); // Pequeno delay para dar um efeito de rolagem
    }
  };

  const finalizarJogo = () => {
    setJogoAtivo(false); // Desativa o jogo
    if (pontosJogador1 > pontosJogador2) {
      setVencedor("Jogador 1 Ganhou!");
    } else if (pontosJogador2 > pontosJogador1) {
      setVencedor("Jogador 2 Ganhou!");
    } else {
      setVencedor("Empate!");
    }
  };
  // volta as configurações padrões
  const reiniciarJogo = () => {
    setPontosJogador1(0);
    setPontosJogador2(0);
    setRodadasRestantes(5);
    setDado1(0);
    setDado2(0);
    setDado1Rolado(false);
    setDado2Rolado(false);
    setVencedor("");
    setJogoAtivo(true);
  };




  
  return (
    <div className="App">
      <section className="placar">   
      <h1>Placar:</h1>
      <p>{pontosJogador1} x {pontosJogador2}</p>
      </section>

      <div className="dados">
        <h3>Jogador 1</h3>
        <img src={imagensDado[dado1]} alt={`Dado ${dado1 + 1}`} />
        <button
          onClick={rolarDado1}
          disabled={dado1Rolado || !jogoAtivo || rodadasRestantes === 0}
        >
          {dado1Rolado ? "Já rolou!" : "Rolar Dado 1"}
        </button>
      </div>

      <div className="dados">
        <h3>Jogador 2</h3>
        <img src={imagensDado[dado2]} alt={`Dado ${dado2 + 1}`} />
        <button
          onClick={rolarDado2}
          disabled={!dado1Rolado || dado2Rolado || !jogoAtivo || rodadasRestantes === 0}
        >
          {dado2Rolado ? "Já rolou!" : "Rolar Dado 2"}
        </button>
      </div>

      <p className="vencedor">Rodadas Restantes: {rodadasRestantes}</p>

      {rodadasRestantes === 0 && jogoAtivo && (
        <div>
          <h2 className="vencedor">Resultado: {vencedor}</h2>
          <button onClick={finalizarJogo}>Finalizar Jogo</button>
        </div>
      )}

      {!jogoAtivo && (
        <div>
          <h2 className="vencedor">Fim do Jogo</h2>
          <p className="vencedor">{vencedor}</p>
          <button className="vencedor" onClick={reiniciarJogo}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
};

export default Page;
