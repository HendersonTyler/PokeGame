import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css';


const App = () => {

  const [pokemon, setPokemon] = useState();
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('bulbasaur');
  const [weakness, setWeakness] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getPokemon();
  }, [query]);

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    if (response.status === 200) {
      const data = await response.json();
      setPokemon(data);
      console.log(data);
      weaknessType(data.types[0].type.name);
      setTypes(data.types);




    } else {
      alert("Sorry, we couldn't find that pokemon. Please try again.");
    }

  };

  const weaknessType = async (chosenPokeType) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${chosenPokeType}`)
    if (response.status === 200) {
      const data = await response.json();
      setWeakness(data.damage_relations.double_damage_from[0].name);

    } else {
      alert("Sorry, we couldn't find the weakness");
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
            type2={types}
            image={pokemon.sprites.front_default}
            hp={pokemon.stats[0].base_stat}
            weakness={weakness}
          />
        ) : (
            <p>Loading pokemon</p>
          )}


      </div>


    </div>
  )

}

export default App;
