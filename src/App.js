import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Nav from './Nav';
import Home from './Home';
import ConfirmPokemon from './ConfirmPokemon';
import Play from './Play';
import './App.css';
import ParticlesOptions from './ParticlesOptions.json';



const App = () => {

  const [chosenPokemon, setchosenPokemon] = useState('');
  const [yourPokemonData, setyourPokemonData] = useState();
  const [yourWeakness, setyourWeakness] = useState([]);
  const [yourStrength, setyourStrength] = useState([]);
  const [yourTypes, setyourTypes] = useState([]);
  const [gameScore, setgameScore] = useState();
  const [route, setroute] = useState('home');





  if (route === 'confirmpokemon') {
    return (
      <div className="App">
        <Particles params={ParticlesOptions} className='particles' />
        <Nav />
        <ConfirmPokemon
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
        />
      </div>)
  } else if (route === 'play') {
    return (
      <div className="App">
        <Particles params={ParticlesOptions} className='particles' />
        <Nav />
        <Play
          setyourPokemonData={setyourPokemonData}
          yourPokemonData={yourPokemonData}
          yourWeakness={yourWeakness}
          yourStrength={yourStrength}
          gameScore={gameScore}
          setgameScore={setgameScore}
          setroute={setroute}
        />
      </div>
    )

  } else {
    return (
      <div className="App">
        <Particles params={ParticlesOptions} className='particles' />
        <Nav />
        <Home
          setyourPokemon={setchosenPokemon}
          setroute={setroute} />
      </div>)

  }
















}




export default App;
