import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Nav from './Nav';
import Home from './Home';
import ConfirmPokemon from './ConfirmPokemon';
import Play from './Play';
import Leaderboard from './Leaderboard';
import './index.css';
import SubmitScore from './SubmitScore';
import ParticlesOptions from './ParticlesOptions.json';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const App = () => {

  const [chosenPokemon, setchosenPokemon] = useState('');
  const [yourPokemonData, setyourPokemonData] = useState();
  const [yourWeakness, setyourWeakness] = useState([]);
  const [yourStrength, setyourStrength] = useState([]);
  const [yourTypes, setyourTypes] = useState([]);
  const [gameScore, setgameScore] = useState();
  const [route, setroute] = useState('home');
  const [menuOpen, setmenuOpen] = useState(false);

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

  let submitscore = (route === 'submitscore') ? <SubmitScore
    yourPokemon={chosenPokemon}
    gameScore={gameScore}
    setroute={setroute}
  /> : null

  let leaderboard = (route === 'leaderboard') ? <Leaderboard
    yourPokemon={chosenPokemon}
    gameScore={gameScore}
    setroute={setroute}
  /> : null

  return (
    <div className="App">
      <Menu disableAutoFocus
        isOpen={menuOpen}
        onStateChange={() => setmenuOpen()}
      >
        <a id="home" href="/#" className="menu-item" onClick={() => { setmenuOpen(false); setroute('home') }}><FontAwesomeIcon type="button" icon={faHome} /><h2>Home</h2></a>
        <a id="leaderboard" href="/#" className="menu-item" onClick={() => { setmenuOpen(false); setroute('leaderboard') }}><FontAwesomeIcon type="button" icon={faList} /><h2>Leaderboard</h2></a>
        <a id="github" className="menu-item" href="https://github.com/HendersonTyler/"><FontAwesomeIcon type="button" icon={faGithub} /><h2>GitHub</h2></a>
      </Menu>
      <Particles params={ParticlesOptions} className="particles" />
      <Nav />
      {homepage}
      {confirmpokemonpage}
      {playpage}
      {submitscore}
      {leaderboard}
    </div >
  )
}

export default App;
