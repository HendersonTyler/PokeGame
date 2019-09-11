import React, { useState, useEffect } from 'react';
import './index.css';

const Leaderboard = ({ yourPokemon, gameScore, setroute }) => {

    useEffect(() => {
        fetch('http://localhost:3000/top')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(json => {
                settop(json);
            })

    }, []);

    const [playername, setplayername] = useState('');
    const [top, settop] = useState();

    const update = e => {
        setplayername(e.target.value);
    };

    const onSubmitName = () => {
        fetch('http://localhost:3000/score', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: playername,
                pokemon: yourPokemon,
                tally: gameScore
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    setroute('home');
                }
            })
    }

    return (
        <div className='container'>

            <div className='card'>

                <p>Name: </p>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={update}
                />
                <p>Pokemon: {yourPokemon}</p>
                <p>Score: {gameScore}</p>
                <input
                    onClick={onSubmitName}
                    className="button1"
                    type="submit"
                    value="Submit"
                />
            </div>

            <div className='card'>
                {top ? (
                    <div>
                        <h1>Top 10</h1>

                        <table>
                            <tbody>
                                <tr>
                                    <th>Place</th>
                                    <th>Name</th>
                                    <th>Pokemon</th>
                                    <th>Score</th>
                                </tr>

                                {top.map((x, i) => {
                                    return (
                                        <tr key={i}><th>{i + 1}</th><th>{x.name}</th><th>{x.pokemon}</th><th>{x.tally}</th></tr>
                                    );
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                ) : (
                        <p>Loading leaderboard...</p>
                    )}
            </div>
        </div >
    )
}
export default Leaderboard;