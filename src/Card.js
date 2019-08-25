import React from 'react';

const Card = ({ title, type, hp, image }) => {
    var name = title.charAt(0).toUpperCase() + title.slice(1)

    return (
        <div>
            <h1>{name}</h1>
            <p>Type: {type}</p>
            <p>HP: {hp}</p>
            <img src={image} alt="" />

        </div>
    )
};

export default Card;