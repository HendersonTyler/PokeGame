import React, { useState, useEffect } from 'react';
import './index.css';
import Pokeball from './pokeball.gif';

const Play = ({ yourPokemonData, yourWeakness, yourStrength, gameScore, setgameScore, setroute }) => {



    useEffect(() => {
        getrandomPokemon();
    }, []);

    const [win, setwin] = useState(false);
    const [lose, setlose] = useState(false);
    const [randomPokemon, setrandomPokemon] = useState();
    const [pokemonReady, setpokemonReady] = useState(false);




    const getrandomPokemon = async () => {
        let i = Math.floor(Math.random() * Math.floor(807));
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        if (response.status === 200) {
            const data = await response.json();
            setrandomPokemon(data);
            setpokemonReady(true);
            setlose(false);
            setwin(false);
        } else {
            alert("Sorry, random didn't show");
        }

    };


    const fight = e => {

        const enemyType = randomPokemon.types;

        let gameOver = false;
        setpokemonReady(false);


        for (let x = 0; x < enemyType.length; x++) {
            let arr = enemyType[x].type.name;
            for (let i = 0; i < yourStrength.length; i++) {
                if (!gameOver) {
                    if (arr.indexOf(yourStrength[i]) > -1) {
                        setwin(true);
                        gameOver = true;
                        setgameScore(gameScore + 1);
                        break;
                    }
                }
            } if (!gameOver) {
                for (let i = 0; i < yourWeakness.length; i++) {
                    if (!gameOver) {
                        if (arr.indexOf(yourWeakness[i]) > -1) {
                            setlose(true);
                            gameOver = true;
                            break;
                        }
                    }
                }
            }
        } if (!gameOver) {
            hpCompare();
            gameOver = true;
        }
    }

    function hpCompare() {
        const yourHP = yourPokemonData.stats[0].base_stat;
        const otherHP = randomPokemon.stats[0].base_stat;


        if (yourHP < otherHP) {
            setlose(true);


        } else {
            setwin(true);
            setgameScore(gameScore + 1);



        }
    }

    let anotherOne = (win) ? <div>
        <p>You win!</p> <button className="button1" onClick={getrandomPokemon}>Again</button></div> :
        null

    let fightButton = (pokemonReady) ?
        <button className="button1" onClick={fight}>Fight!</button> :
        null

    let tryAgain = (lose) ? <div>
        <p>You lost!</p><button onClick={() => { setroute('home') }} className="button1">Play Again</button></div> :
        null

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
                        <h2>Score: {gameScore}</h2>
                        {fightButton}
                        {tryAgain}
                        {anotherOne}


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
                    <div>
                        <img src={Pokeball} alt="pokeball" height="40em"></img>
                        <p>Loading pokemon</p>
                    </div>
                )}
        </div>
    )
}
export default Play;