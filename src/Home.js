import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = ({ setyourPokemon, setroute }) => {

    const update = e => {
        setyourPokemon(e.target.value.toLowerCase());
    };


    return (
        <div className="container">
            <div className="card">
                <h1>Choose your Pokemon</h1>
                <p>Search for a pocket monster, which will battle random pokemon, for you to become the ultimate pokemon master!</p>

                <form onSubmit={(event) => { event.preventDefault(); setroute('confirmpokemon') }}>

                    <input type="text" onChange={update}></input>

                    <i className="fa fa-search"><FontAwesomeIcon type="button" onClick={() => { setroute('confirmpokemon') }} icon={faSearch} autofocus /></i>
                    <br />

                </form>
            </div>
        </div >
    )
}
export default Home;