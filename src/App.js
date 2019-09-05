import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Nav from './Nav';
import Home from './Home';
import ConfirmPokemon from './ConfirmPokemon';
import Play from './Play';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 4,
      "density": {
        "enable": false,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 24.362316369040354,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


const App = () => {

  const [chosenPokemon, setchosenPokemon] = useState('');
  const [yourPokemonData, setyourPokemonData] = useState();
  const [yourWeakness, setyourWeakness] = useState([]);
  const [yourStrength, setyourStrength] = useState([]);
  const [yourTypes, setyourTypes] = useState([]);
  const [gameScore, setgameScore] = useState();


  return (
    <Router>
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        <Nav />



        <Switch>


          <Route path="/" exact
            render={(props) => <Home setyourPokemon={setchosenPokemon}
            />}
          />

          <Route path="/ConfirmPokemon"
            render={(props) => <ConfirmPokemon
              setyourPokemonData={setyourPokemonData}
              yourPokemonData={yourPokemonData}
              yourPokemon={chosenPokemon}
              yourWeakness={yourWeakness}
              yourTypes={yourTypes}
              setyourWeakness={setyourWeakness}
              setyourTypes={setyourTypes}
              setyourStrength={setyourStrength}
              yourStrength={yourStrength}
              setgameScore={setgameScore} />}
          />

          <Route path="/Play"
            render={(props) => <Play
              setyourPokemonData={setyourPokemonData}
              yourPokemonData={yourPokemonData}
              yourWeakness={yourWeakness}
              yourStrength={yourStrength}
              gameScore={gameScore}
              setgameScore={setgameScore}

            />}
          >
          </Route>



        </Switch>




      </div>
    </Router >
  )

}

export default App;
