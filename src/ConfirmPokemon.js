import React, { useEffect } from 'react';


const ConfirmPokemon = ({ yourPokemon, setyourPokemonData, yourPokemonData, yourWeakness, yourTypes, setyourWeakness, setyourTypes }) => {

    // const [weakness, setWeakness] = useState('');
    // const [types, setTypes] = useState([]);




    useEffect(() => {
        storePokemonData();
    }, []);

    const storePokemonData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${yourPokemon}`);
        if (response.status === 200) {
            const data = await response.json();
            setyourPokemonData(data);
            setyourWeakness(data.types[0].type.name);
            setyourTypes(data.types);
            console.log(yourPokemonData);


        } else {
            alert("Sorry, we couldn't find that pokemon. Please try again.");
        }
    };


    const name = yourPokemon.charAt(0).toUpperCase() + yourPokemon.slice(1);

    return (
        <div>
            {yourPokemonData ? (
                <div>
                    <h1>{name}</h1>
                    <p>Type:
                        {yourTypes.map((feature, i) => {
                        return (
                            ' ' + feature.type.name
                        );
                    })
                        }
                    </p>

                    <p>Weakness: {yourWeakness}</p>
                    <p>HP: {yourPokemonData.stats[0].base_stat}</p>
                    <img src={yourPokemonData.sprites.front_default} alt="" />
                </div>
            ) : (
                    <p>Loading pokemon</p>
                )}
        </div>
    )
};

export default ConfirmPokemon;