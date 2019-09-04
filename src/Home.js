import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ setyourPokemon }) => {

    const update = e => {
        setyourPokemon(e.target.value.toLowerCase());
    };


    return (
        <div>
            <h2>Choose your Pokemon</h2>
            <p>Search for a pocket monster, which will battle random pokemon, for you to become the ultimate pokemon master!</p>

            <form>
                <input type="text" onChange={update} />
                <Link to="/confirmPokemon"><button type="submit">Search</button></Link>
            </form>
        </div >
    )
}
export default Home;