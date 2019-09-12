import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Nav from './Nav';
import Home from './Home';
import ConfirmPokemon from './ConfirmPokemon';
import Play from './Play';
import './index.css';
import Leaderboard from './Leaderboard';
import ParticlesOptions from './ParticlesOptions.json';

const App = () => {

  const [chosenPokemon, setchosenPokemon] = useState('');
  const [yourPokemonData, setyourPokemonData] = useState();
  const [yourWeakness, setyourWeakness] = useState([]);
  const [yourStrength, setyourStrength] = useState([]);
  const [yourTypes, setyourTypes] = useState([]);
  const [gameScore, setgameScore] = useState();
  const [route, setroute] = useState('home');

  let homepage = (route === 'home') ? <Home
    setyourPokemon={setchosenPokemon}
    setroute={setroute}
  /> : null

  let confirmpokemonpage = (route === 'confirmpokemon') ? <ConfirmPokemon
    setyourPokemonData={setyourPokemonData}
    yourPokemonData={yourPokemonData}
    yourPokemon={chosenPokemon}
    yourWeakness={yourWeakness}
    yourTypes={yourTypes}
    setyourWeakness={setyourWeakness}
    setyourTypes={setyourTypes}
    setyourStrength={setyourStrength}
    yourStrength={yourStrength}
    setgameScore={setgameScore}
    setroute={setroute}
  /> : null

  let playpage = (route === 'play') ? <Play
    setyourPokemonData={setyourPokemonData}
    yourPokemonData={yourPokemonData}
    yourWeakness={yourWeakness}
    yourStrength={yourStrength}
    gameScore={gameScore}
    setgameScore={setgameScore}
    setroute={setroute}
  /> : null

  let leaderboard = (route === 'leaderboard') ? <Leaderboard
    yourPokemon={chosenPokemon}
    gameScore={gameScore}
    setroute={setroute}
  /> : null

  return (
    <div className="App">
      <Particles params={ParticlesOptions} className="particles" />
      <Nav />
      {homepage}
      {confirmpokemonpage}
      {playpage}
      {leaderboard}
    </div>
  )
}

export default App;
