import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = ({ setyourPokemon }) => {

    const update = e => {
        setyourPokemon(e.target.value.toLowerCase());
    };


    return (
        <div className="container">
            <div className="card">
                <h1>Choose your Pokemon</h1>
                <p>Search for a pocket monster, which will battle random pokemon, for you to become the ultimate pokemon master!</p>

                <form>

                    <input type="text" onChange={update}></input>
                    <Link to="/confirmPokemon" >
                        <i className="fa fa-search" > <FontAwesomeIcon icon={faSearch} /><button className="magic"></button></i>
                    </Link>
                    <br />

                </form>
            </div>
        </div >
    )
}
export default Home;