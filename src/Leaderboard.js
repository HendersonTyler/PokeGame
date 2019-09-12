import React, { useState, useEffect } from 'react';
import './index.css';

const Leaderboard = ({ yourPokemon, gameScore, setroute }) => {

    useEffect(() => {
        fetch('https://stormy-taiga-93399.herokuapp.com/top')
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
        fetch('https://stormy-taiga-93399.herokuapp.com/score', {
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
        <div className="container wrap">
            <div className="card">
                <h1>Submit Score</h1>
                <input
                    placeholder="Name"
                    maxLength="10"
                    className="input2"
                    type="text"
                    name="name"
                    id="name"
                    onChange={update}
                />
                <p className="cap">Pokemon: {yourPokemon}</p>
                <p>Score: {gameScore}</p>
                <input
                    onClick={onSubmitName}
                    className="button1"
                    type="submit"
                    value="Submit"
                />
            </div>

            <div className="card top">
                {top ? (
                    <div>
                        <h1>Top 10</h1>

                        <table>
                            <tbody>
                                <tr className="bold">
                                    <th>Place</th>
                                    <th>Name</th>
                                    <th>Pokemon</th>
                                    <th>Score</th>
                                </tr>

                                {top.map((x, i) => {
                                    return (
                                        <tr className="thin" key={i}><th>{i + 1}</th><th>{x.name}</th><th>{x.pokemon}</th><th>{x.tally}</th></tr>
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
        </div>
    )
}
export default Leaderboard;