import React, { useEffect } from 'react';
import './index.css';
import Pokeball from './pokeball.gif';

const ConfirmPokemon = ({ yourPokemon, setyourPokemonData, yourPokemonData, yourWeakness, yourTypes, setyourWeakness, setyourTypes, setyourStrength, yourStrength, setgameScore, setroute }) => {

    useEffect(() => {
        const storePokemonData = async () => {
            setyourPokemonData('');
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${yourPokemon}`);
            if (response.status === 200 && !isEmptyOrSpaces(yourPokemon)) {
                const data = await response.json();
                setyourPokemonData(data);
                setyourTypes(data.types);
                type(data.types);
            } else {
                alert("Sorry, we couldn't find that pokemon. Please try again.");
            }
        };
        storePokemonData();
        const type = async (chosenPokeType) => {
            let weak = [];
            let stren = [];

            for (let i = 0; i < chosenPokeType.length; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/type/${chosenPokeType[i].type.name}`)
                if (response.status === 200) {
                    const data = await response.json();
                    let z = data.damage_relations.double_damage_from;
                    let b = data.damage_relations.double_damage_to;
                    for (let q = 0; q < z.length; q++) {
                        weak.push(z[q].name);
                    }
                    for (let l = 0; l < b.length; l++) {
                        stren.push(b[l].name);

                    }
                } else {
                    alert("Sorry, we couldn't find the stats");
                }
            }
            setyourWeakness(weak);
            setyourStrength(stren);
            setgameScore(0);
        };
    }, [setyourPokemonData, setyourTypes, yourPokemon, setgameScore, setyourStrength, setyourWeakness]);

    function isEmptyOrSpaces(str) {
        return str === null || str.match(/^ *$/) !== null;
    }


    return (
        <div className="container">
            {yourPokemonData && yourWeakness ? (
                <div className="card">
                    <h1 className="cap">{yourPokemon}</h1>
                    <p>Type:{yourTypes.map((feature, i) => {
                        return (
                            ' ' + feature.type.name
                        );
                    })
                    }
                    </p>

                    <p>Weakness:
                        {yourWeakness.map((feature, i) => {
                        return (
                            ' ' + feature
                        );
                    })
                        }
                    </p>

                    <p>Strength:
                        {yourStrength.map((feature, i) => {
                        return (
                            ' ' + feature
                        );
                    })
                        }
                    </p>

                    <p>HP: {yourPokemonData.stats[0].base_stat}</p>
                    <img src={yourPokemonData.sprites.front_default} className="pokemonPhoto" alt="" />

                    <button onClick={() => { setroute('play') }} className="button1" type="submit">Confirm</button>
                    <button onClick={() => { setroute('home') }} className="button1" type="submit">Choose again</button>
                </div>
            ) : (
                    <div>
                        <img src={Pokeball} alt="pokeball" height="40em"></img>
                        <p>Loading pokemon</p>
                        <button onClick={() => { setroute('home') }} className="button1" type="submit">Try again</button>
                    </div>
                )}

        </div>
    )
};

export default ConfirmPokemon;