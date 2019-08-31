import React, { useState, useEffect } from 'react';

const Play = () => {

    useEffect(() => {
        getrandomPokemon();
    }, []);

    const [randomPokemon, setrandomPokemon] = useState();

    const getrandomPokemon = async () => {
        let i = Math.floor(Math.random() * Math.floor(807));
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        if (response.status === 200) {
            const data = await response.json();
            setrandomPokemon(data);
        } else {
            alert("Sorry, random didn't show");
        }
    };

    return (
        <div>
            {randomPokemon ? (
                <div>
                    <h1>{randomPokemon.name}</h1>
                    <p>HP: {randomPokemon.stats[0].base_stat}</p>
                    <img src={randomPokemon.sprites.front_default} alt="" />
                </div>
            ) : (
                    <p>Loading pokemon</p>
                )}
        </div>
    )
}
export default Play;