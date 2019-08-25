import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css';


const App = () => {

  const [pokemon, setPokemon] = useState();
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('bulbasaur')

  useEffect(() => {
    getPokemon();
  }, [query]);

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    if (response.status === 200) {
      const data = await response.json();
      setPokemon(data);
    } else {
      alert("Sorry, we couldn't find that pokemon. Please try again.");
    }

  };


  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search.toLowerCase());
    setSearch('');
  };


  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
      </form>
      <div className="card">
        {pokemon ? (
          < Card
            key={pokemon.name}
            title={pokemon.name}
            type={pokemon.types[0].type.name}
            image={pokemon.sprites.front_default}
            hp={pokemon.stats[0].base_stat}
          />
        ) : (
            <p>Loading pokemon</p>
          )}


      </div>


    </div>
  )

}

export default App;
