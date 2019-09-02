import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import ConfirmPokemon from './ConfirmPokemon';
import Play from './Play';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  const [chosenPokemon, setchosenPokemon] = useState('bulbasaur');
  const [yourPokemonData, setyourPokemonData] = useState();
  const [yourWeakness, setyourWeakness] = useState([]);
  const [yourStrength, setyourStrength] = useState([]);
  const [yourTypes, setyourTypes] = useState([]);



  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>


          <Route path="/" exact
            render={(props) => <Home setyourPokemon={setchosenPokemon} />}
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
              yourStrength={yourStrength} />}
          />

          <Route path="/Play"
            render={(props) => <Play
              yourPokemonData={yourPokemonData}
              yourTypes={yourTypes}
              yourWeakness={yourWeakness}
              yourStrength={yourStrength}
            />}
          >
          </Route>



        </Switch>




      </div>
    </Router >
  )

}

export default App;
