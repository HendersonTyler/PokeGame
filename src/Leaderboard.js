import React, { useState, useEffect } from 'react';
import './index.css';
import Pokeball from './pokeball.gif';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton,
    EmailShareButton,
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    RedditIcon,
    EmailIcon,
} from 'react-share';

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

    const [top, settop] = useState();
    const shareUrl = 'https://poke-game.herokuapp.com';

    return (
        <div className="container wrap">

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
                                        <tr className="thin" key={i}><th>{i + 1}</th><th>{x.name}</th><th className="cap">{x.pokemon}</th><th>{x.tally}</th></tr>
                                    );
                                })
                                }

                            </tbody>
                        </table>
                        <h2>Compete against your friends!</h2>
                        See if your friends can beat
                            {gameScore ? (' ' + gameScore + '.'
                        ) : (
                                ' your score.'
                            )}
                        <div className="sharebuttons">
                            <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                            <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                            <RedditShareButton url={shareUrl}><RedditIcon size={32} round={true} /></RedditShareButton>
                            <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                            <EmailShareButton url={shareUrl}><EmailIcon size={32} round={true} /></EmailShareButton>
                        </div>
                        <input
                            onClick={() => { setroute('home') }}
                            className="button1"
                            type="submit"
                            value="Try Again"
                        />
                    </div>
                ) : (
                        <div>
                            <img src={Pokeball} alt="pokeball" height="40em"></img>
                            <p>Loading leaderboard...</p>
                            <input
                                onClick={() => { setroute('home') }}
                                className="button1"
                                type="submit"
                                value="Home"
                            />

                        </div>
                    )}
            </div>
        </div>
    )
}
export default Leaderboard;