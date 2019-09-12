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
                <h1>Choose Your Pokemon</h1>
                <p>Search for a pocket monster, which will battle random pokemon, for you to become the ultimate pokemon master!</p>

                <form className="form1" onSubmit={(event) => { event.preventDefault(); setroute('confirmpokemon') }}>

                    <input className="input1" type="text" onChange={update}></input>

                    <i className="fa fa-search"><FontAwesomeIcon type="button" onClick={() => { setroute('confirmpokemon') }} icon={faSearch} autoFocus /></i>
                    <br />

                </form>
            </div>
        </div >
    )
}
export default Home;