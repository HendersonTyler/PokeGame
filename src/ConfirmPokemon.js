import React, { useEffect } from 'react';


const ConfirmPokemon = ({ yourPokemon, setyourPokemonData, yourPokemonData, yourWeakness, yourTypes, setyourWeakness, setyourTypes }) => {

    useEffect(() => {
        storePokemonData();
    }, []);

    const storePokemonData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${yourPokemon}`);
        if (response.status === 200) {
            const data = await response.json();
            setyourPokemonData(data);
            setyourTypes(data.types);
            weaknessType(data.types);


        } else {
            alert("Sorry, we couldn't find that pokemon. Please try again.");
        }
    };


    const weaknessType = (chosenPokeType) => {
        let h = [];
        chosenPokeType.map(async (x, i) => {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${x.type.name}`)
            if (response.status === 200) {
                const data = await response.json();
                let z = data.damage_relations.double_damage_from;
                z.map((q, j) => {
                    h.push(q.name);
                    setTimeout(function () { setyourWeakness(h); }, 3000);




                })



            }
            else {
                alert("Sorry, we couldn't find the weakness");
            }



        })


    }

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
                    {console.log(yourWeakness)}
                    <p>Weakness:
                        {yourWeakness.map((feature, i) => {
                        console.log(feature);
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
            <button>Choose again</button>
            <button>Confirm</button>
        </div>
    )
};

export default ConfirmPokemon;