import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ConfirmPokemon = ({ yourPokemon, setyourPokemonData, yourPokemonData, yourWeakness, yourTypes, setyourWeakness, setyourTypes, setyourStrength, yourStrength }) => {

    useEffect(() => {
        storePokemonData();
    }, []);

    const storePokemonData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${yourPokemon}`);
        if (response.status === 200) {
            const data = await response.json();
            setyourPokemonData(data);
            setyourTypes(data.types);
            type(data.types);

        } else {
            alert("Sorry, we couldn't find that pokemon. Please try again.");
        }
    };


    const type = async (chosenPokeType) => {
        let h = [];
        let w = [];

        for (let i = 0; i < chosenPokeType.length; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${chosenPokeType[i].type.name}`)
            if (response.status === 200) {
                if (response.status === 200) {
                    const data = await response.json();
                    let z = data.damage_relations.double_damage_from;
                    let b = data.damage_relations.double_damage_to;
                    for (let q = 0; q < z.length; q++) {
                        h.push(z[q].name);
                    }
                    for (let l = 0; l < b.length; l++) {
                        w.push(b[l].name);

                    }
                } else {
                    alert("Sorry, we couldn't find the stats");
                }
            }
        }
        setyourWeakness(h);
        setyourStrength(w);
    };




    const name = yourPokemon.charAt(0).toUpperCase() + yourPokemon.slice(1);

    return (
        <div>
            {yourPokemonData && yourWeakness ? (
                <div>
                    <h2>{name}</h2>
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
                    <img src={yourPokemonData.sprites.front_default} alt="" />
                </div>
            ) : (
                    <p>Loading pokemon</p>
                )}
            <Link to="/"><button type="submit">Choose again</button></Link>
            <Link to="/Play"><button type="submit">Confirm</button></Link>
        </div>
    )
};

export default ConfirmPokemon;