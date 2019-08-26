import React from 'react';

const Card = ({ title, type2, hp, image, weakness }) => {
    var name = title.charAt(0).toUpperCase() + title.slice(1)

    return (
        <div>
            <h1>{name}</h1>
            <p>Type:
            {type2.map((feature, i) => {
                return (
                    ' ' + feature.type.name
                );
            })
                }</p>

            <p>Weakness: {weakness}</p>
            <p>HP: {hp}</p>
            <img src={image} alt="" />

        </div>
    )
};

export default Card;