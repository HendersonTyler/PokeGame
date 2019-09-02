import React, { useState, useEffect } from 'react';
import './Play.css';

const Play = ({ yourPokemonData, yourTypes, yourWeakness, yourStrength }) => {

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


    const fight = e => {
        let gameOver = false;
        const enemyType = randomPokemon.types;

        for (let x = 0; x < enemyType.length; x++) {
            let arr = enemyType[x].type.name;
            for (let i = 0; i < yourStrength.length; i++) {
                if (arr.indexOf(yourStrength[i]) > -1) {
                    gameOver = true;
                    console.log("You Win!")
                    break;
                }
            } if (!gameOver) {
                for (let i = 0; i < yourWeakness.length; i++) {
                    if (arr.indexOf(yourWeakness[i]) > -1) {
                        gameOver = true;
                        console.log("You Lose!")
                        break;
                    }
                }
            }
        }
    }

    return (
        <div>
            {randomPokemon ? (
                <div className="container">
                    <div className="card">
                        <h1>{yourPokemonData.name}</h1>
                        <p>Type:{yourPokemonData.types.map((feature, i) => {
                            return (
                                ' ' + feature.type.name
                            );
                        })
                        }
                        </p>
                        <p>HP: {yourPokemonData.stats[0].base_stat}</p>
                        <img src={yourPokemonData.sprites.back_default} alt="" />
                    </div>

                    <div className="centerBox">
                        <h1>VS</h1>
                        <button onClick={fight}>Fight</button>
                    </div>


                    <div className="card">
                        <h1>{randomPokemon.name}</h1>

                        <p>Type:{randomPokemon.types.map((feature, i) => {
                            return (
                                ' ' + feature.type.name
                            );
                        })
                        }
                        </p>
                        <p>HP: {randomPokemon.stats[0].base_stat}</p>
                        <img src={randomPokemon.sprites.front_default} alt="" />
                    </div>
                </div>

            ) : (
                    <p>Loading pokemon</p>
                )}
        </div>
    )
}
export default Play;